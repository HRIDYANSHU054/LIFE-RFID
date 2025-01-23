export const questions = [
  {
    question: "What is eHUB?",
    answer: 7,
  },
  {
    question:
      " How many charging partners are available on the eHUB platform to keep you powered up?",
    answer: 6,
  },
  {
    question: "What types of chargers can you find on eHUB?",
    answer: 4,
  },
  {
    question: "Can you reserve a slot at a charging station using eHUB?",
    answer: 5,
  },
  {
    question: "What  feature does eHUB provide to help with long trips?",
    answer: 3,
  },
  {
    question:
      "Which of the following best describes the trip planning feature on eHUB?",
    answer: 1,
  },
  {
    question: "Do you have to be an MG owner to use eHUB?",
    answer: 2,
  },
  {
    question: "What is EVpedia?",
    answer: 10,
  },
  {
    question:
      "Which tool on EVpedia helps users understand the costs associated with owning an EV?",
    answer: 8,
  },
  {
    question: "What is the name of EVPEDIA’s AI-powered chatbot?",
    answer: 9,
  },
];

export const RFID_LIST = [
  { id: 1695453, answer: 1 },
  { id: 1152297528, answer: 2 },
  { id: 7380333, answer: 3 },
  { id: 8613453, answer: 4 },
  { id: 16317224946, answer: 5 },
  { id: 8322751254, answer: 6 },
  { id: 1791942247, answer: 7 },
  { id: 90171273, answer: 8 },
  { id: 107183243, answer: 9 },
  { id: 67611747, answer: 10 },
];

export const uiOptions = [
  {
    border: "border-[#841700]",
    type: "question",
    iconImg: "/question2x.png",
  },
  {
    border: "border-[#1DD95E]",
    type: "correct",
    iconImg: "/tick2x.png",
  },
  {
    border: "border-[#FD4949]",
    type: "incorrect",
    iconImg: "/cross2x.png",
  },
];

export const ifCorrect = (answerNo, questionNo) =>{
  // const correctAnsNo = questions[questionNo].answer
  // if(answerNo === correctAnsNo){
  //   return true
  // }
  // else{
  //   return false
  // }
  return true
}



