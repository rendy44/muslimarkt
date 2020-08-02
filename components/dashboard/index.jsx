import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styles from './style.module.scss';
import Link from "next/link";
import {IoMdPerson, IoMdSchool, IoMdBriefcase, IoMdSettings, IoMdStar} from 'react-icons/io';
import {AlertView, Layout, Section} from "../global";

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
        let maybeActive = '/dashboard' + link.id === activeLink ? styles.activeLink : '';
        sidebarLinkHtml.push(
            <li key={index}>
                <Link href={'/dashboard' + link.id}>
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

function DashboardLayout(props) {
    return (
        <Layout docTitle={props.title} isHideTitle={true}>
            <Section id={'dashboard'} isFull={true} isLightColor={true} isNoPadding={true}>
                <AlertView variant={'warning'}>
                    <p>Silahkan selesaikan profil Anda sebelum mengirim lamaran.</p>
                </AlertView>
                <DashboardWrapper>
                    <DashboardSidebar/>
                    <DashboardCenter title={props.title}>{props.children}</DashboardCenter>
                </DashboardWrapper>
            </Section>
        </Layout>
    )
}

DashboardLayout.propTypes = {
    title: PropTypes.string.isRequired
};

export {DashboardWrapper, DashboardSidebar, DashboardCenter, DashboardLayout}