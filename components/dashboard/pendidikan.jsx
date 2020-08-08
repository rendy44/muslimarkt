import PropTypes from 'prop-types';
import Styles from "./pendidikan.module.scss";
import {Btn, LinkBtn} from "../form";
import {IoMdAddCircle, IoMdSettings, IoMdTrash} from "react-icons/io";

function Studies(props) {
    return (
        <>
            <div className={Styles.listAction}>
                <LinkBtn
                    href={'/dashboard/pengaturan/pendidikan/tambah'}
                    label={'Tambah baru'}
                    icon={<IoMdAddCircle/>}
                    variant={'success'}/>
            </div>
            <div className={Styles.studies}>
                {props.children}
            </div>
            <div className={Styles.listActionBottom}>
                <LinkBtn
                    href={'/dashboard/pengaturan/pendidikan/tambah'}
                    label={'Tambah baru'}
                    icon={<IoMdAddCircle/>}
                    variant={'success'}/>
            </div>
        </>
    )
}

function StudyItem(props) {
    return (
        <div className={Styles.study}>
            <div className={Styles.studyInner}>
                <div className={Styles.edit}>
                    <LinkBtn
                        href={'/dashboard/pengaturan/pendidikan/[pendidikanId]'}
                        as={'/dashboard/pengaturan/pendidikan/' + props.dbId}
                        label={''}
                        icon={<IoMdSettings/>}
                        variant={'warning'}/>
                    <Btn label={''} variant={'danger'} isSubmit={false} icon={<IoMdTrash/>}/>
                </div>
                <h3>{props.institute}</h3>
                <p className={Styles.itemCompany}>{props.qualification} {props.major} <span>{props.country}</span></p>
                <p className={Styles.itemPeriod}>{props.graduation}</p>
            </div>
        </div>
    )
}

StudyItem.propTypes = {
    id: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    note: PropTypes.string
};

export {Studies, StudyItem}