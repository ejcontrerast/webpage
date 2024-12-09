import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Question {
  id: number
  text: string
  options: string[]
}

interface Result {
  character: string
  description: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your approach to fighting?",
    options: ["Strategic and calculated", "All-out power", "Playful and creative", "Honorable and proud"],
  },
  {
    id: 2,
    text: "How do you feel about Earth?",
    options: ["It's my home to protect", "It's a good training ground", "It's full of interesting technology", "It's beneath me"],
  },
  {
    id: 3,
    text: "What's your biggest motivation?",
    options: ["Protecting my loved ones", "Becoming the strongest", "Having fun and eating", "Proving my worth"],
  },
  {
    id: 4,
    text: "How do you handle defeat?",
    options: ["Learn from it and grow stronger", "Get angry and train harder", "Laugh it off and try again", "Refuse to accept it"],
  },
]

const results: Result[] = [
  {
    character: "Goku",
    description: "You're pure-hearted and always looking for the next challenge. Your love for fighting is matched only by your love for food and friends.",
  },
  {
    character: "Vegeta",
    description: "Proud and determined, you never back down from a challenge. Your drive to be the best pushes you to new heights.",
  },
  {
    character: "Gohan",
    description: "You have hidden potential and a strong sense of justice. While you may not always seek out fights, you'll do whatever it takes to protect those you care about.",
  },
  {
    character: "Trunks",
    description: "You're a mix of determination and innovation. Your strategic mind and willingness to change the future set you apart.",
  },
]

const GameQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswerClick = (selectedAnswer: number) => {
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = (): Result => {
    const sum = answers.reduce((a, b) => a + b, 0)
    return results[sum % results.length]
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-8 p-6 bg-blue-100 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Which Saiyan Are You?</h2>
      {showResult ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">You are {getResult().character}!</h3>
          <p className="mb-6">{getResult().description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
          >
            Take the Quiz Again
          </motion.button>
        </motion.div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-xl font-semibold mb-2">
              Question {currentQuestion + 1}/{questions.length}
            </p>
            <p className="text-lg">{questions[currentQuestion].text}</p>
          </div>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-3 bg-white hover:bg-blue-200 rounded-md transition-colors duration-200"
              >
                {option}
              </motion.button>
            ))}
          </div>
        </>
      )}
    </motion.div>
  )
}

export default GameQuiz
