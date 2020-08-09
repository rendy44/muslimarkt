import {useState} from 'react';
import {useForm} from "react-hook-form";
import {DashboardSettingLayout} from "../../../../components/dashboard";
import {Btn, DropDown, FormAction, InputText} from "../../../../components/form";

export default function PageEditKeterampilan() {
    const {register, handleSubmit, errors} = useForm();
    const [fieldLength, setFieldLength] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    let fieldHtml = [];
    for (let i = 0; i < fieldLength; i++) {
        fieldHtml.push(
            <div className='frow' key={i}>
                <div className='col-sm-2-3'>
                    <InputText name={'val_' + i} label='Keterampilan' handler={register} errorsRef={errors}/>
                </div>
                <div className='col-sm-1-3'>
                    <DropDown name={'lvl_' + i} label={'Tingkat'} values={['Pemula', 'Menengah', 'Lanjut']}
                              handler={register} errorsRef={errors}/>
                </div>
            </div>
        );
    }

    const onSubmit = async (data, e) => {
        console.log(data);
    }

    const addNew = (e) => {
        setFieldLength(fieldLength + 1);
    }

    const deleteLast = (e) => {
        if (fieldLength > 1) {
            setFieldLength(fieldLength - 1);
        }
    }

    const maybeDeleteButton = fieldLength > 1 ?
        <Btn isSubmit={false} label={'Hapus'} variant={'danger'} onClick={deleteLast}/> : '';
    return (
        <DashboardSettingLayout title={'Sunting Keterampilan'} isNoAction={true}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fieldHtml}
                <div className='frow row-start'>
                    <Btn isSubmit={false} label={'Tambah'} variant={'success'} onClick={addNew}/>
                    <span>&nbsp;&nbsp;</span>
                    {maybeDeleteButton}
                </div>
                <FormAction disabled={isLoading} label={'Simpan'} otherLink={'/dashboard/pengaturan/keterampilan'}/>
            </form>
        </DashboardSettingLayout>
    )
}