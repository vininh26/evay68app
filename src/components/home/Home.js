import React from 'react'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import Contact from './contact/Contact';
import Loan from './loan/Loan';
import Monny from './monny/Monny';
import Profile from './profile/Profile';

const { TabPane } = Tabs;

const Home = () => {
  return (
    <Tabs centered style={{textAlign:"center"}}   size='large' tabPosition='bottom' defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          Vay
        </span>
      }
      key="1"
    >
      {<Loan/>}
      <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Liên hệ
        </span>
      }
      key="2"
    >
       {<Contact/>}
       <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Ví tiền
        </span>
      }
      key="3"
    >
       {<Monny/>}
       <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Hồ sơ
        </span>
      }
      key="4"
    >
       {<Profile/>}
       <div style={{ paddingTop: "50px" }} />
    </TabPane>
  </Tabs>
  )
}

export default Home