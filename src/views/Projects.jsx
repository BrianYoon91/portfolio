import { useState } from "react";
import { Carousel, Image, Button } from "antd";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { projectArr } from "./constants";

export const Projects = () => {
	const [isGithubHovered, setIsGithubHovered] = useState(false);
	const [isLiveHovered, setIsLiveHovered] = useState(false);

	return (
		<Carousel arrows infinite={false}>
			{projectArr.map((project) => {
				const { name, description, github, live, image } = project;
				return (
					<>
						<div className="m-5 min-h-72 flex justify-center items-center">
							<div
								className="rounded border-2 border-white p-3 m-3 flex flex-col gap-5
							"
							>
								<Image
									src={image}
									style={{
										width: "100%",
										height: "100%",
									}}
									preview={false}
								/>
								<div>
									<h2 className="text-center text-white text-xl">{name}</h2>
									<p>{description}</p>
									<div className="m-5 grid grid-cols-4 gap-2">
										<a
											className="col-span-2 w-auto"
											href={github}
											target="_blank"
											rel="noreferrer"
										>
											<Button
												style={{
													color: isGithubHovered ? "#eebbc3" : "#fffffe",
													borderColor: isGithubHovered ? "#eebbc3" : "#fffffe",
													backgroundColor: "black",
													width: "100%",
												}}
												icon={<GithubOutlined />}
												onMouseEnter={() => setIsGithubHovered(true)}
												onMouseLeave={() => setIsGithubHovered(false)}
											>
												GitHub
											</Button>
										</a>
										<a
											className="col-span-2 w-auto"
											href={live}
											target="_blank"
											rel="noreferrer"
										>
											<Button
												style={{
													backgroundColor: "black",
													color: isLiveHovered ? "#eebbc3" : "#fffffe",
													borderColor: isLiveHovered ? "#eebbc3" : "#fffffe",
													width: "100%",
												}}
												icon={<GlobalOutlined />}
												onMouseEnter={() => setIsLiveHovered(true)}
												onMouseLeave={() => setIsLiveHovered(false)}
											>
												Live
											</Button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</Carousel>
	);
};

export default Projects;
