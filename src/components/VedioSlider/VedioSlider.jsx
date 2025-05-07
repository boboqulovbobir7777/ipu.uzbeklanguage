import { useState, useEffect, useRef } from "react";
import styles from "./VideoSlider.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import videosArr from "../../resource/videosArr";

function VideoSlider() {
  const [videos, setVideos] = useState(videosArr);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [showPageNation, setShowPageNation] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateVideos = () => {
      const filteredVideos =
        window.innerWidth <= 440 ? videosArr.slice(0, 4) : videosArr;
      setVideos(filteredVideos);
      setShowPageNation(filteredVideos.length >= 4);
    };

    updateVideos();
    window.addEventListener("resize", updateVideos);

    return () => window.removeEventListener("resize", updateVideos);
  }, []);

  const handleNext = () => {
    if (sliderIndex < videos.length - 1) {
      const newIndex = sliderIndex + 1;
      setSliderIndex(newIndex);
      sliderRef.current.scrollLeft =
        sliderRef.current.children[newIndex].offsetLeft;
    }
  };

  const handleBack = () => {
    if (sliderIndex > 0) {
      const newIndex = sliderIndex - 1;
      setSliderIndex(newIndex);
      sliderRef.current.scrollLeft =
        sliderRef.current.children[newIndex].offsetLeft;
    }
  };

  return (
    <section>
      <Wrapper className={styles.videoSlider}>
        <h3 className="text-center mb-10 text-3xl font-bold">Video darslar</h3>
        <ul className={styles.videos} ref={sliderRef}>
          {videos.map((e, i) => (
            <li key={i} className={styles.video}>
              <iframe
                loading="lazy"
                width="393"
                height="268"
                src={e}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
        <div className={styles.sliderControl}>
          <p className={styles.calcSliders}>
            <span>{sliderIndex + 1}</span> / <span>{videos.length}</span>
          </p>
          <div className={styles.controlButtons}>
            <button
              className={`${styles.backButton} ${
                sliderIndex === 0 ? "" : styles.disabled
              }`}
              onClick={handleBack}
            >
              Orqaga
            </button>
            <button
              className={`${styles.nextButton} ${
                sliderIndex === videos.length - 1 ? "" : styles.disabled
              }`}
              onClick={handleNext}
            >
              Keyingisi
            </button>
          </div>
        </div>
        {showPageNation && (
          <button
            onClick={(e) => {
              setVideos(videosArr);
              e.target.style.display = "none";
            }}
            className={styles.pageNation}
          >
            Cмотреть все
          </button>
        )}
      </Wrapper>
    </section>
  );
}

export default VideoSlider;
