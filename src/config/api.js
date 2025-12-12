// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hamieai-production.up.railway.app',
  ENDPOINTS: {
    CALCULATE_QUIZ_SCORE: process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/score/calculate-quiz-score',
    QUESTIONS: '/api/questions/career-financial-batch'
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
