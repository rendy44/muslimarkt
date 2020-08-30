import React from "react";
import {Layout} from "../components/global";
import {Hero, RegisterSection} from "../components/employer";

export default function PageCariKandidat() {
    return (
        <Layout docTitle={'Cari Kandidat'} isHideTitle={true}>
            <Hero/>
            <RegisterSection/>
        </Layout>
    )
}