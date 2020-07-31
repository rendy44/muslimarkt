import Link from 'next/link';
import { Layout, Section } from '../components/global';
import { useForm } from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import { Btn } from '../components/form';


export default function PageDaftar() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Layout docTitle='Daftar' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='dafar' extraClass={styles.section}>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <Link href='/'>
                            <a>
                                <img src='logo2.png' alt='Logo' />
                            </a>
                        </Link>
                    </div>
                    <form>
                        <label>Alamat Email
                              <input type="email" placeholder="Alamat email" />
                        </label>
                        <label>Kata Sandi
                              <input type="password" placeholder="Kata sandi" />
                        </label>
                        <label>Konfirmasi
                              <input type="password" placeholder="Ulangi kata sandi" />
                        </label>
                        <label>Nama Lengkap
                              <input type="text" placeholder="Nama lengkap" />
                        </label>
                        <p>Dengan mendaftar Anda otomatis setuju terhadap <Link href='/ketentuan-layanan'><a>ketentuan layanan</a></Link> dan <Link href='/kebijakan-privasi'><a>kebijakan privasi</a></Link>.</p>
                        <div className={styles.action}>
                            <Btn isSubmit={true} variant='main' label='Daftar Sekarang' />
                        </div>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}