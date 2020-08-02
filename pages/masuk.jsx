import {useState, useContext} from "react";
import Router from 'next/router';
import {Layout, Section, LogoLink} from '../components/global';
import {useForm} from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import {Btn, LinkBtn} from '../components/form';
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

                    // Redirect user to dashboard.
                    Router.push('/dashboard');
                } else {
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        icon: 'error',
                        text: data.data,
                    });
                }
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
                        <label className={errors.email && 'err'}>Alamat Email
                            <input name='email' type="email" placeholder="Alamat email"
                                   ref={register({required: true})}/>
                            {errors.email && <span>Alamat email harus diisi!</span>}
                        </label>
                        <label className={errors.password && 'err'}>Kata Sandi
                            <input name='password' type="password" placeholder="Kata sandi"
                                   ref={register({required: true, minLength: 8})}/>
                            {errors.password && <span>Kata sandi harus diisi!</span>}
                        </label>
                        <div className={styles.action}>
                            <Btn isSubmit={true} variant='main' label={buttonLbl} disabled={isLoading}/>
                            <LinkBtn href='/' label='Batal' variant='transparent'/>
                        </div>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}