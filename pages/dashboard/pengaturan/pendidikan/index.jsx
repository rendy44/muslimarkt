import React, {useState, useEffect, useContext} from "react";
import {DashboardSettingLayout} from "../../../../components/dashboard";
import {Studies, StudyItem} from "../../../../components/dashboard/pendidikan";
import UserContext from "../../../../components/global/userContext";
import {ExperienceItem, Experiences} from "../../../../components/dashboard/pengalaman";
import Education from "../../../../src/education";
import {FullLoading} from "../../../../components/global";

export default function PagePendidikan() {
    const {userKey} = useContext(UserContext);
    const [contentHtml, setContentHtml] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        let studyHtml = [];

        // Only fetch if items hasn't been loaded yet.
        if (userKey && !isLoaded) {

            // Fetch experiences.
            Education.get(userKey)
                .then(result => {

                    // Update load status.
                    setIsLoaded(true);

                    // Validate.
                    if (result.data.success) {

                        // Loop data.
                        result.data.data.map((education, index) => {
                            return (
                                studyHtml.push(<StudyItem
                                    key={index}
                                    slug={education.slug}
                                    institute={education.institute}
                                    qualification={education.qualification}
                                    major={education.major}
                                    graduation={education.month_graduate + ' ' + education.year_graduate}/>)
                            )
                        });

                        setContentHtml(studyHtml);
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userKey, isLoaded])

    return (
        <DashboardSettingLayout title={'Pendidikan'}>
            {isLoaded ? <Studies>
                {contentHtml}
            </Studies> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}