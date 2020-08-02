import Link from 'next/link';
import styles from './style.module.scss';
import btnStyles from './button.module.scss';
import PropTypes from 'prop-types';

function FormGroup(props) {
    const groupCss = props.noPadding ? styles.formGroup + ' ' + styles.noPadding : styles.formGroup;
    return (
        <div className={groupCss}>
            {props.children}
        </div>
    )
}

FormGroup.propTypes = {
    noPadding: PropTypes.bool
};

function InputText(props) {
    const inputType = props.type ?? 'text';
    const errMsg = props.validationMessage ? props.validationMessage : props.label + ' harus diisi.';
    return (
        <FormGroup noPadding={props.noPadding}>
            <label>{props.label}
                <input name={props.name} type={inputType} value={props.value} placeholder={props.label}
                       ref={props.handler}/>
                {props.errorsRef[props.name] && <span>{errMsg}</span>}
            </label>
        </FormGroup>
    )
}

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool
};

function DropDown(props) {
    const errMsg = props.validationMessage ? props.validationMessage : props.label + ' harus diisi.';
    return (
        <FormGroup noPadding={props.noPadding}>
            <label>{props.label}
                <select name={props.name} ref={props.handler}>
                    {props.children}
                </select>
                {props.errorsRef[props.name] && <span>{errMsg}</span>}
            </label>
        </FormGroup>
    )
}

DropDown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool
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