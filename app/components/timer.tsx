interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  return (
    <div className="text-2xl font-bold">
      时间：{timeLeft}秒
    </div>
  )
}

