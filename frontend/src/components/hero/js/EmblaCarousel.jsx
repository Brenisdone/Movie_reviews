import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

import '../css/embla.css'
import '../css/base.css'
import '../css/movie_detail.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import {Link,useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const EmblaCarousel = ({ movies, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const navigate = useNavigate();

  function reviews(movieId){
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movies?.map((movie) => (
            <div className="embla__slide" key={movie.imdbId}>
              <img
                className="embla__slide__img"
                src={movie.backdrops[0]}
                alt={movie.title}
              />
              <div className='gradient_overlay'></div>
              <div className='movie-detail'>
                <div className="movie-left">
                  <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                  </div>

                  <div className="movie-title">
                    <h1>{movie.title}</h1>
                  </div>

                  <div className='movie-review-button-container'>
                    <Button variant="info" onClick={()=>reviews(movie.imdbId)}>
                      Reviews
                    </Button>
                  </div>
                </div>
                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                  <div className='play-button-icon-container'>  
                    <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel