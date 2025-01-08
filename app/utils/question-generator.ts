export interface Question {
  id: number;
  english: string;
  chinese: string;
  level: number;
}

const allQuestions: Question[] = [
  { id: 1, english: "The cat is sleeping.", chinese: "猫在睡觉。", level: 1 },
  { id: 2, english: "I like to eat apples.", chinese: "我喜欢吃苹果。", level: 1 },
  { id: 3, english: "She plays the piano beautifully.", chinese: "她弹钢琴弹得很美。", level: 2 },
  { id: 4, english: "The quick brown fox jumps over the lazy dog.", chinese: "快速的棕色狐狸跳过了懒惰的狗。", level: 3 },
  { id: 5, english: "I enjoy reading books in my free time.", chinese: "我喜欢在空闲时间阅读书籍。", level: 2 },
  { id: 6, english: "The weather is nice today.", chinese: "今天天气很好。", level: 1 },
  { id: 7, english: "He is studying for his final exam.", chinese: "他正在为期末考试而学习。", level: 2 },
  { id: 8, english: "They are going to the beach this weekend.", chinese: "他们这个周末要去海滩。", level: 2 },
  { id: 9, english: "The restaurant serves delicious food.", chinese: "这家餐厅供应美味的食物。", level: 3 },
  { id: 10, english: "She speaks three languages fluently.", chinese: "她能流利地说三种语言。", level: 3 },
  { id: 11, english: "The company is developing new technology.", chinese: "公司正在开发新技术。", level: 4 },
  { id: 12, english: "Global warming is a serious environmental issue.", chinese: "全球变暖是一个严重的环境问题。", level: 4 },
  { id: 13, english: "The professor's lecture was very informative.", chinese: "教授的讲座非常有见地。", level: 4 },
  { id: 14, english: "Artificial intelligence is revolutionizing many industries.", chinese: "人工智能正在革新许多行业。", level: 5 },
  { id: 15, english: "The implications of this discovery are far-reaching.", chinese: "这个发现的影响是深远的。", level: 5 },
  { id: 16, english: "The museum houses a collection of ancient artifacts.", chinese: "博物馆收藏了一批古代��物。", level: 4 },
  { id: 17, english: "Renewable energy sources are becoming increasingly important.", chinese: "可再生能源变得越来越重要。", level: 4 },
  { id: 18, english: "The company's innovative approach led to significant breakthroughs.", chinese: "公司的创新方法带来了重大突破。", level: 5 },
  { id: 19, english: "The scientist's groundbreaking research revolutionized the field.", chinese: "这位科学家的开创性研究彻底改变了该领域。", level: 5 },
  { id: 20, english: "The cat and dog are playing together.", chinese: "猫和狗在一起玩耍。", level: 1 },
  { id: 21, english: "She likes to drink coffee in the morning.", chinese: "她喜欢在早上喝咖啡。", level: 1 },
  { id: 22, english: "They are watching a movie at the cinema.", chinese: "他们在电影院看电影。", level: 2 },
  { id: 23, english: "The students are preparing for their final exams.", chinese: "学生们正在为期末考试做准备。", level: 2 },
  { id: 24, english: "The chef is creating a new recipe for the restaurant.", chinese: "厨师正在为餐厅创造一道新菜。", level: 3 },
  { id: 25, english: "The artist's paintings are displayed in the gallery.", chinese: "艺术家的画作在画廊里展出。", level: 3 },
  { id: 26, english: "The sun is shining brightly.", chinese: "阳光明媚。", level: 1 },
  { id: 27, english: "I have a pet dog.", chinese: "我有一只宠物狗。", level: 1 },
  { id: 28, english: "She is reading a book.", chinese: "她正在读书。", level: 1 },
  { id: 29, english: "He likes to play soccer.", chinese: "他喜欢踢足球。", level: 1 },
  { id: 30, english: "We are going to the park.", chinese: "我们打算去公园。", level: 1 },
  { id: 31, english: "They are planning a party.", chinese: "他们正在计划一个派对。", level: 2 },
  { id: 32, english: "I need to buy some groceries.", chinese: "我需要买一些杂货。", level: 2 },
  { id: 33, english: "She is very good at math.", chinese: "她数学很好。", level: 2 },
  { id: 34, english: "He works at a hospital.", chinese: "他在医院工作。", level: 2 },
  { id: 35, english: "They are watching a movie.", chinese: "他们正在看电影。", level: 2 },
  { id: 36, english: "The book is very interesting.", chinese: "这本书非常有趣。", level: 3 },
  { id: 37, english: "He is an experienced teacher.", chinese: "他是一位经验丰富的老师。", level: 3 },
  { id: 38, english: "The city has a rich history.", chinese: "这座城市有着丰富的历史。", level: 3 },
  { id: 39, english: "She is learning to play the guitar.", chinese: "她正在学习弹吉他。", level: 3 },
  { id: 40, english: "They are discussing the project.", chinese: "他们正在讨论这个项目。", level: 3 },
  { id: 41, english: "The company is expanding its market.", chinese: "公司正在扩大其市场。", level: 4 },
  { id: 42, english: "Climate change is affecting agriculture.", chinese: "气候变化正在影响农业。", level: 4 },
  { id: 43, english: "The scientist made a groundbreaking discovery.", chinese: "科学家做出了开创性的发现。", level: 4 },
  { id: 44, english: "Renewable energy is becoming more popular.", chinese: "可再生能源越来越受欢迎。", level: 4 },
  { id: 45, english: "The government is implementing new policies.", chinese: "政府正在实施新政策。", level: 4 },
  { id: 46, english: "Quantum computing is advancing rapidly.", chinese: "量子计算正在迅速发展。", level: 5 },
  { id: 47, english: "Biotechnology has the potential to cure many diseases.", chinese: "生物技术有潜力治愈许多疾病。", level: 5 },
  { id: 48, english: "Artificial intelligence is becoming more integrated into daily life.", chinese: "人工智能正在日益融入日常生活。", level: 5 },
  { id: 49, english: "The implications of space exploration are profound.", chinese: "太空探索的影响是深远的。", level: 5 },
  { id: 50, english: "The future of technology is exciting and full of possibilities.", chinese: "技术的未来令人兴奋且充满可能性。", level: 5 }

 // 如果需要，继续添加更多问题...
];

export function generateQuestionSet(level: number, count: number = 10): Question[] {
  const questionsForLevel = allQuestions.filter(q => q.level === level);
  const shuffled = [...questionsForLevel].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

