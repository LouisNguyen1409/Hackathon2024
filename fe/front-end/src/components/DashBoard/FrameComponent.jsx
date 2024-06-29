import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "430px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "53px",
        minWidth: "430px",
        maxWidth: "100%",
        textAlign: "right",
        fontSize: "33px",
        color: "#fff",
        fontFamily: "Syne",
      }}
      className={className}
    >
      <div
        style={{
          width: "373px",
          height: "96px",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            top: "0px",
            bottom: "0px",
            left: "20px",
            borderRadius: "48px",
            backgroundColor: "#5ac8fb",
            width: "637px",
            zIndex: "2",
          }}
        />
        <b
          style={{
            position: "absolute",
            height: "100%",
            top: "0px",
            left: "63px",
            display: "flex",
            alignItems: "center",
            width: "293px",
            zIndex: "3",
          }}
        >
          Calories Diary
        </b>
      </div>
      <div
        style={{
          width: "373px",
          height: "399px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 20px",
          boxSizing: "border-box",
          gap: "53px",
          maxWidth: "100%",
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
              backgroundColor: "#5ac8fb",
              width: "637px",
              zIndex: "2",
            }}
          />
          <b
            style={{
              position: "absolute",
              height: "100%",
              top: "0px",
              left: "86px",
              display: "flex",
              alignItems: "center",
              width: "250px",
              zIndex: "3",
            }}
          >
            Chatroom
          </b>
        </div>
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
              backgroundColor: "#5ac8fb",
              width: "637px",
              zIndex: "2",
            }}
          />
          <b
            style={{
              position: "absolute",
              height: "100%",
              top: "0px",
              left: "86px",
              display: "flex",
              alignItems: "center",
              width: "250px",
              zIndex: "3",
            }}
          >
            Plans
          </b>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "395px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0px 20px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "97px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "0px 0px 38px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                alignSelf: "stretch",
                height: "20px",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                flexShrink: "0",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/component-22.svg"
            />
          </div>
          <img
            style={{
              height: "117px",
              width: "117px",
              position: "relative",
              overflow: "hidden",
              flexShrink: "0",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/plus-circle.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
