import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function StartScreen() {
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
          Tap to Solve for this
        </p>
      </div>

      {/* button */}
      <motion.button
        onClick={() => navigate("/select-language")}
        whileHover={{ scale: 1.05, backgroundColor: "#D94E2B" }}
        whileTap={{ scale: 0.95 }}
        className="mx-auto h-[126px] w-[367px] rounded-[63px] border-[5px] border-white bg-[#E95630] font-mukta-bold text-[45px] text-white"
      >
        Start
      </motion.button>
    </div>
  );
}

export default StartScreen;
