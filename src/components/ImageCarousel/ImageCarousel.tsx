import { useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import type { ProjectImage } from '../../data/projects'
import { PixelButton } from '../PixelButton/PixelButton'

interface ImageCarouselProps {
  images?: ProjectImage[]
  projectTitle: string
}

interface CarouselSlide {
  alt: string
  caption?: string
  placeholder?: boolean
  src?: string
}

export function ImageCarousel({ images, projectTitle }: ImageCarouselProps) {
  const slides: CarouselSlide[] =
    images && images.length > 0
      ? images
      : Array.from({ length: 3 }, (_, index) => ({
          alt: `${projectTitle} screenshot ${index + 1} placeholder`,
          placeholder: true,
        }))
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const currentSlide = slides[currentIndex]

  function showPrevious() {
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length)
  }

  function showNext() {
    setCurrentIndex((index) => (index + 1) % slides.length)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) {
      return
    }

    const endX = event.changedTouches[0]?.clientX
    if (endX === undefined) {
      return
    }

    const distance = endX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 40) {
      return
    }

    if (distance > 0) {
      showPrevious()
    } else {
      showNext()
    }
  }

  return (
    <section
      aria-label={`${projectTitle} image carousel`}
      className="image-carousel"
    >
      <div
        className="image-carousel__viewport"
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        tabIndex={0}
      >
        <PixelButton
          aria-label="Previous project image"
          className="image-carousel__control image-carousel__control--previous"
          onClick={showPrevious}
        >
          <span aria-hidden="true">‹</span>
        </PixelButton>

        <figure className="image-carousel__slide">
          {currentSlide.placeholder ? (
            <div
              aria-label={currentSlide.alt}
              className="image-carousel__placeholder"
              role="img"
            >
              <span>PROJECT SCREENSHOT</span>
              <strong>TODO</strong>
            </div>
          ) : (
            <img alt={currentSlide.alt} src={currentSlide.src} />
          )}
          {currentSlide.caption && (
            <figcaption>{currentSlide.caption}</figcaption>
          )}
        </figure>

        <PixelButton
          aria-label="Next project image"
          className="image-carousel__control image-carousel__control--next"
          onClick={showNext}
        >
          <span aria-hidden="true">›</span>
        </PixelButton>
      </div>

      <div aria-label="Choose project image" className="image-carousel__dots">
        {slides.map((slide, index) => (
          <button
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === currentIndex}
            className="image-carousel__dot"
            key={`${slide.alt}-${index}`}
            onClick={() => setCurrentIndex(index)}
            type="button"
          />
        ))}
      </div>

      <p className="screen-reader-only" role="status">
        Image {currentIndex + 1} of {slides.length}
      </p>
    </section>
  )
}
