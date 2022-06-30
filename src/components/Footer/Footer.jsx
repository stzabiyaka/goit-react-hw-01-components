import PropTypes from 'prop-types';
import css from './Footer.module.css';

export function Footer({ name, href = '#' }) {
  return (
    <footer className={css.footer}>
      <p className={css.copyright}>
        &copy; 2022&nbsp;
        {name && (
          <a
            href={href}
            target="_blank"
            className={css.link}
            rel="noopener noreferrer nofollow"
            title={name + '`s github'}
          >
            {name}
          </a>
        )}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};
