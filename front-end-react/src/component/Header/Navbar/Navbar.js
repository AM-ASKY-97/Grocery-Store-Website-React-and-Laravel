import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { LinkBank } from './LinkBank';

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink('Home');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = 100; // Update with your desired height

      LinkBank.map((linkBank) => {
        const element = document.getElementById(linkBank.linkName);
        if (element) {
          const elementOffsetTop = element.offsetTop;
          if (scrollPosition >= elementOffsetTop - sectionHeight) {
            setActiveLink(linkBank.linkName);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={props.className}>
      {LinkBank.map((linkBank) => (
        <Link
          key={linkBank.id}
          to={linkBank.linkName}
          smooth={true}
          offset={-70}
          duration={500}
          className={`a ${activeLink === linkBank.linkName ? 'txtactive' : 'notactive'}`}
          onClick={() => handleClick(linkBank.linkName)}
        >
          {linkBank.linkName}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
