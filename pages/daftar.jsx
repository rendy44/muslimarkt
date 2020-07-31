import Link from 'next/link';
import { Layout, Section, LogoLink } from '../components/global';
import { useForm } from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import { Btn, LinkBtn } from '../components/form';


const onSubmit = (data) => {
    console.log(data);
}

export default function PageDaftar() {
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <Layout docTitle='Daftar' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='daftar' extraClass={styles.section} customSize='col-sm-6-7 col-md-1-2'>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <LogoLink />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={errors.email && 'err'}>Alamat Email
                              <input name='email' type="email" placeholder="Alamat email" ref={register({ required: true })} />
                            {errors.email && <span>Alamat email harus diisi!</span>}
                        </label>
                        <label className={errors.password && 'err'}>Kata Sandi
                              <input name='password' type="password" placeholder="Kata sandi" ref={register({ required: true, minLength: 8 })} />
                            {errors.password && <span>Kata sandi harus diisi!</span>}
                        </label>
                        <label className={errors.password2 && 'err'}>Konfirmasi
                              <input name='password2' type="password" placeholder="Ulangi kata sandi" ref={register({ required: true, minLength: 8 })} />
                            {errors.password2 && <span>Konfirmasi kata sandi harus diisi dan sama!</span>}
                        </label>
                        <p>Dengan mendaftar Anda otomatis setuju terhadap <Link href='/ketentuan-layanan'><a>ketentuan layanan</a></Link> dan <Link href='/kebijakan-privasi'><a>kebijakan privasi</a></Link>.</p>
                        <div className={styles.action}>
                            <Btn isSubmit={true} variant='success' label='Daftar Sekarang' />
                            <LinkBtn href='/' label='Batal' variant='transparent' />
                        </div>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}