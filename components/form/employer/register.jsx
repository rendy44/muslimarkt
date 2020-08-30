import React, {useState} from "react";
import {useRouter} from "next/router";
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import {FormAction, InputText} from "../index";
import styles from './register.module.scss';
import Link from "next/link";
import User from "../../../src/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {FullLoading} from "../../global";

export default function RegisterEmployerForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const MySwal = withReactContent(Swal);

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        User.addCompany(data)
            .then(result => {
                setIsLoading(false);

                let swalType = 'error';

                // Handle for success error.
                if (result.data.success) {
                    swalType = 'success';
                }

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

                MySwal.fire({
                    icon: 'error',
                    text: err.message,
                });
            })
    };

    if (isLoading) {
        return (<FullLoading/>)
    } else {
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
                    type={'password'}
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
}

RegisterEmployerForm.propTypes = {
    userKey: PropTypes.string.isRequired
}