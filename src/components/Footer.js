import React from 'react';
function Footer() {
  return (
    <footer className="navbar fixed-bottom">
      {/* insert js statement into jsx code with {}:  copyright 2020* */}
      <a className="text-warning" href="https://webucator.com">
        Copyright &copy; {new Date().getFullYear()} Webucator
    </a>
    </footer>
  )
}

export default Footer;