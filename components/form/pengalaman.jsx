import PropTypes from 'prop-types';
import {Checkbox, DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import React, {useState, useEffect} from "react";
import provinces from '../../src/provinsi.json';

export default function PengalamanForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isCurrentlyWork, setIsCurrentlyWork] = useState(false);
    const [isOverseas, setIsOverseas] = useState(false);

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

    };

    const onChange = (e) => {
        setIsCurrentlyWork(e.target.checked);
    };

    const onChangeLocation = (e) => {
        setIsOverseas(e.target.checked)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='frow items-start'>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'posisi'}
                        label={'Posisi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.position : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'perusahaan'}
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
                                name={'bulan_mulai'}
                                label={'Periode Mulai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                value={isEdit ? props.fieldData.month_start : ''}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <InputText
                                name={'tahun_mulai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                placeholder={'Tahun mulai'}
                                value={isEdit ? props.fieldData.year_start : ''}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-4-11'>
                    <div className='frow items-start'>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <DropDown
                                name={'bulan_selesai'}
                                label={'Periode Selesai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                isDisabled={isCurrentlyWork}
                                value={isEdit ? props.fieldData.month_end : ''}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <InputText
                                name={'tahun_selesai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                placeholder={'Tahun selesai'}
                                isDisabled={isCurrentlyWork}
                                value={isEdit ? props.fieldData.year_end : ''}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-3-11'>
                    <Checkbox
                        name={'masih_bekerja'}
                        label={'Masih bekerja'}
                        handler={register}
                        errorsRef={errors}
                        onChange={onChange}
                        isChecked={isCurrentlyWork}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'jabatan'}
                        label={'Jabatan'}
                        values={['CEO / Direktur', 'Menejer', 'Supervisor / Kordinator', 'Pegawai', 'Lulusan baru']}
                        handler={register}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.role : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'industri'}
                        label={'Industri'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        value={isEdit ? props.fieldData.industry : ''}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'provinsi'}
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
                        name={'luar_negeri'}
                        label={'Luar negeri'}
                        handler={register}
                        errorsRef={errors}
                        onChange={onChangeLocation}
                        isChecked={isOverseas}
                    />
                </div>
                <div className='col-sm-1-1'>
                    <TextArea
                        name={'catatan'}
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
                otherLink={'/dashboard/pengaturan/pengalaman'}/>
        </form>
    )
}

PengalamanForm.propTypes = {
    fieldData: PropTypes.object
};