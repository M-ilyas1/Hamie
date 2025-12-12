"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";
import { getApiUrl, API_CONFIG } from "@/config/api";
import { useRouter } from "next/navigation";
const QuestionCards = () => {
  const router = useRouter();
  const [quizData, setQuizData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [loadedBatches, setLoadedBatches] = useState(new Set());
  const [totalLoadedQuestions, setTotalLoadedQuestions] = useState(0);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0); // Track current batch
  const [currentQuestions, setCurrentQuestions] = useState([]); // Track current batch questions
  const firstQuestionRef = useRef(null); // Ref to scroll to first question

  useEffect(() => {
    const fetchAllQuestionsSequentially = async () => {
      try {
        setLoading(true);
        
        // Define all 5 API endpoints in order
        const apiEndpoints = [
          { endpoint: '/api/questions/career-financial-batch', name: 'Career & Financial' },
          { endpoint: '/api/questions/mental-media-batch', name: 'Mental & Media' },
          { endpoint: '/api/questions/social-emotional-batch', name: 'Social & Emotional' },
          { endpoint: '/api/questions/body-cultural-batch', name: 'Body & Cultural' },
          { endpoint: '/api/questions/visibility-purpose-batch', name: 'Visibility & Purpose' }
        ];

        // Call APIs sequentially in order
        for (let index = 0; index < apiEndpoints.length; index++) {
          const apiInfo = apiEndpoints[index];
          
          try {
            console.log(`Fetching from ${apiInfo.name}...`);
            
            const response = await fetch(getApiUrl(apiInfo.endpoint), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({})
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status} for ${apiInfo.endpoint}`);
            }

            const data = await response.json();
            
                                         // Process and add this batch's data immediately
                if (data.categories) {
                  console.log(`🔍 Raw API response from ${apiInfo.name}:`, data);
                  console.log(`🔍 Number of categories in response:`, data.categories.length);
                  
                  // Process categories and ensure exactly 10 questions per API
                  let processedCategories = data.categories.map(category => ({
                    ...category,
                    category: `${apiInfo.name} - ${category.category}`,
                    batchType: data.batchType || `batch-${index + 1}`,
                    batchIndex: index
                  }));
                  
                  // Take exactly 10 questions from this API (no duplicates)
                  let questionsTaken = 0;
                  const finalCategories = [];
                  
                  for (const category of processedCategories) {
                    if (questionsTaken >= 10) break;
                    
                    const questionsToTake = Math.min(category.questions.length, 10 - questionsTaken);
                    const selectedQuestions = category.questions.slice(0, questionsToTake);
                    
                    if (selectedQuestions.length > 0) {
                      finalCategories.push({
                        ...category,
                        questions: selectedQuestions
                      });
                      questionsTaken += selectedQuestions.length;
                    }
                  }
                  
                  processedCategories = finalCategories;
                  
                  console.log(`🔍 ${apiInfo.name}: Taking exactly ${questionsTaken} questions (no duplicates)`);
                  console.log(`🔍 ${apiInfo.name}: Questions per category:`, processedCategories.map(cat => `${cat.category}: ${cat.questions.length}`));
                  
                  // Debug: Log each question being added
                  console.log(`🔍 ${apiInfo.name}: Questions being added:`, processedCategories.flatMap(cat => 
                    cat.questions.map((q, i) => `${cat.category}: ${q.question.substring(0, 50)}...`)
                  ));

                  console.log(`🔍 Before adding ${apiInfo.name}: quizData has ${quizData.categories?.length || 0} categories`);
                  
                  // setQuizData(prev => {
                  //   const newData = { ...prev };
                  //   if (!newData.categories) newData.categories = [];
                  //   // Append new categories to maintain order
                  //   newData.categories.push(...processedCategories);
                    
                  //   console.log(`🔍 After adding ${apiInfo.name}: newData now has ${newData.categories.length} categories`);
                  //   console.log(`🔍 New categories added:`, processedCategories.map(cat => `${cat.category}: ${cat.questions.length} questions`));
                    
                  //   return newData;
                  // });
                  setQuizData(prev => {
                    const newData = { ...prev };
                    if (!newData.categories) newData.categories = [];
                  
                    // Collect all existing questions (by id or text)
                    const existingQuestions = new Set(
                      newData.categories.flatMap(cat => cat.questions.map(q => q.id || q.question))
                    );
                  
                    // Filter out duplicate and empty categories
                    const uniqueCategories = processedCategories
                      .map(cat => {
                        const uniqueQuestions = cat.questions.filter(q => {
                          const key = q.id || q.question;
                          if (existingQuestions.has(key)) {
                            return false;
                          }
                          existingQuestions.add(key); // ✅ Add immediately so batch-level duplicates are avoided
                          return true;
                        });
                  
                        return { ...cat, questions: uniqueQuestions };
                      })
                      .filter(cat => cat.questions.length > 0); // ✅ Remove empty categories
                  
                    newData.categories.push(...uniqueCategories);
                    return newData;
                  });

                  // Update loaded batches and question count
                  const newQuestionsCount = processedCategories.reduce((total, cat) => total + cat.questions.length, 0);
                  setLoadedBatches(prev => new Set([...prev, index]));
                  setTotalLoadedQuestions(prev => prev + newQuestionsCount);
                  
                  console.log(`✅ ${apiInfo.name} loaded successfully - ${newQuestionsCount} questions added`);
                  console.log(`📊 Total questions so far: ${totalLoadedQuestions + newQuestionsCount}`);
                  
                  // Debug: Log the structure of what we're adding
                  console.log(`🔍 Raw categories from ${apiInfo.name}:`, data.categories);
                  console.log(`🔍 Processed categories:`, processedCategories);
                  console.log(`🔍 Questions in this API:`, processedCategories.map(cat => `${cat.category}: ${cat.questions.length} questions`));
                  
                  // Check if this API is returning more than 10 questions
                  if (newQuestionsCount > 10) {
                    console.warn(`⚠️ WARNING: ${apiInfo.name} returned ${newQuestionsCount} questions instead of expected 10!`);
                  }
                }

            // Small delay between API calls to avoid overwhelming the server
            if (index < apiEndpoints.length - 1) {
              await new Promise(resolve => setTimeout(resolve, 500));
            }

          } catch (err) {
            console.error(`❌ Error fetching from ${apiInfo.endpoint}:`, err);
            // Continue with next API even if one fails
            setError(prev => prev ? `${prev}; ${apiInfo.name}: ${err.message}` : `${apiInfo.name}: ${err.message}`);
          }
        }

        // Set loading to false after all APIs are processed
        setLoading(false);
        console.log('🎯 All API calls completed');
        
        // Debug: Log final structure
        console.log('🔍 Final quizData structure:', quizData);
        console.log('🔍 Total categories:', quizData.categories?.length || 0);
        console.log('🔍 Total questions in all categories:', quizData.categories?.flatMap(cat => cat.questions).length || 0);
        
        // Log detailed breakdown of all categories
        if (quizData.categories) {
          console.log('🔍 Detailed breakdown:');
          quizData.categories.forEach((cat, i) => {
            console.log(`  ${i + 1}. ${cat.category}: ${cat.questions.length} questions`);
          });
        }
        
        // IMPORTANT: Update totalLoadedQuestions to the actual total from quizData
        const actualTotalQuestions = quizData.categories?.flatMap(cat => cat.questions).length || 0;
        if (actualTotalQuestions !== totalLoadedQuestions) {
          console.log(`🔄 Updating totalLoadedQuestions from ${totalLoadedQuestions} to ${actualTotalQuestions}`);
          setTotalLoadedQuestions(actualTotalQuestions);
        }
        
        // Set initial questions for first batch
        if (quizData.categories && actualTotalQuestions > 0) {
          const initialQuestions = getCurrentBatchQuestions();
          setCurrentQuestions(initialQuestions);
          console.log(`🎯 Set initial questions for batch 1:`, initialQuestions.length);
        }

      } catch (err) {
        console.error('Error in fetch setup:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllQuestionsSequentially();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (totalLoadedQuestions > 0 && currentBatchIndex > 0) {
      const maxBatchIndex = Math.ceil(totalLoadedQuestions / 10) - 1;
      if (currentBatchIndex > maxBatchIndex) {
        // Instead of rolling back to 0, lock onto the last batch
        setCurrentBatchIndex(maxBatchIndex);
      }
    }
  }, [totalLoadedQuestions, currentBatchIndex]);

  // Force re-render when batch changes
  useEffect(() => {
    console.log(`🔄 Batch index changed to: ${currentBatchIndex}`);
    
    // Update current questions when batch changes
    if (quizData.categories && totalLoadedQuestions > 0) {
      const questions = getCurrentBatchQuestions();
      setCurrentQuestions(questions);
      console.log(`🔄 Updated current questions for batch ${currentBatchIndex + 1}:`, questions.length);
    }
  }, [currentBatchIndex, quizData.categories, totalLoadedQuestions]);


  const getCurrentBatchQuestions = () => {
    if (!quizData.categories) return [];
  
    // Count actual total questions from quizData (the real source of truth)
    const actualTotalQuestions = quizData.categories.flatMap(cat => cat.questions).length;
  
    if (actualTotalQuestions === 0) return [];
  
    // Ensure categories are sorted by batchIndex to maintain API order
    const sortedCategories = [...quizData.categories].sort(
      (a, b) => (a.batchIndex ?? 0) - (b.batchIndex ?? 0)
    );
  
    // Flatten all questions with metadata
    const allQuestions = sortedCategories.flatMap(category =>
      category.questions.map(question => ({
        ...question,
        category: category.category,
        batchType: category.batchType,
        batchIndex: category.batchIndex
      }))
    );
  
    // Calculate safe batch index
    const maxBatchIndex = Math.ceil(actualTotalQuestions / 10) - 1;
    const safeBatchIndex = Math.min(currentBatchIndex, maxBatchIndex);
  
    // Slice questions for this batch
    const startIndex = safeBatchIndex * 10;
    const endIndex = Math.min(startIndex + 10, actualTotalQuestions);
    const batchQuestions = allQuestions.slice(startIndex, endIndex);
  
    // Debug logs
    console.log(`🔍 Batch ${safeBatchIndex + 1}: Getting questions ${startIndex + 1}-${endIndex} of ${actualTotalQuestions}`);
    console.log(`🔍 startIndex: ${startIndex}, endIndex: ${endIndex}, allQuestions.length: ${allQuestions.length}`);
    console.log(`🔍 Batch questions categories:`, batchQuestions.map((q, i) => `${startIndex + i + 1}: ${q.category}`));
  
    return batchQuestions;
  };
 

  // Use state-based questions instead of calling function directly
  const questions = currentQuestions;
  const totalQuestions = totalLoadedQuestions; // Use the actual loaded questions count
  const totalBatches = Math.ceil(totalQuestions / 10);
  const currentBatchNumber = currentBatchIndex + 1;


  const handleAnswerSelect = (questionIndex, answer) => {
    // Calculate the global question index based on current batch
    const globalQuestionIndex = (currentBatchIndex * 10) + questionIndex;
    setSelectedAnswers(prev => ({
      ...prev,
      [globalQuestionIndex]: answer
    }));
  };
  const handleFinishQuiz = () => {
    console.log("Raw selectedAnswers:", selectedAnswers);
  // Define category mapping (index ranges for each group)
const categories = {
  "Career Conformity": [0, 1, 2, 3, 4],
  "Financial Fragility": [5, 6, 7, 8, 9],
  "Mental Conditioning": [10, 11, 12, 13, 14],
  "Media Addiction": [15, 16, 17, 18, 19],
  "Social Environment": [20, 21, 22, 23, 24],
  "Emotional Suppression": [25, 26, 27, 28, 29],
  "Body-Mind Disconnection": [30, 31, 32, 33, 34],
  "Cultural Conditioning": [35, 36, 37, 38, 39],
  "Fear of Visibility": [40, 41, 42, 43, 44],
  "Loss of Purpose / Creativity": [45, 46, 47, 48, 49]
};
const result = {};

for (const [category, indices] of Object.entries(categories)) {
  result[category] = indices.map(i => selectedAnswers[i].score);
}

console.log(result);

    // Save both raw + grouped to localStorage
    localStorage.setItem("quiz-1-answers", JSON.stringify(result));
    router.push("/result");
  };  // Function to scroll to first question smoothly
  const scrollToFirstQuestion = () => {
    if (firstQuestionRef.current) {
      // Add a subtle highlight effect to the first question
      firstQuestionRef.current.style.transition = 'all 0.3s ease';
      firstQuestionRef.current.style.transform = 'scale(1.02)';
      firstQuestionRef.current.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
      
      // Remove the highlight effect after animation
      setTimeout(() => {
        if (firstQuestionRef.current) {
          firstQuestionRef.current.style.transform = 'scale(1)';
          firstQuestionRef.current.style.boxShadow = 'none';
        }
      }, 1000);
      
      firstQuestionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback to scrolling to top if ref is not available
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleNextBatch = () => {
    if (currentBatchIndex < totalBatches - 1) {
      const newIndex = currentBatchIndex + 1;
      console.log(`➡️ Moving to next batch: ${currentBatchIndex + 1} → ${newIndex + 1}`);
      console.log(`🔍 Will show questions ${(newIndex * 10) + 1}-${(newIndex + 1) * 10}`);
      setCurrentBatchIndex(newIndex);
      // Scroll to first question after state update
      setTimeout(() => scrollToFirstQuestion(), 150);
    } else {
      console.log(`❌ Cannot move to next batch: currentBatchIndex=${currentBatchIndex}, totalBatches=${totalBatches}`);
    }
  };
  
  const handlePreviousBatch = () => {
    if (currentBatchIndex > 0) {
      const newIndex = currentBatchIndex - 1;
      console.log(`⬅️ Moving to previous batch: ${currentBatchIndex + 1} → ${newIndex + 1}`);
      console.log(`🔍 Will show questions ${(newIndex * 10) + 1}-${(newIndex + 1) * 10}`);
      setCurrentBatchIndex(newIndex);
      // Scroll to first question after state update
      setTimeout(() => scrollToFirstQuestion(), 150);
    }
  };
  const circleSizes = [90, 70, 50, 45, 50, 70, 90]; // 7 answer options per question
  const mobileCircleSizes = [45, 40, 35, 30, 35, 40, 45]; // 7 answer options per question
  const currentSizes = isMobile ? mobileCircleSizes : circleSizes;

  if (loading && totalLoadedQuestions === 0) {
    // return (
    //   <section className="bg-black w-full flex flex-col justify-center items-center text-white py-15 md:py-10 px-4"
    //     style={{
    //       backgroundImage: `
    //         radial-gradient(circle at left center, rgba(59,130,246,0.3), transparent 20%),
    //         radial-gradient(circle at right center, rgba(59,130,246,0.3), transparent 20%)
    //       `,
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //     }}>
    //     <div className="bg-blue-800/20 w-full md:w-[80%] p-4 md:p-10 rounded-2xl mx-auto border border-purple-500 flex flex-col justify-center items-center">
    //       <div className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
    //         Loading questions from all categories...
    //       </div>
    //       <div className="text-center text-cyan-400">
    //         <div className="mb-2">Loaded batches: {loadedBatches.size}/5</div>
    //         <div className="text-sm">Questions available: {totalLoadedQuestions}</div>
    //       </div>
    //     </div>
    //   </section>
    // );
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold">Generating Your Quiz</h2>
            <p className="text-gray-400 mt-2">Please Sit Back While We Generate Your Quiz !</p>
          </div>
        </div>
      </main>
    );
  }

  if (error && totalLoadedQuestions === 0) {
    return (
      <section className="bg-black w-full flex flex-col justify-center items-center text-white py-15 md:py-10 px-4"
        style={{
          backgroundImage: `
            radial-gradient(circle at left center, rgba(59,130,246,0.3), transparent 20%),
            radial-gradient(circle at right center, rgba(59,130,246,0.3), transparent 20%)
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="bg-blue-800/20 w-full md:w-[80%] p-4 md:p-10 rounded-2xl mx-auto border border-purple-500 flex flex-col justify-center items-center">
          <div className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Error loading questions
          </div>
          <div className="text-red-400 text-center">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black w-full flex flex-col justify-center items-center text-white py-15 md:py-25 px-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.3), transparent 20%),
          radial-gradient(circle at right center, rgba(59,130,246,0.3), transparent 20%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>

      {/* Batch Navigation */}
      {totalBatches > 0 && totalQuestions > 0 && (
        <div className="w-full md:w-[80%] mb-6 text-center">
          <div className="text-sm text-cyan-400">
            Showing questions {(currentBatchIndex * 10) + 1} - {Math.min((currentBatchIndex + 1) * 10, totalQuestions)} of {totalQuestions}
          </div>
        </div>
      )}
      
      {/* Current Batch Questions Display */}
      <div key={`batch-${currentBatchIndex}`} className="w-full space-y-8">
        {questions?.map((question, questionIndex) => {
          // Calculate the global question index for answer selection
          const globalQuestionIndex = (currentBatchIndex * 10) + questionIndex;
          
          return (
            <div 
              key={`batch-${currentBatchIndex}-question-${questionIndex}`} 
              ref={questionIndex === 0 ? firstQuestionRef : null}
              className="bg-blue-800/20 w-full md:w-[80%] p-4 md:p-10 rounded-2xl mx-auto border border-purple-500 flex flex-col justify-center items-center"
            >
              
              {/* Question Header */}
              <div className="text-center mb-4">
                <div className="text-lg text-purple-400 mb-2">
                  {question.category}
                </div>
                <div className="text-sm text-cyan-400">
                  {question.dimension}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-lg md:text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {question.question}
              </h3>

              {/* Answer Circles for this question */}
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
                {question.answers.map((answer, answerIndex) => (
                  <div
                    key={answerIndex}
                    className="flex flex-col items-center"
                    onClick={() => handleAnswerSelect(questionIndex, answer, question.category)}
                  >
                    <div
                      className={`rounded-full p-[2px] transition-all duration-300 cursor-pointer ${
                        selectedAnswers[globalQuestionIndex]?.text === answer.text
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-purple-500/40 to-cyan-400/40"
                      }`}
                      style={{
                        width: `${currentSizes[answerIndex] || 50}px`,
                        height: `${currentSizes[answerIndex] || 50}px`,
                      }}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-[#0a0020]">
                        <div
                          className={`rounded-full transition-all duration-300 ${
                            selectedAnswers[globalQuestionIndex]?.text === answer.text ? "bg-cyan-400" : "bg-transparent"
                          }`}
                          style={{
                            width: `${(currentSizes[answerIndex] || 50) - 14}px`,
                            height: `${(currentSizes[answerIndex] || 50) - 14}px`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Answer Display Box - EXACTLY the same design as original */}
              <div className="relative w-full md:w-[60%] text-center text-base md:text-lg font-medium">
                <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-cyan-400 to-purple-500">
                  <div className="w-full h-full bg-[#0a0020] rounded-lg"></div>
                </div>

                {/* Pointing Arrow - points to selected answer */}
                {selectedAnswers[globalQuestionIndex] && (
                  <>
                    <div
                      className={`absolute -top-[12px] left-1/2 -translate-x-1/2 ${isMobile ? "hidden" : "block"}`}
                      style={{
                        transform: `translateX(${(() => {
                          const selectedIndex = question.answers.findIndex(
                            ans => ans.text === selectedAnswers[globalQuestionIndex]?.text
                          );
                          const arrowTranslate = isMobile ? 40 : 90;
                          return (selectedIndex - Math.floor(question.answers.length / 2)) * arrowTranslate;
                        })()}px)`,
                      }}
                    >
                      <div className="relative w-0 h-0">
                        <div className="absolute w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-blue-500"></div>
                        <div className="absolute w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-transparent border-b-purple-500 opacity-70"></div>
                        <div className="absolute top-[3px] left-[2px] w-0 h-0 border-l-[14px] border-r-[14px] border-b-[14px] border-transparent border-b-[#0a0020]"></div>
                      </div>
                    </div>

                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:hidden">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-500"></div>
                    </div>
                  </>
                )}

                <div className="relative z-10 p-4 md:p-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                  {selectedAnswers[globalQuestionIndex] ? selectedAnswers[globalQuestionIndex].text : "Select an answer above"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-center gap-4 p-6 mt-10 sm:justify-center md:justify-between">
        <div>
          <Button
            href="/"
            text="Back"
            img="/gray-button.png"
            width={240}
            height={50}
          />
        </div>
        
        {/* Batch Navigation */}
        <div className="flex gap-4">
          {currentBatchIndex > 0 && (
            <Button
              text="Previous"
              img="/gray-button.png"
              width={140}
              height={50}
              onClick={handlePreviousBatch}
            />
          )}
          
          {currentBatchIndex < totalBatches - 1 && (
            <Button
              text="Next"
              img="/short-button.png"
              width={140}
              height={50}
              onClick={handleNextBatch}
            />
          )}
          
          {currentBatchIndex === totalBatches - 1 && (
            <Button
              text="Finish Quiz"
              img="/short-button.png"
              width={240}
              height={50}
              onClick={handleFinishQuiz}
              disabled={Object.keys(selectedAnswers).filter(key => !isNaN(key)).length < totalQuestions}
            />
          )}
        </div>
      </div>

    </section>
  );
};

export default QuestionCards;
