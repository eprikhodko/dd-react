import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const Header = () => {
  const { pathname } = useLocation();

  const extractRootPageName = (route) => route.substring(1).split('/')[0];
  const extractRootPathName = (path) => path.substring(1).split('/')[0];

  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link
            to="/"
            className={`main__header-lnk ${pathname === '/' && 'lnk-active'} ${
              extractRootPathName(pathname) ===
                extractRootPageName(AppRoute.EVENT) && 'lnk-active'
            }`}
          >
            События
          </Link>
          <Link
            to={AppRoute.ARCHIVE}
            className={`main__header-lnk ${
              pathname.substring(1) === extractRootPageName(AppRoute.ARCHIVE) &&
              'lnk-active'
            } ${
              extractRootPathName(pathname) ===
                extractRootPageName(AppRoute.ARCHIVE) && 'lnk-active'
            }`}
          >
            Архив
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Header;
