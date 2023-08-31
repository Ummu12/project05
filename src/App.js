import logo from './logo.svg';
import './App.css';
import { Watch } from './Component/Watch,';
import "./Component/style.css";



function App() {
  return (
    <div className='main'>
      <h1>Watches</h1>

      <Watch
      title="Diesel"
      category="Watch men"
      price="85,969"
      desc="Diesel Analog Black Dial (Big dial) Men's Watch-DZ7395"
      />
<Watch
      title="Olevs"
      category="Watch men"
      price="55,699"
      desc="OLEVS Chronograph Analogue Men's Luxury Watch (Blue Dial)"
      />

<Watch
      title="Rado"
      category="Watch Women's"
      price="2,39,999"
      desc="Rado Original Boyfriend Analog Silver Dial Women's Watch-ES3838"
      />

<Watch
      title="Seiko"
      category="Watch Women's"
      price="1,55,000"
      desc="Seiko Lord Quartz Black Dial Chronograph Date Watch for Women's SPC103P1"
      />
      <Watch
      title="Titan"
      category="Watch Women's"
      price="25,899"
      desc="Titan Neo Analog Silver Dial Men's Watch-NN1733KM03/NR1733KM03"
      />
      <Watch
      title="Fossil"
      category="Watch Women's"
      price="95,999"
      desc="Fossil Analog White Dial Men's Watch-FS4795"
      />
      <Watch
      title="Timex"
      category="Watch Women's" 
      price="99,999" 
      desc="TIMEX Analog Blue Dial Women's Watch-TWHG03SMU10"
      
      />
      <Watch
      title="HUNRUY"
      category="Watch Women's"
      price="45,999"
      desc="HUNRUY Analog Women's Watch ( Dial Silver-And-Gold Colored Strap)"
      />
      <Watch
      title="Fossil"
      category="Watch Women's"
      price="69,999"
      desc="Fossil Riley Analog Rose Gold Dial Women's Watch - ES2811"
      />

    </div>
    
  );
}

export default App;
