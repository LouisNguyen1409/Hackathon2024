import { Box } from "@mui/material";

const SetupProgress = ({ className = "" }) => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        maxWidth: "100%",
        gap: "20px",
        textAlign: "center",
        fontSize: "32px",
        color: "#4a4a4a",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <img
        style={{
          height: "63px",
          width: "63px",
          position: "relative",
          overflow: "hidden",
          flexShrink: "0",
        }}
        loading="lazy"
        alt=""
        src="/arrow-leftcircle.svg"
      />
      <Box
        style={{
          width: "1008px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "41px",
          maxWidth: "100%",
        }}
      >
        <Box
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "25px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <Box
            style={{
              alignSelf: "stretch",
              height: "14px",
              position: "relative",
              borderRadius: "7px",
              backgroundColor: "#2c2c2c",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "0px",
                left: "calc(50% - 348.5px)",
                borderRadius: "7px",
                backgroundColor: "#2c2c2c",
                width: "100%",
                height: "100%",
                display: "none",
              }}
            />
            <Box
              style={{
                position: "absolute",
                top: "0px",
                left: "calc(50% - 348.5px)",
                borderRadius: "7px",
                backgroundColor: "#5ac8fb",
                width: "32px",
                height: "14px",
                zIndex: "1",
              }}
            />
          </Box>
        </Box>
        <Box
          style={{
            width: "270px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "15px 18px 20px 24px",
            boxSizing: "border-box",
            position: "relative",
          }}
          autoFocus={true}
        >
          <label style={{ cursor: "pointer" }}>
            <b
              style={{ flex: "1", position: "relative", whiteSpace: "nowrap" }}
            >
              Skip for now
            </b>
            <Box
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                margin: "0",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "35.5px",
                border: "2px dashed #4a4a4a",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            />
          </label>
          <input style={{ display: "none" }} type="file" id="file-3:40" />
        </Box>
      </Box>
    </header>
  );
};

export default SetupProgress;
