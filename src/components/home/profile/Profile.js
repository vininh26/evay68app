import { Card, Image } from "antd";
import React from "react";

import profile from "./profile.png";
const Profile = () => {
  return (
    <div>
      <header className="App-header">
        <div style={{ margin: "auto" }}>
          <Image preview={false} width={200} height={200} src={profile} />
        </div>
        <h3>Mã KH: KH-437</h3>
        <div style={{paddingTop:"10px"}}/>
        <h3>123456789</h3>
      </header>
      <body>
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
    </Card>
      </body>
    </div>
  );
};

export default Profile;
