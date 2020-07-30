import btnStyles from './button.module.scss';
import PropTypes from 'prop-types';

function Btn(props) {
    const buttonType = props.isSubmit ? 'submit' : 'button';
    const cssClass = btnStyles.btn + ' ' + props.variant;
    return (
        <button type={buttonType} className={cssClass}>{props.label}</button>
    )
}

Btn.propTypes = {
    isSubmit: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
}

export { Btn }