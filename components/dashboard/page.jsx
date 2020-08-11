import styles from './page.module.scss';
import {Layout, Section} from "../global";
import PropTypes from 'prop-types';
import {IoMdCall, IoMdMail, IoMdPin, IoMdSettings, IoMdStats, IoMdFolderOpen, IoMdSave, IoMdStar} from 'react-icons/io';
import Link from "next/link";

function SidebarHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.pic}>
                <img src={'/random.jpg'} alt={'Foto profil'}/>
            </div>
            <div className={styles.info}>
                <h3>Fulan bin Abdullah</h3>
                <p>#SedangMencariPekerjaan</p>
                <ul className={styles.contact}>
                    <li><IoMdCall/> <span>(+62) 82219185123</span></li>
                    <li><IoMdMail/> <span>contoh@ema.il</span></li>
                    <li><IoMdPin/> <span>Yogyakarta, Indonesia</span></li>
                </ul>
            </div>
        </div>
    )
}

function SidebarBottom() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>
                    <Link href={'/dashboard/pengaturan/akun'}>
                        <a>
                            <span><IoMdSettings/></span>
                            <span>Pengaturan</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/status'}>
                        <a>
                            <span><IoMdStats/></span>
                            <span>Status Lamaran</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/lowongan'}>
                        <a>
                            <span><IoMdFolderOpen/></span>
                            <span>Telusuri Lowongan</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/disimpan'}>
                        <a>
                            <span><IoMdSave/></span>
                            <span>Lowongan Disimpan</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/rekomendasi'}>
                        <a>
                            <span><IoMdStar/></span>
                            <span>Rekomendasi Lowongan</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

function PageWithSidebar(props) {
    return (
        <Layout isHideTitle={true} docTitle={props.title}>
            <Section id={'lowongan'} isLightColor={true} isNoTopPadding={true} isFull={true}>
                <div className={styles.wrapper}>
                    <div className={styles.sidebar}>
                        <SidebarHeader/>
                        {props.sidebar}
                        <SidebarBottom/>
                    </div>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

PageWithSidebar.propTypes = {
    title: PropTypes.string.isRequired,
    sidebar: PropTypes.object.isRequired
}

export {PageWithSidebar}