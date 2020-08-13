import styles from './style.module.scss';
import PropTypes from 'prop-types';
import Link from "next/link";
import {IoMdPin} from 'react-icons/io';
import {FaDollarSign} from 'react-icons/fa';

function ListJobs(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}

function JobItem(props) {
    const usedSalary = props.salaryFix ? props.salaryFix : props.salaryMin + ' - ' + props.salaryMax
    return (
        <div className={styles.job}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    <Link href={'/lowongan/[lowonganSlug]'}
                          as={'/lowongan/' + props.slug}>
                        <a><h3>{props.title}</h3></a>
                    </Link>
                    <div className={styles.logo}>
                        {props.companyLogo && (<img src={props.companyLogo} alt='Logo'/>)}
                    </div>
                </div>
                <div className={styles.company}>
                    <Link href={'/company/company-name'}>
                        <a>{props.companyName}</a>
                    </Link>
                </div>
                <div className={styles.info}>
                    <ul>
                        <li><IoMdPin/> {props.location}</li>
                        <li><FaDollarSign/> {usedSalary}</li>
                    </ul>
                </div>
                <p className={styles.desc}>{truncate(props.shortDesc, 100)}</p>
                <p className={styles.date}>{props.postDate}</p>
            </div>
        </div>
    )
}

JobItem.propTypes = {
    dbId: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyDbId: PropTypes.string.isRequired,
    companyLogo: PropTypes.string,
    location: PropTypes.string,
    salaryMin: PropTypes.number,
    salaryMax: PropTypes.number,
    salaryFix: PropTypes.number,
    shortDesc: PropTypes.string,
    postDate: PropTypes.string.isRequired
};
export {ListJobs, JobItem}