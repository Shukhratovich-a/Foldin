import './Socials.scss'

import Facebook from "../../Assets/Images/Facebook.svg";
import Vk from "../../Assets/Images/Vk.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import YouTube from "../../Assets/Images/YouTube.svg";

function Socials() {
  return (
    <ul className="socials">
      <li className="social">
        <a className="social__link" href="#link" target="_blank">
          <img
            className="social__image"
            src={Facebook}
            alt="Facebook icon"
            width={40}
            height={40}
          />
        </a>
      </li>

      <li className="social">
        <a className="social__link" href="#link" target="_blank">
          <img
            className="social__image"
            src={Vk}
            alt="Facebook icon"
            width={40}
            height={40}
          />
        </a>
      </li>

      <li className="social">
        <a className="social__link" href="#link" target="_blank">
          <img
            className="social__image"
            src={Instagram}
            alt="Facebook icon"
            width={40}
            height={40}
          />
        </a>
      </li>

      <li className="social">
        <a className="social__link" href="#link" target="_blank">
          <img
            className="social__image"
            src={YouTube}
            alt="Facebook icon"
            width={40}
            height={40}
          />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
