import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="buttonHolder">
        <a href="https://github.com/palakdevgan" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" style={{ fontSize: "1.5rem", padding: "10px" }}></i></a>
        <a href="https://www.linkedin.com/in/palakdevgan" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" style={{ fontSize: "1.5rem", padding: "10px" }}></i></a>
        <a href="https://stackoverflow.com/users/17966044/palak-devgan" target="_blank" rel="noopener noreferrer"><i className="bi bi-stack-overflow" style={{ fontSize: "1.5rem", padding: "10px" }}></i></a>
      </div>
    </footer>
  );
}

export default Footer;