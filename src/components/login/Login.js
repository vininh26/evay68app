import { LeftOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import sd from "./sd.jpg";

const Login = () => {
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
            Đăng nhập
          </h3>
        </div>
      </header>
      <body>
        <Image preview={false} width={100} height={100} src={sd} />
        <div style={{ paddingTop: "50px" }} />
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name="phone" label="Số điện thoại">
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item name="passworld" label="Mật khẩu">
            <Input placeholder="Nhập passworld" type={"password"} />
          </Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
            <div style={{ paddingTop: "50px" }} />
          <Link to={"/"}>
            <Button type="link" >
             Đăng ký tài khoản mới ?
            </Button>
          </Link>
        </Form>
      </body>
    </div>
  );
};

export default Login;
