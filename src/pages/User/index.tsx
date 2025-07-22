import React from 'react';
import Header from '../../components/user/header';
import SliderComponent from '../../components/user/slideder';

const HomePage: React.FC = () => {
  // Mock data สำหรับ slider
  const sliderImages = [
    {
      id: 1,
      src: '/src/assets/imgSliderTest/glo-A7406046-Edit-00293251-(2)-02710190_16-9.jpeg',
      alt: 'Slide 1',
    
    },
    {
      id: 2,
      src: '/src/assets/imgSliderTest/istockphoto-619199142-640x640.jpg',
      alt: 'Slide 2', 

    },
    {
      id: 3,
      src: '/src/assets/imgSliderTest/istockphoto-949946968-612x612.jpg',
      alt: 'Slide 3',
  
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative z-10">
        <Header/>
      </div>
      <SliderComponent 
        images={sliderImages}
        autoplay={true}
        autoplaySpeed={4000}
      />
    </div>
  );
};

export default HomePage;
