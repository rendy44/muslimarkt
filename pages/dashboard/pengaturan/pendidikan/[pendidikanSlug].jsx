import {useRouter} from 'next/router';
import {DashboardSettingLayout} from "../../../../components/dashboard";
import PendidikanForm from "../../../../components/form/pendidikan";
import UserContext from "../../../../components/global/userContext";
import React, {useContext, useEffect, useState} from "react";
import Education from "../../../../src/education";
import {FullLoading} from "../../../../components/global";

export default function PageEditPendidikan() {
    const {userKey} = useContext(UserContext);
    const [dataObject, setDataObject] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    let router = useRouter();
    let {pendidikanSlug} = router.query;
    useEffect(() => {

        // Only if userKey is defined.
        if (userKey && !isLoaded) {
            Education.detail(pendidikanSlug, userKey)
                .then(result => {

                    // Normalize loading.
                    setIsLoaded(true)

                    // Validate request.
                    if (result.data.success) {

                        // Save object.
                        setDataObject(result.data.data);
                    } else {

                        // Illegal action, force back.
                        router.push('/dashboard/pengaturan/pendidikan')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userKey, isLoaded])
    return (
        <DashboardSettingLayout title={'Sunting Pendidikan'} isNoAction={true}>
            {isLoaded ? <PendidikanForm userKey={userKey} fieldData={dataObject}/> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}