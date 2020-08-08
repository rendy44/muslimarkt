import PropTypes from 'prop-types';

export default function Hamburger(props) {
    let btnClass = 'hamburger hamburger--spin';
    // Maybe active.
    if (props.isActive) {
        btnClass += ' is-active';
    }
    return (
        <button className={btnClass} type="button" onClick={props.handler}>
            <span className="hamburger-box">
                <span className="hamburger-inner"/>
            </span>
        </button>
    )
}

Hamburger.propTypes = {
    handler: PropTypes.func.isRequired,
    isActive: PropTypes.bool
};