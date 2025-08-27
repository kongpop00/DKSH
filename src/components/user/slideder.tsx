import React, { } from 'react';
import { Carousel } from 'antd';

interface SlideImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  time?: number; // เวลาในการแสดงสไลด์ (milliseconds)
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

// Helper function to check if URL is YouTube
const isYouTubeUrl = (url: string): boolean => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : '';
};

const SliderComponent: React.FC<SliderComponentProps> = ({ 
  images, 
  autoplay = true, // Changed default to true
  autoplaySpeed = 3000
}) => {
  const [sliderHeight, setSliderHeight] = React.useState('500px');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(autoplay);
  const carouselRef = React.useRef<React.ComponentRef<typeof Carousel> | null>(null);
  const iframeRefs = React.useRef<{ [key: number]: HTMLIFrameElement | null }>({});
  const autoPlayTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Custom autoplay with individual slide timing
  React.useEffect(() => {
    if (!isAutoPlaying || !images.length) return;

    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }

      const currentImage = images[currentSlide];
      const slideTime = currentImage?.time || autoplaySpeed;

      autoPlayTimerRef.current = setTimeout(() => {
        const nextSlide = (currentSlide + 1) % images.length;
        setCurrentSlide(nextSlide);
        carouselRef.current?.goTo(nextSlide);
      }, slideTime);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [currentSlide, isAutoPlaying, images, autoplaySpeed]);

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

  const onChange = (currentSlideIndex: number) => {
    console.log(currentSlideIndex);
    
    // Stop all YouTube videos by pausing them
    Object.entries(iframeRefs.current).forEach(([slideId, iframe]) => {
      // หา index ของ slideId ใน images
      const idx = images.findIndex(img => img.id === Number(slideId));
      if (iframe && isYouTubeUrl(images[idx]?.src || '')) {
        // Send pause command to YouTube iframe
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
    // Start the current slide's video if it's YouTube
    const currentImage = images[currentSlideIndex];
    if (currentImage && isYouTubeUrl(currentImage.src)) {
      const currentIframe = iframeRefs.current[currentImage.id];
      if (currentIframe) {
        // Reload iframe to restart video from beginning
        const videoId = getYouTubeVideoId(currentImage.src);
        currentIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&enablejsapi=1`;
      }
    }
    setCurrentSlide(currentSlideIndex);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false); // หยุด autoplay เมื่อผู้ใช้คลิก
    carouselRef.current?.prev();
    // เริ่ม autoplay ใหม่หลังจาก 3 วินาที
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false); // หยุด autoplay เมื่อผู้ใช้คลิก
    carouselRef.current?.next();
    // เริ่ม autoplay ใหม่หลังจาก 3 วินาที
    setTimeout(() => setIsAutoPlaying(true), 3000);
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
    <div className="w-full relative" style={{ height: sliderHeight }}>
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Carousel 
        ref={carouselRef}
        afterChange={onChange}
        autoplay={false} // ปิด autoplay ของ Ant Design ใช้ custom autoplay แทน
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
              {isYouTubeUrl(image.src) ? (
                <iframe
                  ref={(el) => {
                    iframeRefs.current[image.id] = el;
                  }}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(image.src)}?autoplay=${currentSlide === images.findIndex(img => img.id === image.id) ? 1 : 0}&mute=1&loop=1&playlist=${getYouTubeVideoId(image.src)}&enablejsapi=1`}
                  title={image.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={dynamicImageStyle}
                />
              )}
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