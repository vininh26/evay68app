import { Button, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import contact from "./contact.jpg";

const Contact = () => {
  return (
    <div>
      <header className="App-header">
        <Image preview={false} width={700} height={250} src={contact} />
      </header>
      <body>
        <h3 style={{ color: "#0B4C5F" }}>
          Nhấn vào nút bên dưới và chờ 3 giây để liên
        </h3>
        <h3 style={{ color: "#0B4C5F" }}>
           kết Dịch vụ THẨM ĐỊNH VIÊN
        </h3>
        
        <Link to={"./phone-number"}>
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ color: "black", fontSize: "20px", textAlign: "center" }}
          >
            LIÊN HỆ THẨM ĐỊNH VIÊN
          </Button>
        </Link>
        <h3 style={{ paddingTop:"10px", color: "#0B4C5F" }}>
          Thời gian làm việc từ 8:30 {"-->"}
        </h3>
        <h3 style={{  color: "#0B4C5F" }}>
          20:30
        </h3>
      </body>
    </div>
  );
};

export default Contact;
