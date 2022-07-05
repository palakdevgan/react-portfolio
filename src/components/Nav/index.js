import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    <nav>
      <ul className="flex-row">
        <li >
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={`mx-2 ${currentPage === 'About' && 'navActive'}`}
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={`mx-2 ${currentPage === 'Portfolio' && 'navActive'}`}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={`mx-2 ${currentPage === 'Contact' && 'navActive'}`}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={`mx-2 ${currentPage === 'Resume' && 'navActive'}`}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;