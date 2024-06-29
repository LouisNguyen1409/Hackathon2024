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
        height: "1024px",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        fontSize: "98px",
        color: "#ffcc01",
        fontFamily: "Syne",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "264px",
          left: "1087px",
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "637px",
          height: "96px",
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "413px",
          left: "1087px",
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "637px",
          height: "96px",
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "562px",
          left: "1087px",
          borderRadius: "48px",
          border: "3px solid #fff",
          boxSizing: "border-box",
          width: "637px",
          height: "96px",
          display: "none",
        }}
      />
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "268px",
          left: "59px",
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
          top: "236px",
          left: "60px",
          width: "1380px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "188px",
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
            padding: "0px 0px 11px",
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
            left: "-277px",
            width: "1881px",
            height: "1114px",
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
            left: "409px",
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
            top: "69px",
            left: "1214px",
            width: "166px",
            height: "9px",
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
            left: "594px",
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
