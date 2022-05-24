import { DoubleRightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
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
  function edit() {
    <Link to={"./"}></Link>;
  }

  const onFinish = (values) => {
    console.log(values);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
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
              onChange={edit}
            />
            Đăng ký
          </h3>
        </div>
      </header>
      <body>
        <Image preview={false} width={100} height={100} src={sd} />
        <h3>Nhập số điện thoại để tiến hành đăng kí</h3>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name="phone" label="+84">
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Button type="link" htmlType="submit">
            Bước tiếp theo <DoubleRightOutlined />
          </Button>
        </Form>
      </body>
    </div>
  );
};

export default PhoneNumber;
