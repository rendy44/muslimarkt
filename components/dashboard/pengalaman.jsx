import PropTypes from 'prop-types';
import Styles from './pengalaman.module.scss';
import {LinkBtn, Btn} from "../form";
import {IoMdSettings, IoMdTrash} from 'react-icons/io';
import {ListAction} from "./index";

function Experiences(props) {
    const expContent = <div className={Styles.experiences}>{props.children}</div>;

    if (!props.isHideAction) {
        return (
            <ListAction href={'/dashboard/pengaturan/pengalaman/tambah'}>
                {expContent}
            </ListAction>
        )
    } else {
        return (expContent)
    }
}

Experiences.propTypes = {
    isHideAction: PropTypes.bool
};

function ExperienceItem(props) {
    const usedDateEnd = props.dateEnd ? props.dateEnd : 'sekarang';
    return (
        <div className={Styles.experience}>
            <div className={Styles.inner}>
                <div className={Styles.edit}>
                    <LinkBtn
                        href={'/dashboard/pengaturan/pengalaman/[pengalamanSlug]'}
                        as={'/dashboard/pengaturan/pengalaman/' + props.slug}
                        label={''}
                        icon={<IoMdSettings/>}
                        variant={'warning'}/>
                    <Btn label={''} variant={'danger'} isSubmit={false} icon={<IoMdTrash/>}/>
                </div>
                <h3>{props.position}</h3>
                <p className={Styles.itemCompany}>{props.companyName} <span>{props.companyLocation}</span></p>
                <p className={Styles.itemPeriod}>{props.dateStart} - {usedDateEnd}</p>
                <div className={Styles.companyDetail}>
                    <p>
                        <span>Industri:</span>
                        <span>{props.companyIndustry}</span>
                    </p>
                    <p>
                        <span>Jabatan:</span>
                        <span>{props.role}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

ExperienceItem.propTypes = {
    dbId: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLocation: PropTypes.string.isRequired,
    companyIndustry: PropTypes.string,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string
};
export {Experiences, ExperienceItem}