import React from "react";
import Image from "next/image";

interface ImportImageProps {
  imageIndex: number;
}

const ImportImage: React.FC<ImportImageProps> = ({ imageIndex }) => {
  const images = [
    {
      src: "/images/WellPathLogo.png",
      alt: "WellPath Logo",
      width: 100,
      height: 100
    },
    { src: "/images/image2.png", alt: "Description 2", width: 400, height: 200 }
    // Add more image data as needed
  ];

  const selectedImage = images[imageIndex];

  return (
    <div className="container">
      <div
        style={{ filter: "brightness(10000%)", opacity: "100%" }}
        key={selectedImage.src}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={selectedImage.width}
          height={selectedImage.height}
        />
      </div>
    </div>
  );
};

export default ImportImage;
