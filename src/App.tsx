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

  useEffect(() => {
    if (username && password) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [username, password]);

  const onChangeUsername = useCallback((text: string): void => {
    setUsername(text);
  }, []);

  const onChangePassword = useCallback((text: string): void => {
    setPassword(text);
  }, []);

  const onLoginButtonClicked = async (): Promise<void> => {
    const settings = {
      method: 'POST',
      'Content-type': 'application/json',
      body: JSON.stringify({ username, password }),
    };

    const response: Response = await fetch('https://auth-fscc.free.beeceptor.com/auth',settings);

    if (response.ok) {
      localStorage.setItem('username', username)
      setIsSignedIn(true)
      setUsername('')
      setPassword('')
      setButtonDisabled(true)
    }
  }

  const logoutButtonClicked = (): void => {
    localStorage.removeItem('username')
    setIsSignedIn(false)
  }

  return (
    <div className='container'>
      <img className='loop-icon' src={loopIcon} alt="" />
      <img className='loop-icon-2' src={loopIcon2} alt="" />
      <img className='loop-icon-tablet' src={loopIconTablet} alt="" />
      <div className='sub-container-1'></div>
      <div className='sub-container-2'>
        <img className='oms-logo' src={OMS} alt="" />
        <img className='fscc-logo' src={FSCC} alt="" />
        <div className='form-wrapper'>
          {isSignedIn ? 
          <>
            <p className='username-display'><b>Username:</b> {username}</p>
            <Button type='primary' title='Atsijungti' onClick={logoutButtonClicked}/>
          </>
          :
          <>
            <TextInput type='regular' placeholder='Vartotojo vardas' autoFocus={true} onChange={onChangeUsername}/>
            <TextInput type='secure' placeholder='Slaptažodis' onChange={onChangePassword}/>
            <Button type='primary' title='Prisijungti' onClick={onLoginButtonClicked} disabled={buttonDisabled}/>
          </>
          }
         
        </div>
      </div>
    </div>
  )
}

export default App
