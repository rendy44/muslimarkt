import {useState, useContext} from "react";
import Router from 'next/router';
import {Layout, Section, LogoLink} from '../components/global';
import {useForm} from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import {FormAction, InputText} from '../components/form';
import User from "../class/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import UserContext from '../components/global/userContext';

export default function PageMasuk() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const {signIn} = useContext(UserContext);

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        User.login(data)
            .then(response => response.json())
            .then((data) => {
                setIsLoading(false);

                // Handle for success error.
                if (data.success) {

                    // Save Auth.
                    signIn(data.data);

                    const routeTo = data.data.is_profile_completed ? '/dashboard' : '/dashboard/pengaturan/akun';

                    // Redirect user to dashboard.
                    Router.push(routeTo);
                } else {
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        icon: 'error',
                        text: data.data,
                    });
                }
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
    const buttonLbl = isLoading ? 'Loading...' : 'Masuk';

    return (
        <Layout docTitle='Masuk' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='masuk' extraClass={styles.section} customSize='col-sm-6-7 col-md-1-2'>
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
                            handler={register({required: true})}
                            errorsRef={errors}
                            type={'password'}
                            label={'Kata Sandi'}
                            noPadding={true}
                        />
                        <FormAction label={buttonLbl} otherLink={'/'} disabled={isLoading}/>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}