import { Button } from "@/components/ui/button"

interface WordBankProps {
  words: string[];
  onSelectWord: (word: string) => void;
}

export default function WordBank({ words, onSelectWord }: WordBankProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {words.map((word, index) => (
        <Button 
          key={index} 
          onClick={() => onSelectWord(word)}
          variant="outline"
          className="text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {word}
        </Button>
      ))}
    </div>
  )
}

