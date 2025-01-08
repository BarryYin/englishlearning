export function calculateTimeLimit(sentence: string): number {
  const wordCount = sentence.split(' ').length;
  return wordCount * 2; // 每个单词2秒
}

