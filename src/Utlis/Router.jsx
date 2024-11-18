import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTheatements from "../components/AllTheatements/AllTheatements";
import MyAppoinments from "../components/MyAppoinments/MyAppoinments";
import Profile from "../components/Profle/Profile";

    const router = createBrowserRouter([
        
        {
            path : '/',
            element : <MainLayout></MainLayout>,
            children : [
                {
                    path : '/',
                    element : <Home></Home>,
                    loader : async () => {
                        const servicesRes = await fetch('services.json')
                        const services = await servicesRes.json()

                        const feedbackRes = await fetch('happyclinets.json')
                        const feedback = await feedbackRes.json()

                        return {services,feedback}
                    }
                },
                {
                    path : 'about',
                    element : <About></About>
                },
                {
                    path : 'all-threatments',
                    element : <AllTheatements></AllTheatements>,
                    loader : async () => {
                        const servicesRes = await fetch('services.json')
                        const services = await servicesRes.json()

                        const feedbackRes = await fetch('happyclinets.json')
                        const feedback = await feedbackRes.json()

                        return {services,feedback}
                    }
                },
                {
                    path : 'my-appoinments',
                    element : <MyAppoinments></MyAppoinments>
                },
                {
                    path : 'profile',
                    element : <Profile></Profile>
                }
            ]
        }
    ])


    export default router;