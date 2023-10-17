import React from "react";
import {
  LockOutlined,
  ShoppingOutlined,
  FileOutlined,
  SearchOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import {
  Divider,
  Image,
  Input,
  Layout,
  Menu,
  theme,
  Card,
  Row,
  Col,
} from "antd";
import logo from "../../assests/images/Logo.svg";
import notification from "../../assests/images/Vector.svg";
import bars from "../../assests/images/bar.svg";
import avatar from "../../assests/images/Avatar.svg";
import components from "../../assests/images/componenets.svg";
import clipboard from "../../assests/images/clipboard-list.svg";
import ReactECharts from "echarts-for-react";
import "./style.scss";
import CustomList from "../Listing/List";
const { Header, Content, Footer, Sider } = Layout;
const NavBar = () => {
  const itemList = [
    { icon: <FileOutlined />, label: "Pages" },
    { icon: <ShoppingOutlined />, label: "Sales" },
    { icon: <LockOutlined />, label: "Authentication" },
  ];
  const subMenu = [
    { label: "Product List" },
    { label: "Billing" },
    { label: "Invoice" },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const option = {
    tooltip: {
      trigger: "axis",
    },
    // legend: {
    //   data: ["Line"],
    // },
    // grid: {
    //     left: "10%",
    //     right: "10%",
    //     bottom: "10%",
    //     containLabel: true,
    //   },
    xAxis: {
      type: "category",
      data: [
        "01 Apr",
        "02 Apr",
        "03 Apr",
        "04 Apr",
        "05 Apr",
        "06 Apr",
        "07 Apr",
      ],
    },
    yAxis: {
      type: "value",
      //   name: "Line",
      axisLabel: {
        formatter: "{value}K",
      },
    },

    series: [
      {
        name: "Line",
        type: "line",
        smooth: true,
        data: [5, 10, 20, 15, 25, 18, 20],
        yAxisIndex: 0,
        itemStyle: {
          color: "#0E9F6E",
        },
      },
    ],
  };
  return (
    <>
      <Header
        style={{
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img src={logo} className="logo" />
          <Input
            placeholder="Search"
            prefix={<SearchOutlined style={{ marginRight: "10px" }} />}
            style={{}}
            className="input"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={notification} className="notification" />
          <img src={avatar} />
        </div>
      </Header>
      <Layout>
        <Sider
          className="sidr"
          style={{ height: "100vh", backgroundColor: "#FFFFFF" }}
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          trigger={<img src={bars} className="bar" />}
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{ paddingLeft: "10px" }}
            items={[{ label: "OverView" }].map((items, ind) => {
              return {
                key: ind + 1,
                label: items.label,
                icon: <PieChartOutlined style={{ color: "green" }} />,
              };
            })}
          />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={itemList.map((items, ind) => {
              return {
                key: ind + 1,
                label: items.label,
                icon: items.icon,
                children: subMenu.map((val, index) => {
                  return { label: val.label };
                }),
              };
            })}
          />
          <Divider />
          <Menu
            style={{ paddingLeft: "10px" }}
            items={[{ label: "Docs" }].map((items, ind) => {
              return {
                key: ind + 1,
                label: items.label,
                icon: <img src={clipboard} />,
              };
            })}
          />
          <Menu
            style={{ paddingLeft: "10px" }}
            items={[{ label: "Componenet" }].map((items, ind) => {
              return {
                key: ind + 1,
                label: items.label,
                icon: <img src={components} />,
              };
            })}
          />
          <Menu
            style={{ paddingLeft: "10px" }}
            items={[{ label: "Help" }].map((items, ind) => {
              return {
                key: ind + 1,
                label: items.label,
                icon: <GlobalOutlined />,
              };
            })}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: "20px 20px",
                minHeight: 360,
                overflow: "hidden",
                background: colorBgContainer,
              }}
            >
              <ReactECharts option={option} style={{ height: "400px" }} />
            </div>
          </Content>
          <Content
            style={{
              margin: "24px 16px 0",
              padding: "24px",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              //   display:"flex",
              //   justifyContent:"space-between",
              //   alignItems:"center"
            }}
          >
            <Row gutter={12}>
              <Col span={7}>
                <Card>
                  <CustomList />
                </Card>
              </Col>
              <Col span={17}>
                <Card>
                  <CustomList />
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default NavBar;
