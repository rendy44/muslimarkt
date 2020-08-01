import Link from 'next/link';
import btnStyles from './button.module.scss';
import PropTypes from 'prop-types';

function Btn(props) {
    const buttonType = props.isSubmit ? 'submit' : 'button';
    const cssClass = btnStyles.btn + ' ' + props.variant;
    return (
        <button type={buttonType} className={cssClass} disabled={props.disabled}>{props.label}</button>
    )
}

Btn.propTypes = {
    isSubmit: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
};

function LinkBtn(props) {
    const cssClass = btnStyles.btn + ' ' + props.variant;
    return (
        <Link href={props.href}>
            <a className={cssClass}>{props.label}</a>
        </Link>
    )
}

LinkBtn.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
};

export {Btn, LinkBtn}