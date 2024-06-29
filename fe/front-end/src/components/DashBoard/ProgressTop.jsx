import PropTypes from "prop-types";

const ProgressTop = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "37px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "98px",
        color: "#ffcc01",
        fontFamily: "Syne",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          maxWidth: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "505px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "5px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              alignSelf: "stretch",
              height: "118px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "800",
              fontFamily: "inherit",
              display: "inline-block",
              zIndex: "2",
            }}
          >
            <span>To</span>
            <span style={{ color: "#fff" }}>day</span>
          </h1>
        </div>
        <div
          style={{
            position: "relative",
            fontWeight: "800",
            display: "inline-block",
            minWidth: "104px",
            zIndex: "1",
          }}
        >
          3
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 9px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "right",
          fontSize: "23px",
          color: "#cacaca",
          fontFamily: "Inder",
        }}
      >
        <div
          style={{
            flex: "1",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
            borderRadius: "22px",
            backgroundColor: "#2c2c2c",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
            gap: "20px",
            zIndex: "1",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "762px",
              position: "relative",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
              borderRadius: "22px",
              backgroundColor: "#2c2c2c",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              height: "44px",
              width: "223px",
              position: "relative",
              borderRadius: "22px",
              background:
                "linear-gradient(90deg, #5ac8fb, #70d2a5 50.67%, #db9c21)",
              zIndex: "2",
            }}
          />
          <div
            style={{
              width: "377px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "5px 0px 0px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                alignSelf: "stretch",
                position: "relative",
                color: "inherit",
                zIndex: "2",
              }}
            >
              Overall Progress: 36%
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "35px",
          maxWidth: "100%",
          fontSize: "39px",
          color: "#fff",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 40px 16px",
            boxSizing: "border-box",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              margin: "0",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(8px)",
                borderRadius: "33px",
                background:
                  "linear-gradient(-33.52deg, rgba(146, 145, 145, 0.25), rgba(44, 44, 44, 0) 45.67%, rgba(81, 81, 81, 0) 61.17%, rgba(146, 145, 145, 0.25) 99.5%)",
                width: "100%",
                height: "100%",
                zIndex: "1",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "226px",
                left: "399px",
                width: "58px",
                height: "58px",
                overflow: "hidden",
                zIndex: "2",
              }}
              loading="lazy"
              alt=""
              src="/heartratepulsegraph.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "115px",
                left: "404px",
                width: "49px",
                height: "49px",
                overflow: "hidden",
                zIndex: "2",
              }}
              loading="lazy"
              alt=""
              src="/burgerburgerfastcookcookingnutritionfood.svg"
            />
          </div>
          <b
            style={{
              width: "250px",
              height: "98px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: "0",
              zIndex: "5",
            }}
          >
            Calories
          </b>
          <div
            style={{
              width: "599px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 5px",
              boxSizing: "border-box",
              maxWidth: "100%",
              marginTop: "-7px",
              fontSize: "45px",
              fontFamily: "'SF Pro Display'",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: "100%",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "245px",
                  width: "245px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "50%",
                    border: "0px solid rgba(84, 84, 86, 0.34)",
                    boxSizing: "border-box",
                    width: "100%",
                    height: "100%",
                    zIndex: "3",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "75px",
                      left: "41px",
                      display: "inline-block",
                      width: "163px",
                      height: "162px",
                      zIndex: "2",
                    }}
                  >
                    <b>
                      <span>1,503</span>
                    </b>
                    <span style={{ fontSize: "21px", color: "#6e6e6e" }}>
                      <b>{` `}</b>
                      <span style={{ fontWeight: "500" }}>
                        Calories remaining
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      borderRadius: "50%",
                      border: "0px solid #87558f",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                      zIndex: "4",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "163px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "23px 0px 0px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "37px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      zIndex: "2",
                    }}
                  >
                    <p style={{ margin: "0" }}>
                      <b>
                        <span>526</span>
                      </b>
                    </p>
                    <p style={{ margin: "0", fontSize: "21px" }}>
                      <span>
                        <b>{` `}</b>
                        <span
                          style={{
                            fontWeight: "500",
                            fontFamily: "'SF Pro Display'",
                            color: "#6e6e6e",
                          }}
                        >
                          Eaten
                        </span>
                      </span>
                    </p>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      zIndex: "2",
                    }}
                  >
                    <p style={{ margin: "0" }}>
                      <b>
                        <span>753</span>
                      </b>
                    </p>
                    <p style={{ margin: "0", fontSize: "21px" }}>
                      <span>
                        <b>{` `}</b>
                        <span
                          style={{
                            fontWeight: "500",
                            fontFamily: "'SF Pro Display'",
                            color: "#6e6e6e",
                          }}
                        >
                          Burnt
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "25px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "32px",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "11px 0px 0px",
              boxSizing: "border-box",
              minWidth: "269px",
              maxWidth: "100%",
            }}
          >
            <b
              style={{
                alignSelf: "stretch",
                position: "relative",
                zIndex: "1",
              }}
            >
              <span>{`Have you finished today’s `}</span>
              <span style={{ color: "#eb4335" }}>workout?</span>
            </b>
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "0px 2px",
              backgroundColor: "transparent",
              width: "323px",
              borderRadius: "48px",
              background: "linear-gradient(180deg, #582ca0 67.5%)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                height: "96px",
                width: "323px",
                position: "relative",
                borderRadius: "48px",
                background: "linear-gradient(180deg, #582ca0 67.5%)",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <b
              style={{
                height: "98px",
                width: "250px",
                position: "relative",
                fontSize: "33px",
                display: "flex",
                fontFamily: "Syne",
                color: "#fff",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: "0",
                whiteSpace: "nowrap",
                zIndex: "2",
              }}
            >
              Get Started
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "25px 0px 0px",
              }}
            >
              <img
                style={{
                  width: "48px",
                  height: "48px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  zIndex: "3",
                }}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

ProgressTop.propTypes = {
  className: PropTypes.string,
};

export default ProgressTop;
