import {useState, useContext} from "react";
import Router from 'next/router';
import {Layout, Section, LogoLink} from '../components/global';
import {useForm} from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import {FormAction, InputText} from '../components/form';
import User from "../src/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import UserContext from '../components/global/userContext';

export default function PageMasuk() {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const {signIn} = useContext(UserContext);
    const MySwal = withReactContent(Swal);

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        User.login(data)
            .then(response => response.json())
            .then((result) => {
                setIsLoading(false);

                // Handle for success error.
                if (result.success) {

                    // Save Auth.
                    signIn(result.data);

                    const routeTo = result.data.is_profile_completed ? '/dashboard' : '/dashboard/pengaturan/akun';

                    // Redirect user to dashboard.
                    Router.push(routeTo);
                } else {
                    MySwal.fire({
                        icon: 'error',
                        text: result.data,
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
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