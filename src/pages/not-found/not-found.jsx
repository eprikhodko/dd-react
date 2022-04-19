import React from 'react';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <section className="not-found">
          <h2 className="not-found__heading">404</h2>
          <p className="not-found__text">Страница не существует</p>
          <Link to="/" className="not-found__link">
            Вернуться на главную
          </Link>
        </section>
      </section>
    </>
  );
};

export default NotFound;
