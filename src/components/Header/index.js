import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
      
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
   <main>
       <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
         Palak Devgan
        </a>
      </h2>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </header>
        </main>
  );
}

export default Header;