import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';
import Styles from './pengalaman.module.scss';
import {LinkBtn, Btn} from "../form";
import {IoMdSettings, IoMdTrash} from 'react-icons/io';
import {ListAction} from "./index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Experience from "../../src/experience";
import UserContext from "../global/userContext";

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
                Experience.delete(slug, userKey)
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
                        <Btn label={''} variant={'danger'} isSubmit={false} icon={<IoMdTrash/>} onClick={() => {
                            onDelete(props.slug)
                        }}/>
                    </div>
                    <h3>{props.position}</h3>
                    <p className={Styles.itemCompany}>{props.companyName} <span>{props.isOverSeas ? 'Luar negeri' : props.companyLocation}</span></p>
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
    dateEnd: PropTypes.string,
    isOverSeas: PropTypes.string
};
export {Experiences, ExperienceItem}