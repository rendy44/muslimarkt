import {DashboardSettingLayout} from "../../../../components/dashboard";
import PengalamanForm from "../../../../components/form/pengalaman";

export default function PageTambahPengalaman() {
    return (
        <DashboardSettingLayout title={'Tambah Pengalaman'} isNoAction={true}>
            <PengalamanForm/>
        </DashboardSettingLayout>
    )
}