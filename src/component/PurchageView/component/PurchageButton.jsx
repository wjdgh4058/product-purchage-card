import { useEffect, useRef, useState } from "react";

export function PurchageButton(props) {
  const [disable, setDisable] = useState(false);
  const purchageBtn = useRef();
  const naverLogo = useRef();
  const mouseOver = () => {
    // console.log("aaaa");
    if (!disable) {
      purchageBtn.current.style.background = "#0AAE4F";
    }
  };
  const mouseOut = () => {
    if (!disable) {
      purchageBtn.current.style.background = "#03c75a";
    }
  };
  useEffect(() => {
    props.count === 0 ? setDisable(true) : setDisable(false);
  }, [props.count]);

  useEffect(() => {
    if (disable) {
      // console.log("0이다.");
      purchageBtn.current.style.background = "#DEE0E3";
      purchageBtn.current.style.color = "#999999";
      purchageBtn.current.style.cursor = "not-allowed";
      // naverLogo.current.style.filter =
      //   "invert(74%) sepia(1%) saturate(4915%) hue-rotate(153deg) brightness(145%) contrast(90%)";
      naverLogo.current.style.fill = "#999999";
    } else {
      purchageBtn.current.style.background = "#03c75a";
      purchageBtn.current.style.color = "#ffffff";
      purchageBtn.current.style.cursor = "pointer";
      naverLogo.current.style.fill = "#03C75A";
    }
  }, [disable]);
  return (
    <button
      className="purchageButton"
      ref={purchageBtn}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      disabled={disable}
    >
      <svg
        role="img"
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" fill="white" />
        <path
          ref={naverLogo}
          d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
          fill="#03C75A"
        />
      </svg>
      <span>구매하기</span>
    </button>
  );
}
