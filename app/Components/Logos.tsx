import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Logos() {
  return (
    <div className="flex">
      <div className="logos w-6">
        <a
          href="https://github.com/rohithguj"
          target="_blank"
          className="flex items-center transition opacity-50 hover:opacity-25 duration-300 backdrop-blur-sm"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
      </div>
      <div className="logos w-6 ml-2">
        <a
          href="www.linkedin.com/in/rohith-gurijala"
          target="_blank"
          className="flex items-center transition opacity-50 hover:opacity-25 duration-300 backdrop-blur-sm"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      
      <div className="logos w-6 ml-2">
        <a
          href="https://drive.google.com/file/d/1GlPhA4rMoOOiKiidHyvHp36Tq-i_VZ6t/view"
          target="_blank"
          className="flex items-center transition opacity-50 hover:opacity-25 duration-300 backdrop-blur-sm"
        >
          <FontAwesomeIcon icon={faDownload} bounce />
        </a>
      </div>
    </div>
  );
}

export default Logos;
