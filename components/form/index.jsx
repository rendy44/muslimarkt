import Link from 'next/link';
import btnStyles from './button.module.scss';
import PropTypes from 'prop-types';

function InputText(props) {
    const inputType = props.type ?? 'text';
    return (
        <>
            <label>{props.label}
                <input name={props.name} type={inputType} value={props.value} placeholder={props.label}
                       required={props.isRequired}/>
            </label>
        </>
    )
}

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    value: PropTypes.string
};

function DropDown(props) {
    return (
        <>
            <label>{props.label}
                <select name={props.name} required={props.isRequired}>
                    {props.children}
                </select>
            </label>
        </>
    )
}

DropDown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
};

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

function FormAction(props) {
    const maybeNextLink = props.otherLink ?
        <LinkBtn href={props.otherLink} label={'Batal'} variant={'transparent'}/> : '';
    return (
        <div className={btnStyles.action}>
            <Btn isSubmit={true} label={props.label} variant={props.variant ? props.variant : 'main'}
                 disabled={props.disabled}/>
            {maybeNextLink}
        </div>
    )
}

FormAction.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    otherLink: PropTypes.string
};
export {Btn, LinkBtn, InputText, DropDown, FormAction}