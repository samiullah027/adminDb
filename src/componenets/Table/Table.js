import React from "react";
import { Pagination, Space, Table, Badge, Card, Row, Col } from "antd";

import "./style.scss";
const columns = [
  {
    title: "Transaction",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <p>
        {text.payfor}{" "}
        <span style={{ fontSize: "14px", fontWeight: "600" }}>{text.name}</span>
      </p>
    ),
  },
  {
    title: "Date & Time",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => (
      <p style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>
        {text}
      </p>
    ),
  },
  {
    title: "status",
    key: "tags",
    dataIndex: "tags",
    render: (item, index) => {
      if (index.key == "3") {
        return (
          <>
            <Badge
              count="Cancelled"
              style={{
                backgroundColor: "#FBD5D5",
                color: "#9B1C1C",
              }}
            />
          </>
        );
      } else if (index.key == "4" || index.key == "5") {
        return (
          <>
            <Badge
              count="In progress"
              style={{
                backgroundColor: "#E1EFFE",
                color: "#1E429F",
              }}
            />
          </>
        );
      } else {
        return (
          <Badge
            count="Completed"
            style={{
              backgroundColor: "#DEF7EC",
              color: "#03543F",
            }}
          />
        );
      }
    },
  },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];
const data = [
  {
    key: "1",
    name: { payfor: "Payment from", name: "Bonnie Green" },
    date: "Apr 23 ,2021",
    amount: "$2300",
    tags: ["Completed"],
  },
  {
    name: { payfor: "Payment refund to", name: "#00910" },
    date: "Apr 23 ,2021",
    amount: "-$670",
    tags: ["cancelled"],
  },
  {
    key: "3",
    name: { payfor: "Payment failed from", name: "#087651" },
    date: "Apr 18 ,2021",
    amount: "$234",
    tags: ["Completed"],
  },
  {
    key: "4",
    name: { payfor: "Payment from", name: "Bonnie Green" },
    date: "Apr 15 ,2021",
    amount: "$5000",
    tags: ["Completed"],
  },
  {
    key: "5",
    name: { payfor: "Payment from", name: "Jese Leos" },
    date: "Apr 15 ,2021",
    amount: "$2300",
    tags: ["Completed"],
  },
  {
    key: "6",
    name: { payfor: "Payment from", name: "THEMSBERG LLC" },
    date: "Apr 11 ,2021",
    amount: "$280",
    tags: ["Completed"],
  },
];
console.log("data", data);
const TableData = () => (
  <Card>
    <Row>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ Width: "100%", overflow: "auto" }}
        />
      </Col>
    </Row>
  </Card>
);
export default TableData;
