import React, {useEffect, useContext, useState} from "react";
import {Layout} from "../components/global";
import {Hero, RegisterSection} from "../components/employer";
import UserContext from "../components/global/userContext";

export default function PageCariKandidat() {
    const {userKey} = useContext(UserContext);

    return (
        <Layout docTitle={'Cari Kandidat'} isHideTitle={true}>
            <Hero/>
            <RegisterSection userKey={userKey}/>
        </Layout>
    )
}