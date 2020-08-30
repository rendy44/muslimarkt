import PropTypes from 'prop-types';
import {Checkbox, DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import React, {useState, useEffect} from "react";
import provinces from '../../src/provinsi.json';
import Experience from "../../src/experience";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import industries from '../../src/industry.json';
import {FullLoading} from "../global";

export default function PengalamanForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isCurrentlyWork, setIsCurrentlyWork] = useState(true);
    const [isOverseas, setIsOverseas] = useState(false);
    const mySwal = withReactContent(Swal);

    useEffect(() => {

        // Check whether update existing experience or create a new one.
        if (props.fieldData) {
            setIsEdit(true)

            // Maybe set status of current work.
            if (props.fieldData.still_working) {
                setIsCurrentlyWork(true)
            }

            // Maybe set status of overseas work.
            if (props.fieldData.overseas) {
                setIsOverseas(true)
            }
        }
    }, [props])

    const onSubmit = async (data, e) => {

        // Change status to loading.
        setIsLoading(true)

        // Identify the process, whether editing or creating a new one.
        if (isEdit) {

            Experience.update(props.fieldData.slug, props.userKey, data)
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
            Experience.add(props.userKey, data)
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

    const onChange = (e) => {
        setIsCurrentlyWork(e.target.checked);
    };

    const onChangeLocation = (e) => {
        setIsOverseas(e.target.checked)
    }

    if (isLoading) {
        return (<FullLoading/>)
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='frow items-start'>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'position'}
                            label={'Posisi'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={isEdit ? props.fieldData.position : ''}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'company'}
                            label={'Perusahaan'}
                            placeholder={'Nama perusahaan'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={isEdit ? props.fieldData.company : ''}
                        />
                    </div>
                    <div className='col-sm-4-11'>
                        <div className='frow items-start'>
                            <div className='col-xs-1-2 col-sm-1-2'>
                                <DropDown
                                    name={'month_start'}
                                    label={'Periode Mulai'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                    value={isEdit ? props.fieldData.month_start : ''}
                                />
                            </div>
                            <div className='col-xs-1-2 col-sm-1-2'>
                                <InputText
                                    name={'year_start'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    placeholder={'Tahun mulai'}
                                    type={'number'}
                                    value={isEdit ? props.fieldData.year_start : ''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4-11'>
                        <div className='frow items-start'>
                            <div className='col-xs-1-2 col-sm-1-2'>
                                <DropDown
                                    name={'month_end'}
                                    label={'Periode Selesai'}
                                    handler={register(!isCurrentlyWork ? {required: true} : {})}
                                    errorsRef={errors}
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                    isDisabled={isCurrentlyWork}
                                    value={isEdit ? props.fieldData.month_end : ''}
                                />
                            </div>
                            <div className='col-xs-1-2 col-sm-1-2'>
                                <InputText
                                    name={'year_end'}
                                    handler={register(!isCurrentlyWork ? {required: true} : {})}
                                    errorsRef={errors}
                                    placeholder={'Tahun selesai'}
                                    isDisabled={isCurrentlyWork}
                                    type={'number'}
                                    value={isEdit ? props.fieldData.year_end : ''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3-11'>
                        <Checkbox
                            name={'still_working'}
                            label={'Masih bekerja'}
                            handler={register}
                            errorsRef={errors}
                            onChange={onChange}
                            isChecked={isCurrentlyWork}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'role'}
                            label={'Jabatan'}
                            values={['CEO / Direktur', 'Menejer', 'Supervisor / Kordinator', 'Pegawai', 'Lulusan baru']}
                            handler={register}
                            errorsRef={errors}
                            value={isEdit ? props.fieldData.role : ''}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'industry'}
                            label={'Industri'}
                            values={industries}
                            handler={register}
                            errorsRef={errors}
                            value={isEdit ? props.fieldData.industry : ''}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'province'}
                            label={'Provinsi'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            values={provinces}
                            value={isEdit ? props.fieldData.province : ''}
                            isDisabled={isOverseas}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <Checkbox
                            name={'overseas'}
                            label={'Luar negeri'}
                            handler={register}
                            errorsRef={errors}
                            onChange={onChangeLocation}
                            isChecked={isOverseas}
                        />
                    </div>
                    <div className='col-sm-1-1'>
                        <TextArea
                            name={'notes'}
                            label={'Catatan'}
                            placeholder={'Catatan tentang pekerjaan Anda'}
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
                    otherLink={'/dashboard/pengaturan/pengalaman'}
                    otherLinkLabel={isEdit ? 'Kembali' : ''}
                />
            </form>
        )
    }
}

PengalamanForm.propTypes = {
    userKey: PropTypes.string.isRequired,
    fieldData: PropTypes.object,
};