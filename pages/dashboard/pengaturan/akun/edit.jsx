import {DashboardSettingLayout} from "../../../../components/dashboard";
import {DropDown, FormAction, InputText, TextArea} from "../../../../components/form";
import {useForm} from "react-hook-form";
import {useContext, useState, useEffect} from 'react';
import UserContext from "../../../../components/global/userContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import User from "../../../../src/user";
import provinces from '../../../../src/provinsi.json';

export default function PageEditAkun() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const {userKey, account, updateAccount} = useContext(UserContext);
    const MySwal = withReactContent(Swal);
    let tglValue = [];
    for (let i = 1; i <= 31; i++) {
        tglValue.push(i);
    }
    let thnValue = [];
    for (let i = 1950; i <= 2010; i++) {
        thnValue.push(i);
    }

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

                // Update the state when update is success.
                if (result.success) {
                    updateAccount(data);
                }
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
        <DashboardSettingLayout title={'Pengaturan Akun'} isNoAction={true}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='frow'>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'nama_depan'}
                            label={'Nama Depan'}
                            placeholder={'Nama depan'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={account.nama_depan}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'nama_belakang'}
                            label={'Nama Belakang'}
                            placeholder={'Nama belakang'}
                            handler={register}
                            errorsRef={errors}
                            value={account.nama_belakang}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'jenis_kelamin'}
                            label={'Jenis Kelamin'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            values={['Laki-laki', 'Perempuan']}
                            value={account.jenis_kelamin}
                        />
                    </div>
                    <div className='col-sm-2-3'>
                        <div className='frow'>
                            <div className='col-xs-1-3'>
                                <DropDown
                                    name={'tanggal_lahir'}
                                    label={'Kelahiran'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={tglValue}
                                    value={account.tanggal_lahir}
                                />
                            </div>
                            <div className='col-xs-1-3'>
                                <DropDown
                                    name={'bulan_lahir'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                    value={account.bulan_lahir}
                                />
                            </div>
                            <div className='col-xs-1-3'>
                                <DropDown
                                    name={'tahun_lahir'}
                                    handler={register({required: true})}
                                    errorsRef={errors}
                                    values={thnValue}
                                    value={account.tahun_lahir}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText
                            name={'alamat'}
                            label={'Alamat'}
                            placeholder={'Alamat lengkap'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={account.alamat}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <InputText
                            name={'kode_pos'}
                            label={'Kode Pos'}
                            placeholder={'Kode pos'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={account.kode_pos}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText
                            name={'kota'}
                            label={'Kota/Kab'}
                            placeholder={'Nama kota atau kabupaten'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={account.kota}
                        />
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown
                            name={'provinsi'}
                            label={'Provinsi'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            values={provinces}
                            value={account.provinsi}
                        />
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown
                            name={'jenis_identitas'}
                            label={'Jenis Sdentitas'}
                            values={['KTP', 'SIM', 'Passport']}
                            handler={register}
                            errorsRef={errors}
                        />
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText
                            name={'no_identitas'}
                            label={'No. Identitas'}
                            placeholder={'No. identitas'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            value={account.no_identitas}
                        />
                    </div>
                    <div className='col-xs-1-1'>
                        <TextArea
                            name={'catatan'}
                            label={'Catatan'}
                            placeholder={'Catatan tentang diri Anda'}
                            rows={6}
                            handler={register({required: true})}
                            errorsRef={errors}/>
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