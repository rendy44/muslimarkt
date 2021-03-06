import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Layout, Section, LogoLink} from '../components/global';
import {useForm} from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import {FormAction, InputText} from '../components/form';
import User from "../src/user.js";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function PageDaftar() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        User.add(data)
            .then(result => {
                setIsLoading(false);

                let swalType = 'error';
                // Handle for success error.
                if (result.data.success) {
                    swalType = 'success';
                    e.target.reset();
                }
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    icon: swalType,
                    text: result.data.data,
                    onClose: () => {
                        if (result.data.success) {
                            router.push('/masuk');
                        }
                    }
                });
            })
            .catch((err) => {
                setIsLoading(false);

                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    icon: 'error',
                    text: err.message,
                });
            })
    };

    return (
        <Layout docTitle='Daftar' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='daftar' extraClass={styles.section} customSize='col-sm-6-7 col-md-1-2'>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <LogoLink/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputText
                            name={'email'}
                            handler={register({required: true})}
                            errorsRef={errors}
                            type={'email'}
                            label={'Alamat Email'}
                            noPadding={true}
                        />
                        <InputText
                            name={'password'}
                            handler={register({required: true, minLength: 8})}
                            errorsRef={errors}
                            type={'password'}
                            label={'Kata Sandi'}
                            validationMessage={'Kata sandi minimal 8 digit'}
                            noPadding={true}
                        />
                        <InputText
                            name={'password2'}
                            handler={register({required: true, minLength: 8})}
                            errorsRef={errors}
                            type={'password'}
                            label={'Konfirmasi'}
                            validationMessage={'Konfirmasi kata sandi harus sama'}
                            noPadding={true}
                        />
                        <div className={styles.disclaimer}>
                            <p>Dengan mendaftar Anda otomatis setuju terhadap <Link href='/ketentuan-layanan'><a>ketentuan
                                layanan</a></Link> dan <Link href='/kebijakan-privasi'><a>kebijakan privasi</a></Link>.
                            </p>
                        </div>
                        <FormAction variant={'main'} label={isLoading ? 'Loading...' : 'Daftar Sekarang'}
                                    disabled={isLoading} otherLink={'/'}/>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}