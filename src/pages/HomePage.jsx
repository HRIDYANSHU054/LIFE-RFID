import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const uiOptions = [
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

function HomePage() {
  const [uiType, setUiType] = useState("incorrect"); //"question", "correct", "incorrect"

  const currentUi = uiOptions.find((ui) => ui.type === uiType);

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
          className={`relative mx-auto flex w-[1605px] flex-col justify-between rounded-[25px] border-[5px] ${currentUi.border} bg-white p-6 pb-0`}
        >
          <p className="mb-[12rem] text-center font-mukta-bold text-[61px] text-black">
            What are some practical ways to reduce plastic waste in your
            household?
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
        40
      </p>
    </div>
  );
}

export default HomePage;
