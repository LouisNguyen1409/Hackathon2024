import React from "react";
import NextButton from "../NextButton";
import { Box, Button } from "@mui/material";

const CharacterBox = ({ name, image, maxHeight, id, visible, handleClick }) => {
  const chosen = id === visible || visible === "0";

  const border = chosen ? "#FFCC01" : "#D9D9D9";
  const grey = chosen ? "0" : "100";

  return (
    <Button
      style={{
        width: "230px",
        height: "250px",
        border: `2px solid ${border}`,
        margin: "0 30px",
        textAlign: "center",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        filter: `grayscale(${grey}%)`
      }}
      onClick={() => handleClick(id)}
    >
      <img
        src={image}
        alt={name}
        style={{
          maxWidth: "95%",
          objectFit: "cover",
          height: maxHeight,
        }}
      />
    </Button>
  );
};

const Characters = () => {
  const [visible, setVisible] = React.useState("0");

  function handleClick(i) {
    setVisible(i);
  }

  return (
    <>
      <Button
        sx={{ top: "3rem", left: "3rem", position: "relative" }}
        onClick={() => navigate("/")}
      >
        <img
          style={{
            width: "63px",
            height: "63px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          src="/arrow-leftcircle.svg"
        />
      </Button>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            style={{
              margin: "0",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "700",
              fontFamily: "inherit",
              display: "inline-block",
              maxWidth: "100%",
              color: "white",
              marginTop: "5rem",
            }}
          >
            <span style={{ fontSize: "48px" }}>{`Choose your `}</span>
            <span style={{ color: "#ffcc01", fontSize: "48px" }}>trainer.</span>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "50vh",
            backgroundColor: "#232323",
            color: "white",
            justifyContent: "center",
          }}
        >
          <CharacterBox image="/gojo.png" maxHeight="100%" handleClick={handleClick} id="1" visible={visible}/>
          <CharacterBox image="/dva.png" maxHeight="100%" handleClick={handleClick} id="2" visible={visible} />
          <CharacterBox image="/add.png" maxHeight="30%" handleClick={handleClick} id="3" visible={visible}/>
        </Box>

        <NextButton />
      </Box>
    </>
  );
};

export default Characters;
