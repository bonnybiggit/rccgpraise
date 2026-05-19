import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
}

export default function Image({ src, alt, fill, priority, className, ...props }: ImageProps) {
  // If fill is true, Next.js image expands to fill parent which has relative positioning.
  const fillClass = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  
  return (
    <img
      src={src}
      alt={alt}
      className={`${fillClass} ${className || ""}`}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
