import css from "./footer.module.css";

export function Footer () {
    return (
        <footer className={css.footer}>
            <p className={css.copyright}>&copy; 2022 <a href="https://github.com/stzabiyaka" target="_blank" className={css.link} rel="noopener noreferrer nofollow">Stanislav Zabiyaka</a></p>
        </footer>
    );
}