import React from 'react';
import Header from '../../components/user/header';
import SliderComponent from '../../components/user/slideder';
import { mockArticles } from '../../mock/Article';

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

  // หา sub articles สำหรับแสดงใน cards
  const subArticles = mockArticles.filter(article => !article.main);
  // หา main article สำหรับแสดงในส่วนบน
  const mainArticle = mockArticles.find(article => article.main);

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
      <div className="grid grid-cols-12 gap-4 p-4 h-[800px] bg-green-500">
        <div className="col-span-12 md:col-span-7  pr-4 rounded-lg shadow-md bg-red-500 ">
         <div className='bg-yellow-400 h-[50%] '>
          {mainArticle && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex">
              {/* Main Article Image - Left Side */}
              <div className="w-1/2 relative">
                <img
                  src={mainArticle.imageUrl}
                  alt={mainArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>
              
              {/* Main Article Content - Right Side */}
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {mainArticle.title}
                  </h2>
                  <div 
                    className="text-gray-600 leading-relaxed"
                  >
                    {mainArticle.intro}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">
                      วันที่เผยแพร่: {mainArticle.publishDate}
                    </span>
                  </div>
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    onClick={() => window.open(`/article/${mainArticle.id}`, '_blank')}
                  >
                    อ่านบทความเต็ม →
                  </button>
                </div>
              </div>
            </div>
          )}
         </div>
         <div className='bg-pink-500 h-[50%] pt-3'>
          {/* Auto Slide Cards Container */}
          <div className="relative overflow-hidden h-full">
            <div className="flex gap-4 animate-scroll">
              {subArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                >
                  {/* Card Image */}
                  <div className="h-48 relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <div 
                      className="text-gray-600 text-sm mb-3"
                    >
                      {article.intro}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {article.publishDate}
                      </span>
                      <button 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        onClick={() => window.open(`/article/${article.id}`, '_blank')}
                      >
                        อ่านต่อ →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate cards for seamless loop */}
              {subArticles.map((article) => (
                <div
                  key={`duplicate-${article.id}`}
                  className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                >
                  <div className="h-48 relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <div 
                      className="text-gray-600 text-sm mb-3"
                    >
                      {article.intro}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {article.publishDate}
                      </span>
                      <button 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        onClick={() => window.open(`/article/${article.id}`, '_blank')}
                      >
                        อ่านต่อ →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         </div>
        </div>
        <div className="col-span-12 md:col-span-5 bg-white p-6 rounded-lg shadow-md bg-blue-500">
          <h2 className="text-xl font-semibold mb-4">Section 2 (5/12)</h2>
          <p>Content for section 2 - Takes 5 columns on desktop</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
