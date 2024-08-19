import "./Footer.css";
const Footer = () => {
  return (
    <div className="dis-flex">
      <ul>
        <li className="header">Abstract</li>
        <li>Branches</li>
      </ul>

      <ul>
        <li className="header">Resources</li>
        <li>Blog</li>
        <li>Help Center</li>
        <li>Release Notes</li>
        <li>Status</li>
      </ul>

      <ul>
        <li className="header">Community</li>
        <li>Twitter</li>
        <li>Linked In</li>
        <li>Facebook</li>
        <li>Dribble</li>
        <li>Podcast</li>
      </ul>

      <ul>
        <li className="header">Company</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Legal</li>
      </ul>

      <ul>
        <li className="header">Contact Us</li>
        <li>info@abstract.com</li>
      </ul>

      <ul className="m-bottom">
        <li>@Copyright 2022</li>
        <li>Abstract Studio Design, Inc.</li>
        <li>All Rghts Reserved</li>
      </ul>
    </div>
  );
};

export default Footer;
