import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ifCorrect, questions, RFID_LIST, uiOptions } from "../util";
import useClock from "../hooks/useClock";

function QuestionScreen() {
  const inputRef = useRef(null);
  const index = useRef(0); // Keeps track of the current question index
  const [uiType, setUiType] = useState("question"); //"question", "correct", "incorrect"
  const [question, setQuestion] = useState(questions[index.current]?.question);
  const [rfid, setRfid] = useState();
  const { time, setTime } = useClock(5); // Timer hook
  const currentUi = uiOptions.find((ui) => ui.type === uiType);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update question when the timer reaches 0
  useEffect(() => {
    if (time === 0) {
      index.current += 1; // Increment the index
      setUiType("question")
      if (index.current < questions.length) {
        setQuestion(questions[index.current]?.question);
      } else {
        console.log("No more questions!");
      }
    }
  }, [time]);

  const evaluateAnswer = (rfid) => {
    const answerNo = RFID_LIST.find((item) => item.id === Number(rfid));
    if (ifCorrect(answerNo, index)) {
      setUiType("correct");
    } else {
      setUiType("incorrect");
    }
    // setTimeout(()=>{
    //   setTime(0)
    // },3000)
  };

  return (
    <div
      style={{ backgroundImage: "url('/bg2x.png')" }}
      className="relative h-dvh bg-cover bg-center"
    >

      {/* Logo */}
      <div className="relative mx-auto h-[278px] w-[371px] overflow-hidden py-[57px]">
        <img
          src="/Logo2x.png"
          alt="Logo"
          className="object-cover object-center"
        />
      </div>

      {/* question box */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={uiType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative mx-auto flex h-[460px] w-[1605px] flex-col justify-between rounded-[25px] border-[5px] ${currentUi.border} bg-white p-6 pb-0`}
        >
          <p className="text-center font-mukta-bold text-[61px] text-black">
            {question}
          </p>

          {/* tick , cross , question */}
          <div className="absolute bottom-[-62%] left-[50%] z-10 h-[270px] w-[251px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <AnimatePresence exitBeforeEnter>
              <motion.img
                key={currentUi.iconImg}
                src={currentUi.iconImg}
                alt={uiType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="object-cover object-center"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>


      {/* timer box */}
      <p className="absolute bottom-[8%] ml-[10rem] w-[12rem] rounded-[25px] border-[5px] border-[#841700] bg-white text-center font-mukta-bold text-[61px] tracking-wide text-black">
        {time}
      </p>
      <input
        ref={inputRef}
        onChange={(e) => {
          setRfid(e.target.value);
          evaluateAnswer(rfid);
        }}
        className="z-20 absolute opacity-0"
      />
    </div>
  );
}

export default QuestionScreen;
