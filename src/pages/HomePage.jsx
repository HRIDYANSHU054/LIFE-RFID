function HomePage() {
  return (
    <div
      style={{ backgroundImage: "url('/bg2x.png')" }}
      className="h-dvh bg-cover bg-center"
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
      {/* border-[#FD4949] */}
      {/* border-[#1DD95E] */}
      <div className="relative mx-auto flex h-[465px] w-[1605px] flex-col justify-between rounded-[25px] border-[5px] border-[#841700] bg-white p-6 pb-0">
        <p className="text-center font-mukta-bold text-[61px] text-black">
          What are some practical ways to reduce plastic waste in your
          household?
        </p>

        {/* tick , cross , question */}
        <div className="absolute bottom-[-50%] left-[50%] z-10 h-[270px] w-[251px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <img src="/question2x.png" className="object-cover object-center" />
          {/* <img src="/cross2x.png" className="object-cover object-center" /> */}
          {/* <img src="/tick2x.png" className="object-cover object-center" /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
