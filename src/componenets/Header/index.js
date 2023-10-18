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
import facebook from "../../assests/images/facebook-f.svg";
import twitter from "../../assests/images/twitter.svg";
import dribble from "../../assests/images/dribbble.svg";
import github from "../../assests/images/github.svg";
import setting from "../../assests/images/cog.svg";
import adjust from "../../assests/images/adjust.svg";
import globe from "../../assests/images/globe.svg";
import components from "../../assests/images/componenets.svg";
import clipboard from "../../assests/images/clipboard-list.svg";
import ReactECharts from "echarts-for-react";
import "./style.scss";
import CustomList from "../Listing/List";
import TableData from "../Table/Table";
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
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
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
          style={{
            // height: "90vh",
            // overflow: "auto",
            backgroundColor: "#FFFFFF",
          }}
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
          <div
            style={{
              minHeight: "calc(100vh - 128px)",
              maxHeight: "calc(100vh - 128px)",
              overflow: "auto",
            }}
          >
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
          </div>
          <div className="vector">
            <img src={adjust}></img>
            <img src={globe}></img>
            <img src={setting}></img>
          </div>
        </Sider>
        <Layout>
          <Content
          // style={{
          //   margin: "24px 16px 0",
          // }}
          >
            <div
              style={{
                padding: "20px 20px",
                minHeight: 360,
                overflow: "hidden",
                background: "#F3F4F6",
              }}
            >
              <Card style={{ marginBottom: "1rem" }}>
                <Row>
                  <Col span={24}>
                    <ReactECharts option={option} />
                  </Col>
                </Row>
              </Card>
              <Row gutter={12} style={{ marginBottom: "1rem" }}>
                <Col span={24} md={12} lg={12} xl={7}>
                  <Card>
                    <h1 className="heading">Latest Customers</h1>
                    <CustomList />
                  </Card>
                </Col>
                <Col span={24} md={12} lg={12} xl={17}>
                  <Card>
                    <h1 className="heading">Top Products</h1>
                    <CustomList />
                  </Card>
                </Col>
              </Row>
              <TableData />
              <Card className="footer">
                <Footer
                  style={{
                    textAlign: "left",
                  }}
                >
                  <div className="icon">
                    <div>Ant Design ©2023 Created by Ant UED</div>
                    <div className="svg">
                      <img src={facebook}></img>
                      <img src={dribble}></img>
                      <img src={github}></img>
                      <img src={twitter}></img>
                    </div>
                  </div>
                </Footer>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default NavBar;
