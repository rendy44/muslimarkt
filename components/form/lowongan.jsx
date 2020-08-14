import PropTypes from 'prop-types';
import {DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import {useState} from "react";

export default function LamaranForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data, e) => {

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='frow items-start'>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'gaji'}
                        label={'Gaji'}
                        placeholder={'Gaji yang diharapkan'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'gabung'}
                        label={'Bersedia gabung'}
                        values={['Segera', 'Setelah sebulan', 'Lebih dari sebulan']}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-1'>
                    <TextArea
                        name={'catatan'}
                        label={'Catatan'}
                        placeholder={'Promosikan diri Anda'}
                        handler={register}
                        errorsRef={errors}
                        rows={8}/>
                </div>
            </div>
            <FormAction
                label={isLoading ? 'Loading...' : 'Kirim Lamaran'}
                disabled={isLoading}/>
        </form>
    )
}

LamaranForm.propTypes = {
    lowonganSlug: PropTypes.string.isRequired
};