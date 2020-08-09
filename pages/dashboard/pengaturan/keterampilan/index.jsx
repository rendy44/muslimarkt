import {DashboardSettingLayout, ListAction} from "../../../../components/dashboard";
import {AccountItem, AccountItems} from "../../../../components/dashboard/akun";
import {IoMdSettings} from 'react-icons/io';

export default function PageKeterampilan() {
    return (
        <DashboardSettingLayout title={'Keterampilan'}>
            <ListAction href={'/dashboard/pengaturan/keterampilan/edit'} icon={<IoMdSettings/>} label={'Sunting'}
                        variant={'warning'}>
                <AccountItems>
                    <AccountItem label={'Pemula'} value={'Ruby on Rails, Node.js, Express.Js, Golang'}/>
                    <AccountItem label={'Menengah'} value={'React.Js, Next.Js, Vue.Js, Angular.Js, Laravel'}/>
                    <AccountItem label={'Lanjutan'} value={'Wordpress, PHP, MySQL, Bootstrap, SASS, Javascript ES6'}/>
                </AccountItems>
            </ListAction>
        </DashboardSettingLayout>
    )
}