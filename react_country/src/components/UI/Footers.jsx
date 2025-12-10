
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="grid grid-three-cols">
            {footerContact.map((curData, index) => {
              const { icon, title, details } = curData;
              return (
                <div className="footer-contact" key={index}>
                  <div className="icon">{footerIcon[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="copyright-area">
          <div className="copyright-wrapper">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved by{" "}
                <a href="https://www.linkedin.com/in/md-rezaul-karim-2423a621a/" target="_blank" rel="noopener noreferrer">
                  Rezaul Karim
                </a>
              </p>
            </div>
            <div className="footer-nav">
              <NavLink to="/" className="btn">Home</NavLink>
              <NavLink to="https://github.com/Hydra1536" className="btn" target="blank">GitHub</NavLink>
              <NavLink to="/source-code" className="btn">Source Code</NavLink>
              <NavLink to="/contact" className="btn">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
