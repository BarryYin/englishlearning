import { Button } from "@/components/ui/button"

interface Sentence {
  id: number;
  text: string;
  level: string;
}

interface SentenceBankProps {
  sentences: Sentence[];
  onSelectSentence: (sentence: Sentence) => void;
}

export default function SentenceBank({ sentences, onSelectSentence }: SentenceBankProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">句子库</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sentences.map((sentence) => (
          <div key={sentence.id} className="border p-4 rounded">
            <p className="mb-2">{sentence.text}</p>
            <p className="text-sm text-gray-500 mb-2">难度：{sentence.level}</p>
            <Button onClick={() => onSelectSentence(sentence)}>选择这个句子</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

