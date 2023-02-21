import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

// CSS
import "./ScrollBtn.css";

function ScrollBtn() {
  const [showBotpBtn, setShowBotBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowBotBtn(true);
      } else {
        setShowBotBtn(false);
      }
    });
  }, []);
  const goToBot = () => {
    window.scrollTo(0, 800);
  };
  return (
    <>
      {showBotpBtn && (
        <div onClick={goToBot} className="scroll-conteiner btn-downicon">
          <IoIosArrowDown size={50} />
        </div>
      )}
    </>
  );
}

export default ScrollBtn;
