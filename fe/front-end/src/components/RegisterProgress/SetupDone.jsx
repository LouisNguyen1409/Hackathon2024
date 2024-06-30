import { Button } from "@mui/material";
import Done2 from "./DoneText";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "@fontsource/syne"; // Defaults to weight 400
import "@fontsource/syne/700.css"; // Specify weight

const SetUpDone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "43px 60px",
        boxSizing: "border-box",
        gap: "200px",
        lineHeight: "normal",
        letterSpacing: "normal",
        fontFamily: 'Syne',

      }}
    >
      <Button onClick={() => navigate("/setup/5")}>
        <img
          style={{
            width: "63px",
            height: "63px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          loading="lazy"
          alt=""
          src="/arrow-leftcircle.svg"
        />
      </Button>

      <Done2 />
    </div>
  );
};

export default SetUpDone;
