import {MenuItems, MenuItem, DashboardPageLayout} from "../../components/dashboard";
import {FaUserEdit, FaSave, FaNetworkWired, FaStar} from 'react-icons/fa';

export default function PageDashboard() {
    return (
        <DashboardPageLayout title={'Dashboard'}>
            <MenuItems>
                <MenuItem
                    title={'Pengaturan'}
                    icon={<FaUserEdit/>}
                    desc={'Atur dan perbarui semua informasi tentang diri Anda'}
                    linkTo={'/dashboard/pengaturan/akun'}/>
                <MenuItem
                    title={'Status Lamaran'}
                    linkTo={'/dashboard/status'}
                    desc={'Lihat dan pantau status lamaran yang sudah dikirim'}
                    icon={<FaNetworkWired/>}/>
                <MenuItem
                    title={'Lowongan Disimpan'}
                    linkTo={'/dashboard/disimpan'}
                    desc={'Kelola dan lowongan pekerjaan yang sudah disimpan'}
                    icon={<FaSave/>}/>
                <MenuItem
                    title={'Rekomendasi Lowongan'}
                    linkTo={'/dashboard/rekomendasi'}
                    desc={'Daftar lowongan yang mungkin akan cocok untuk Anda'}
                    icon={<FaStar/>}/>
            </MenuItems>
        </DashboardPageLayout>
    )
}