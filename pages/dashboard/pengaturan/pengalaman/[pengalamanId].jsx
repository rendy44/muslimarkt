import {useRouter} from 'next/router';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PengalamanForm from "../../../../components/form/pengalaman";

export default function PageEditPengalaman() {
    let router = useRouter();
    let {pengalamanId} = router.query;
    return (
        <DashboardSettingLayout title={'Sunting Pengalaman'} isNoAction={true}>
            <PengalamanForm pengalamanId={pengalamanId}/>
        </DashboardSettingLayout>
    )
}