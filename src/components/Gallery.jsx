import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://imgs.search.brave.com/2yuE8S2MfO4IWVaGYFgOmekDCpHsIrA8IXN11Tspwd4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNE4xTmVv/SFRhVDhuSTB4N3Ax/akNHay81YTYwNTRh/NTA0NmI3NzQ5YTZi/NzhhZDNjYTFlYjU3/Zi93YXRlci1zcGxh/c2gtY2xyLXNodXR0/ZXJzdG9ja18yNTg0/MjE4MDUuanBnP2Zp/dD1maWxsJnc9NDgw/Jmg9Mjcw",
    "https://imgs.search.brave.com/HysGm2PJbY6Vo2WlcA8t-3UBL-fR4W5bUDYkZWz51_k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY0/NDEzMTEvcGV4ZWxz/LXBob3RvLTI2NDQx/MzExL2ZyZWUtcGhv/dG8tb2Ytc2VhZ3Vs/bC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    "https://imgs.search.brave.com/4_w5j2INgSFXSWBW4KErT_yoy8ktP0hNT-7v9LGSSRI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWF1dGlmdWwt/YnV0dGVyZmx5LWlt/YWdlcy1icmlnaHRl/bi15b3VyLWRheV8x/MTk5Mzk0LTk0NTMw/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  ]);

  const sliderRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Custom arrow components for the slider
  const NextArrow = ({ onClick }) => (
    <div
      className="text-white bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="text-white bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="gallery-container  p-4 bg-gray-600 text-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-16px bg-gray-900 py-2 px-5 
        rounded-xl "
          >
            Gallery
          </h2>
          <div className="flex items-center gap-2">
            <label
              htmlFor="file-upload"
              className="bg-gray-700 text-white px-4 
             py-2 rounded-full cursor-pointer shadow-3xl transition-all 
             hover:bg-gray-600 
             hover:shadow-lg hover:scale-105 transform 
             duration-300 overflow-vis"
            >
              + Add Image
            </label>

            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="xl:flex md:flex sm:flex hidden  gap-3">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
          </div>
        </div>

        {images.length > 0 ? (
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index} className="p-2">
                <div className="w-full h-32 sm:h-48 lg:h-64 bg-gray-700 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img}
                    alt={`Gallery item ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images available. Click "Add Image" to add one.</p>
        )}
      </div>
      <div
        className="relative shadow-2xl xl:mx-[5rem] mx-8 
    md:mx-[4rem] rounded-xl 
    border border-gray-700 border-b-[4px] 
    bg-gradient-to-r from-gray-800 to-gray-900"
      ></div>
    </>
  );
};

export default Gallery;
