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
    <div id='game' className=' h-fit flex flex-col md:flex-row items-center justify-center px-4 py-10'>
      <div className='flex justify-center mb-6'>
        <img 
          src="./static/images/BunnyBulma.png" 
          alt="BunnyBulma looking at you" 
          className="h-auto w-3/4 max-w-xs mx-auto"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-4 bg-[--primary-color3] text-[--secondary-color3] font-[HappyMonkey] rounded-lg shadow-lg relative"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1] text-center">
          Which Vegeta Are You?
        </h2>

        {showResult ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">You are</h3>
            <h2 className="mb-4 text-2xl md:text-4xl font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1]">
              {getResult().character}!
            </h2>
            <img
              src={getResult().image}
              alt={getResult().character}
              className="h-auto w-3/4 max-w-xs mx-auto mb-4"
            />
            <p className="mb-6 text-lg md:text-3xl">{getResult().description}</p>
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
              <p className="text-lg md:text-xl font-semibold mb-2">
                Question {currentQuestion + 1}/{questions.length}
              </p>
              <p className="text-2xl md:text-3xl">{questions[currentQuestion].text}</p>
            </div>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswerClick(index)}
                  className="text-lg md:text-2xl cursor-pointer w-full text-left p-3 bg-[--secondary-color5] text-[--secondary-color4] hover:bg-[--secondary-color5] rounded-md transition-colors duration-200"
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
