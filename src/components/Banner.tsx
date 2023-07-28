import * as React from "react";

export interface BannerProps {
  image: string;
  className?: string;
  width?: string;
  height?: string;
}

const Banner = ({ image, className, width, height }: BannerProps) => {
  return (
    <>
      <img className={className} src={image} width={width} height={height} />
    </>
  );
};

export default Banner;