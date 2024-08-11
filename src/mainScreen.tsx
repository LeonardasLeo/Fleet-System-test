import './styles/main.css'
import Button from './components/Button'
import TextInput from './components/TextInput'
import Vector from './assets/Vector.svg'
import Vector1 from './assets/Vector1.svg'

function App() {
  return (
      <div className='container'>
        <img className='vector' src={Vector1} alt="" />
        <img className='vector1' src={Vector} alt="" />
        <div className='sub-container-1'>

        </div>
        <div className='sub-container-2'>
          <TextInput type='regular' placeholder='Vartotojo vardas' autoFocus={true}/>
          <TextInput type='secure' placeholder='Slaptazodis'/>
          <Button type='secondary' value='Prisijungti' onClick={() => {console.log('labas')}}/>
        </div>
      </div>
  )
}

export default App
