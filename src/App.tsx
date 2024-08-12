import './styles/main.css'
import Button from './components/Button'
import TextInput from './components/TextInput'
import loopIcon from './assets/loopIcon.svg'
import loopIcon2 from './assets/loopIcon2.svg'
import loopIconTablet from './assets/loop-icon-tablet.svg'
import OMS from './assets/OMS_Blue.svg'
import FSCC from './assets/FSCC.svg'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  
  useEffect(() => {
    const user: string | null = localStorage.getItem('username')
    if (user){
      setUsername(user)
      setIsSignedIn(true)
      return
    }
  }, [isSignedIn])

  const onChangeUsername = useCallback((text: string) => {
    setUsername(text)
    ToggleButtonDisabled()
  }, [username])

  const onChangePassword = useCallback((text: string) => {
    setPassword(text)
    ToggleButtonDisabled()
  }, [password])

  const ToggleButtonDisabled = useCallback(() => {
    if (username === '' || password === '') {
      setButtonDisabled(true)
      return
    }
    setButtonDisabled(false)
  }, [username, password])

  async function loginButtonClicked () {
    const settings = {
      method: 'POST',
      'Content-type': 'application/json',
      body: JSON.stringify({username, password})
    }

    const response: Response = await fetch('https://auth-fscc.free.beeceptor.com/auth', settings)

    if (response.ok) {
      localStorage.setItem('username', username)
      setIsSignedIn(true)
      setUsername('')
      setPassword('')
      setButtonDisabled(true)
    }
  }

  function logoutButtonClicked () {
    localStorage.removeItem('username')
    setIsSignedIn(false)
  }

  return (
    <div className='container'>
      <img className='loop-icon' src={loopIcon} alt="" />
      <img className='loop-icon-2' src={loopIcon2} alt="" />
      <img className='loop-icon-tablet' src={loopIconTablet} alt="" />
      <div className='sub-container-1'>

      </div>
      <div className='sub-container-2'>
        <img className='oms-logo' src={OMS} alt="" />
        <img className='fscc-logo' src={FSCC} alt="" />
        <div className='form-wrapper'>
          {isSignedIn ? 
          <>
            <p className='username-display'><b>Username:</b> {username}</p>
            <Button type='primary' value='Atsijungti' onClick={logoutButtonClicked}/>
          </>
          :
          <>
            <TextInput type='regular' placeholder='Vartotojo vardas' autoFocus={true} onChange={onChangeUsername}/>
            <TextInput type='secure' placeholder='Slaptažodis' onChange={onChangePassword}/>
            <Button type='primary' value='Prisijungti' onClick={loginButtonClicked} disabled={buttonDisabled}/>
          </>
        }
         
        </div>
      </div>
    </div>
  )
}

export default App
