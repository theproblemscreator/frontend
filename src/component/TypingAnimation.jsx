import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Ajay Rathod" , "Fullstack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => typed.destroy();
  }, []);

  return <span ref={typedRef}></span>; // ✅ Inline element
};

export default TypingAnimation;
