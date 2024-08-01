import React, { useState } from "react";
import { Card } from "antd";
import { Bio, Contact, Projects } from "./views";
import { tabList } from "./views/constants";

const contents = {
	bio: <Bio />,
	projects: <Projects />,
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
						minHeight: "300px",
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
