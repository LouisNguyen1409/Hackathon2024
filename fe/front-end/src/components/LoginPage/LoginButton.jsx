/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LoginButton = ({ className = "", type }) => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 1px 0px 2px",
        position: "relative",
        whiteSpace: "nowrap",
        textAlign: "center",
        fontSize: "26px",
        color: "#232323",
        fontFamily: "Inter",
      }}
      className={className}
    >
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
          borderRadius: "18px",
          backgroundColor: "#ffcc01",
        }}
      />
      <Button
        onClick={() => navigate("/setup/0")}
        style={{
          height: "36px",
          flex: "1",
          position: "relative",
          display: "inline-block",
          zIndex: "1",
          color: "black",
          fontWeight: "bold"
        }}
      >
        {type}
      </Button>
    </Box>
  );
};

export default LoginButton;
