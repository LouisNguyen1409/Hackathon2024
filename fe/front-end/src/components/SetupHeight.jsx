import HeightInput from "./HeightInput";
import SetupProgress from "./SetupProgress";

const SetupHeight = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "43px 60px 155px",
        boxSizing: "border-box",
        gap: "306px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <SetupProgress />
      < HeightInput />
    </div>
  );
};

export default SetupHeight;
