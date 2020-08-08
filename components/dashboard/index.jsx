import {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styles from './style.module.scss';
import Link from "next/link";
import {IoMdPerson, IoMdSchool, IoMdBriefcase, IoMdSettings, IoMdStar} from 'react-icons/io';
import {AlertView, Layout, Section} from "../global";
import UserContext from "../global/userContext";

function DashboardSidebar(props) {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const currentRoute = Router.route;
        setActiveLink(currentRoute);
    });

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
        let maybeActive = linkFix === activeLink ? styles.activeLink : '';
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
            <ul>
                {sidebarLinkHtml}
            </ul>
        </div>
    )
}

function DashboardCenter(props) {
    return (
        <div className={styles.content}>
            <h1 className={styles.contentTitle}>{props.title}</h1>
            {props.children}
        </div>
    )
}

DashboardCenter.propTypes = {
    title: PropTypes.string.isRequired
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
                <DashboardCenter title={props.title}>{props.children}</DashboardCenter>
            </DashboardWrapper>
        </DashboardPageLayout>
    )
}

DashboardSettingLayout.propTypes = {
    title: PropTypes.string.isRequired
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
        <div className={styles.menuItem}>
            <Link href={props.linkTo}>
                <a className={styles.menuItemInner}>
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

export {
    DashboardWrapper,
    DashboardSidebar,
    DashboardCenter,
    DashboardGeneralLayout,
    DashboardSettingLayout,
    DashboardPageLayout,
    MenuItems,
    MenuItem
}