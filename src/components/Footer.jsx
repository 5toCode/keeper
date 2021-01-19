import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {year} 5toCode, LLC</p>
    </footer>
  );
}

export default Footer;
