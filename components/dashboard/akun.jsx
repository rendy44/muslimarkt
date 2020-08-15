import PropTypes from 'prop-types';
import {IoMdCall, IoMdMail, IoMdPin} from 'react-icons/io';
import styles from './akun.module.scss';
import {useContext} from "react";
import UserContext from "../global/userContext";

function AccountHeader(props) {
    const {userAvatarUrl, userDisplayName, userEmail, userPhone, userProvince} = useContext(UserContext);
    return (
        <div className={styles.header}>
            <div className={styles.pic}>
                <img src={userAvatarUrl} alt={'Foto profil'}/>
            </div>
            <div className={styles.info}>
                <h3>{userDisplayName}</h3>
                <p>#SedangMencariPekerjaan</p>
                <ul>
                    {userPhone && (<li>
                        <IoMdCall/><span>{userPhone}</span>
                    </li>)}
                    <li>
                        <IoMdMail/><span>{userEmail}</span>
                    </li>
                    {userProvince && (<li>
                        <IoMdPin/><span>{userProvince}</span>
                    </li>)}
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