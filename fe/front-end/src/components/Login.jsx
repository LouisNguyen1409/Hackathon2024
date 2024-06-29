import LoginField from "./LoginField";
import Logo from "./Logo";
import { Box } from "@mui/material";

const Login = () => {
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
        padding: "42px 60px 182px",
        // boxSizing: "border-box",
        gap: "289px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
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
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "98px",
          color: "#ffcc01",
          fontFamily: "Syne",
        }}
      >
        <Box
          style={{
            width: "908px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "18px",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              alignSelf: "stretch",
              height: "118px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "800",
              fontFamily: "inherit",
              display: "inline-block",
            }}
          >
            <span>IDO</span>
            <span style={{ color: "#fff" }}>MOVES</span>
          </h1>
          <LoginField password="True" type="Log in" />
          <Logo />
        </Box>
      </section>
    </Box>
  );
};

export default Login;
