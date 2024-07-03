import React, {useState} from "react";
import { GithubOutlined, LinkedinOutlined, MailOutlined  } from "@ant-design/icons";


const Contact = () => {
  const [hover, setHover] = useState(false)


    return ( 
    <div className="flex flex-col">
        <h1 className="text-[#eebbc3]">Contact me!</h1>
        <p className="font-semibold mt-2">Please reach out with any of the following below!</p>
        <div className="mt-6 flex justify-between items-center">
            <a className="hover:text-[#eebbc3] transition-colors duration-300" href="https://github.com/BrianYoon91" target="_blank" rel="noopener noreferrer">
            <GithubOutlined
              style={{
                fontSize: "3rem",
                cursor: "pointer",
              }}
            />
          </a>
          <a className="hover:text-[#eebbc3] transition-colors duration-300"  href="https://www.linkedin.com/in/brian-yoon-7ba86b214/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined
              style={{
                fontSize: "3rem",
                cursor: "pointer",
              }}
            />
          </a>
          <a className="hover:text-[#eebbc3] transition-colors duration-300"  href="mailto:yoon.brian91@gmail.com">
            <MailOutlined
              style={{
                fontSize: "3rem",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
    </div>
   );
}
 
export default Contact;