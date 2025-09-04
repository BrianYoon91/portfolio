import React from "react";
import { contactArr } from "./constants";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-white">Contact me!</h1>
			<p className="font-semibold mt-2">
				Please reach out with any of the following below!
			</p>
			<div className="mt-6 flex justify-between items-center">
				{contactArr.map((contact) => (
					<a
						className="hover:text-[#eebbc3] hover:animate-spin transition-all duration-300"
						href={contact.link}
						target={contact.type !== "email" ? "_blank" : undefined}
						rel={contact.type !== "email" ? "noreferrer" : undefined}
					>
						{contact.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default Contact;
