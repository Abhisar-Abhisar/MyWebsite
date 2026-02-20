interface StaticImageProps {
  src: string;
  alt: string;
  type?: 'profile' | 'experience' | 'project';
  className?: string;
}

const StaticImage = ({ src, alt, type = 'experience', className = '' }: StaticImageProps) => {
  const getDefaultSize = () => {
    switch (type) {
      case 'profile': return 'w-32 h-32 md:w-40 md:h-40';
      case 'project': return 'w-full aspect-[4/3]';
      default: return 'w-full h-48';
    }
  };

  const getRoundedClass = () => {
    switch (type) {
      case 'profile': return 'rounded-full';
      case 'project': return 'rounded-2xl';
      default: return 'rounded-2xl';
    }
  };

  return (
    <div className={`${getDefaultSize()} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${getRoundedClass()}`}
        onError={(e) => {
          // Fallback to placeholder if image doesn't exist
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.svg';
        }}
      />
    </div>
  );
};

export default StaticImage;
