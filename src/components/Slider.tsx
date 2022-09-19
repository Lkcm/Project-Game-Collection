import "../styles/main.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"






export function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 1,
    },
  })


  function alou(){

    console.log("alo")
  }
  return (
    <div ref={ref} className="keen-slider mt-16">
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl 
          "src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl"src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl"src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl"src="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl"src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl "src="https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl "src="https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg"></img>
        </div>
      <div className="keen-slider__slide number-slide">
      <img className="rounded-2xl "src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>
        </div>
    </div>
  )
}
