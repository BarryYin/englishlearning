'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import WordBank from './components/word-bank'
import ProgressBar from './components/progress-bar'
import ScoreDisplay from './components/score-display'
import Timer from './components/timer'
import DifficultySelector from './components/difficulty-selector'
import NameInput from './components/name-input'
import ResultCard from './components/result-card'
import { generateQuestionSet, Question } from './utils/question-generator'
import { calculateTimeLimit } from './utils/calculate-time-limit'

const QUESTIONS_PER_SET = 10

export default function Home() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'name_input' | 'result'>('start')
  const [level, setLevel] = useState(1)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userSentence, setUserSentence] = useState<string[]>([])
  const [availableWords, setAvailableWords] = useState<string[]>([])
  const [showDialog, setShowDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' })
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [questionLoaded, setQuestionLoaded] = useState(false)
  const [playerName, setPlayerName] = useState('')

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (gameState === 'playing' && questions.length > 0) {
      startNewQuestion()
    }
  }, [gameState, currentQuestionIndex, questions])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (gameState === 'playing' && questionLoaded && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (gameState === 'playing' && questionLoaded && timeLeft === 0 && currentQuestion) {
      handleTimeout()
    }
    return () => clearTimeout(timer)
  }, [timeLeft, currentQuestion, gameState, questionLoaded])

  const startGame = (selectedLevel: number) => {
    setLevel(selectedLevel)
    setQuestions(generateQuestionSet(selectedLevel, QUESTIONS_PER_SET))
    setGameState('playing')
    setScore(0)
    setCurrentQuestionIndex(0)
  }

  const startNewQuestion = () => {
    if (currentQuestion) {
      setUserSentence([])
      setAvailableWords(currentQuestion.english.split(' ').sort(() => Math.random() - 0.5))
      setTimeLeft(calculateTimeLimit(currentQuestion.english))
      setQuestionLoaded(true)
    }
  }

  const addWord = (word: string) => {
    setUserSentence([...userSentence, word])
    setAvailableWords(availableWords.filter(w => w !== word))
  }

  const removeWord = (index: number) => {
    const word = userSentence[index]
    setUserSentence(userSentence.filter((_, i) => i !== index))
    setAvailableWords([...availableWords, word])
  }

  const checkSentence = () => {
    const isCorrect = userSentence.join(' ') === currentQuestion.english
    if (isCorrect) {
      const pointsEarned = Math.ceil(timeLeft * currentQuestion.level)
      setScore(score + pointsEarned)
      setDialogContent({
        title: '太棒了！',
        description: `你正确地组合了这个句子！获得 ${pointsEarned} 分！`
      })
    } else {
      setDialogContent({
        title: '继续努力！',
        description: '句子还不太对，但是你已经很接近了。再试一次吧！'
      })
    }
    setShowDialog(true)
  }

  const handleTimeout = () => {
    setDialogContent({
      title: '时间到！',
      description: '很遗憾，你没能在时间内完成句子。再接再厉！'
    })
    setShowDialog(true)
  }

  const handleDialogClose = () => {
    setShowDialog(false)
    moveToNextQuestion()
  }

  const moveToNextQuestion = () => {
    setQuestionLoaded(false)
    if (currentQuestionIndex < QUESTIONS_PER_SET - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setGameState('name_input')
    }
  }

  const handleNameSubmit = (name: string) => {
    setPlayerName(name)
    setGameState('result')
  }

  const restartGame = () => {
    setGameState('start')
    setScore(0)
    setCurrentQuestionIndex(0)
    setPlayerName('')
  }

  const progress = ((currentQuestionIndex + 1) / QUESTIONS_PER_SET) * 100

  if (gameState === 'start') {
    return (
      <div className="container mx-auto p-4 max-w-2xl flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">英语句子学习</h1>
        <DifficultySelector onSelect={startGame} />
      </div>
    )
  }

  if (gameState === 'name_input') {
    return (
      <div className="container mx-auto p-4 max-w-2xl flex flex-col items-center justify-center min-h-screen">
        <NameInput onSubmit={handleNameSubmit} />
      </div>
    )
  }

  if (gameState === 'result') {
    return (
      <div className="container mx-auto p-4 max-w-2xl flex flex-col items-center justify-center min-h-screen">
        <ResultCard
          name={playerName}
          level={level}
          score={score}
          totalQuestions={QUESTIONS_PER_SET}
        />
        <Button onClick={restartGame} className="mt-8">
          再来一次
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">英语句子学习</h1>
      <div className="flex justify-between items-center mb-4">
        <ScoreDisplay score={score} />
        <Timer timeLeft={timeLeft} />
      </div>
      <ProgressBar progress={progress} />
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold">
          难度级别: {level} - 题目 {currentQuestionIndex + 1}/{QUESTIONS_PER_SET}
        </p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-2">翻译这个句子：</h2>
        {currentQuestion ? (
          <p className="text-lg mb-4">{currentQuestion.chinese}</p>
        ) : (
          <p className="text-lg mb-4">加载中...</p>
        )}
        <div className="bg-gray-100 p-4 rounded-lg min-h-[60px] flex flex-wrap gap-2 justify-center items-center">
          {userSentence.map((word, index) => (
            <Button 
              key={index} 
              variant="secondary"
              onClick={() => removeWord(index)}
              className="text-lg relative group"
            >
              {word}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ×
              </span>
            </Button>
          ))}
        </div>
      </div>
      {currentQuestion && <WordBank words={availableWords} onSelectWord={addWord} />}
      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={checkSentence} className="text-lg px-8 py-2">检查</Button>
        <Button onClick={moveToNextQuestion} variant="outline" className="text-lg px-8 py-2">跳过</Button>
      </div>
      <Dialog open={showDialog} onOpenChange={handleDialogClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

