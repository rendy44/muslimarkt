import headerStyles from './header.module.scss';
import sectionStyles from './section.module.scss';
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
                            <a>Muslimarkt</a>
                        </Link>
                    </div>
                    <div className={headerStyles.nav}>
                        <ul>
                            <li>
                                <Link href='login'>
                                    <a>
                                        <IoMdLogIn />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='reg'>
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
    return (
        <footer>
            <div className='frow-container'>
                Sample footer
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
    const columnSize = props.isFull ? 'col-1-1' : 'col-sm-6-7 col-md-3-4';

    // maybe add extra class.
    if (props.extraClass) {
        cssClass += ' ' + props.extraClass
    }
    return (
        <section className={cssClass}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className={columnSize}>
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
    isFull: PropTypes.bool
}

export { Header, Footer, Layout, Section };