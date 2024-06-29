import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      style={{
        position: "absolute",
        top: "62px",
        left: "60px",
        width: "1380px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "20px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "22px",
        color: "#ffcc01",
        fontFamily: "Syne",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "25px",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            fontWeight: "800",
            zIndex: "1",
            color: "inherit",
          }}
        >
          <span>IDO</span>
          <span style={{ color: "#fff" }}>MOVES</span>
        </a>
        <div
          style={{
            height: "108px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 20px 52px 0px",
            boxSizing: "border-box",
            gap: "52px",
            zIndex: "1",
          }}
        >
          <img
            style={{
              width: "37px",
              height: "2px",
              position: "relative",
              flexShrink: "0",
            }}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
          <img
            style={{
              width: "37px",
              height: "2px",
              position: "relative",
              flexShrink: "0",
            }}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
          <img
            style={{
              width: "37px",
              height: "2px",
              position: "relative",
              flexShrink: "0",
            }}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
        </div>
      </div>
      <div
        style={{
          width: "254px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{
            width: "97px",
            height: "20px",
            position: "relative",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/component-22.svg"
        />
      </div>
      <div
        style={{
          width: "113px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "53px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{ alignSelf: "stretch", height: "96px", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              top: "0px",
              bottom: "0px",
              left: "0px",
              borderRadius: "48px",
              backgroundColor: "#fff",
              width: "458px",
              zIndex: "1",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "14px",
              left: "29px",
              width: "67px",
              height: "67px",
              overflow: "hidden",
              zIndex: "2",
            }}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
