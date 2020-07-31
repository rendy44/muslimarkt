import Link from 'next/link';
import { Layout, Section, LogoLink } from '../components/global';
import { useForm } from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import { Btn, LinkBtn } from '../components/form';

const onSubmit = (data) => {
    console.log(data);
}

export default function PageMasuk() {
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <Layout docTitle='Masuk' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='masuk' extraClass={styles.section} customSize='col-sm-6-7 col-md-1-2'>
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