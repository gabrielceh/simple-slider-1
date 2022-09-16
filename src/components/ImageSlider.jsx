import { useState } from 'react';
import BtnNextPrev from './BtnNextPrev';

function ImageSlider({ images = [] }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const goToPrev = () => {
    const isFirstImage = currentImgIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(newIndex);
    console.log('prev');
  };

  const goToNext = () => {
    const isLastImage = currentImgIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);

    console.log('next');
  };

  const goSlideDot = (index) => {
    setCurrentImgIndex(index);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImgIndex].url})`,
  };

  return (
    <div className="container md:max-w-4xl mx-auto min-h-screen">
      <div className="relative w-full h-[80vh] bg-slate-900 my-8">
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
          <BtnNextPrev label="❰" onclick={goToPrev} />
          <BtnNextPrev label="❱" onclick={goToNext} />
        </div>
        {/* Image Container */}
        <div
          className={`bg-no-repeat bg-center bg-cover w-full h-full`}
          style={backgroundImageStyle}
        ></div>

        <div className="flex justify-center w-full h-8 my-1">
          {images.map((img, index) => (
            <div key={img.title}>
              <span
                className="w-4 h-4 mx-2 bg-slate-300 rounded-full inline-block cursor-pointer hover:bg-slate-500"
                onClick={() => goSlideDot(index)}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
