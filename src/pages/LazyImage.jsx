const LazyImage = ({ src, alt }) => {
  return <img className="w-full h-80 object-center" src={src} alt={alt} />;
};

export default LazyImage;
