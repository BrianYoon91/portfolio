import React, { useState } from "react";
import { contactArr } from "./constants";

const Contact = () => {
	const [hover, setHover] = useState(false);

	return (
		<div className="flex flex-col">
			<h1 className="text-[#eebbc3]">Contact me!</h1>
			<p className="font-semibold mt-2">
				Please reach out with any of the following below!
			</p>
			<div className="mt-6 flex justify-between items-center">
				{contactArr.map((contact) => (
					<a
						className="hover:text-[#eebbc3] transition-colors duration-300"
						href={contact.link}
						target={contact.type !== "email" ? "_blank" : null}
					>
						{contact.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default Contact;
