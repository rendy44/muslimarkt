import PropTypes from 'prop-types';
import Styles from "./pendidikan.module.scss";
import {Btn, LinkBtn} from "../form";
import {IoMdSettings, IoMdTrash} from "react-icons/io";
import {ListAction} from "./index";

function Studies(props) {
    return (
        <ListAction href={'/dashboard/pengaturan/pendidikan/tambah'}>
            <div className={Styles.studies}>
                {props.children}
            </div>
        </ListAction>
    )
}

function StudyItem(props) {
    return (
        <div className={Styles.study}>
            <div className={Styles.inner}>
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
                <p className={Styles.detail}>{props.qualification} {props.major} <span>{props.country}</span></p>
                <p className={Styles.period}>{props.graduation}</p>
            </div>
        </div>
    )
}

StudyItem.propTypes = {
    dbId: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    note: PropTypes.string
};

export {Studies, StudyItem}