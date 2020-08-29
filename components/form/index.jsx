import Link from 'next/link';
import styles from './style.module.scss';
import btnStyles from './button.module.scss';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function FormGroup(props) {
    let groupCss = props.noPadding ? styles.formGroup + ' ' + styles.noPadding : styles.formGroup;
    // Maybe add extra class.
    if (props.extraClass) {
        groupCss += ' ' + props.extraClass
    }
    return (
        <div className={groupCss}>
            {props.children}
        </div>
    )
}

FormGroup.propTypes = {
    noPadding: PropTypes.bool,
    extraClass: PropTypes.string
};

function InputText(props) {
    return (
        <FormGroup noPadding={props.noPadding}>
            <label>
                <span>{props.label ?? '\u00A0'}</span>
                <input
                    name={props.name}
                    type={props.type ?? 'text'} defaultValue={props.value}
                    placeholder={props.placeholder ?? props.label}
                    ref={props.handler} disabled={props.isDisabled}/>
                {props.errorsRef[props.name] &&
                <span className={styles.alert}>{props.validationMessage ?? 'Harus diisi.'}</span>}
            </label>
        </FormGroup>
    )
}

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool,
    isDisabled: PropTypes.bool
};

function DropDown(props) {
    const [value, setValue] = useState('');
    let dropDownHtml = [];
    props.values.map((val, index) => {
        dropDownHtml.push(<option key={index}>{val}</option>);
    });

    const onChange = props.onChange ? props.onChange : (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setValue(props.value)
    }, [props])

    return (
        <FormGroup noPadding={props.noPadding}>
            <label><span>{props.label ?? '\u00A0'}</span>
                <select name={props.name} ref={props.handler} disabled={props.isDisabled} value={value}
                        onChange={onChange}>
                    {dropDownHtml}
                </select>
                {props.errorsRef[props.name] &&
                <span className={styles.alert}>{props.validationMessage ?? 'Harus diisi.'}</span>}
            </label>
        </FormGroup>
    )
}

DropDown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    values: PropTypes.array.isRequired,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func
};

function Checkbox(props) {
    return (
        <FormGroup noPadding={props.noPadding} extraClass={styles.cbox}>
            <label className="row-start">
                <input type="checkbox" name={props.name} value={props.value ?? 1} ref={props.handler}
                       onChange={props.onChange}
                       checked={props.isChecked}/> <span className={styles.cb}>{props.label}</span>
            </label>
        </FormGroup>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool,
    onChange: PropTypes.func,
};

function TextArea(props) {
    return (
        <FormGroup noPadding={props.noPadding}>
            <label><span>{props.label ?? '\u00A0'}</span>
                <textarea
                    name={props.name}
                    placeholder={props.placeholder ?? props.label}
                    ref={props.handler} defaultValue={props.value}
                    rows={props.rows ?? 3}/>
                {props.errorsRef[props.name] &&
                <span className={styles.alert}>{props.validationMessage ?? 'Harus diisi.'}</span>}
            </label>
        </FormGroup>
    )
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    errorsRef: PropTypes.object.isRequired,
    validationMessage: PropTypes.string,
    noPadding: PropTypes.bool,
    rows: PropTypes.number
};

function Btn(props) {
    const buttonType = props.isSubmit ? 'submit' : 'button';
    const cssClass = btnStyles.btn + ' ' + props.variant;
    return (
        <button type={buttonType} className={cssClass} disabled={props.disabled} onClick={props.onClick}>
            {props.label ? <span>{props.label}</span> : ''}{props.icon ? <span>{props.icon}</span> : ''}
        </button>
    )
}

Btn.propTypes = {
    isSubmit: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    icon: PropTypes.object,
    onClick: PropTypes.func
};

function LinkBtn(props) {
    const cssClass = btnStyles.btn + ' ' + props.variant;
    return (
        <Link href={props.href} as={props.as}>
            <a
                className={cssClass}>
                {props.label ? <span>{props.label}</span> : ''}{props.icon ? <span>{props.icon}</span> : ''}
            </a>
        </Link>
    )
}

LinkBtn.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    icon: PropTypes.object,
    as: PropTypes.string
};

function FormAction(props) {
    return (
        <div className={btnStyles.action}>
            <Btn isSubmit={true} label={props.label} variant={props.variant ?? 'main'}
                 disabled={props.disabled}/>
            {props.otherLink && (
                <LinkBtn href={props.otherLink} label={props.otherLinkLabel ? props.otherLinkLabel : 'Batal'}
                         variant={'transparent'}/>)}
        </div>
    )
}

FormAction.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    otherLink: PropTypes.string,
    otherLinkLabel: PropTypes.string
};
export {Btn, LinkBtn, InputText, Checkbox, TextArea, DropDown, FormAction}