import './App.css';
import { useState } from 'react';

function App() {
  const [name, yangi_ism] = useState("Alibek")
  const [nima , ozgarishi] = useState([
    {nomi: "Nexia" , rangi:"qora" , yili:"2016" , Id:1},
    {nomi: "Damas" , rangi:"oq" , yili:"2021" , Id:2},
    {nomi: "Cobalt" , rangi:"ko'k" , yili:"2023" , Id:3}
  ])


  const ozgardi = () => {
    ozgarishi   ([
      {nomi: "Jentra" , rangi:"qora" , yili:"2019" , Id:1},
      {nomi: "Malibu" , rangi:"oq" , yili:"2018" , Id:2},
      {nomi: "TAxo" , rangi:"qora" , yili:"2021" , Id:3}
    ])
  }
  const ozgartir = () => {
    yangi_ism("Someone")
  }

  return (
    <div className="App">
      {nima.map((element)=>{
        return(
          <h1>{element.nomi} {element.yili}</h1>
          
        )
        
      })}
      <h1>{name} Restoroniga xush kelibisiz! </h1>
      <button onClick={ozgartir}>Tap!</button>
      <button onClick={ozgardi}>Tap</button>
    </div>
  )
}

export default App;
