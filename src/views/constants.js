import {
	GithubOutlined,
	LinkedinOutlined,
	MailOutlined,
	AndroidOutlined,
	FolderOpenOutlined,
	CoffeeOutlined,
} from "@ant-design/icons";

import { excuseMe, spillTheBeans, hotArtist, thankful } from "../assets";

export const tabList = [
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

export const techStack = [
	"HTML5",
	"CSS",
	"SASS",
	"Tailwind",
	"Javascript",
	"React",
	"Redux",
	"Firebase",
	"Nest JS",
	"Adonis JS",
];

export const contactArr = [
	{
		type: "github",
		link: "https://github.com/BrianYoon91",
		icon: (
			<GithubOutlined
				style={{
					fontSize: "3rem",
					cursor: "pointer",
				}}
			/>
		),
	},
	{
		type: "linkedin",
		link: "https://www.linkedin.com/in/brian-yoon-7ba86b214/",
		icon: (
			<LinkedinOutlined
				style={{
					fontSize: "3rem",
					cursor: "pointer",
				}}
			/>
		),
	},
	{
		type: "email",
		link: "mailto:yoon.brian91@gmail.com",
		icon: (
			<MailOutlined
				style={{
					fontSize: "3rem",
					cursor: "pointer",
				}}
			/>
		),
	},
];

export const projectArr = [
	{
		name: "Spill The Beans",
		description:
			"An application that summarizes any movie plot with only GIFs. It has the capability to generate a different GIF, and save or delete GIFs that you like. Built using HTML, CSS, React, Firebase, and integrated with two API's. Made with good friends",
		github: "https://github.com/spill-the-beans/spill-the-beans",
		live: "https://spillbeantest.netlify.app/",
		image: spillTheBeans,
	},
	{
		name: "Excuse Me",
		description:
			"For anyone who has trouble lying about not wanting to go small social events because they just want to stay home and watch some shows with their cats while eating some chips.",
		github:
			"https://github.com/BrianYoon91/brian-yoon-projectThree/tree/production",
		live: "https://excuse-me.netlify.app/",
		image: excuseMe,
	},
	{
		name: "Thankful Mindful Grateful",
		description:
			"What we have around us is as important as what is to come. So once in a while write what you are thankful for and recite them to open up to newer and better things.",
		github: "https://github.com/BrianYoon91/thankful-journal",
		live: "https://thankful-mindful-grateful.netlify.app/",
		image: thankful,
	},
	{
		name: "Hot Artists",
		description:
			"Using the Lastfm API, the app features hottest artists' name, playcount, and link to their individual profiles. Also it has a recommendation button where it recommends you an artist from the list. Made with wonderful Nick Ntoukas",
		github: "https://github.com/Brian-and-Nick/hotArtistApp",
		live: "https://hotartistapp.netlify.app/",
		image: hotArtist,
	},
];
