import React from "react";
import { Carousel, Image } from "antd";
import vay1 from "./vay5.jpg";
import vay2 from "./vay2.jpg";
import vay3 from "./vay3.jpg";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const contentStyle = {
    height: "250px",
    color: "#fff",
    lineHeight: "250px",
    textAlign: "center",
    background: "#364d79",
    marginTop: "20dp",
  };
  return (
    <div>
      <header className="App-header">
        <Carousel autoplay autoplaySpeed={2000}>
          <div style={{ margin: "auto" }}>
            <h3 style={contentStyle}>
              <Image preview={false} width={900} height={250} src={vay1} />
            </h3>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={contentStyle}>
              <Image preview={false} width={900} height={250} src={vay2} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image preview={false} width={900} height={250} src={vay3} />
            </h3>
          </div>
        </Carousel>
      </header>
      <body>
        <h2>KHOẢN VAY ĐẦU TIÊN CÓ SẴN</h2>
        <h2>20TR -{">"} 1 Tỷ</h2>
        <h3 style={{ color: "#0B4C5F" }}>
          <DoubleRightOutlined /> Chỉ mất 3 phút đăng ký
        </h3>
        <h3 style={{ color: "#0B4C5F" }}>
          <DoubleRightOutlined /> Thông tin chi tiết - Lãi suất minh bạch
        </h3>
        <h3 style={{ color: "#0B4C5F" }}>
          <DoubleRightOutlined /> Nhận kết quả hồ sơ nhanh chóng
        </h3>
        <Link to={"./phone-number"}>
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ color: "black", fontSize: "20px", textAlign: "center" }}
          >
            Bắt đầu vay
          </Button>
        </Link>
      </body>
    </div>
  );
};
export default HomePage;
