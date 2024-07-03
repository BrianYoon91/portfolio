import React, { useState } from "react";
import { Card } from "antd";
import {
  AndroidOutlined,
  FolderOpenOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

import { Bio, Contact } from "./views";

const tabList = [
  {
    key: "bio",
    label: "Bio",
    icon: <AndroidOutlined />,
  },
  {
    key: "projects",
    label: "Projects",
    icon: <FolderOpenOutlined />,
  },
  {
    key: "contact",
    label: "Contact",
    icon: <CoffeeOutlined />,
  },
];

const contents = {
  bio: <Bio />,
  projects: <h1>here are my projects</h1>,
  contact: <Contact />,
};

function App() {
  const [activeTabKey, setActiveTabKey] = useState("bio");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-2">
      <div className="w-full max-w-lg">
        <Card
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#232946",
            borderColor: "#eebbc3",
          }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
        >
          {contents[activeTabKey]}
        </Card>
      </div>
    </div>
  );
}

export default App;
