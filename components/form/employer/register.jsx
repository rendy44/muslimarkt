import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FormAction, InputText} from "../index";
import styles from './register.module.scss';
import Link from "next/link";

export default function RegisterEmployerForm(props) {
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (e) => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText
                name={'name'}
                label={'Nama Perusahaan'}
                placeholder={'Seperti pada dokumen pendirian usaha'}
                handler={register({required: true})}
                errorsRef={errors}/>
            <InputText
                name={'email'}
                label={'Email'}
                placeholder={'Email perusahaan'}
                handler={register({required: true})}
                errorsRef={errors}/>
            <InputText
                name={'password'}
                label={'Kata Sandi'}
                placeholder={'Minimal 8 digit'}
                type={'password'}
                handler={register({required: true, minLength: 8})}
                errorsRef={errors}/>
            <InputText
                name={'password2'}
                label={'Konfirmasi'}
                placeholder={'Ulangi kata sandi'}
                handler={register({required: true})}
                errorsRef={errors}/>
            <div className={styles.disclaimer}>
                <p>Dengan mendaftar Anda otomatis setuju terhadap <Link href='/ketentuan-layanan'><a>ketentuan
                    layanan</a></Link> dan <Link href='/kebijakan-privasi'><a>kebijakan privasi</a></Link>.
                </p>
            </div>
            <FormAction label={isLoading ? 'Loading...' : 'Daftar Sekarang'} otherLink={'/'}
                        otherLinkLabel={'Batal'} disabled={isLoading}/>
        </form>
    )
}