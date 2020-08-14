import {PageWithSidebar} from "../../../components/dashboard/page";
import {JobHeader} from "../../../components/lowongan/detail";
import LamaranForm from "../../../components/form/lowongan";
import {Box} from "../../../components/global";

export default function PageLamarPekerjaan() {

    return (
        <PageWithSidebar title={'Lamar Pekerjaan'} sidebar={<></>} isHideBottomSidebar={true}>
            <JobHeader
                title={'Judul Lowongan'}
                companyName={'PT. Nama Perusahaan'}
                companySlug={'nam-perusahaan'}
                location={'Yogyakarta, Indonesia'}
                salaryFix={6000000}
            />
            <Box>
                <LamaranForm lowonganSlug={'nganu'}/>
            </Box>
        </PageWithSidebar>
    )
}