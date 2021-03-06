import React, {useContext, useState} from 'react';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import {DropDown, FormAction, InputText, TextArea} from "../../../../components/form";
import {useForm} from "react-hook-form";
import UserContext from "../../../../components/global/userContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import User from "../../../../src/user";
import provinces from '../../../../src/provinsi.json';
import {FullLoading} from "../../../../components/global";

export default function PageEditAkun() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const {
        userKey,
        saveLoginData,
        userFirstName,
        userLastName,
        userDayBirth,
        userMonthBirth,
        userYearBirth,
        userAddress,
        userPostal,
        userCity,
        userProvince,
        userSex,
        userIdType,
        userNoId,
        userNotes,
    } = useContext(UserContext);
    const MySwal = withReactContent(Swal);

    let tglValue = [];
    for (let i = 1; i <= 31; i++) {
        tglValue.push(i);
    }
    let thnValue = [];
    for (let i = 1950; i <= 2010; i++) {
        thnValue.push(i);
    }

    const onSubmit = async (data) => {
        // set to loading.
        setIsLoading(true);

        // Process update.
        User.update(userKey, data)
            .then(result => {
                setIsLoading(false);

                let alertIcon = 'error',
                    alertMsg = result.data.data;

                // Update the state when update is success.
                if (result.data.success) {

                    // Update account.
                    saveLoginData(result.data.data, false);

                    // Change alert.
                    alertIcon = 'success';
                    alertMsg = 'Sukses diperbarui';
                }

                MySwal.fire({
                    icon: alertIcon,
                    text: alertMsg,
                    onClose: () => {
                        if (result.data.success) {
                            location.href = '/dashboard/pengaturan/akun'
                        }
                    }
                });

            })
            .catch((err) => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'error',
                    text: err.message,
                });
            })
    };

    return (
        <DashboardSettingLayout title={'Sunting Akun'} isNoAction={true}>
            {isLoading ? <FullLoading/> :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='frow items-start'>
                        <div className='col-sm-1-2'>
                            <InputText
                                name={'first_name'}
                                label={'Nama Depan'}
                                placeholder={'Nama depan'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                value={userFirstName}
                            />
                        </div>
                        <div className='col-sm-1-2'>
                            <InputText
                                name={'last_name'}
                                label={'Nama Belakang'}
                                placeholder={'Nama belakang'}
                                handler={register}
                                errorsRef={errors}
                                value={userLastName}
                            />
                        </div>
                        <div className='col-sm-1-3'>
                            <DropDown
                                name={'sex'}
                                label={'Jenis Kelamin'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Laki-laki', 'Perempuan']}
                                value={userSex}
                            />
                        </div>
                        <div className='col-sm-2-3'>
                            <div className='frow'>
                                <div className='col-xs-1-3'>
                                    <DropDown
                                        name={'day_birth'}
                                        label={'Kelahiran'}
                                        handler={register({required: true})}
                                        errorsRef={errors}
                                        values={tglValue}
                                        value={userDayBirth}
                                    />
                                </div>
                                <div className='col-xs-1-3'>
                                    <DropDown
                                        name={'month_birth'}
                                        handler={register({required: true})}
                                        errorsRef={errors}
                                        values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                                        value={userMonthBirth}
                                    />
                                </div>
                                <div className='col-xs-1-3'>
                                    <DropDown
                                        name={'year_birth'}
                                        handler={register({required: true})}
                                        errorsRef={errors}
                                        values={thnValue}
                                        value={userYearBirth}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-2-3'>
                            <InputText
                                name={'address'}
                                label={'Alamat'}
                                placeholder={'Alamat lengkap'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                value={userAddress}
                            />
                        </div>
                        <div className='col-sm-1-3'>
                            <InputText
                                name={'postal'}
                                label={'Kode Pos'}
                                placeholder={'Kode pos'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                value={userPostal}
                            />
                        </div>
                        <div className='col-sm-1-2'>
                            <InputText
                                name={'city'}
                                label={'Kota/Kab'}
                                placeholder={'Nama kota atau kabupaten'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                value={userCity}
                            />
                        </div>
                        <div className='col-sm-1-2'>
                            <DropDown
                                name={'province'}
                                label={'Provinsi'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={provinces}
                                value={userProvince}
                            />
                        </div>
                        <div className='col-sm-1-3'>
                            <DropDown
                                name={'id_type'}
                                label={'Jenis Sdentitas'}
                                values={['KTP', 'SIM', 'Passport']}
                                handler={register}
                                errorsRef={errors}
                                value={userIdType}
                            />
                        </div>
                        <div className='col-sm-2-3'>
                            <InputText
                                name={'no_id'}
                                label={'No. Identitas'}
                                placeholder={'No. identitas'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                value={userNoId}
                            />
                        </div>
                        <div className='col-xs-1-1'>
                            <TextArea
                                name={'notes'}
                                label={'Catatan'}
                                placeholder={'Catatan tentang diri Anda'}
                                rows={6}
                                handler={register}
                                errorsRef={errors}
                                value={userNotes}
                            />
                        </div>
                    </div>
                    <FormAction
                        label={isLoading ? 'Loading...' : 'Simpan'}
                        disabled={isLoading}
                        otherLink={'/dashboard/pengaturan/akun'}/>
                </form>}
        </DashboardSettingLayout>
    )
}