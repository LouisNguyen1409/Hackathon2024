import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SetupName = ({ className = "" }) => {
  return (
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
      className={className}
    >
      <Box
        style={{
          width: "780px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "125px",
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
            gap: "28px",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              width: "464px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "700",
              fontFamily: "inherit",
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            <span>{`What can we call `}</span>
            <span style={{ color: "#ffcc01" }}>you?</span>
          </h1>
          <Box
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "1px 16px 14px",
              boxSizing: "border-box",
              position: "relative",
              maxWidth: "100%",
              fontSize: "21px",
              color: "rgba(255, 255, 255, 0.4)",
              fontFamily: "Inter",
            }}
          >
            <input
              style={{
                height: "200%",
                color: "#FFFFFF",
                width: "100%",
                position: "absolute",
                margin: "10",
                padding: "0 12px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "18px",
                backgroundColor: "rgba(255, 255, 255, 0)",
                border: "2px solid #ffcc01",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                flexShrink: "0",
                maxWidth: "100%",
                zIndex: "1",
              }}
              placeholder="Name..."
              label="Name..."
            />
          </Box>
        </Box>
        <Box
          style={{
            width: "768px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 20px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "center",
            fontSize: "32px",
            color: "#232323",
            fontFamily: "Inter",
          }}
        >
          <Box
            style={{
              width: "270px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px 47px 33px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <Box
              style={{
                height: "70%",
                width: "100%",
                position: "absolute",
                margin: "0",
                top: "0px",
                padding: "0",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "47px",
                backgroundColor: "#ffcc01",
              }}
            />
            <b
              style={{
                flex: "1",
                position: "relative",
                zIndex: "1",
                margin: "10% 0 10% 0",
                fontWeight: "bold"
              }}
            >
              Next
            </b>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default SetupName;
