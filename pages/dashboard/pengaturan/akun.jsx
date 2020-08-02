import {DashboardSettingLayout} from "../../../components/dashboard";
import {DropDown, FormAction, InputText} from "../../../components/form";
import {useForm} from "react-hook-form";

export default function PageAkun() {
    const {register, handleSubmit, errors} = useForm();

    console.log(errors);
    const onSubmit = async (data, e) => {
        // console.log(errors);
        console.log(data);
    };
    return (
        <DashboardSettingLayout title={'Pengaturan Akun'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='frow'>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'namaDepan'}
                            label={'Nama Depan'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'namaBelakang'}
                            label={'Nama Belakang'}
                            handler={register}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'tanggalLahir'}
                            label={'Tanggal Lahir'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'bulanLahir'}
                            label={'Bulan Lahir'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'tahunLahir'}
                            label={'Tahun Lahir'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText
                            name={'alamat'}
                            label={'Alamat'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <InputText
                            name={'kodePos'}
                            label={'Kode Pos'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'kota'}
                            label={'Kota'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'propinsi'}
                            label={'Propinsi'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'jeniIdentitas'}
                            label={'Jenis Identitas'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText
                            name={'noIdentitas'}
                            label={'Nomor Identitas'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                </div>
                <FormAction label={'Simpan'} otherLink={'/dashboard/pengaturan/akun'}/>
            </form>
        </DashboardSettingLayout>
    )
}