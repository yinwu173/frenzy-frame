import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div>
                <a
                    href="https://github.com/yinwu173/"
                    target="_blank" 
                    rel="noopener noreferrer"                
                >
                    Github <FaGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/yin-wu-021573178/"
                    target="_blank" 
                    rel="noopener noreferrer"                
                >
                    LinkedIn <FaLinkedin size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;