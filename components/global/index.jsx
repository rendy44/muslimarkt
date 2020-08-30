import React, {useState, useEffect, useContext} from 'react';
import headerStyles from './header.module.scss';
import sectionStyles from './section.module.scss';
import heroStyles from './hero.module.scss';
import footerStyles from './footer.module.scss';
import alertStyles from './alert.module.scss';
import {IoMdLogIn, IoMdPersonAdd, IoMdPerson, IoMdSettings, IoMdLogOut} from 'react-icons/io';
import Link from 'next/link';
import Router from "next/router";
import Head from 'next/head';
import PropTypes from 'prop-types';
import UserContext from "./userContext";
import ReactLoading from 'react-loading';

const detailName = {
    "siteName": "Muslimarkt",
    "siteDesc": "Portal Lowongan Pekerjaan Kaum Muslimin",
}

function FullLoading() {
    return (
        <div className={headerStyles.screenLoading}>
            <ReactLoading type={'cylon'} color={'#368887'} width={100} height={80}/>
        </div>
    )
}

function TopHeader() {
    return (
        <div className={headerStyles.top}>
            <div className='frow-container'>
                <div className={headerStyles.inner}>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <a>Beranda</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/lowongan'}>
                                <a>Lowongan</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Header() {
    const [isUseTopHeader, setIsUseTopHeader] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {userKey} = useContext(UserContext);

    useEffect(() => {
        if (userKey) {
            setIsLoggedIn(true);
        }

        // We'll use top header in all pages except homepage.
        if ('/' === Router.route) {
            setIsUseTopHeader(false);
        }
    });

    const menuLinks = isLoggedIn ? [
        <li key={'liProfile'}>
            <Link href={'/profil'}>
                <a><IoMdPerson/><span>Profil</span></a>
            </Link>
        </li>,
        <li key={'liSetting'}>
            <Link href={'/dashboard/pengaturan/akun'}>
                <a><IoMdSettings/><span>Pengaturan</span></a>
            </Link>
        </li>,
        <li key={'liLogout'}>
            <Link href={'/keluar'}>
                <a><IoMdLogOut/><span>Keluar</span></a>
            </Link>
        </li>
    ] : [
        <li key='liMasuk'>
            <Link href={'/masuk'}>
                <a><IoMdLogIn/><span>Masuk</span></a>
            </Link>
        </li>,
        <li key='liDaftar'>
            <Link href={'/daftar'}>
                <a><IoMdPersonAdd/><span>Daftar</span></a>
            </Link>
        </li>,
        <li className={headerStyles.employee} key='liEmployer'>
            <Link href={'/cari-kandidat'}>
                <a><span>Cari Kandidat</span></a>
            </Link>
        </li>
    ];

    return (
        <>
            {isUseTopHeader && (<TopHeader/>)}
            <header className={headerStyles.header}>
                <div className='frow-container'>
                    <div className={headerStyles.inner}>
                        <div className={headerStyles.brand}>
                            <LogoLink/>
                        </div>
                        <div className={headerStyles.nav}>
                            <ul>
                                {menuLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

function LogoLink() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {userKey} = useContext(UserContext);
    useEffect(() => {
        if (userKey) {
            setIsLoggedIn(true);
        }
    });

    const routeTo = isLoggedIn ? '/dashboard' : '/';
    return (
        <Link href={routeTo}>
            <a className={headerStyles.brandLink}>Muslim<span>arkt</span></a>
        </Link>
    )
}

function PageTitle(props) {
    return (
        <Section id='pageHero' extraClass={heroStyles.hero}>
            <h1>{props.title}</h1>
        </Section>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

function Footer() {
    const linksLeft = [
        {
            id: '/tentang',
            label: 'Tentang Muslimarkt'
        },
        {
            id: '/kebijakan',
            label: 'Kebijakan Layanan'
        },
        {
            id: '/bantuan',
            label: 'Pusat Bantuan'
        },
        {
            id: '/kontak',
            label: 'Hubungi Kami'
        },
        {
            id: '/karir',
            label: 'Karir'
        }
    ];
    let linksLeftHtml = [];
    // Loop links.
    linksLeft.map((link, index) => {
        return (
            linksLeftHtml.push(
                <li key={index}>
                    <Link href={link.id}>
                        <a>{link.label}</a>
                    </Link>
                </li>
            )
        )
    });

    const linksCenter = [
        {
            id: '/daftar',
            label: 'Buat Akun'
        },
        {
            id: '/masuk',
            label: 'Masuk'
        },
        {
            id: '/cari-talenta',
            label: 'Cari Talenta'
        },
        {
            id: '/telusuri-lowongan',
            label: 'Telusuri Lowongan',
        },
        {
            id: '/menjadi-sponsor',
            label: 'Menjadi Sponsor',
        }
    ];
    let linksCenterHtml = [];
    // Loop links.
    linksCenter.map((link, index) => {
        return (
            linksCenterHtml.push(
                <li key={index}>
                    <Link href={link.id}>
                        <a>{link.label}</a>
                    </Link>
                </li>
            )
        )
    });

    const linksRight = [
        {
            id: '/web-developer',
            label: 'Web Developer'
        },
        {
            id: '/marketing',
            label: 'Marketing'
        },
        {
            id: '/designer',
            label: 'Designer'
        },
        {
            id: '/finance',
            label: 'Finance'
        },
        {
            id: '/data-science',
            label: 'Data Science'
        }
    ];
    let linksRightHtml = [];
    // Loop links.
    linksRight.map((link, index) => {
        return (
            linksRightHtml.push(
                <li key={index}>
                    <Link href={link.id}>
                        <a>{link.label}</a>
                    </Link>
                </li>
            )
        )
    });

    return (
        <footer className={footerStyles.footer}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className='col-sm-1-1 col-md-4-10'>
                        <div className={footerStyles.brand}>
                            <h3>{detailName.siteName}</h3>
                            <p className={footerStyles.desc}>Muslimarkt adalah portal lowongan pekerjaan kaum muslimin
                                di Indonesia untuk membantu pengusaha muslim dan talenta muslim terhubung dalam ikatan
                                profesionalisme.</p>
                        </div>
                    </div>
                    <div className='col-sm-1-3 col-md-2-10'>
                        <div className={footerStyles.nav}>
                            <h3>Perusahaan</h3>
                            <ul>{linksLeftHtml}</ul>
                        </div>
                    </div>
                    <div className='col-sm-1-3 col-md-2-10'>
                        <div className={footerStyles.nav}>
                            <h3>Link Pintas</h3>
                            <ul>{linksCenterHtml}</ul>
                        </div>
                    </div>
                    <div className='col-sm-1-3 col-md-2-10'>
                        <div className={footerStyles.nav}>
                            <h3>Pekerjaan Favorit</h3>
                            <ul>{linksRightHtml}</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerStyles.bottom}>
                <div className='frow-container'>
                    <p>&copy; 2020 {detailName.siteName} - {detailName.siteDesc}</p>
                </div>
            </div>
        </footer>
    )
}

function Layout(props) {
    const {docTitle, isHideTitle, isHideHeader, isHideFooter} = props;
    const usedTitle = docTitle ? docTitle + ' | ' + detailName.siteName : detailName.siteName + ' | ' + detailName.siteDesc;
    return (
        <>
            <Head>
                <title>{usedTitle}</title>
            </Head>
            {!isHideHeader && (<Header/>)}
            {!isHideTitle && (<PageTitle title={docTitle}/>)}
            {props.children}
            {!isHideFooter && (<Footer/>)}
        </>
    )
}

Layout.propTypes = {
    docTitle: PropTypes.string,
    isHideTitle: PropTypes.bool,
    isHideHeader: PropTypes.bool,
    isHideFooter: PropTypes.bool
};

function Section(props) {
    let cssClass = sectionStyles.section;
    let columnSize = props.isFull ? 'col-sm-1-1' : 'col-sm-6-7 col-md-3-4';

    // Maybe using custom size.
    if (props.customSize) {
        columnSize = props.customSize;
    }

    // Maybe it is lighten.
    if (props.isLightColor) {
        cssClass += ' ' + sectionStyles.light;
    }
    // Maybe add extra class.
    if (props.extraClass) {
        cssClass += ' ' + props.extraClass;
    }
    // Maybe no padding.
    if (props.isNoPadding) {
        cssClass += ' ' + sectionStyles.noPadding;
    }
    // Maybe no top Padding.
    if (props.isNoTopPadding) {
        cssClass += ' ' + sectionStyles.noTopPadding;
    }

    return (
        <section className={cssClass}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className={columnSize}>
                        {props.title && (props.isFirstTitle ? <h1 className={sectionStyles.title}>{props.title}</h1> :
                            <h2 className={sectionStyles.title}>{props.title}</h2>)}
                        {props.desc && (<p className={sectionStyles.lead}>{props.desc}</p>)}
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    extraClass: PropTypes.string,
    isFull: PropTypes.bool,
    title: PropTypes.string,
    isFirstTitle: PropTypes.bool,
    desc: PropTypes.string,
    customSize: PropTypes.string,
    isLightColor: PropTypes.bool,
    isNoPadding: PropTypes.bool,
    isNoTopPadding: PropTypes.bool
};

function AlertView(props) {
    const alertCss = alertStyles.alert + ' ' + props.variant;
    return (
        <div className={alertCss}>
            {props.children}
        </div>
    )
}

AlertView.propTypes = {
    variant: PropTypes.string.isRequired
};

function Box(props) {
    let cssClass = sectionStyles.box;
    // maybe no vertical padding.
    if (props.isNoVerticalPadding) {
        cssClass += ' ' + sectionStyles.noVerticalPadding;
    }
    // maybe no padding.
    if (props.isNoPadding) {
        cssClass += ' ' + sectionStyles.noPadding;
    }
    // maybe no margin.
    if (props.isNoMargin) {
        cssClass += ' ' + sectionStyles.noMargin;
    }
    return (
        <div className={cssClass}>{props.children}</div>
    )
}

Box.propTypes = {
    isNoVerticalPadding: PropTypes.bool,
    isNoPadding: PropTypes.bool,
    isNoMargin: PropTypes.bool
}

export {Header, LogoLink, Footer, Layout, Section, AlertView, Box, FullLoading};