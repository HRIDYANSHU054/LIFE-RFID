import React, { useRef, useState } from "react";
import useClock from "../hooks/useClock";
import { questions } from "../util";
import QuestionScreen from "../components/QuestionScreen";

function Quiz2() {
  const index = useRef(0); // Keeps track of the current question index
  const { time } = useClock(); // Timer hook
  const [question, setQuestion] = useState(questions[index.current]?.question);

  // Update question when the timer reaches 0
  React.useEffect(() => {
    if (time === 0) {
      index.current += 1; // Increment the index
      if (index.current < questions.length) {
        setQuestion(questions[index.current]?.question);
      } else {
        console.log("No more questions!");
      }
    }
  }, [time]);

  
  return (
    <>
      {/* <div>Timer: {time}</div> */}
      <QuestionScreen placeholder={question} time={time}/>
    </>
  );
}

export default Quiz2;
