import {PageWithSidebar} from "../../components/dashboard/page";
import {JobItem, ListJobs} from "../../components/lowongan";

export default function PageLowonganDisimpan() {
    return (
        <PageWithSidebar title={'Lowongan Disimpan'} sidebar={<></>}>
            <ListJobs>
                <JobItem
                    dbId={'0'}
                    title={'Lowongan Pertama'}
                    companyName={'Nama Perusahaan'}
                    companyDbId={'0'}
                    postDate={'20 Jul 20'}
                    slug={'lowongan/lowongan-pertama'}
                    location={'Yogyakarta'}
                    companyLogo={'/logo_a.png'}
                    salaryFix={5000000}
                    shortDesc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus nunc felis, at laoreet mi tincidunt vitae. Cras porta bibendum turpis et vulputate. Vestibulum ultrices, velit sit amet commodo tempus, mi leo vulputate nibh, vitae aliquam neque magna sed justo. Sed non elit ac risus eleifend tincidunt nec sit amet enim.'}
                />
                <JobItem
                    dbId={'1'}
                    title={'Lowongan Kedua'}
                    companyName={'PT. Contoh Nama'}
                    companyDbId={'1'}
                    postDate={'21 Jul 20'}
                    slug={'lowongan/lowongan-kedua'}
                    location={'Surabaya'}
                    companyLogo={'/logo_b.jpg'}
                    salaryMin={3000000}
                    salaryMax={6500000}
                    shortDesc={'Duis vel odio iaculis, rutrum nisi posuere, accumsan odio. Vivamus ligula dolor, venenatis a mi eget, finibus interdum arcu. Curabitur quam arcu, tincidunt et leo id, blandit malesuada lacus.'}
                />
                <JobItem
                    dbId={'2'}
                    title={'Lowongan Ketiga'}
                    companyName={'PT. Perusahaan'}
                    companyDbId={'2'}
                    postDate={'21 Jul 20'}
                    slug={'lowongan/lowongan-ketiga'}
                    location={'Surabaya'}
                    companyLogo={'/logo_c.jpg'}
                    salaryMin={4000000}
                    salaryMax={7000000}
                    shortDesc={'Etiam feugiat risus non sapien porta, vitae mollis magna vestibulum. In ornare libero orci, in lacinia justo sollicitudin eu. In in sodales ipsum. Etiam ornare, diam vel condimentum volutpat, purus eros maximus leo, eget auctor massa quam ac ipsum.'}
                />
            </ListJobs>
        </PageWithSidebar>
    )
}