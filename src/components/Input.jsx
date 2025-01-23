import React, { useRef, useEffect, useState } from "react";

export default function Input() {
  const inputRef = useRef(null);
  const [rfid, setRfid] = useState();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} onChange={(e) => setRfid(e.target.value)} className="absolute opacity-0" />
      {/* <div> {rfid} </div> */}
    </>
  );
}
