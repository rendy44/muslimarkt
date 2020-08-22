import {DashboardSettingLayout, ListAction} from "../../../../components/dashboard";
import {IoMdSettings} from 'react-icons/io';
import {AccountHeader, AccountItem, AccountItems} from "../../../../components/dashboard/akun";
import UserContext from "../../../../components/global/userContext";
import {useContext} from "react";

export default function PageAkun() {
    const {
        userDisplayName,
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
    return (
        <DashboardSettingLayout title={'Akun'} isHideTitle={true}>
            <ListAction
                href={'/dashboard/pengaturan/akun/edit'}
                variant={'warning'}
                label={'Sunting'}
                icon={<IoMdSettings/>}
            >
                <AccountHeader/>
                <AccountItems>
                    <AccountItem label={'Nama Lengkap'} value={userDisplayName}/>
                    <AccountItem label={'Jenis Kelamin'} value={userSex}/>
                    <AccountItem label={'Tanggal Lahir'}
                                 value={userDayBirth + ' ' + userMonthBirth + ' ' + userYearBirth}/>
                    <AccountItem label={'Alamat'}
                                 value={userAddress && userCity && userProvince && userPostal ? userAddress + ' ' + userCity + ', ' + userProvince + ' ' + userPostal : ''}/>
                    <AccountItem label={'No ' + userIdType} value={userNoId}/>
                    <AccountItem label={'Catatan'} value={userNotes}/>
                </AccountItems>
            </ListAction>
        </DashboardSettingLayout>
    )
}