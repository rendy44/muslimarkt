import {useRouter} from 'next/router';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PendidikanForm from "../../../../components/form/pendidikan";

export default function PageEditPendidikan() {
    let router = useRouter();
    let {pendidikanId} = router.query;
    return (
        <DashboardSettingLayout title={'Sunting Pendidikan'} isNoAction={true}>
            <PendidikanForm pendidikanId={pendidikanId}/>
        </DashboardSettingLayout>
    )
}