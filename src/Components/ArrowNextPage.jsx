import React from "react";
const ArrowNextPage = () => {
  const [step, setStep] = React.useState(0);
  const [startArrow, setStartArrow] = React.useState(false);
  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 2) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  setTimeout(() => {
    setStartArrow(true);
  }, 2000);

  return (
    <svg
      width="89"
      height="89"
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[60px] h-[60px] transition-all duration-300 ease-linear mt-12 min-[700px]:mt-24 min-[700px]:block"
    >
      {startArrow && (
        <g filter="url(#filter2_d_158_7)" style={displayStep(0)}>
          <path
            d="M12 12L44 44L76 12"
            stroke="#FDC500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      {startArrow && (
        <g filter="url(#filter1_d_158_7)" style={displayStep(1)}>
          <path
            d="M12.5 28.5L44.5 60.5L76.5 28.5"
            stroke="#FDC500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      {startArrow && (
        <g filter="url(#filter0_d_158_7)" style={displayStep(2)}>
          {" "}
          <path
            d="M12.5 44.5L44.5 76.5L76.5 44.5"
            stroke="#FDC500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      <defs>
        <filter
          id="filter0_d_158_7"
          x="0.5"
          y="32.5"
          width="88"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_7"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_158_7"
          x="0.5"
          y="16.5"
          width="88"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_7"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_158_7"
          x="0"
          y="0"
          width="88"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowNextPage;
