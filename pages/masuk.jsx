import Link from 'next/link';
import { Layout, Section, LogoLink } from '../components/global';
import { useForm } from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import { Btn, LinkBtn } from '../components/form';


export default function PageMasuk() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Layout docTitle='Masuk' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='masuk' extraClass={styles.section} customSize='col-sm-6-7 col-md-1-2'>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <LogoLink />
                    </div>
                    <form>
                        <label>Alamat Email
                              <input type="email" placeholder="Alamat email" />
                        </label>
                        <label>Kata Sandi
                              <input type="password" placeholder="Kata sandi" />
                        </label>
                        <div className={styles.action}>
                            <Btn isSubmit={true} variant='main' label='Masuk' />
                            <LinkBtn href='/' label='Batal' variant='transparent' />
                        </div>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}