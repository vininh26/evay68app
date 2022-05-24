import { DoubleRightOutlined } from '@ant-design/icons';
import { Button, Carousel, Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

import tinchapvay from "./tinchapvay.jpg";

const Loan = () => {
    const contentStyle = {
        height: "200px",
        color: "#fff",
        lineHeight: "200px",
        textAlign: "center",
        background: "#364d79",
        marginTop: "20dp",
      };
  return (
    <div>
      <header className="App-header">
        <Carousel>
          <div style={{ margin: "auto" }}>
              <Image preview={false} width={700} height={200} src={tinchapvay} />
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
  )
}

export default Loan