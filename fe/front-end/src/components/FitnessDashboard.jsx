import React from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  LinearProgress,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Dashboard = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const Sidebar = styled(Box)(({ theme }) => ({
  display: "flex",
  //   backgroundColor: '#232323',
  color: "#fff",
  width: "38%",
  textAlign: "center",
}));

const CharacterImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "250px",
  marginLeft: theme.spacing(5),
  marginTop: theme.spacing(5),
}));

const ProgressBarInner = styled(Box)(({ theme, progress }) => ({
  background: "linear-gradient(to right, #36d, #f6c)", // Gradient background
  height: "100%", // Full height of the container
  width: `${progress}%`, // Dynamic width based on progress prop
  borderRadius: "50px", // Same rounded corners to match container
  transition: "width 0.3s ease-in-out", // Smooth transition
}));

const ProgressBarContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#2e2e2e",
  borderRadius: "50px",
  overflow: "hidden",
  height: "35px",
  width: "15%",
  marginTop: "43%",
  marginLeft: "4%",
}));

const ProgressPercentage = styled(Typography)(({ theme }) => ({
  fontSize: "2.1em",
  position: "absolute",
  bottom: theme.spacing(3), // Adjust as needed to intersect with the character image
  marginLeft: "7%",
  transform: "translateX(-50%)",
  zIndex: 1, // Ensure it appears above the image
  // backgroundColor: '#232323', // Optional: add a semi-transparent background for better readability
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));

const ProgressText1 = styled(Typography)(({ theme }) => ({
  fontSize: "0.9em",
  position: "absolute",
  bottom: theme.spacing(6), // Adjust as needed to intersect with the character image
  transform: "translateX(-50%)",
  marginLeft: "16%",
  zIndex: 1, // Ensure it appears above the image
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));
const ProgressText2 = styled(Typography)(({ theme }) => ({
  fontSize: "0.9em",
  position: "absolute",
  bottom: theme.spacing(4), // Adjust as needed to intersect with the character image
  marginLeft: "16%",
  transform: "translateX(-50%)",
  zIndex: 1, // Ensure it appears above the image
  // backgroundColor: '#232323', // Optional: add a semi-transparent background for better readability
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));

const MainContent = styled(Container)(({ theme }) => ({
  backgroundColor: "#333",
  color: "#fff",
  width: "75%",
  padding: theme.spacing(2),
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TitleImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "450px",
  marginTop: "8%",
  marginBottom: "5%",
  marginLeft: "5%",
}));

const Calories = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const CaloriesNumber = styled(Typography)(({ theme }) => ({
  fontSize: "2em",
}));

const Exercises = styled(Box)(({ theme }) => ({
  marginBottom: "8%",
  marginLeft: "5%",
}));

const ExerciseCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#333",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "ralative",
}));

const ExerciseImage = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  maxWidth: "1000px",
  maxHeight: "180px",
  borderRadius: theme.spacing(1),
}));

const ExerciseText1 = styled(Typography)(({ theme }) => ({
  fontSize: "3em",
  color: "#fff",
  position: "absolute",
  top: "6%", // Adjust as needed
  left: "37%",
}));
const ExerciseText2 = styled(Typography)(({ theme }) => ({
  fontSize: "1.4em",
  color: "#333333",
  position: "absolute",
  top: "5%",
  left: "38%",
}));

const FitnessDashboard = () => {
  const navigate = useNavigate();
  const handleExerciseClick = () => {
    navigate("/viewing");
  };
  const progress = 36;
  return (
    <Dashboard>
      <Sidebar>
        <img src="/gojo_satoru.png" alt="gojo" style={{ maxWidth: "100%" }} />
        <ProgressPercentage>36%</ProgressPercentage>
        <ProgressText1>Overall</ProgressText1>
        <ProgressText2>Progress</ProgressText2>
        <ProgressBarContainer>
          <ProgressBarInner progress={progress} />
        </ProgressBarContainer>
      </Sidebar>
      <MainContent>
        <Header>
          <TitleImage src="today_progress.png" alt="Today's Progress" />
          <Calories>
            <CaloriesNumber>1,503</CaloriesNumber>
            <Typography>Calories remaining</Typography>
          </Calories>
        </Header>
        <Exercises>
          <ExerciseCard onClick={handleExerciseClick}>
            <ExerciseImage component="img" image="squats.png" alt="Squats" />
            <CardContent>
              <ExerciseText1
                style={{ margin: "0 4rem" }}
                variant="h6"
                sx={"top : 43%"}
              >
                Squats
              </ExerciseText1>
              <ExerciseText2 style={{ margin: "0 4rem" }} sx={"top : 52%"}>
                3 sets of 15
              </ExerciseText2>
            </CardContent>
          </ExerciseCard>
          <ExerciseCard onClick={handleExerciseClick}>
            <ExerciseImage
              component="img"
              image="stretches.png"
              alt="Stretches"
            />
            <CardContent>
              <ExerciseText1
                style={{ margin: "0 4rem" }}
                variant="h6"
                sx={"top : 69%"}
              >
                Stretches
              </ExerciseText1>
              <ExerciseText2 style={{ margin: "0 4rem" }} sx={"top : 78%"}>
                4 sets of 15s
              </ExerciseText2>
            </CardContent>
          </ExerciseCard>
          <ExerciseCard onClick={handleExerciseClick}>
            <ExerciseImage
              component="img"
              image="newexercise.png"
              alt="New Exercise"
            />
            <CardContent>
              <ExerciseText1
                style={{ margin: "0 4rem" }}
                variant="h6"
                sx={"top : 95%"}
              >
                Crunches
              </ExerciseText1>
              <ExerciseText2 style={{ margin: "0 4rem" }} sx={"top : 104%"}>
                3 sets of 20
              </ExerciseText2>
            </CardContent>
          </ExerciseCard>
          {/* Add more exercises as needed */}
        </Exercises>
      </MainContent>
    </Dashboard>
  );
};

export default FitnessDashboard;
