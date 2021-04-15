import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cookie from 'universal-cookie'

import Login from '../../pages/landingpage/Login'
import Homepage from '../../pages/landingpage/Homepage'
import Forgotpassword from '../../pages/landingpage/Forgotpassword'
import Signup from '../../pages/landingpage/Signup'
import Mentoring from '../../pages/landingpage/Mentoring'
import Pitchdeck from '../../pages/landingpage/Pitchdeck'
import Perks from '../../pages/landingpage/Perks'
import Community from '../../pages/landingpage/Community'
import Pitch from '../../pages/landingpage/Pitch'
import Pricing from '../../pages/landingpage/Pricing'
import HomeRegist from '../../pages/Register/HomeRegist'
import confirmationCode from '../../pages/confirmationEmail/confirmatioEmail'
import CompanyInformation1 from '../../pages/Register/CompanyInformation1'
import CompanyInformation2 from '../../pages/Register/CompanyInformation2'
import CompanyInformation3 from '../../pages/Register/CompanyInformation3'
import CompanyInformation4 from '../../pages/Register/CompanyInformation4'
import CompanyInformation5 from '../../pages/Register/CompanyInformation5'
import PersonalInformation1 from '../../pages/Register/PersonalInformation1'
import PersonalInformation2 from '../../pages/Register/PersonalInformation2'
import CheckoutPage from '../../pages/Register/CheckoutPage'
import FinishRegister from '../../pages/Register/FinishRegister'
import Profile from "../../components/profile/Profile";

import Dashboard from '../../pages/dashboard/dashboard/dashboard' 
import Dashboard_Pitchdeck from '../../pages/dashboard/pitchdeck/pitchdeck' 
import Dashboard_Pitch from '../../pages/dashboard/pitch/pitch' 
import Detail_pitch from '../../pages/dashboard/pitch/detailPitch'
import pitchdeck from '../../pages/dashboard/pitchdeck/pitchdeck'


const Routes = () => {
    const cookie = new Cookie();
    const dispatch = useDispatch()

    const _login = (objUser) => {dispatch({ 
        type : "LOGIN",
        payload : objUser
    })}

    useEffect(() => {
        const objCookie = cookie.get('username')
        if (objCookie !== undefined) {
            {_login(objCookie)}
        } else {
            console.log('cookie2', objCookie)
        }
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Mentoring" component={Mentoring}/>
                <Route path="/Signup" component={Signup} />
                <Route path="/Forgotpassword" component={Forgotpassword} />
                <Route path="/Login" component={Login}/>
                <Route path="/Pitchdeck" component={Pitchdeck} />
                <Route path="/Perks" component={Perks} />
                <Route path="/Community" component={Community} />
                <Route path="/Pitch" component={Pitch} />
                <Route path="/Pricing" component={Pricing} />
                <Route path="/Register" component={HomeRegist} />
                <Route path="/confirmationCode/:confirmationCode" component={confirmationCode} />
                <Route path="/CompanyInformation1" component={CompanyInformation1} />
                <Route path="/CompanyInformation2" component={CompanyInformation2} />
                <Route path="/CompanyInformation3" component={CompanyInformation3} />
                <Route path="/CompanyInformation4" component={CompanyInformation4} />
                <Route path="/CompanyInformation5" component={CompanyInformation5} />
                <Route path="/PersonalInformation1" component={PersonalInformation1} />
                <Route path="/PersonalInformation2" component={PersonalInformation2} />
                <Route path="/CheckoutPage" component={CheckoutPage} />
                <Route path="/FinishRegister" component={FinishRegister}/>

                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Dashboard-Pitchdeck" component={Dashboard_Pitchdeck} />
                <Route path="/Dashboard-Pitch" component={Dashboard_Pitch}/>
                <Route path="/Dashboard-Detail-Pitch/:id" component={Detail_pitch} />
                <Route path="/Dashboard-profile-page/:id" component={Profile} />
            </Switch>
        </Router>
    )
}
export default Routes