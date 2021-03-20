import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AllActions from '../../GlobalState/actions/AllActions'
import FromContainer from '../../components/authentication/formContainer/FromContainer'
import Errors from '../../components/authentication/errors/Errors'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const dispatch = useDispatch()

    const onUsernameChange = e => {
        setUsername(e.target.value)
    }
    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        const val = localStorage.getItem('isLogIn')
        if(val === "true") {
            window.location.replace("/home")
        }
    }, [])

    function onLogin(e) {
        e.preventDefault()
        if (username.trim() === "" || !username) {
            setErrors("Enter Valid Username")
            return
        }
        if (password.length < 6) {
            setErrors('Password length greater than six charecters')
            return
        }
        setErrors("")
        dispatch(AllActions.login())
        window.location.replace("/home")

    }

    return (
        <div className="main-container">
            <div className="form-block">
                <h2>Login</h2>
                <Errors errors={errors}/>
                <FromContainer 
                    username={username}
                    password={password}
                    onUsernameChange={onUsernameChange}
                    onPasswordChange={onPasswordChange}
                    onLogin={onLogin}
                /> 
            </div>
        </div>
    )
}
