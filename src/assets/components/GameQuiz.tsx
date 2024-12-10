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
  image: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you approach challenges?",
    options: [
      "With ruthless determination and overwhelming power",
      "Strategically, analyzing my opponent's weaknesses",
      "With pride, pushing myself to surpass my limits",
      "By adapting and finding balance between power and humility",
    ],
  },
  {
    id: 2,
    text: "What's your view of Earth?",
    options: [
      "A planet to conquer",
      "A place with strong warriors worth respecting",
      "A home I've come to protect and cherish",
      "A world that reminds me of my personal growth",
    ],
  },
  {
    id: 3,
    text: "What drives you the most?",
    options: [
      "Proving my superiority as a Saiyan prince",
      "Avenging my pride and achieving personal strength",
      "Protecting those I love, even if it means sacrificing myself",
      "Balancing my Saiyan instincts with my role as a family man",
    ],
  },
  {
    id: 4,
    text: "How do you respond to defeat?",
    options: [
      "I refuse to accept it and push back harder",
      "I use it as motivation to train and become stronger",
      "I reflect on my failures to grow into a better warrior",
      "I accept it with grace and focus on improving for the future",
    ],
  },
];

const results: Result[] = [
  {
    character: "Saiyan Saga Vegeta",
    description: "You embody the pride and ruthlessness of a true Saiyan prince, driven by your desire for conquest and strength. Your determination knows no bounds, but it can sometimes cloud your judgment.",
    image: "/static/images/SayanVegeta.gif",
  },
  {
    character: "Namek Saga Vegeta",
    description: "Cunning and strategic, you are always looking for ways to outmaneuver your opponents. Your pride as a Saiyan prince drives you, but deep down, you're learning the value of alliances.",
    image: "/static/images/NamekVegeta.gif",
  },
  {
    character: "Majin Vegeta",
    description: "Torn between your Saiyan instincts and your heart, you seek power at any cost to prove your worth. Yet, your inner struggle reveals a deep love for those close to you.",
    image: "/static/images/MajinVegeta.gif",
  },
  {
    character: "Blue Vegeta",
    description: "You've found balance between your Saiyan pride and your responsibilities. While you continue to strive for strength, your love for your family and Earth defines your purpose.",
    image: "/static/images/SuperVegeta.gif",
  },
];

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
    <div className='h-fit  flex justify-center items-center '>
      <div className='flex justify-center items-center'>
        <img src="./static/images/BunnyBulma.png" alt="BunnyBulma looking at you" className="mx-auto"/>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="select-auto min-h-[600px] max-w-2xl my-20 p-6 bg-[--primary-color3] text-[--secondary-color3] font-[HappyMonkey] [-webkit-text-stroke:0px_#47492e] rounded-lg shadow-lg relative z-10"
      >
        <h2 className="select-auto text-5xl font-bold mb-6 font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1] text-center">Which Vegeta's Phase Are You?</h2>
        {showResult ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center relative z-20"
          >
            <h3 className="text-2xl font-bold mb-4">You are </h3>
            <h2 className="mb-4 text-4xl font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1]">{getResult().character}!</h2>
            <img
              src={getResult().image}
              alt={getResult().character}
              className="mx-auto mb-4"
              />
            <p className="mb-6 text-3xl">{getResult().description}</p>
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
              <p className="text-3xl">{questions[currentQuestion].text}</p>
            </div>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswerClick(index)}
                  className="select-auto text-2xl cursor-pointer w-full text-left p-3 bg-[--secondary-color5] text-[--secondary-color4] hover:bg-[--secondary-color5] rounded-md transition-colors duration-200 relative z-20"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </>
        )}
      </motion.div>
  </div>
  )
}

export default GameQuiz
