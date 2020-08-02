import {useEffect} from 'react';
import Router from 'next/router';

export default function PagePengaturan() {
    useEffect(() => {
        Router.push('/dashboard/pengaturan/akun')
    });
    return (
        <>
        </>
    )
}