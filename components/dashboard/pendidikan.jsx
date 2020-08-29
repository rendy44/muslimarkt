import PropTypes from 'prop-types';
import Styles from "./pendidikan.module.scss";
import {Btn, LinkBtn} from "../form";
import {IoMdSettings, IoMdTrash} from "react-icons/io";
import {ListAction} from "./index";
import React, {useContext, useState} from "react";
import UserContext from "../global/userContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Education from "../../src/education";

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
    const {userKey} = useContext(UserContext);
    const [isDeleted, setIsDeleted] = useState(false);

    const onDelete = (slug) => {
        const delSwal = withReactContent(Swal);
        delSwal.fire({
            text: 'Data yang sudah dihapus tidak bisa dikembalikan lagi',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Batal',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {

                // Process deleting.
                Education.delete(slug, userKey)
                    .then(result => {
                        let swalData = {
                            text: result.data.data,
                            icon: 'error'
                        }

                        // Validate result.
                        if (result.data.success) {
                            swalData.icon = 'success'

                            setIsDeleted(true)
                        }

                        // Trigger alert.
                        delSwal.fire(swalData)
                    })
                    .catch(err => {
                        delSwal.fire({
                            icon: 'error',
                            text: err.message
                        })
                    })
            }
        })
    }
    if (isDeleted) {
        return (<></>)
    } else {
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
                        <Btn label={''} variant={'danger'} onClick={() => {
                            onDelete(props.slug)
                        }} isSubmit={false} icon={<IoMdTrash/>}/>
                    </div>
                    <h3>{props.institute}</h3>
                    <p className={Styles.detail}>{props.qualification} {props.major}</p>
                    <p className={Styles.period}>{props.graduation}</p>
                </div>
            </div>
        )
    }
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