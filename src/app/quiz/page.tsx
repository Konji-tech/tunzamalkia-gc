'use client'
import Image from 'next/image';
import { useState } from 'react';
import logo from "@/../public/images/logo.png";

type Option = {
  answer: string;
  explanation: string;
  isCorrect: boolean;
};

type Question = {
  question: string;
  options: Option[];
};

const questions: Question[] = [
  {
    question: "Myth or Fact: You can't get pregnant during your period.",
    options: [
      { answer: "Myth", explanation: "Correct! While the chances are lower, it is still possible to get pregnant during your period because sperm can live inside the female body for up to 5 days.", isCorrect: true },
      { answer: "Fact", explanation: "Incorrect. Although the chances are lower, pregnancy is still possible during your period because sperm can survive in the body for several days, and you could ovulate shortly after your period ends.", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is NOT a symptom of a sexually transmitted infection (STI)?",
    options: [
      { answer: "Unusual vaginal discharge", explanation: "Incorrect. Unusual vaginal discharge can be a symptom of an STI and should be checked by a healthcare provider.", isCorrect: false },
      { answer: "Pain during intercourse", explanation: "Incorrect. Pain during intercourse can be a sign of an STI or other medical conditions.", isCorrect: false },
      { answer: "Frequent headaches", explanation: "Correct! Frequent headaches are not typically a symptom of STIs. Symptoms like unusual vaginal discharge and pain during intercourse are more commonly associated with STIs.", isCorrect: true },
      { answer: "Itching in the genital area", explanation: "Incorrect. Itching in the genital area can be a sign of an STI or other infections.", isCorrect: false },
    ],
  },
  {
    question: "What does it mean if your vaginal discharge changes color or smell?",
    options: [
      { answer: "It’s a sign of ovulation", explanation: "Incorrect. While discharge does change during ovulation, significant changes in color or smell are usually signs of an infection.", isCorrect: false },
      { answer: " It’s always normal and nothing to worry about", explanation: "Incorrect.Changes in the color, consistency, or smell of discharge can indicate an infection and should not be ignored.", isCorrect: false },
      { answer: " It could be a sign of an infection", explanation: "Correct! Changes in vaginal discharge can be a sign of an infection, and it’s important to consult a healthcare provider if you notice these changes.", isCorrect: true },
      { answer: "It means your period is about to start", explanation: "Incorrect.While discharge can increase before a period, changes in color or smell are more likely to indicate an infection.", isCorrect: false },
    ],
  },
  {
    question: "Which of the following statements about birth control pills is true?",
    options: [
      { answer: "Birth control pills protect against STIs.", explanation: "Incorrect. Birth control pills do not protect against STIs. Condoms or other barrier methods are needed for STI prevention", isCorrect: false },
      { answer: "You can skip your period by continuing to take the active pills", explanation: "Correct!Some women choose to skip their period by continuing to take the active birth control pills. However, consult with a healthcare provider before doing this regularly.", isCorrect: true },
      { answer: "Birth control pills cause infertility", explanation: "Incorrect! Birth control pills do not cause infertility. Fertility usually returns shortly after stopping the pill.", isCorrect: false },
      { answer: " You can only get pregnant after you've stopped taking the pill for a year", explanation: "Incorrect. Most women can get pregnant shortly after stopping the pill; it does not take a year.", isCorrect: false },
    ],
  },
  {
    question: "Can douching prevent pregnancy or sexually transmitted infections?",
    options: [
      { answer: "It cleans the vagina and removes sperm", explanation: "Incorrect. Douching does not prevent pregnancy or STIs and can actually increase the risk of infections by disrupting the natural balance of bacteria in the vagina.", isCorrect: false },
      { answer: "It can actually increase the risk of infections", explanation: "Correct! Douching can increase the risk of infections and does not protect against pregnancy or STIs.", isCorrect: true },
      { answer: "Sometimes, but not always", explanation: "Incorrect. Douching is not effective at preventing pregnancy or STIs and can increase the risk of infections.", isCorrect: false },
      { answer: " It’s effective only when done immediately after intercourse", explanation: "Incorrect.Douching is not effective at any time in preventing pregnancy or STIs and can increase the risk of infections.", isCorrect: false },
    ],
  },
  {
    question: "How often should you change your tampon to prevent toxic shock syndrome (TSS)",
    options: [
      { answer: "Every 4-8 hours", explanation: "Correct! Changing your tampon every 4-8 hours reduces the risk of toxic shock syndrome, which is a rare but serious condition", isCorrect: true },
      { answer: "Every 12 hours", explanation: "Incorrect. Leaving a tampon in for 12 hours increases the risk of toxic shock syndrome. It’s recommended to change it every 4-8 hours.", isCorrect: false },
      { answer: "Once a day", explanation: "Incorrect. Tampons should be changed more frequently, every 4-8 hours, to prevent the risk of toxic shock syndrome.", isCorrect: false },
      { answer: "Only when it feels full", explanation: "Incorrect. Even if a tampon doesn’t feel full, it should be changed every 4-8 hours to prevent toxic shock syndrome.", isCorrect: false },
    ],
  },
  {
    question: "How often should women get tested for STIs if they are sexually active?",
    options: [
      { answer: "Every month", explanation: "Incorrect. While frequent testing is important for some, most women should be tested at least once a year or when they have a new partner.", isCorrect: false },
      { answer: "You can skip your period by continuing to take the active pills", explanation: "Correct! Some women choose to skip their period by continuing to take the active birth control pills. However, consult with a healthcare provider before doing this regularly.", isCorrect: true },
      { answer: "Every time they have a new partner", explanation: "Correct! Women should get tested for STIs when they have a new sexual partner to ensure their sexual health is monitored.", isCorrect: true },
      { answer: " Both B and C", explanation: " Correct! Both regular annual testing and testing with new partners are important for maintaining sexual health.", isCorrect: true },
    ],
  },
  {
    question: "Can you contract an STI from oral sex?",
    options: [
      { answer: "Yes", explanation: "Correct! STIs can be transmitted through oral sex, so protection should be used even during oral sexual activities.", isCorrect: true },
      { answer: "No", explanation: "Incorrect. STIs can be transmitted through oral sex, even if the partner does not have visible symptoms.", isCorrect: false },
      { answer: "Only if you have a cut in your mouth", explanation: "Incorrect. While cuts can increase the risk, STIs can still be transmitted through oral sex even without cuts.", isCorrect: false },
      { answer: " Only if your partner is symptomatic", explanation: "Incorrect. STIs can be transmitted even if the partner has no visible symptoms.", isCorrect: false },
    ],
  },
  {
    question: "What is the primary benefit of using condoms?",
    options: [
      { answer: "They are 100% effective in preventing pregnancy", explanation: "Incorrect. While very effective, condoms are not 100% foolproof against pregnancy. Proper use is key to effectiveness.", isCorrect: false },
      { answer: "They prevent both pregnancy and STIs.", explanation: "Correct! Condoms are effective at preventing both pregnancy and the transmission of STIs when used correctly.", isCorrect: true },
      { answer: "They only protect against pregnancy", explanation: "Incorrect! Condoms protect against both pregnancy and STIs.", isCorrect: false},
      { answer: " They are reusable", explanation: "Incorrect. Condoms are not reusable and should be discarded after one use.", isCorrect: false },
    ],
  },
  {
    question: "Is vaginal discharge normal?",
    options: [
      { answer: " Yes, it's a normal bodily function.", explanation: "Correct! Vaginal discharge is a normal and healthy bodily function that helps keep the vagina clean.", isCorrect: true },
      { answer: "No, it's a sign of an infection.", explanation: "Incorrect.  While changes in discharge can indicate an infection, discharge itself is a normal function of the body.", isCorrect: false },
      { answer: " Only when it's clear and odorless.", explanation: "Incorrect. Discharge can vary in consistency and color throughout the menstrual cycle, but significant changes may need medical attention.", isCorrect: false },
      { answer: " Only if it occurs during menstruation", explanation: "Incorrect.  Vaginal discharge occurs throughout the menstrual cycle and is not limited to menstruation.", isCorrect: false },
    ],
  },
  // Add more questions here following the same structure...
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <div className="bg-white p-20 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-gray-700">Thank you for taking the quiz. We hope you learned something new!</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-[70%] mx-auto mt-8 py-50 px-50">
      <div className="bg-white py-20 px-10 rounded-lg shadow-md">
        <h1 className="flex items-center justify-center font-bold text-4xl mb-6">
          <span className="mr-4">Q&A</span>
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="w-10 lg:w-[90]"
          />
        </h1>
        <div className="flex-items-center mb-4">
        <h2 className="text-xl font-semibold flex-1">{currentQuestion.question}
        </h2>
        <div>
        </div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`w-full py-5 px-20 mb-2 text-left rounded-lg border ${
                selectedOption === option ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-300'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.answer}
            </button>
          ))}
        </div>
        {showExplanation && selectedOption && (
          <div className={`mt-4 p-3 rounded-lg ${selectedOption.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {selectedOption.explanation}
          </div>
        )}
        {showExplanation && (
          <button
            className="mt-4 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white rounded-lg"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
}


