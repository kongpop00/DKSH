import React from 'react';
import { Carousel } from 'antd';

interface SlideImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

interface SliderComponentProps {
  images: SlideImage[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  height?: string;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: '100%',
  height: '500px', // Default for MacBook
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '500px', // Default for MacBook
  objectFit: 'cover',
  objectPosition: 'center',
};

// Responsive height styles
const getResponsiveHeight = () => {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    
    if (screenWidth >= 1500) { // Large Desktop/Monitor screen
      return '800px';
    } else if (screenWidth >= 1440) { // Desktop/Computer screen
      return '560px';
    } else if (screenWidth >= 1024) { // MacBook screen
      return '600px';
    } else if (screenWidth >= 768) { // Tablet
      return '400px';
    } else { // Mobile
      return '300px';
    }
  }
  return '400px'; // Default fallback
};

const titleStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  fontSize: 'clamp(16px, 4vw, 32px)', // Responsive font size
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 'clamp(8px, 2vw, 20px) clamp(12px, 3vw, 20px)', // Responsive padding
  borderRadius: '8px',
  textAlign: 'center',
  maxWidth: '90%', // Prevent overflow on small screens
};

const SliderComponent: React.FC<SliderComponentProps> = ({ 
  images, 
  autoplay = true, 
  autoplaySpeed = 3000
}) => {
  const [sliderHeight, setSliderHeight] = React.useState('500px');

  React.useEffect(() => {
    const updateHeight = () => {
      setSliderHeight(getResponsiveHeight());
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full flex items-center justify-center bg-gray-200" style={{ height: sliderHeight }}>
        <p className="text-gray-500 text-xl">No images to display</p>
      </div>
    );
  }

  const dynamicContentStyle: React.CSSProperties = {
    ...contentStyle,
    height: sliderHeight,
  };

  const dynamicImageStyle: React.CSSProperties = {
    ...imageStyle,
    height: sliderHeight,
  };

  return (
    <div className="w-full" style={{ height: sliderHeight }}>
      <Carousel 
        afterChange={onChange}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full h-full"
        style={{ height: sliderHeight }}
      >
        {images.map((image) => (
          <div key={image.id} style={{ height: sliderHeight }}>
            <div style={dynamicContentStyle}>
              <img 
                src={image.src} 
                alt={image.alt}
                style={dynamicImageStyle}
              />
              {image.title && (
                <div style={titleStyle}>
                  {image.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;