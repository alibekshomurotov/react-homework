import './App.css';
import { useState } from 'react';
import { Header, Content , Product, Student , Counter , Almashtir, Like}  from './reviev/new';  

function App() {
//   const [name, yangi_ism] = useState("Alibek")
//   const [nima , ozgarishi] = useState([
//     {nomi: "Nexia" , rangi:"qora" , yili:"2016" , Id:1},
//     {nomi: "Damas" , rangi:"oq" , yili:"2021" , Id:2},
//     {nomi: "Cobalt" , rangi:"ko'k" , yili:"2023" , Id:3}
//   ])


//   const ozgardi = () => {
//     ozgarishi   ([
//       {nomi: "Jentra" , rangi:"qora" , yili:"2019" , Id:1},
//       {nomi: "Malibu" , rangi:"oq" , yili:"2018" , Id:2},
//       {nomi: "TAxo" , rangi:"qora" , yili:"2021" , Id:3}
//     ])
//   }
//   const ozgartir = () => {
//     yangi_ism("Someone")
//   }

//   return (
//     <div className="App">
//       {nima.map((element)=>{
//         return(
//           <h1>{element.nomi} {element.yili}</h1>
          
//         )
        
//       })}
//       <h1>{name} Restoroniga xush kelibisiz! </h1>
//       <button onClick={ozgartir}>Tap!</button>
//       <button onClick={ozgardi}>Tap</button>
//     </div>
//   )
      // const [salom, alik] = useState([
      //   { name: "Sanjarbek" ,age: "15 yosh", information:"Front-end dasturchi", id: 1},
      //   { name: "Bobojon",age: '16', information: "Xali beginner dasturchi", id: 2},
      //   { name: "Shixnazar", age:"100 yosh", information: "Juda ham yosh va tajribasiz dasruchi lekin juda kuchli mas u biroz gamer🤔", id: 3}
      // ])

      // const deletee = (name,age,information,id) => {
      //   alik((pre) => {
      //     return pre.filter((event) => {
      //       return event.id !== id , event.name !== name;
      //     });
      //   });
      // };

      return (
        <div className='App'>
          <div>
            {/* {salom.map((sat) => {
              return (
                <div key={sat.id}>
                  <h1>{sat.name} {sat.age} </h1> 
                  <button onClick={() => deletee(sat.name)}>ochir</button>
                </div>
              );
            })} */}
            <Header/>
            <Content/>
            <Product age = '15' name = "Alibek"/>
            <Product age = '18' name  = "Umidbek"/>
            <Student name = "ism - Alibek" age = "yosh - 15" guruh = "guruh: 5 group"/>
            <Counter/>
            <Almashtir/>
            <Like/>
          </div>
        </div>
      )

};

export default App;
