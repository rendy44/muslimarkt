import {DashboardSettingLayout} from "../../../components/dashboard";
import {DropDown, FormAction, InputText} from "../../../components/form";
import {useForm} from "react-hook-form";
import {useContext, useState} from 'react';
import UserContext from "../../../components/global/userContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import User from "../../../src/user";

export default function PageAkun() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const {userKey} = useContext(UserContext);
    const MySwal = withReactContent(Swal);

    const onSubmit = async (data, e) => {
        // set to loading.
        setIsLoading(true);
        // Save user key into obj.
        data['key'] = userKey;

        // Process update.
        User.update(data)
            .then(response => response.json())
            .then((result) => {
                setIsLoading(false);

                // Show alert based on request status.
                const alertType = result.success ? 'success' : 'error';
                MySwal.fire({
                    icon: alertType,
                    text: result.data,
                });
            })
            .catch((err) => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'error',
                    text: err.data,
                });
            })
    };
    return (
        <DashboardSettingLayout title={'Pengaturan Akun'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='frow'>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'nama_depan'}
                            label={'Nama Depan'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'nama_belakang'}
                            label={'Nama Belakang'}
                            handler={register}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'tanggal_lahir'}
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
                            name={'bulan_lahir'}
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
                            name={'tahun_lahir'}
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
                            name={'kode_pos'}
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
                            name={'jenis_kelamin'}
                            label={'Jenis Kelamin'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        >
                            <option>Laki-laki</option>
                            <option>Perempuan</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText
                            name={'no_identitas'}
                            label={'Nomor Identitas'}
                            handler={register({required: true})}
                            errorsRef={errors}
                        />
                    </div>
                </div>
                <FormAction
                    label={isLoading ? 'Loading...' : 'Simpan'}
                    disabled={isLoading}
                    otherLink={'/dashboard/pengaturan/akun'}/>
            </form>
        </DashboardSettingLayout>
    )
}