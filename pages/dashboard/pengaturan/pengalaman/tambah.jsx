import {useState} from 'react';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import {DropDown, FormAction, InputText, TextArea} from "../../../../components/form";
import {useForm} from "react-hook-form";

export default function PageTambahPengalaman() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data, e) => {

    };

    return (
        <DashboardSettingLayout title={'Tambah Pengalaman'}>
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
                    <div className='col-sm-1-2'>
                        <div className='frow'>
                            <div className='col-xs-1-2 col-sm-1-3'>
                                <DropDown
                                    name={'bulan_mulai'}
                                    label={'Periode Mulai'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                />
                            </div>
                            <div className='col-xs-1-2 col-sm-2-3'>
                                <InputText
                                    name={'tahun_mulai'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    placeholder={'Tahun Mulai'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1-2'>
                        <div className='frow'>
                            <div className='col-xs-1-2 col-sm-1-3'>
                                <DropDown
                                    name={'bulan_selesai'}
                                    label={'Periode Selesai'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                />
                            </div>
                            <div className='col-xs-1-2 col-sm-2-3'>
                                <InputText
                                    name={'tahun_selesai'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    placeholder={'Tahun Selesai'}
                                />
                            </div>
                        </div>
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
        </DashboardSettingLayout>
    )
}