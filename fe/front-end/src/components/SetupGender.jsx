import { Box } from "@mui/material";
import GenderIcons from "../components/GenderIcons";
import NextButton from "./NextButton";
import SetupProgress from "./SetupProgress";

const SetupGender = () => {
  return (
    <Box
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "43px 60px 78px",
        boxSizing: "border-box",
        gap: "116px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <SetupProgress />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "64px",
          color: "#fff",
          fontFamily: "Syne",
        }}
      >
        <Box
          style={{
            width: "874px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "126px",
            maxWidth: "100%",
          }}
        >
          <Box
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "33px",
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: "0",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              <span>{`What’s your `}</span>
              <span style={{ color: "#ffcc01" }}>sex?</span>
            </h1>
            <Box
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: "100%",
                gap: "20px",
              }}
            >
              <GenderIcons
                ionMaleOutline1="/ionmaleoutline-1.svg"
                male="Male"
              />
              <GenderIcons
                ionMaleOutline1="/ionfemaleoutline-1.svg"
                male="Female"
              />
            </Box>
          </Box>
          <Box
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px 0px 22px",
              textAlign: "center",
              fontSize: "32px",
              color: "#232323",
              fontFamily: "Inter",
              marginRight: "120px"
            }}
          >
            <Box
              style={{
                width: "152px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "2px 26px 31px",
                boxSizing: "border-box",
                position: "relative",
              }}
            ></Box>
            <NextButton />
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default SetupGender;
