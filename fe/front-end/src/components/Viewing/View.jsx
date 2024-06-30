import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import PauseIcon from "@mui/icons-material/Pause";

function Progress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", marginLeft: "1rem" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

const PauseButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "#582CA0",
        borderRadius: "50%",
        minWidth: 40,
        height: 40,
        "&:hover": {
          backgroundColor: "#582CA0", // optional, adjust as needed
        },
      }}
    >
      <PauseIcon style={{ color: "white" }} />
    </Button>
  );
};

const WorkoutTimer = () => {
  return (
    <Box display="flex" height="90vh" bgcolor="#232323">
      <Sidebar />
      <MainContent />
    </Box>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      height="100%"
      flexDirection="column"
      alignItems="center"
      width="20%"
      bgcolor="#000"
      p={2}
      style={{
        width: "20%",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1rem",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <Button
        sx={{ top: "2rem", left: "2rem", position: "relative" }}
        onClick={() => navigate("/dashboard")}
      >
        <img
          style={{
            width: "63px",
            height: "63px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          src="/arrow-leftcircle.svg"
          alt="Back"
        />
      </Button>
      <Box width="100%" mb={2}>
        <Typography
          variant="h5"
          color="white"
          gutterBottom
          textAlign="center"
          marginTop="1.5rem"
        >
          Current exercise
        </Typography>
        <Display imageSrc="/squat.png" label="Squad" />
      </Box>
      <Box width="100%">
        <Typography variant="h5" color="white" gutterBottom textAlign="center">
          Next exercises
        </Typography>
        <Display imageSrc="/stretch.png" />
        <Display imageSrc="/scrunch.png" />
      </Box>
    </Box>
  );
};

const MainContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="80%"
      position="relative"
      paddingTop="2rem"
      height="100%"
    >
      <Typography
        variant="h4"
        color="white"
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        00:14
      </Typography>
        <video
          width="100%"
          height="100%"
          controls
          style={{ borderRadius: 10 }}
        >
          <source src="/final1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </Box>
  );
};

const Display = ({ imageSrc, label }) => {
  return (
    <Box display="flex" justifyContent="center" mb={2} position="relative">
      <img
        src={imageSrc}
        alt={label}
        style={{
          width: 185,
          height: 150,
          borderRadius: "45%",
          objectFit: "cover",
        }}
      />
      <Typography
        color="white"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const View = () => {
  return (
    <div className="App">
      <WorkoutTimer />
    </div>
  );
};

export default View;
