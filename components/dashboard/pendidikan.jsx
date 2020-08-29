import PropTypes from 'prop-types';
import Styles from "./pendidikan.module.scss";
import {Btn, LinkBtn} from "../form";
import {IoMdSettings, IoMdTrash} from "react-icons/io";
import {ListAction} from "./index";
import React from "react";

function Studies(props) {
    const studyContent = <div className={Styles.studies}>{props.children}</div>;

    if (!props.isHideAction) {
        return (
            <ListAction href={'/dashboard/pengaturan/pendidikan/tambah'}>
                {studyContent}
            </ListAction>
        )
    } else {
        return (studyContent)
    }
}

Studies.propTypes = {
    isHideAction: PropTypes.bool
};

function StudyItem(props) {
    return (
        <div className={Styles.study}>
            <div className={Styles.inner}>
                <div className={Styles.edit}>
                    <LinkBtn
                        href={'/dashboard/pengaturan/pendidikan/[pendidikanSlug]'}
                        as={'/dashboard/pengaturan/pendidikan/' + props.slug}
                        label={''}
                        icon={<IoMdSettings/>}
                        variant={'warning'}/>
                    <Btn label={''} variant={'danger'} isSubmit={false} icon={<IoMdTrash/>}/>
                </div>
                <h3>{props.institute}</h3>
                <p className={Styles.detail}>{props.qualification} {props.major}</p>
                <p className={Styles.period}>{props.graduation}</p>
            </div>
        </div>
    )
}

StudyItem.propTypes = {
    slug: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
    note: PropTypes.string
};

export {Studies, StudyItem}