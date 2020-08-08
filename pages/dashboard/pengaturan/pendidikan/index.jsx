import {DashboardSettingLayout} from "../../../../components/dashboard";
import {Studies, StudyItem} from "../../../../components/dashboard/pendidikan";

export default function PagePendidikan() {
    return (
        <DashboardSettingLayout title={'Pendidikan'}>
            <Studies>
                <StudyItem
                    dbId={'0'}
                    institute={'Nama Universitas'}
                    graduation={'Jul 2013'}
                    major={'Teknik Informatika'}
                    qualification={'Sarjana'}
                    country={'Indonesia'}/>
                <StudyItem
                    dbId={'1'}
                    institute={'Sebuah SMK'}
                    graduation={'Jul 2008'}
                    qualification={'SMK/SMA/SMU'}
                    country={'Indonesia'}
                    major={'Rekayasa Perangkat Lunak'}/>
            </Studies>
        </DashboardSettingLayout>
    )
}