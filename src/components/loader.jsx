import { useEffect, useState } from "react";
import "../styles/loader.css";

export default function Loader({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        onFinish();
      }, 900);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`portfolio-loader ${hide ? "loader-hide" : ""}`}>
      
      <div className="loader-center">

        {/* Monogram */}
        <div className="loader-monogram">
          <span>H</span>
          <span>F</span>
        </div>

        {/* Name */}
        <div className="loader-name">
          HUSSNA FAISAL
        </div>

        {/* Animated line */}
        <div className="loader-line">
          <span />
        </div>

        {/* Profession */}
        <div className="loader-role">
          FRONTEND DEVELOPER
          <b>•</b>
          UI/UX DESIGNER
        </div>

      </div>

    </div>
  );
}