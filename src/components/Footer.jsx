import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer py-3 mt-auto fixed-bottom">
      <center>
        <section className="container">
          <p>Copyright ⓒ {year}</p>
        </section>
      </center>
    </footer>
  );
}

export default Footer;
