import {useRouter} from 'next/router';
import {PageWithSidebar} from "../../components/dashboard/page";
import {ActionButton, Description, Header} from "../../components/lowongan/detail";

export default function PageDetailLowongan() {
    let router = useRouter();
    const {lowonganSlug} = router.query;
    return (
        <PageWithSidebar title={'Detail Lowongan'} sidebar={<ActionButton/>} isHideBottomSidebar={true}>
            <Header
                title={'Judul Lowongan'}
                companyName={'PT. Nama Perusahaan'}
                companySlug={'nama-perusahaan'}
                location={'Yogyakarta, Indonesia'}
                salaryFix={6000000}
            />
            <Description
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in iaculis neque. Phasellus ultricies velit in vestibulum pellentesque. Ut sagittis, massa ut lobortis laoreet, velit ex blandit felis, sodales blandit lacus elit pretium massa. Mauris non viverra justo. Donec lacinia turpis pharetra nisi imperdiet iaculis. Nullam suscipit dictum scelerisque. Nulla eros urna, rutrum tincidunt varius ac, ullamcorper in ante. Donec pulvinar justo nibh, sit amet volutpat nulla volutpat at.'}
                responsibility={'Morbi ut nisl at metus molestie sodales et at nisl. In ultrices, est quis commodo pharetra, augue neque fringilla dui, eget consequat massa mi quis purus. Donec sed efficitur augue. Morbi sodales leo diam, eu convallis elit mollis sed. Morbi non gravida justo. In at rhoncus risus. Nulla tincidunt ex ut risus ultricies, at viverra sapien tempor. Donec venenatis turpis sed sem pretium, et egestas neque elementum.'}
                requirement={'Donec congue molestie eros in pretium. Aliquam vestibulum est mollis feugiat dignissim. Donec et magna sed tellus iaculis efficitur sed ut enim. Aenean quis sapien in quam tristique feugiat vel eu arcu. Ut ut augue dictum, ullamcorper lacus at, rhoncus odio. Etiam vitae dui eu ante tristique sollicitudin.'}
                companyDesc={'Duis dolor mauris, ornare non risus id, pharetra commodo quam. Sed pharetra quam facilisis erat varius, quis volutpat metus pellentesque. Pellentesque ultricies, leo nec fringilla feugiat, arcu ante tempus dui, at imperdiet lectus nunc at orci.'}
                companyLogo={'/logo_b.jpg'}
            />
        </PageWithSidebar>
    )
}