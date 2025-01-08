import { Button } from "@/components/ui/button"

interface DifficultySelectorProps {
  onSelect: (level: number) => void;
}

export default function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold mb-4">选择难度级别</h2>
      {[1, 2, 3, 4, 5].map((level) => (
        <Button
          key={level}
          onClick={() => onSelect(level)}
          className="w-40"
        >
          第 {level} 级
        </Button>
      ))}
    </div>
  )
}

