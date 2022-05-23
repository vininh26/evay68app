import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import sd from "./sd.jpg";

const PhoneNumber = () => {
  const contentStyle = {
    height: "50px",
    color: "#fff",
    lineHeight: "50px",
    textAlign: "center",
    background: "#364d79",
    marginTop: "20dp",
  };
  return (
    <div>
      <header className="App-header">
        <div>
          <LeftOutlined />
          <h3 style={contentStyle}>Đăng ký</h3>
        </div>
      </header>
    </div>
  );
};

export default PhoneNumber;
