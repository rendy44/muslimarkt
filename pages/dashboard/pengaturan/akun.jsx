import {DashboardSettingLayout} from "../../../components/dashboard";
import {Btn, DropDown, FormAction, InputText} from "../../../components/form";

export default function PageAkun() {
    return (
        <DashboardSettingLayout title={'Pengaturan Akun'}>
            <form>
                <div className='frow'>
                    <div className='col-sm-1-2'>
                        <InputText name={'namaDepan'} isRequired={true} label={'Nama Depan'}/>
                    </div>
                    <div className='col-sm-1-2'>
                        <InputText name={'namaBelakang'} label={'Nama Belakang'}/>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown name={'tanggalLahir'} label={'Tanggal Lahir'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown name={'bulanLahir'} label={'Bulan Lahir'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown name={'tahunLahir'} label={'Tahun Lahir'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText name={'alamat'} label={'Alamat'} isRequired={true}/>
                    </div>
                    <div className='col-sm-1-3'>
                        <InputText name={'kodePos'} label={'Kode Pos'} isRequired={true}/>
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown name={'kota'} label={'Kota'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-2'>
                        <DropDown name={'propinsi'} label={'Propinsi'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-1-3'>
                        <DropDown name={'jeniIdentitas'} label={'Jenis Identitas'} isRequired={true}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </DropDown>
                    </div>
                    <div className='col-sm-2-3'>
                        <InputText name={'noIdentitas'} label={'Nomor Identitas'} isRequired={true}/>
                    </div>
                </div>
                <FormAction label={'Simpan'} otherLink={'/dashboard/pengaturan/akun'}/>
            </form>
        </DashboardSettingLayout>
    )
}