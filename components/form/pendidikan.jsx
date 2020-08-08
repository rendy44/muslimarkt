import PropTypes from 'prop-types';
import {DropDown, FormAction, InputText, TextArea} from "./index";
import {useForm} from "react-hook-form";
import {useState} from "react";

export default function PendidikanForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data, e) => {

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='frow'>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'insitusi'}
                        label={'Institusi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <DropDown
                        name={'kualifikasi'}
                        label={'Kualifikasi'}
                        values={['SMA/SMU/SMK/STM', 'Diploma', 'Sarjana', 'Magister', 'Doktor']}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <InputText
                        name={'bidang_studi'}
                        label={'Bidang studi'}
                        handler={register({required: true})}
                        errorsRef={errors}
                    />
                </div>
                <div className='col-sm-1-2'>
                    <div className='frow'>
                        <div className='col-xs-1-2 col-sm-1-3'>
                            <DropDown
                                name={'bulan_lulus'}
                                label={'Kelulusan'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}
                            />
                        </div>
                        <div className='col-xs-1-2 col-sm-2-3'>
                            <InputText
                                name={'tahun_lulus'}
                                handler={register({required: true})}
                                errorsRef={errors}
                                placeholder={'Tahun lulus'}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-1-1'>
                    <TextArea
                        name={'keterangan'}
                        label={'Keterangan'}
                        placeholder={'Keterangan tambahan'}
                        handler={register}
                        errorsRef={errors}
                        rows={6}/>
                </div>
            </div>
            <FormAction
                label={isLoading ? 'Loading...' : 'Simpan'}
                disabled={isLoading}
                otherLink={'/dashboard/pengaturan/pendidikan'}/>
        </form>
    )
}

PendidikanForm.propTypes = {
    pendidikanId: PropTypes.string
};