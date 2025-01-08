import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface NameInputProps {
  onSubmit: (name: string) => void;
}

export default function NameInput({ onSubmit }: NameInputProps) {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">恭喜完成挑战！</h2>
      <p>请输入您的名字：</p>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="您的名字"
        className="w-64"
      />
      <Button type="submit" disabled={!name.trim()}>
        提交
      </Button>
    </form>
  )
}

