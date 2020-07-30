import headerStyles from './header.module.scss';
import sectionStyles from './section.module.scss';
import footerStyles from './footer.module.scss';
import { IoMdLogIn, IoMdPersonAdd } from 'react-icons/io';
import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import conf from '../../global.config.json';

function Header(props) {
    return (
        <header className={headerStyles.header}>
            <div className='frow-container'>
                <div className={headerStyles.inner}>
                    <div className={headerStyles.brand}>
                        <Link href='/'>
                            <a>
                                <img src='logo2.png' alt='Logo' />
                            </a>
                        </Link>
                    </div>
                    <div className={headerStyles.nav}>
                        <ul>
                            <li>
                                <Link href='/masuk'>
                                    <a>
                                        <IoMdLogIn />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/daftar'>
                                    <a>
                                        <IoMdPersonAdd />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

function Footer(props) {
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
    })

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
    ]
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
    })

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
    ]
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
    })

    return (
        <footer className={footerStyles.footer}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className='col-sm-1-1 col-md-4-10'>
                        <div className={footerStyles.brand}>
                            <img src='logo2.png' alt='logo' />
                            <p className={footerStyles.desc}>{conf.siteLongDesc}</p>
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
        </footer>
    )
}

function Layout(props) {
    const { siteName, siteDesc } = conf;
    const { docTitle } = props;
    const usedTitle = docTitle ? docTitle + ' | ' + siteName : siteName + ' | ' + siteDesc;
    return (
        <>
            <Head>
                <title>{usedTitle}</title>
            </Head>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
Layout.propTypes = {
    docTitle: PropTypes.string
}

function Section(props) {
    let cssClass = sectionStyles.section;
    const columnSize = props.isFull ? 'col-sm-1-1' : 'col-sm-6-7 col-md-3-4';

    // Maybe add extra class.
    if (props.extraClass) {
        cssClass += ' ' + props.extraClass
    }

    // Maybe add title.
    const maybeTitle = props.title ? <h2 className={sectionStyles.title}>{props.title}</h2> : '';

    // Maybe add description.
    const maybeDesc = props.desc ? <p className={sectionStyles.lead}>{props.desc}</p> : '';
    return (
        <section className={cssClass}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className={columnSize}>
                        {maybeTitle}
                        {maybeDesc}
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
    desc: PropTypes.string
}

export { Header, Footer, Layout, Section };