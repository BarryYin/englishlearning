import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultCardProps {
  name: string;
  level: number;
  score: number;
  totalQuestions: number;
}

export default function ResultCard({ name, level, score, totalQuestions }: ResultCardProps) {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-center">挑战结果</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-center text-lg font-semibold">{name}</p>
        <p className="text-center">难度级别: {level}</p>
        <p className="text-center">得分: {score}</p>
        <p className="text-center">总题数: {totalQuestions}</p>
        <p className="text-center text-xl font-bold mt-4">
          {score === totalQuestions ? '完美表现！' : '继续加油！'}
        </p>
      </CardContent>
    </Card>
  )
}

