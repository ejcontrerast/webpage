import React, { useState } from 'react';
import Modal from 'react-modal';

interface MediaItemProps {
  type: 'video' | 'image';
  src: string;
  alt: string;
}

Modal.setAppElement('#root');

const mediaItems: MediaItemProps[][] = [
  [
    { type: 'image', src: '/static/memories/WaterFallSpring.jpg', alt: 'waterfallSpring' },
    { type: 'image', src: '/static/memories/Landscape.jpg', alt: 'landscape' },
    { type: 'image', src: '/static/memories/Birthday.gif', alt: 'birthday' },
  ],
  [
    { type: 'image', src: '/static/memories/RevelstokeFall.jpg', alt: 'revelstokeFall' },
    { type: 'image', src: '/static/memories/ChristmasTree.jpg', alt: 'christmasTree' },
    { type: 'image', src: '/static/memories/NorthernLights.jpg', alt: 'northernLights' },
  ],
  [
    { type: 'image', src: '/static/memories/IceSkating.gif', alt: 'iceSkating' },
    { type: 'image', src: '/static/memories/USAFamily.jpg', alt: 'usaFamily' },
    { type: 'image', src: '/static/memories/ColdPlunge.gif', alt: 'coldPlunge' },
  ],
];

const MediaItem: React.FC<{
  type: 'video' | 'image';
  src: string;
  alt: string;
  onImageClick: (src: string, alt: string) => void;
}> = ({ type, src, alt, onImageClick }) => {
return <img
        className="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-80 z-[0]"
        src={src}
        alt={alt}
        onClick={() => onImageClick(src, alt)}
    />
};

const MasonryGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("Modal close triggered");
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div id="memories" className="py-20 w-full flex items-center justify-center z-[0]">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1] text-center">
          Memories
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-6">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems.map((group, index) => (
              <div key={index} className="grid gap-3">
                {group.map((item, idx) => (
                  <MediaItem
                    key={idx}
                    type={item.type}
                    src={item.src}
                    alt={item.alt}
                    onImageClick={openModal}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <img
              className="h-auto w-full rounded-lg"
              src="/static/images/Family.png"
              alt="superFamily"
            />
          </div>
        </div>
      </div>

      {/* Modal for displaying the image */}
      {selectedImage && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-[1000]"
          className="fixed inset-0 flex items-center justify-center z-[1001]"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>

  );
};

export default MasonryGrid;
