import {DashboardSettingLayout} from "../../../../components/dashboard";
import PengalamanForm from "../../../../components/form/pengalaman";
import UserContext from "../../../../components/global/userContext";
import React, {useContext, useEffect, useState} from "react";
import {FullLoading} from "../../../../components/global";

export default function PageTambahPengalaman() {
    const {userKey} = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        // Make sure userKey is defined.
        if (userKey) {

            // Update status.
            setIsLoaded(true)
        }

    }, [userKey])
    return (
        <DashboardSettingLayout title={'Tambah Pengalaman'} isNoAction={true}>
            {isLoaded ? <PengalamanForm userKey={userKey}/> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}