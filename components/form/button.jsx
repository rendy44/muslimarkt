import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttonType = this.props.isSubmit ? 'submit' : 'button';
        const cssClass = styles.btn + ' ' + this.props.variant;
        return (
            <button
                type={buttonType}
                className={cssClass}
            >{this.props.label}</button>
        )
    }
}

Button.propTypes = {
    isSubmit: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
}
export { Button }