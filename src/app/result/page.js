"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Result from "@/components/Result";
import ScoreCard from "@/components/ScoreCard";
import {Category} from "@/components/Category";
import {CategoriesAnalysis} from "@/components/CategoriesAnalysis";
import {TruthBombs} from "@/components/TruthBombs";
import {UnlockTheForge} from "@/components/UnlockTheForge";
import { getApiUrl, API_CONFIG } from "@/config/api";
import { useRouter } from "next/navigation";
export default function ResultPage() {
  const router = useRouter();
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizScore = async () => {
      try {
        if(!localStorage.getItem("quiz-1-answers")){
          setError("Please Solve Your Quiz First")
          return
        }
        const apiUrl = getApiUrl(API_CONFIG.ENDPOINTS.CALCULATE_QUIZ_SCORE);
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({
          //   "Career Conformity": [1,1,1,1,9],
          //   "Financial Fragility": [9,3,1,1,1],
          //   "Mental Conditioning": [7,9,7,7,7],
          //   "Media Addiction": [7,7,3,1,1],
          //   "Social Environment": [1,1,1,2,9],
          //   "Emotional Suppression": [7,7,7,3,3],
          //   "Body-Mind Disconnection": [3,7,1,1,3],
          //   "Cultural Conditioning": [9,9,9,9,9],
          //   "Fear of Visibility": [2,3,9,5,1,1],
          //   "Loss of Purpose / Creativity": [1,2,3,3,2]
          // })
           body: JSON.stringify(JSON.parse(localStorage.getItem("quiz-1-answers")))
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quiz score');
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log
        // The API response is directly the data (not wrapped in .data)
        localStorage.removeItem("quiz-1-answers");
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizScore();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold">Calculating your score...</h2>
            <p className="text-gray-400 mt-2">Please wait while we analyze your responses</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">Error</h2>
            <p className="text-gray-400">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Try Again
            </button>
            {
              error=="Please Solve Your Quiz First" &&
              <button 
              onClick={() => router.push("/hamie-quiz")} 
              className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Go To Quiz 1
            </button>
            }
          </div>
        </div>
      </main>
    );
  }

  console.log('QuizData being passed to components:', quizData); // Debug log

  return (
    <main>
      <HeroSection quizData={quizData} />
      <Result quizData={quizData} />
      <ScoreCard quizData={quizData} />
      <Category quizData={quizData} />
      <CategoriesAnalysis quizData={quizData} />
      <TruthBombs quizData={quizData} />
      <UnlockTheForge quizData={quizData} />
    </main>
  );
}
