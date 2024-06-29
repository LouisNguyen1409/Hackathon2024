import NextButton from "./NextButton";

const WeightInput = ({ className = "" }) => {
  return (
    <section
      style={{
        width: "1270px",
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

      {/* <h1>Title of the Section</h1> */}
      <div
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "140px",
          maxWidth: "100%",
        }}
      >
          {/* Header weight */}
          <h1
            style={{
              margin: "0  80px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "700",
              fontFamily: "inherit",
              
            }}
          >
            <span>{`What’s your `}</span>
            <span style={{ color: "#ffcc01" }}>weight?</span>
          </h1>


          {/* Header weight */}
          <h1
            style={{
              margin: "0  80px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "700",
              fontFamily: "inherit",
              
            }}
          >
            <span>{`What’s your `}</span>
            <span style={{ color: "#ffcc01" }}>weight goal?</span>
          </h1>

          <div
          style={{
            width: "650px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "",
            padding: "0px 20px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "center",
            fontSize: "32px",
            color: "#232323",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              width: "152px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: "2px 26px 31px",
              boxSizing: "border-box",
              // position: "relative",
            }}
          ></div>
          <NextButton />
        </div>

      </div>



      <div
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "140px",
          maxWidth: "100%",
        }}
      >
        
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            maxWidth: "100%",
          }}
        >
          {/* Box */}
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "right",
              padding: "0px 20px 0px 155px",
              boxSizing: "border-box",
              maxWidth: "100%",
              textAlign: "center",
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.3)",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                width: "389px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "15px",
                maxWidth: "100%",
                marginLeft: "120px"
              }}
            >
              <div
                style={{
                  height: "66px",
                  width: "130px",
                  position: "relative",
                  top: "90px"
                }}
              >
                <input
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "22px",
                    borderRadius: "18px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    border: "2px solid #ffcc01",
                    boxSizing: "border-box",
                    width: "108px",
                    height: "54px",
                    color: "white",
                    padding: "0 12px",
                  }}
                  placeholder="0
                  "
                />
              </div>

              {/* Unit */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "10px 0px 0px",
                  boxSizing: "border-box",
                  minWidth: "159px",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                <div style={{ alignSelf: "stretch", position: "relative", top: "90px" }}>
                  kg
                </div>
              </div>

              <div
                style={{
                  height: "66px",
                  width: "130px",
                  position: "relative",
                  top: "290px",

                }}
              >
                <input
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "22px",
                    borderRadius: "18px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    border: "2px solid #ffcc01",
                    boxSizing: "border-box",
                    width: "108px",
                    height: "54px",
                    color: "white",
                    padding: "0 12px",
                  }}
                  placeholder="0
                  "
                />
              </div>

              {/* Unit */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "10px 0px 0px",
                  boxSizing: "border-box",
                  minWidth: "159px",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                <div style={{ alignSelf: "stretch", position: "relative",  top: "290px"}}>
                  kg
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>

      
    </section>
  );
};

export default WeightInput;

