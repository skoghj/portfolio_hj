import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function DownloadButton() {
  const [state, setState] = useState("idle"); // "idle" | "loading" | "done"
  const controls = useAnimation();

  const handleClick = async () => {
    if (state !== "idle") return;
    setState("loading");

    // ✅ 아래에서 위로 색상 채우기 (1.5초)
    controls.set({ scaleY: 0 });
    await controls.start({
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    // ✅ 완료 상태로 전환 (1.5초 후)
    setTimeout(() => {
      setState("done");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="relative flex items-center justify-start w-[160px] border-2 border-[#5B5BF0] rounded-full cursor-pointer p-[5px] overflow-hidden bg-transparent transition-all duration-500 ease-in-out"
      >
        {/* 🔵 Circle */}
        <div className="relative flex items-center justify-center h-[45px] w-[45px] rounded-full overflow-hidden bg-[#5B5BF0]">
          {/* 🟦 Fill 애니메이션 */}
          <motion.div
            animate={controls}
            initial={{ scaleY: 0 }}
            className="absolute bottom-0 left-0 w-full h-full bg-[#3333a8] origin-bottom"
          />

          {/* 아이콘 상태 변화 */}
          {state === "idle" && (
            <svg
              className="z-10 text-white w-[26px] absolute transition-opacity duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
          )}

          {state === "loading" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="z-10 w-[15px] h-[15px] bg-white rounded-[2px]"
            />
          )}

          {state === "done" && (
            <motion.svg
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="z-10 text-white w-[26px] absolute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          )}
        </div>

        {/* 텍스트 Download → Open 전환 */}
        {state === "idle" && (
          <motion.p
            key="download"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute right-[18px] bottom-[14px] text-[17px] text-white"
          >
            Download
          </motion.p>
        )}

        {state === "done" && (
          <motion.p
            key="open"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute right-[18px] bottom-[14px] text-[17px] text-white"
          >
            Open
          </motion.p>
        )}
      </button>
    </div>
  );
}
