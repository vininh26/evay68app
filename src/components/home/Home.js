import React from 'react'
import { AndroidOutlined, AppleOutlined, CreditCardOutlined, CustomerServiceOutlined, PayCircleOutlined, UserDeleteOutlined } from '@ant-design/icons';
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
        <h3>
          <PayCircleOutlined />
          Vay
        </h3>
      }
      key="1"
    >
      {<Loan/>}
      <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <h3>
          <CustomerServiceOutlined />
          Liên hệ
        </h3>
      }
      key="2"
    >
       {<Contact/>}
       <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <h3>
          <CreditCardOutlined />
          Ví tiền
        </h3>
      }
      key="3"
    >
       {<Monny/>}
       <div style={{ paddingTop: "50px" }} />
    </TabPane>
    <TabPane
      tab={
        <h3>
         <UserDeleteOutlined />
          Hồ sơ
        </h3>
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