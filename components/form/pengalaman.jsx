import PropTypes from 'prop-types';
import {Checkbox, DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import {useState} from "react";

export default function PengalamanForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isCurrentlyWork, setIsCurrentlyWork] = useState(false);
    const onSubmit = async (data, e) => {

    };

    const onChange = (e) => {
        const isChecked = e.target.checked;
        setIsCurrentlyWork(isChecked);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='frow'>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'posisi'}
                        label={'Posisi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'nama_perusahaan'}
                        label={'Nama Perusahaan'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-4-11'>
                    <div className='frow'>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <DropDown
                                name={'bulan_mulai'}
                                label={'Periode Mulai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <InputText
                                name={'tahun_mulai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                placeholder={'Tahun Mulai'}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-4-11'>
                    <div className='frow'>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <DropDown
                                name={'bulan_selesai'}
                                label={'Periode Selesai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                isDisabled={isCurrentlyWork}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-1-2'>
                            <InputText
                                name={'tahun_selesai'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                placeholder={'Tahun Selesai'}
                                isDisabled={isCurrentlyWork}
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
                    <InputText
                        name={'jabatan'}
                        label={'Jabatan'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'industri'}
                        label={'Industri'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'negara'}
                        label={'Negara'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        values={[1, 2, 3, 4, 5]}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'provinsi'}
                        label={'Provinsi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                        values={[2]}
                    />
                </div>
                <div className='col-sm-1-1'>
                    <TextArea
                        name={'keterangan'}
                        label={'Keterangan'}
                        placeholder={'Detail mengenai pekerjaan'}
                        handler={register}
                        errorsRef={errors}
                        rows={6}/>
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
    pengalamanId: PropTypes.string
};