import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="landing-footer">
      <div className="social-links">
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}