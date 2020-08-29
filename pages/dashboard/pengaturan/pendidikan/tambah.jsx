import React, {useContext, useState, useEffect} from 'react';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PendidikanForm from "../../../../components/form/pendidikan";
import UserContext from "../../../../components/global/userContext";
import {FullLoading} from "../../../../components/global";

export default function PageTambahPendidikan() {
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
        <DashboardSettingLayout title={'Tambah Pendidikan'} isNoAction={true}>
            {isLoaded ? <PendidikanForm userKey={userKey}/> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}