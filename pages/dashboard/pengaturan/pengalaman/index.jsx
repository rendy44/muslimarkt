import {DashboardSettingLayout} from "../../../../components/dashboard";
import {ExperienceItem, Experiences} from "../../../../components/dashboard/pengalaman";

export default function PagePengalaman() {
    return (
        <DashboardSettingLayout title={'Pengalaman'}>
            <Experiences>
                <ExperienceItem
                    dbId={'0'}
                    role={'WordPress Developer'}
                    position={'Pegawai (non-manajemen & non-supervisor)'}
                    companyName={'PT. Contoh Perusahaan'}
                    companyLocation={'Yogyakarta, Indonesia'}
                    dateStart={'Jan 2018'}
                    companyIndustry={'Komputer / Teknik Informatika (Perangkat Lunak)'}/>
                <ExperienceItem
                    dbId={'1'}
                    role={'Front-end Developer'}
                    position={'Pegawai (non-manajemen & non-supervisor)'}
                    companyName={'PT. Perusahaan Lain'}
                    companyLocation={'Malang, Indonesia'}
                    dateStart={'Feb 2014'}
                    dateEnd={'Des 2018'}
                    companyIndustry={'Komputer / Teknik Informatika (Perangkat Lunak)'}/>
                <ExperienceItem
                    dbId={'1'}
                    role={'.Net Developer'}
                    position={'Pegawai (non-manajemen & non-supervisor)'}
                    companyName={'PT. Contoh Nama'}
                    companyLocation={'Jakarta, Indonesia'}
                    dateStart={'Mar 2010'}
                    dateEnd={'Jan 2014'}
                    companyIndustry={'Komputer / Teknik Informatika (Perangkat Lunak)'}/>
            </Experiences>
        </DashboardSettingLayout>
    )
}