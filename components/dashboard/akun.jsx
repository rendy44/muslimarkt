import PropTypes from 'prop-types';
import {IoMdCall, IoMdMail, IoMdPin} from 'react-icons/io';
import styles from './akun.module.scss';

function AccountHeader(props) {
    return (
        <div className={styles.header}>
            <div className={styles.pic}>
                <img src={'/random.jpg'} alt={'Foto profil'}/>
            </div>
            <div className={styles.info}>
                <h3>Fulan bin Abdullah</h3>
                <p>#SedangMencariPekerjaan</p>
                <ul>
                    <li>
                        <IoMdCall/><span>(+62) 0812312313</span>
                    </li>
                    <li>
                        <IoMdMail/><span>user@ema.il</span>
                    </li>
                    <li>
                        <IoMdPin/><span>Yogyakarta, Indonesia</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function AccountItems(props) {
    return (
        <div className={styles.items}>
            {props.children}
        </div>
    )
}

function AccountItem(props) {
    return (
        <div className={styles.item}>
            <label>{props.label}</label>
            <span>{props.isHtml ? <div dangerouslySetInnerHTML={{__html: props.value}}/> : props.value}</span>
        </div>
    )
}

AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    isHtml: PropTypes.bool
};

export {AccountHeader, AccountItems, AccountItem}