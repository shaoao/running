import { Link } from 'react-router-dom';
import React from 'react';
import useSiteMetadata from '@/hooks/useSiteMetadata';

const Header = () => {
  const { logo, siteUrl, navLinks } = useSiteMetadata();

  return (
    <>
      <nav
        className="db flex justify-between w-100 ph5-l"
        style={{ marginTop: '3rem' }}
      >
        <div className="dib w-50 v-mid">
          <Link to={siteUrl} className="link dim">
            <picture>
              <img className="dib w3 h3 br-100" alt="logo" src={logo} />
            </picture>
          </Link>
          {/* <span className="f1 fw2 i">
            ShaoAo Daily Running
          </span> */}
        </div>
        <div className="dib w-75 v-mid tr">
          {navLinks.map((n, i) => (
            <a
              key={i}
              href={n.url}
              className="light-gray link dim f6 f5-l mr3 mr4-l"
            >
              {n.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
