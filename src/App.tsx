import './styles/main.css'
import gameImg from '../public/gameImg.png'
import { Slider } from './components/Slider'

  function App() {
    return (
    <div className="text-white m-8 mx-20">
      <div className="flex flex-row-reverse">
      <h1 className="text-xl">My Games Collection</h1>
      </div>
      <div className="flex">
        <img src={gameImg}></img>
        <div className="ml-20">
        <p className="text-8xl mb-6">Minecraft</p>
        <p className="mr-8 text-[20px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum consequatur alias corporis 
        </p>
        <div className="flex mt-12">
        <button 
        className=" 
        p-4 px-[180px] 
        rounded-2xl 
        text-[40px] 
        transition ease-in-out delay-50
         bg-lime-500
          hover:-translate-y-1 
          hover:scale-110 
          hover:bg-lime-600 
          duration-300 
        "
        
        >Baixar</button>
        </div>
        </div>
      </div>


         <Slider/>


    </div>

  )
    }

export default App
