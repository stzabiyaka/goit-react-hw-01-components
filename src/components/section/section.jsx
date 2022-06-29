import PropTypes from "prop-types";
import css from "./section.module.css";

export function Section ({ children, sectionClass, title }) {
    return (
        <section className={sectionClass ? css.section + ' ' + css[sectionClass] : css.section}>
            {title && <h2 className={css.title}>{title}</h2>}
                {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    sectionClass: PropTypes.string,
    children: PropTypes.node
}