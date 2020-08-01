import {useState} from "react";
import {useRouter} from 'next/router';
import {Layout, Section, LogoLink} from '../components/global';
import {useForm} from "react-hook-form";
import styles from '../components/daftar/style.module.scss';
import {Btn, LinkBtn} from '../components/form';
import User from "../class/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function PageMasuk() {
    const {register, handleSubmit, watch, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        User.login(data)
            .then(response => response.json())
            .then((data) => {
                setIsLoading(false);
                let swalType = 'error';
                // Handle for success error.
                if (data.success) {
                    swalType = 'success';
                    e.target.reset();
                }
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    icon: swalType,
                    text: data.data,
                    onClose: () => {
                        if (data.success) {
                            router.push('/');
                        }
                    }
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
                            <Btn isSubmit={true} variant='main' label={buttonLbl}/>
                            <LinkBtn href='/' label='Batal' variant='transparent'/>
                        </div>
                    </form>
                </div>
            </Section>
        </Layout>
    )
}