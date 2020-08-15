import PropTypes from 'prop-types';
import styles from './detail.module.scss';
import {Btn, LinkBtn} from "../form";
import {IoMdSend, IoMdPin, IoMdLaptop, IoMdPhonePortrait} from 'react-icons/io';
import {FaDollarSign} from 'react-icons/fa';
import Link from "next/link";
import {AccountItem, AccountItems} from "../dashboard/akun";
import {Box} from "../global";

function ActionButton(props) {
    return (
        <Box>
            <div className={styles.action}>
                <LinkBtn href={'/lowongan/[lowonganSlug]/lamar'} as={'/lowongan/' + props.slug + '/lamar'}
                         label={'Lamar Sekarang'}
                         variant={'success'} icon={<IoMdSend/>}/>
                <Btn isSubmit={false} label={'Simpan Pekerjaan'} variant={'transparent'}/>
            </div>
        </Box>
    )
}

ActionButton.propTypes = {
    slug: PropTypes.string
}

function JobHeader(props) {
    return (
        <Box>
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
                        <li>
                            <FaDollarSign/> {props.salaryFix || props.salaryMin || props.salaryMax ? (props.salaryFix ? props.salaryFix : props.salaryMin + ' - ' + props.salaryMax) : 'Dirahasiakan'}
                        </li>
                        <li><IoMdPhonePortrait/> {props.isRemote ? 'Boleh jarak jauh' : 'Harus di lokasi'}</li>
                    </ul>
                </div>
            </div>
        </Box>
    )
}

JobHeader.propTypes = {
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companySlug: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salaryMin: PropTypes.number,
    salaryMax: PropTypes.number,
    salaryFix: PropTypes.number,
    isRemote: PropTypes.bool
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
                <Box>
                    <div className={styles.inner}>
                        <h2 className={styles.title}>Deskripsi</h2>
                        <p>{props.description}</p>
                        <h3 className={styles.subtitle}>Tanggung Jawab</h3>
                        <p>{props.responsibility}</p>
                        <h3 className={styles.subtitle}>Persyaratan</h3>
                        <p>{props.requirement}</p>
                    </div>
                </Box>
            </div>
            <div className={styles.block}>
                <Box>
                    <div className={styles.inner}>
                        <h2 className={styles.title}>Tentang Perusahaan</h2>
                        {props.companyLogo && (
                            <div className={styles.companyLogo}><img src={props.companyLogo} alt={'Logo'}/></div>)}
                        <p>{props.companyDesc}</p>
                        <div className={styles.companyInfo}>
                            <AccountItems>
                                <AccountItem label={'Lokasi'}
                                             value={'Jl. Contoh 45, Sleman 1234, Yogyakarta, Indonesia'}/>
                                <AccountItem label={'Situs'}
                                             value={'<a href="http://sample.url" target="_blank">http://sample.url</a>'}
                                             isHtml={true}/>
                                <AccountItem label={'Industri'} value={'Konsultan IT'}/>
                                <AccountItem label={'Bahasa'} value={'Bahasa Inggris'}/>
                                <AccountItem label={'Pakaian'} value={'Kasual'}/>
                            </AccountItems>
                        </div>
                        <h3 className={styles.subtitle}>Galeri</h3>
                        <div className={styles.images}>
                            {slideImagesHtml}
                        </div>
                    </div>
                </Box>
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