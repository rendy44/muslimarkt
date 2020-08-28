import React, {useEffect, useState, useContext} from 'react';
import {useRouter} from 'next/router';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PengalamanForm from "../../../../components/form/pengalaman";
import UserContext from "../../../../components/global/userContext";
import Experience from "../../../../src/experience";
import {FullLoading} from "../../../../components/global";

export default function PageEditPengalaman() {
    const {userKey} = useContext(UserContext);
    const [dataObject, setDataObject] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    let router = useRouter();
    let {pengalamanSlug} = router.query;
    useEffect(() => {

        // Only if userKey is defined.
        if (userKey && !isLoaded) {
            Experience.detail(pengalamanSlug, userKey)
                .then(result => {

                    // Normalize loading.
                    setIsLoaded(true)

                    // Validate request.
                    if (result.data.success) {

                        // Save object.
                        setDataObject(result.data.data);
                    } else {

                        // Illegal action, force back.
                        router.push('/dashboard/pengaturan/pengalaman')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userKey, isLoaded])

    return (
        <DashboardSettingLayout title={'Sunting Pengalaman'} isNoAction={true}>
            {isLoaded ? <PengalamanForm fieldData={dataObject}/> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}