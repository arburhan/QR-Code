import './App.css'
import Addqr from './components/Addqr/Addqr.jsx';
import DecodeQR from './components/DecodeQR/DecodeQR.jsx';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        QR Code Factory
      </h1>
      <div className='flex items-center justify-center gap-5'>
        <Addqr />
        <DecodeQR />
      </div>
    </div>
  )
}

export default App
