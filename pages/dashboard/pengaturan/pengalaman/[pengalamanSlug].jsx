import {useRouter} from 'next/router';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PengalamanForm from "../../../../components/form/pengalaman";

export default function PageEditPengalaman() {
    let router = useRouter();
    let {pengalamanSlug} = router.query;
    return (
        <DashboardSettingLayout title={'Sunting Pengalaman'} isNoAction={true}>
            <PengalamanForm pengalamanSlug={pengalamanSlug}/>
        </DashboardSettingLayout>
    )
}