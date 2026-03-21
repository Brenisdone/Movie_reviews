import EmblaCarousel from "../hero/js/EmblaCarousel"

const OPTIONS = { loop: true, duration: 30 }


const Home = ({movies}) => {
  return (
    <EmblaCarousel movies = {movies} options={OPTIONS}/>
  )
}

export default Home