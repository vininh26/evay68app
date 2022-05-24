import { LeftOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
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
        <div>
          <Image preview={false} width={100} height={100} src={sd} />
        </div>
        <Form  {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name="pass" label="Mật khẩu">
            <Input
              placeholder="Nhập mật khẩu"
            />
          </Form.Item>
          <Form.Item name="passone" label="Nhập lại mật khẩu">
            <Input
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
          <div style={{"text-align": "left", width:" fit-content", "margin-left": "300px"}} >
        <h3> Chú ý:</h3>
        <h4>Độ dài mật khẩu từ 6 - 20 ký tự</h4>
        <h3>Ví dụ</h3>
        <h4>Mật khẩu : 123456</h4>
        <h4>Nhập lại mật khẩu : 123456</h4>
        </div>
        </Form>
      
      </body>
    </div>
  );
};

export default PhonePassPage;
