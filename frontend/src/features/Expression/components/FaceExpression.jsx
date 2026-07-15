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
      <div className="instruction-text">
        <h3 style={{ marginBottom: "0.5rem" }}>Ready for your soundtrack?</h3>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
          Look at the camera and show us a <strong>Happy</strong>, <strong>Sad</strong>, or <strong>Surprised</strong> face!
        </p>
      </div>
      <h2>{expression}</h2>
      <button
        onClick={handleClick}
      >
         📸 Scan My Mood 
      </button>
    </div>
  );
}
