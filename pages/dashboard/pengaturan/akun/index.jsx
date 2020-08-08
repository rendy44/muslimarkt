import {DashboardSettingLayout, ListAction} from "../../../../components/dashboard";
import {IoMdSettings} from 'react-icons/io';
import {AccountHeader, AccountItem, AccountItems} from "../../../../components/dashboard/akun";

export default function PageAkun() {
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
                    <AccountItem label={'Nama Lengkap'} value={'Fulan bin Abdullah'}/>
                    <AccountItem label={'Jenis Kelamin'} value={'Laki-laki'}/>
                    <AccountItem label={'Tanggal Lahir'} value={'14 Agu 1994'}/>
                    <AccountItem label={'Alamat'} value={'Jl Contoh No 1000, Kab. Jauh, Jawa Timur, 62111'}/>
                    <AccountItem label={'No KTP'} value={'123010000013'}/>
                    <AccountItem label={'Catatan'}
                                 value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique ante vel dui porttitor volutpat.'}/>
                </AccountItems>
            </ListAction>
        </DashboardSettingLayout>
    )
}