import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({onClick = ()=>{}}) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  // const animationRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    const landmarker = landmarkerRef.current;

    init({ landmarkerRef, videoRef, streamRef });

    return () => {
      if (landmarker) landmarker.close();
      if (video?.srcObject)
        video.srcObject.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const handleClick = async()=>{
    const expression = detect({ landmarkerRef, videoRef, setExpression });
    onClick(expression)

  }
  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        playsInline
        muted
        style={{ width: "400px", borderRadius: "12px" }}
      />
      <h2>{expression}</h2>
      <button
        onClick={handleClick}
      >
        Detect Expression
      </button>
    </div>
  );
}
