import {Layout} from '../components/global';
import {Hero, HowItWorks, WorkItem} from '../components/home';
import {IoMdPersonAdd, IoMdStar, IoMdSend, IoMdRocket} from 'react-icons/io';

export default function Home() {
    return (
        <Layout isHideTitle={true}>
            <Hero/>
            <HowItWorks>
                <WorkItem
                    icon={<IoMdPersonAdd/>}
                    title='Buat Akun'
                    desc='Buat akun profesionalmu segera, 100% gratis tanpa dipungut biaya'
                />
                <WorkItem
                    icon={<IoMdStar/>}
                    title='Tunjukan Dirimu'
                    desc='Buat profilmu menarik untuk mendapatkan pekerjaan impianmu'
                />
                <WorkItem
                    icon={<IoMdSend/>}
                    title='Kirim Lamaran'
                    desc='Kirim lamaran perkerjaanmu secara online dengan sekali klik'
                />
                <WorkItem
                    icon={<IoMdRocket/>}
                    title='Mulai Bekerja'
                    desc='Jika semuanya selesai, mulailah bekerja di pekerjaan impianmu'
                />
            </HowItWorks>
        </Layout>
    )
}
