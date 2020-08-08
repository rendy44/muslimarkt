import {DashboardSettingLayout} from "../../../../components/dashboard";
import PendidikanForm from "../../../../components/form/pendidikan";

export default function PageTambahPendidikan() {
    return (
        <DashboardSettingLayout title={'Tambah Pendidikan'}>
            <PendidikanForm/>
        </DashboardSettingLayout>
    )
}