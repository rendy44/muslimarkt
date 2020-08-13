import PropTypes from 'prop-types';
import styles from './detail.module.scss';
import {Btn} from "../form";
import {IoMdSend, IoMdPin} from 'react-icons/io';
import {FaDollarSign} from 'react-icons/fa';
import Link from "next/link";

function ActionButton() {
    return (
        <div className={styles.action}>
            <Btn isSubmit={false} label={'Lamar Sekarang'} variant={'success'} icon={<IoMdSend/>}/>
            <Btn isSubmit={false} label={'Simpan Pekerjaan'} variant={'transparent'}/>
        </div>
    )
}

function JobHeader(props) {
    const usedSalary = props.salaryFix ? props.salaryFix : props.salaryMin + ' - ' + props.salaryMax
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>{props.title}</h1>
                <Link href={'/perusahaan/[perusahaanSlug]'}
                      as={'/perusahaan/' + props.companySlug}>
                    <a>{props.companyName}</a>
                </Link>
            </div>
            <div className={styles.info}>
                <ul>
                    <li><IoMdPin/> {props.location}</li>
                    <li><FaDollarSign/> {usedSalary}</li>
                </ul>
            </div>
        </div>
    )
}

JobHeader.propTypes = {
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companySlug: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salaryMin: PropTypes.number,
    salaryMax: PropTypes.number,
    salaryFix: PropTypes.number
}

function Description(props) {
    const slideImages = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg', '/slide4.jpg', '/slide5.jpg'];
    let slideImagesHtml = [];
    slideImages.map((img, index) => {
        slideImagesHtml.push(
            <div className={styles.image} key={index}>
                <img src={img} alt={'Galeri'}/>
            </div>
        )
    })
    return (
        <div className={styles.description}>
            <div className={styles.block}>
                <div className={styles.inner}>
                    <h2 className={styles.title}>Deskripsi</h2>
                    <p>{props.description}</p>
                    <h3 className={styles.subtitle}>Tanggung Jawab</h3>
                    <p>{props.responsibility}</p>
                    <h3 className={styles.subtitle}>Persyaratan</h3>
                    <p>{props.requirement}</p>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.inner}>
                    <h2 className={styles.title}>Tentang Perusahaan</h2>
                    {props.companyLogo && (
                        <div className={styles.companyLogo}><img src={props.companyLogo} alt={'Logo'}/></div>)}
                    <p>{props.companyDesc}</p>
                    <h3 className={styles.subtitle}>Galeri</h3>
                    <div className={styles.images}>
                        {slideImagesHtml}
                    </div>
                </div>
            </div>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.string.isRequired,
    responsibility: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    companyDesc: PropTypes.string.isRequired,
    companyLogo: PropTypes.string
}

export {ActionButton, JobHeader, Description}