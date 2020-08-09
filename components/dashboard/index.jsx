import {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styles from './style.module.scss';
import Link from "next/link";
import {IoMdPerson, IoMdSchool, IoMdBriefcase, IoMdSettings, IoMdStar, IoMdMenu} from 'react-icons/io';
import {AlertView, Layout, Section} from "../global";
import UserContext from "../global/userContext";
import {LinkBtn} from "../form";
import {IoMdAddCircle} from "react-icons/io";
import Hamburger from "../global/hamburger";

function DashboardSidebar(props) {
    const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const currentRoute = Router.route;
        setActiveLink(currentRoute);
    });

    const onOpen = (e) => {
        const newOpenVal = !isOpen;
        setIsOpen(newOpenVal);
    };

    const sidebarLinks = [
        {
            id: '/akun',
            label: 'Akun',
            icon: <IoMdPerson/>
        },
        {
            id: '/pengalaman',
            label: 'Pengalaman',
            icon: <IoMdBriefcase/>
        },
        {
            id: '/pendidikan',
            label: 'Pendidikan',
            icon: <IoMdSchool/>
        },
        {
            id: '/keterampilan',
            label: 'Keterampilan',
            icon: <IoMdStar/>
        },
        {
            id: '/lain',
            label: 'Info Lain',
            icon: <IoMdSettings/>
        }
    ];
    let sidebarLinkHtml = [];
    sidebarLinks.map((link, index) => {
        let linkFix = '/dashboard/pengaturan' + link.id;
        let maybeActive = linkFix === activeLink ? styles.active : '';
        sidebarLinkHtml.push(
            <li key={index}>
                <Link href={linkFix}>
                    <a className={maybeActive}><span>{link.icon}</span><span>{link.label}</span></a>
                </Link>
            </li>
        );
    });

    return (
        <div className={styles.sidebar}>
            <div className={isOpen ? styles.info + ' ' + styles.open : styles.info}>
                <div className={styles.pic}>
                    <img src={'/random.jpg'} alt={'Foto profil'}/>
                </div>
                <div className={styles.name}>
                    <p>Abdullah</p>
                    <Link href={'/profil'}>
                        <a>Lihat profil saya</a>
                    </Link>
                </div>
                <Hamburger isActive={isOpen} handler={onOpen}/>
            </div>
            <ul className={isOpen ? styles.open : ''}>
                {sidebarLinkHtml}
            </ul>
        </div>
    )
}

function DashboardCenter(props) {
    const maybeTitle = !props.isHideTitle ? <h1 className={styles.title}>{props.title}</h1> : '';
    return (
        <div className={styles.content}>
            {maybeTitle}
            {props.children}
        </div>
    )
}

DashboardCenter.propTypes = {
    title: PropTypes.string.isRequired,
    isHideTitle: PropTypes.bool
};

function DashboardWrapper(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

function DashboardNotification() {
    const {isProfileCompleted} = useContext(UserContext);
    let maybeNotification = '';

    if (!isProfileCompleted) {
        maybeNotification = <AlertView variant={'warning'}>
            <p>Silahkan selesaikan profil Anda sebelum mengirim lamaran.</p>
        </AlertView>
    }
    return (
        <>
            <div className={styles.notifications}>
                {maybeNotification}
            </div>
        </>
    )
}

function DashboardGeneralLayout(props) {
    return (
        <Layout docTitle={props.title} isHideTitle={true}>
            {/*<Section id={'notifications'} isNoPadding={true} isFull={true} isLightColor={true}>*/}
            {/*    <DashboardNotification/>*/}
            {/*</Section>*/}
            {props.children}
        </Layout>
    )
}

DashboardGeneralLayout.propTypes = {
    title: PropTypes.string
};

function DashboardSettingLayout(props) {
    return (
        <DashboardPageLayout title={props.title} hideTitle={true}>
            <DashboardWrapper>
                <DashboardSidebar/>
                <DashboardCenter title={props.title} isHideTitle={props.isHideTitle}>{props.children}</DashboardCenter>
            </DashboardWrapper>
        </DashboardPageLayout>
    )
}

DashboardSettingLayout.propTypes = {
    title: PropTypes.string.isRequired,
    isHideTitle: PropTypes.bool
};

function DashboardPageLayout(props) {
    const maybeTitle = !props.hideTitle ? props.title : '';
    return (
        <DashboardGeneralLayout title={props.title}>
            <Section id={'dashboardPage'} isLightColor={true} isFull={true} isNoTopPadding={true} title={maybeTitle}
                     isFirstTitle={true}>
                {props.children}
            </Section>
        </DashboardGeneralLayout>
    )
}

DashboardPageLayout.propTypes = {
    title: PropTypes.string,
    hideTitle: PropTypes.bool
};

function MenuItems(props) {
    return (
        <div className={styles.menuItems}>
            {props.children}
        </div>
    )
}

function MenuItem(props) {
    return (
        <div className={styles.item}>
            <Link href={props.linkTo}>
                <a className={styles.inner}>
                    {props.icon}
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </a>
            </Link>
        </div>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
};

function ListAction(props) {
    const maybeBottomAction = !props.isHideBottom ? <div className={styles.listAction + ' ' + styles.bottom}>
        <LinkBtn
            href={props.href}
            label={props.label ? props.label : 'Tambah baru'}
            icon={props.icon ? props.icon : <IoMdAddCircle/>}
            variant={props.variant ? props.variant : 'success'}/>
    </div> : '';
    return (
        <>
            <div className={styles.listAction}>
                <LinkBtn
                    href={props.href}
                    label={props.label ? props.label : 'Tambah baru'}
                    icon={props.icon ? props.icon : <IoMdAddCircle/>}
                    variant={props.variant ? props.variant : 'success'}/>
            </div>
            {props.children}
            {maybeBottomAction}
        </>
    )
}

ListAction.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
    variant: PropTypes.string,
    icon: PropTypes.object,
    isHideBottom: PropTypes.bool
};

export {
    DashboardWrapper,
    DashboardSidebar,
    DashboardCenter,
    DashboardGeneralLayout,
    DashboardSettingLayout,
    DashboardPageLayout,
    ListAction,
    MenuItems,
    MenuItem
}