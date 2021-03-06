import React from "react";

const Header = (props) => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          /*color: "#ececec",*/
          textTransform: "lowercase",
          textAlign: "center",
          textShadow:
            "0px 15px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05), -10px 20px 5px rgba(0,0,0,0.05)",
        }}
      >
        {props.text}
      </h1>
    </header>
  );
};

export default Header;
