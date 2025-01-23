import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";

function SelectLanguageScreen() {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: "url('/bg2x.png')" }}
      className="relative flex h-dvh flex-col bg-cover bg-center"
    >
      {/* Logo */}
      <div className="relative mx-auto h-[278px] w-[371px] overflow-hidden py-[57px]">
        <img
          src="/Logo2x.png"
          alt="Logo"
          className="object-cover object-center"
        />
      </div>

      {/* text */}
      <div className="mx-auto my-10 mb-12">
        <p className="text-center font-mukta-bold text-[109px] text-black">
          EcoTrivia
        </p>
        <p className="text-center font-mukta-bold text-[80px] text-black">
          Select your Language
        </p>
      </div>

      {/* buttons boxx */}
      <div className="flex items-center justify-center gap-20">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#D94E2B" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setLanguage("hindi");
            navigate("/question");
          }}
          className="h-[126px] w-[367px] rounded-[63px] border-[5px] border-white bg-[#E95630] font-mukta-bold text-[45px] text-white"
        >
          हिन्दी
        </motion.button>
        <motion.button
          to="/question"
          whileHover={{ scale: 1.05, backgroundColor: "#D94E2B" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setLanguage("english");
            navigate("/question");
          }}
          className="h-[126px] w-[367px] rounded-[63px] border-[5px] border-white bg-[#E95630] font-mukta-bold text-[45px] text-white"
        >
          English
        </motion.button>
      </div>
    </div>
  );
}

export default SelectLanguageScreen;
