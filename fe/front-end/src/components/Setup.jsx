import SetupName from "./SetupName";
import SetupProgress from "./SetupProgress";

const Setup = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#232323",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "43px 60px 266px",
        boxSizing: "border-box",
        gap: "225px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <SetupProgress />
      <SetupName />
    </div>
  );
};

export default Setup;
