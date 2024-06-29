/* eslint-disable no-unused-vars */
import React from "react";
import FrameComponent1 from "../components/DashBoard/FrameComponent1";
import ProgressTop from "../components/DashBoard/ProgressTop";
import FrameComponent from "../components/DashBoard/FrameComponent";

const DashBoard = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        fontSize: "6vw", // Use vw for font size to make it responsive
        color: "#ffcc01",
        fontFamily: "Syne",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "26.4vh", // Use vh for top positioning
          left: "54.35vw", // Use vw for left positioning
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "31.85vw", // Use vw for width
          height: "9.6vh", // Use vh for height
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "41.3vh", // Use vh for top positioning
          left: "54.35vw", // Use vw for left positioning
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "31.85vw", // Use vw for width
          height: "9.6vh", // Use vh for height
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "56.2vh", // Use vh for top positioning
          left: "54.35vw", // Use vw for left positioning
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "31.85vw", // Use vw for width
          height: "9.6vh", // Use vh for height
          display: "none",
        }}
      />
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "26.8vh", // Use vh for top positioning
          left: "5.9vw", // Use vw for left positioning
          fontSize: "inherit",
          fontWeight: "800",
          fontFamily: "inherit",
          mixBlendMode: "overlay",
          zIndex: "1",
        }}
      >
        <span>To</span>
        <span style={{ color: "#fff" }}>day</span>
      </h1>
      <FrameComponent1 />
      <div
        style={{
          position: "absolute",
          top: "23.6vh", // Use vh for top positioning
          left: "6vw", // Use vw for left positioning
          width: "88vw", // Use vw for width
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "18.8vw", // Use vw for gap
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0px 0px 1.1vh", // Use vh for padding
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <ProgressTop />
        </div>
        <FrameComponent />
      </div>
      <main
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "-27.7vw", // Use vw for left positioning
            width: "188.1vw", // Use vw for width
            height: "111.4vh", // Use vh for height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              left: "0px",
              top: "0px",
              transform: "scale(1.09)",
            }}
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <img
          style={{
            position: "absolute",
            top: "896px",
            left: "600px",
            borderRadius: "3px",
            width: "55px",
            height: "55px",
            zIndex: "2",
          }}
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "6.9vh", // Use vh for top positioning
            left: "121.4vw", // Use vw for left positioning
            width: "16.6vw", // Use vw for width
            height: "0.9vh", // Use vh for height
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/line-2.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "255px",
            left: "760px",
            width: "96px",
            height: "96px",
            overflow: "hidden",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/twemojifire-1.svg"
        />
      </main>
    </div>
  );
};

export default DashBoard;
