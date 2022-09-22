import './styles/main.css'
import gameImg from '../public/gameImg.png'
import { Slider } from './components/Slider'

  function App() {

function gameImge() {
  "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-480x500.jpg"
}



    return (
    <div className="text-white ">
      <div className="flex flex-row-reverse p-10">
      <h1 className="text-xl">My Games Collection</h1>
      </div>
      <div className="flex">
        <img className="ml-20 rounded-2xl" src={gameImge}/>
        <div className="ml-20">
        <p className="text-8xl mb-6">Minecraft</p>
        <div className="h-2/4  ">
        <p className="mr-8 text-[20px] max-w-[70%]">
        Minecraft é um jogo eletrônico dos gêneros sandbox e sobrevivência que não possui objetivos específicos a serem alcançados, permitindo aos jogadores uma grande liberdade de escolha de como jogá-lo. No entanto, existe um sistema de conquistas, conhecido como "progressos" na edição Java.
        </p>
        </div>
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
        >Jogar</button>
        </div>
        </div>
      </div>


         <Slider/>


    </div>

  )
    }

export default App
