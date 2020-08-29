import PropTypes from 'prop-types';
import {DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Education from "../../src/education";

export default function PendidikanForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const mySwal = withReactContent(Swal);

    let thnValue = [];
    for (let i = 1950; i <= 2030; i++) {
        thnValue.push(i);
    }

    useEffect(() => {

        // Check whether update existing experience or create a new one.
        if (props.fieldData) {
            setIsEdit(true)
        }
    }, [props])

    const onSubmit = async (data, e) => {

        // Change status to loading.
        setIsLoading(true)

        // Identify the process, whether editing or creating a new one.
        if (isEdit) {

            Education.update(props.fieldData.slug, props.userKey, data)
                .then(result => {

                    // Reset loading status.
                    setIsLoading(false)

                    // Prepare alert data.
                    let swalData = {
                        icon: 'error',
                        text: result.data.data,
                    }

                    // Validate result.
                    if (result.data.success) {
                        swalData.icon = 'success';
                    }

                    // Trigger alert.
                    mySwal.fire(swalData)
                })
                .catch(err => {

                    // Reset loading status.
                    setIsLoading(false)

                    mySwal.fire({
                        icon: 'error',
                        text: err.message
                    })
                })
        } else {
            Education.add(props.userKey, data)
                .then(result => {

                    // Reset loading status.
                    setIsLoading(false)

                    // Prepare alert data.
                    let swalData = {
                        icon: 'error',
                        text: result.data.data,
                    }

                    // Validate result.
                    if (result.data.success) {
                        swalData = {
                            icon: 'success',
                            text: 'Berhasil disimpan'
                        }

                        // Reset form.
                        e.target.reset();
                    }

                    // Trigger alert.
                    mySwal.fire(swalData)
                })
                .catch(err => {
                    // Reset loading status.
                    setIsLoading(false)

                    mySwal.fire({
                        icon: 'error',
                        text: err.message
                    })
                })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='frow items-start'>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'institute'}
                        label={'Institusi'}
                        placeholder={'Nama institusi atau universitas'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.institute : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'qualification'}
                        label={'Kualifikasi'}
                        values={['SLTA', 'Diploma', 'Sarjana', 'Magister', 'Doktor']}
                        handler={register}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.qualification : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'major'}
                        label={'Bidang Studi'}
                        placeholder={'Bidang studi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.major : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <div className='frow'>
                        <div className='col-xs-1-2 col-sm-1-3'>
                            <DropDown
                                name={'month_graduate'}
                                label={'Kelulusan'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                value={isEdit ? props.fieldData.month_graduate : ''}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-2-3'>
                            <DropDown
                                name={'year_graduate'}
                                values={thnValue}
                                handler={register}
                                errorsRef={errors}
                                value={isEdit ? props.fieldData.year_graduate : ''}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-1-1'>
                    <TextArea
                        name={'notes'}
                        label={'Catatan'}
                        placeholder={'Catatan tentang pendidikan Anda'}
                        handler={register}
                        errorsRef={errors}
                        rows={6}
                        value={isEdit ? props.fieldData.notes : ''}
                    />
                </div>
            </div>
            <FormAction
                label={isLoading ? 'Loading...' : 'Simpan'}
                disabled={isLoading}
                otherLink={'/dashboard/pengaturan/pendidikan'}
                otherLinkLabel={isEdit ? 'Kembali' : ''}
            />
        </form>
    )
}

PendidikanForm.propTypes = {
    userKey: PropTypes.string.isRequired,
    fieldData: PropTypes.object,
};