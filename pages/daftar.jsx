import { Layout, Section } from '../components/global';
import { useForm } from "react-hook-form";


export default function PageDaftar() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Layout docTitle='Daftar' isHideTitle={true} isHideHeader={true} isHideFooter={true}>
            <Section id='dafar'>
                <form onSubmit={handleSubmit(onSubmit)}>

                </form>
            </Section>
        </Layout>
    )
}