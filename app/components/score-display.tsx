interface ScoreDisplayProps {
  score: number;
}

export default function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="text-2xl font-bold">
      得分：{score}
    </div>
  )
}

