import React from "react";
import { TypeAnimation } from "react-type-animation";
import { techStack } from "./constants";
import { Image } from "antd";
import profilePic from "../assets/profilePic.jpg";

export default function Bio() {
	return (
		<>
			<div className="flex flex-col">
				<TypeAnimation
					sequence={["Hello!", 1000, "pineapple pizza lover!", 1000]}
					speed={50}
					style={{
						fontSize: "2.5rem",
						color: "#eebbc3",
					}}
					repeat={Infinity}
				/>
				<div className="flex gap-3 items-center shrink-0">
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
					<h2 className="text-lg font-medium">My tech stack: </h2>
					<div className="flex justify-center items-center flex-wrap gap-2 mt-2">
						{techStack.map((tech) => (
							<div
								key={tech.lang}
								className="flex flex-col items-center text-center w-20 "
							>
								<span className="text-sm font-medium text-[#fffffe]">
									{tech.lang}
								</span>
								<div className="text-3xl mt-1 text-[#fffffe] hover:text-[#eebbc3] hover:animate-spin transition-all duration-300 ">
									{tech.icon}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
