import './styles/main.css'
import Button from './components/Button'
import TextInput from './components/TextInput'
import Vector from './assets/Vector.svg'
import Vector1 from './assets/Vector1.svg'
import OMS from './assets/OMS_Blue.svg'
import FSCC from './assets/FSCC.svg'

function App() {
  return (
    <div className='container'>
      <img className='vector' src={Vector1} alt="" />
      <img className='vector1' src={Vector} alt="" />
      <div className='sub-container-1'>

      </div>
      <div className='sub-container-2'>
        <div className='form-wrapper'>
          <img className='oms-logo' src={OMS} alt="" />
          <TextInput type='regular' placeholder='Vartotojo vardas' autoFocus={true} />
          <TextInput type='secure' placeholder='Slaptazodis' />
          <Button type='primary' value='Prisijungti' onClick={() => {
            console.log('labas')
          }}
          />
          <img className='fscc-logo' src={FSCC} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
