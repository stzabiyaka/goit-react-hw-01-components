import PropTypes from "prop-types";
import css from "./statistics.module.css";

export function Statistics ({ stats }) {
    
        
            

    return (
            <ul className={css.statList}>
                {stats.map( ({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    );
                    })
                }
            </ul>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }).isRequired).isRequired
}

