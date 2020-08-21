import Router from 'next/router';
import {useContext, useEffect} from "react";
import UserContext from "../components/global/userContext";

export default function PageKeluar() {
    const {signOut} = useContext(UserContext);

    useEffect(() => {
        signOut();

        Router.push('/');
    }, []);

    return (
        <>
        </>
    )
}