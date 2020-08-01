import {useContext} from 'react';
import {Layout} from "../components/global";
import UserContext from '../components/global/userContext';

export default function PageDashboard() {
    const {userKey, isProfileCompleted} = useContext(UserContext);
    const isLoggedIn = !!userKey;

    return (
        <Layout docTitle={'Dashboard'} isHideTitle={true}>

        </Layout>
    )
}