import PropTypes from "prop-types";

export default function Statistics ({ stats }) {
    
        
            

    return (
            <ul class="stat-list">
                {stats.map( element => {
                    return (
                        <li key={element.id} class="item">
                            <span class="label">{element.label}</span>
                            <span class="percentage">{element.percentage}</span>
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

