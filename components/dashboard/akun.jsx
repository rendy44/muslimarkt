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

export {AccountHeader}