import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { techStack } from "./constants";
import { Image } from "antd";
import profilePic from "../assets/profilePic.jpg";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "antd";

export default function Bio() {
	return (
		<>
			<div className="flex flex-col">
				<TypeAnimation
					sequence={["Hello!", 1000, "pineapple pizza lover!", 1000]}
					speed={50}
					style={{
						fontSize: "1.5rem",
						color: "#eebbc3",
					}}
					repeat={Infinity}
				/>
				<div className="flex mt-3 gap-3 items-center shrink-0">
					<Image
						preview={false}
						width={200}
						src={profilePic}
						style={{ borderRadius: "50%" }}
					/>
					<h2 className="text-lg font-medium mt-2">
						Brian Yoon: A passionate developer who is always looking for growth
						and good food.
					</h2>
				</div>
				<div className="flex flex-col mt-4">
					<TechStackMenu techStack={techStack} />
				</div>
			</div>
		</>
	);
}

export const TechStackMenu = ({ techStack }) => {
	const [visible, setVisible] = useState(false);
	const [buttonHovered, setIsButtonHovered] = useState(false);

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			{/* Ant Design Button */}
			<Button
				shape="round"
				size="large"
				onClick={toggleVisibility}
				className="mb-4"
				style={{
					backgroundColor: "#232946",
					color: buttonHovered ? "#eebbc3" : "#fffffe",
					borderColor: buttonHovered ? "#eebbc3" : "#fffffe",
					width: "100%",
				}}
				onMouseEnter={() => setIsButtonHovered(true)}
				onMouseLeave={() => setIsButtonHovered(false)}
			>
				{visible ? "Hide Tech Stack" : "Show Tech Stack"}
			</Button>

			{/* Horizontal Tech Stack Menu */}
			<AnimatePresence>
				{visible && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="grid grid-cols-4 grid-rows-2 gap-4"
					>
						{techStack.map((tech) => (
							<motion.div
								key={tech.id}
								className="flex flex-col gap-1 p-1 items-center text-center"
								whileHover={{ scale: 1.1 }}
							>
								{/* Tech Name */}
								<span className="text-sm font-medium text-[#fffffe]">
									{tech.lang}
								</span>
								{/* Tech Icon with Hover Effects */}
								<div className="text-3xl mt-1 text-[#fffffe] hover:text-[#eebbc3] hover:animate-spin transition-all duration-300">
									{tech.icon}
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
