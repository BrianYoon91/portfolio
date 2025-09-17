import {
	GithubOutlined,
	LinkedinOutlined,
	MailOutlined,
	AndroidOutlined,
	FolderOpenOutlined,
	CoffeeOutlined,
} from "@ant-design/icons";

import {
	excuseMe,
	spillTheBeans,
	hotArtist,
	todoList,
	hangman,
	noteTaker,
	potatoTime,
} from "../assets";

import {
	FaCss3Alt,
	FaReact,
	FaHtml5,
	FaGithub,
	FaNodeJs,
} from "react-icons/fa";
import {
	SiSass,
	SiRedux,
	SiNestjs,
	SiAdonisjs,
	SiTypescript,
	SiNextdotjs,
} from "react-icons/si";
import {
	RiTailwindCssFill,
	RiJavascriptFill,
	RiFirebaseFill,
} from "react-icons/ri";

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
	{ lang: "HTML5", icon: <FaHtml5 /> },
	{ lang: "CSS", icon: <FaCss3Alt /> },
	{ lang: "SASS", icon: <SiSass /> },
	{ lang: "Tailwind", icon: <RiTailwindCssFill /> },
	{ lang: "Javascript", icon: <RiJavascriptFill /> },
	{ lang: "Typescript", icon: <SiTypescript /> },
	{ lang: "React", icon: <FaReact /> },
	{ lang: "Redux", icon: <SiRedux /> },
	{ lang: "Firebase", icon: <RiFirebaseFill /> },
	{ lang: "Nest Js", icon: <SiNestjs /> },
	{ lang: "Adonis Js", icon: <SiAdonisjs /> },
	{ lang: "Github", icon: <FaGithub /> },
	{ lang: "Next Js", icon: <SiNextdotjs /> },
	{ lang: "Node Js", icon: <FaNodeJs /> },
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
		name: "Potato Time",
		description:
			"Using Next.Js, Typescript, Headless UI, and Tailwind CSS to recommend you a random movie or a show. Perfect for indecisive people like me and you : )",
		github: "https://github.com/BrianYoon91/itspotatotime",
		live: "https://potatotime.netlify.app/",
		image: potatoTime,
	},
	{
		name: "Journal & Note Taker",
		description:
			"Using Typescript, React, Boostrap, and Vite to make a note taking app with local storage and searchable tag function",
		github: "https://github.com/BrianYoon91/note-taker",
		live: "https://notetaker9000.netlify.app/",
		image: noteTaker,
	},
	{
		name: "Hangman",
		description: "Using Typescript, React, and Vite to make a classic game",
		github: "https://github.com/BrianYoon91/hangmanisback",
		live: "https://hangmanisback.netlify.app/",
		image: hangman,
	},
	{
		name: "Todo List",
		description:
			"Using Typescript, React, Vite, Tailwind CSS to make a to do list with local storage function. Every dev has to make one of these right?",
		github: "https://github.com/BrianYoon91/todo-typescript-practice",
		live: "https://dulcet-shortbread-1ebbab.netlify.app/",
		image: todoList,
	},
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
		name: "Hot Artists",
		description:
			"Using the Lastfm API, the app features hottest artists' name, playcount, and link to their individual profiles. Also it has a recommendation button where it recommends you an artist from the list. Made with wonderful Nick Ntoukas",
		github: "https://github.com/Brian-and-Nick/hotArtistApp",
		live: "https://hotartistapp.netlify.app/",
		image: hotArtist,
	},
];
