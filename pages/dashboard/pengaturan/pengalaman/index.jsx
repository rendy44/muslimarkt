import React, {useContext, useEffect, useState} from "react";
import {DashboardSettingLayout} from "../../../../components/dashboard";
import {ExperienceItem, Experiences} from "../../../../components/dashboard/pengalaman";
import Experience from "../../../../src/experience";
import UserContext from "../../../../components/global/userContext";
import {FullLoading} from "../../../../components/global";

export default function PagePengalaman() {
    const {userKey} = useContext(UserContext);
    const [contentHtml, setContentHtml] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {

        let experienceHtml = [];

        // Only fetch if items hasn't been loaded yet.
        if (userKey && !isLoaded) {

            // Fetch experiences.
            Experience.get(userKey)
                .then(result => {

                    // Update load status.
                    setIsLoaded(true);

                    // Validate.
                    if (result.data.success) {

                        // Loop data.
                        result.data.data.map((experience, index) => {
                            return (
                                experienceHtml.push(<ExperienceItem
                                    key={index}
                                    dbId={experience.id}
                                    slug={experience.slug}
                                    role={experience.role}
                                    position={experience.position}
                                    isOverSeas={experience.overseas}
                                    companyName={experience.company}
                                    companyLocation={experience.province}
                                    dateStart={experience.month_start + ' ' + experience.year_start}
                                    dateEnd={experience.month_end && experience.year_end ? experience.month_end + ' ' + experience.year_end : ''}
                                    companyIndustry={experience.industry}
                                />)
                            )
                        });

                        setContentHtml(experienceHtml);
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userKey, isLoaded])
    return (
        <DashboardSettingLayout title={'Pengalaman'}>
            {isLoaded ? <Experiences>
                {contentHtml}
            </Experiences> : <FullLoading/>}
        </DashboardSettingLayout>
    )
}