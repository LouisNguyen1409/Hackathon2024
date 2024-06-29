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
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "140px",
          textAlign: "left",
          maxWidth: "100%",
        }}
      >

        <h1
          style={{
            margin: "0 50px",
            position: "absolute", // Change position to absolute if not disrupting other elements
            top: "200px", // Adjust this value to bring the element closer to the top
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
          }}
        >
          <span>{`What’s your `}</span>
          <br />
          <span style={{ color: "#ffcc01" }}>weight?</span>
        </h1>
      </div>

      <div
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "row",
          // alignItems: "flex-start",
          // justifyContent: "flex-start",
          // gap: "140px",
          textAlign: "left",
          maxWidth: "100%",
        }}
      >

        <h1
          style={{
            margin: "0 50px",
            position: "absolute", // Change position to absolute if not disrupting other elements
            top: "400px", // Adjust this value to bring the element closer to the top
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
            left: "10px"
          }}
        >
          <span>{`What’s your `}</span>
          <br />
          <span style={{ color: "#ffcc01" }}>weight goal?</span>
        </h1>
      </div>
          























      <div
        style={{
          width: "650px",
          display: "flex",             // Activated flex display
          flexDirection: "row",        // Not strictly necessary since it's the default
          alignItems: "center",        // Vertically center content in the container
          justifyContent: "center",    // Horizontally center content in the container
          padding: "0px 20px",         // Add padding if needed for visual spacing
          boxSizing: "border-box",     // Ensures padding doesn't affect the width
          maxWidth: "100%",            // Ensures the container doesn't exceed its parent
          textAlign: "center",         // Centers the text inside the container, if any
          fontSize: "32px",            // Sets the font size
          color: "#232323",            // Sets the text color
          position: "absolute",        // If you want to position it at a certain spot
          top: "600px",                // Moves the div 500px down from the top of its relative container
          left: "50%",                 // Align center to the middle of the page horizontally
          transform: "translateX(-50%)" // Corrects the left positioning to truly center
          // fontFamily: "Inter",       // Uncomment and set this to use a specific font
        }}
      >
        <NextButton />
      </div>


      <div
          style={{
            position: "relative", // Change position to absolute if not disrupting other elements
            top: "-250px", // Adjust this value to bring the element closer to the top
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
          }}
      >
        
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            maxWidth: "100%",
          }}
        >
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

              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
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
                  top: "200px",
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
                <div style={{ alignSelf: "stretch", position: "relative",  top: "200px"}}>
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

