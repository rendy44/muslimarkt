import {DashboardSettingLayout, ListAction} from "../../../../components/dashboard";
import {IoMdSettings} from 'react-icons/io';
import {AccountHeader} from "../../../../components/dashboard/akun";

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
            </ListAction>
        </DashboardSettingLayout>
    )
}