import PropTypes from "prop-types";

export default function Section ({ children, sectionClass = 'section', title }) {
    return (
        <section class={sectionClass}>
            {title && <h2 class="title">{title}</h2>}
                {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    sectionClass: PropTypes.string,
    children: PropTypes.node
}