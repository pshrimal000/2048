import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <p className="footer__how-to-play">
        <span className="footer__emphasized-text">HOW TO PLAY:</span>
        Use your
        <span className="footer__emphasized-text">arrow keys</span>
        to move the tiles. When two tiles with the same number touch, they
        <span className="footer__emphasized-text">merge into one!</span>
      </p>
      <p className="footer__attribution">
          Made with &#9829; by 
          <a className="footer__link" href="#">Ashutosh Shrimal</a>        
      </p>
    </div>
  );
}

export default Footer;
