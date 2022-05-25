import { Button, Image, message, Modal, Popconfirm } from "antd";
import React, { useState } from "react";

import profile from "./profile.png";
import {
  CustomerServiceOutlined,
  InsuranceOutlined,
  LogoutOutlined,
  PayCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";

const Profile = () => {
  const [statusVerification, setStatusVerification] = useState(false)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const success = () => {
    message
      .loading("Action in progress..", 2.5)
      .then(() => message.success("Loading finished", 2.5))
      .then(() => message.info("Loading finished is finished", 2.5));
  };

  const checkStatusVerification = () => {

  }

  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div>
      <header className="App-header">
        <div style={{ margin: "auto" }}>
          <Image preview={false} width={200} height={200} src={profile} />
        </div>
        <h3>Mã KH: KH-437</h3>
        <div style={{ paddingTop: "10px" }} />
        <h3>123456789</h3>
      </header>
      <body>
        <div style={{ paddingTop: "20px" }}>
          <Button onClick={showModal}>
            <PayCircleOutlined style={{ fontSize: "150%" }} />
            <span style={{ paddingLeft: "20px" }}> Chi tiết trả nợ</span>{" "}
            <RightOutlined style={{ paddingLeft: "180px" }} />
          </Button>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Button onClick={checkStatusVerification}>
            <InsuranceOutlined style={{ fontSize: "150%" }} />
            <span style={{ paddingLeft: "20px" }}>Xác minh khách hàng</span>
            <b style={{ paddingLeft: "20px" }}>{statusVerification === true ? "Đã xác minh" : "Chưa xác minh"}</b>
            <RightOutlined style={{ paddingLeft: "20px" }} />
          </Button>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Button type="primary" onClick={success}>
            <CustomerServiceOutlined style={{ fontSize: "150%" }} />
            <span style={{ paddingLeft: "60px" }}>LIÊN HỆ THẨM ĐỊNH VIÊN</span>
            <RightOutlined style={{ paddingLeft: "60px" }} />
          </Button>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Popconfirm
            title="Bạn thực sự muốn đăng xuất?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <h2>
              <LogoutOutlined style={{ paddingRight: "10px" }} />
              Đăng xuất
            </h2>
          </Popconfirm>
        </div>
        <Modal title="Thông tin khoản vay" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </body>
    </div>

    
  );
};

export default Profile;
