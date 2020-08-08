import PropTypes from 'prop-types';
import Styles from './pengalaman.module.scss';
import {LinkBtn, Btn} from "../form";
import {IoMdSettings, IoMdTrash} from 'react-icons/io';
import {ListAction} from "./index";

function Experiences(props) {
    return (
        <ListAction href={'/dashboard/pengaturan/pengalaman/tambah'}>
            <div className={Styles.experiences}>
                {props.children}
            </div>
        </ListAction>
    )
}

function ExperienceItem(props) {
    const usedDateEnd = props.dateEnd ? props.dateEnd : 'sekarang';
    return (
        <div className={Styles.experience}>
            <div className={Styles.experienceInner}>
                <div className={Styles.edit}>
                    <LinkBtn
                        href={'/dashboard/pengaturan/pengalaman/[pengalamanId]'}
                        as={'/dashboard/pengaturan/pengalaman/' + props.dbId}
                        label={''}
                        icon={<IoMdSettings/>}
                        variant={'warning'}/>
                    <Btn label={''} variant={'danger'} isSubmit={false} icon={<IoMdTrash/>}/>
                </div>
                <h3>{props.role}</h3>
                <p className={Styles.itemCompany}>{props.companyName} <span>{props.companyLocation}</span></p>
                <p className={Styles.itemPeriod}>{props.dateStart} - {usedDateEnd}</p>
                <div className={Styles.companyDetail}>
                    <p>
                        <span>Industri:</span>
                        <span>{props.companyIndustry}</span>
                    </p>
                    <p>
                        <span>Jabatan:</span>
                        <span>{props.position}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

ExperienceItem.propTypes = {
    dbId: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLocation: PropTypes.string.isRequired,
    companyIndustry: PropTypes.string,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string
};
export {Experiences, ExperienceItem}