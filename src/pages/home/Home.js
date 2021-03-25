/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllActions from '../../GlobalState/actions/AllActions'
import AboutUs from '../../components/aboutUs/AboutUs'
import FormComponent from '../../components/formComponent/FormComponent'
import LogoutButton from '../../components/logoutButton/LogoutButton'
import WeatherContainer from '../../components/weatherContainer/MainContainer/WeatherContainer'


export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.customAsyncData);
    const dataTwo = useSelector(state => state.customAsyncDataTwo);

    useEffect(() => {
        const val = localStorage.getItem('isLogIn')
        if(val === "false") {
            window.location.replace("/")
        }
    }, [data, dataTwo])



    const onLogout = () => {
        dispatch(AllActions.logout())
        window.location.reload()
    }
    
    const onChangeCity = (e) => {
        dispatch(AllActions.getAsyncData(e.target.value))
       
    }

    const changeAboutus = () => {
        if(isOpen === false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    return (
        <div className="home-container">
            <FormComponent onChangeCity={onChangeCity} />
            <WeatherContainer data={data} dataTwo={dataTwo} />
            <AboutUs changeAboutus={changeAboutus} isOpen={isOpen}/>
            <LogoutButton onLogout={onLogout}/>
        </div>
    )
}
