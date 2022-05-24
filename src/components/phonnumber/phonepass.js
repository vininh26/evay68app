import { LeftOutlined, PlayCircleFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Form, Image, Input, Row } from "antd";
import React from "react";
import sd from "./sd.jpg";

const PhonePassPage = () => {
  const contentStyle = {
    height: "50px",
    color: "#fff",
    lineHeight: "50px",
    textAlign: "center",
    background: "#364d79",
    marginTop: "20dp",
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <header className="App-header">
        <div>
          <h3 style={contentStyle}>
            <LeftOutlined
              style={{
                position: "fixed",
                left: "50px",
                right: "900px",
                top: "20px",
              }}
            />
            Đăng ký
          </h3>
        </div>
      </header>
      <body>
        <div style={{ marginLeft: "20px" }}>
          <Image preview={false} width={100} height={100} src={sd} />
          <Form
            layout="horizontal"
            style={{ minHeight: "100vh" }}
            {...layout}
            onFinish={onFinish}
          >
            <Form.Item name="pass" label="Mật khẩu">
              <Input placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item name="passone" label="Nhập lại mật khẩu">
              <Input placeholder="Nhập lại mật khẩu" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
            <article nz-typography>
              <h1 nz-typography>Chú ý</h1>
              <p nz-typography>
                <strong>Độ dài mật khẩu từ 6 - 20 ký tự</strong>{" "}
              </p>
              <p nz-typography>
                <strong>Ví dụ :</strong>
              </p>
              <p nz-typography>
                <span nz-typography>
                  <strong>Mật khẩu : 123456</strong>
                </span>
              </p>
              <span nz-typography>
                <strong>Nhập lại mật khẩu : 123456</strong>
              </span>
            </article>
          </Form>
        </div>
      </body>
    </div>
  );
};

export default PhonePassPage;
