import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const Logo = ({ className = "" }) => {
  return (
    <Box
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 21px 0px 20px",
      }}
      className={className}
    >
      <Box
        style={{
          width: "287px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "8px 0px 0px",
          }}
        >
          <Button>
            <img
              style={{ width: "63px", height: "63px", position: "relative" }}
              className={className}
              loading="lazy"
              alt=""
              src="/component-8.svg"
            />
          </Button>
        </Box>
        <Button>
          <img
            style={{ height: "70px", width: "70px", position: "relative" }}
            className={className}
            loading="lazy"
            alt=""
            src="/component-9.svg"
          />
        </Button>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "8px 0px 0px",
          }}
        >
          <Button>
            <img
              style={{ width: "63px", height: "63px", position: "relative" }}
              className={className}
              loading="lazy"
              alt=""
              src="/component-10.svg"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Logo;
