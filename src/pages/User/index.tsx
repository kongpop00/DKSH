import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/user/header';
import SliderComponent from '../../components/user/slideder';
import { mockArticles } from '../../mock/Article';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  // Mock data สำหรับ slider
  const sliderImages = [
    {
      id: 1,
      src: '/src/assets/imgSliderTest/glo-A7406046-Edit-00293251-(2)-02710190_16-9.jpeg',
      alt: 'Slide 1',
      time: 10000, // 5 วินาที
    },
    {
      id: 2,
      src: '/src/assets/imgSliderTest/istockphoto-619199142-640x640.jpg',
      alt: 'Slide 2',
      time: 10000, // 3 วินาที
    },
    {
      id: 3,
      src: '/src/assets/imgSliderTest/istockphoto-949946968-612x612.jpg',
      alt: 'Slide 3',
      time: 10000, // 4 วินาที
    },
    {
      id: 4,
      src: 'https://www.youtube.com/watch?v=Ec5VpJtX-pk',
      alt: 'YouTube Video',
      time: 10000, // 6 วินาที
    }
  ];

  // หา sub articles สำหรับแสดงใน cards
  const subArticles = mockArticles.filter(article => !article.main);
  // หา main article สำหรับแสดงในส่วนบน
  const mainArticle = mockArticles.find(article => article.main);

  // Ref สำหรับ scroll container
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);
  const [, setCurrentAutoIndex] = React.useState(0);

  // Auto scroll effect - เลื่อนทีละการ์ดแบบ smooth
  React.useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 370; // 350px card + 20px gap
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // เลื่อนไปการ์ดถัดไป
        const nextScroll = currentScroll + cardWidth;
        
        if (nextScroll >= maxScroll) {
          // ถ้าถึงจุดสุดท้าย ให้เลื่อนกลับไปจุดเริ่มต้นแบบ smooth
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // เลื่อนไปการ์ดถัดไปแบบ smooth
          container.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
          });
        }
      }
    }, 3000); // เลื่อนทุก 3 วินาที

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Auto restart scroll after user interaction
  React.useEffect(() => {
    if (!isAutoScrolling) {
      const restartTimer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 8000); // เริ่ม auto scroll ใหม่หลังจาก 8 วินาที

      return () => clearTimeout(restartTimer);
    }
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    setIsAutoScrolling(false); // หยุด auto scroll เมื่อผู้ใช้คลิก
    setCurrentAutoIndex(0); // รีเซ็ต index
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 370;
      
      // เลื่อนไปซ้าย
      container.scrollTo({
        left: container.scrollLeft - cardWidth,
        behavior: 'smooth'
      });
      
      // ถ้าเลื่อนถึงจุดแรก ให้กลับไปจุดสุดท้าย
      if (container.scrollLeft <= cardWidth) {
        setTimeout(() => {
          container.scrollTo({ 
            left: container.scrollWidth - container.clientWidth, 
            behavior: 'auto' 
          });
        }, 300);
      }
    }
  };

  const scrollRight = () => {
    setIsAutoScrolling(false); // หยุด auto scroll เมื่อผู้ใช้คลิก
    setCurrentAutoIndex(0); // รีเซ็ต index
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 370;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // เลื่อนไปขวา
      container.scrollTo({
        left: container.scrollLeft + cardWidth,
        behavior: 'smooth'
      });
      
      // ถ้าเลื่อนถึงจุดสุดท้าย ให้กลับไปจุดแรก
      if (container.scrollLeft >= maxScrollLeft - cardWidth) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'auto' });
        }, 300);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative z-10">
        <Header/>
      </div>
      <SliderComponent 
        images={sliderImages}
        autoplay={true}
      />
      <div className="grid grid-cols-12 gap-4 p-4 h-[800px] bg-green-500">
        <div className="col-span-12 md:col-span-9  pr-4 rounded-lg shadow-md bg-red-500 ">
         <div className='bg-yellow-400 h-[45%] '>
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
         <div className='bg-pink-500 h-[55%] pt-3 relative'>
          {/* Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {subArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false); // หยุด auto scroll เมื่อผู้ใช้คลิกจุด
                  setCurrentAutoIndex(0); // รีเซ็ต index
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 370,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 bg-white/50 hover:bg-white/75`}
              />
            ))}
          </div>

          {/* Auto Scroll Control */}
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            title={isAutoScrolling ? 'หยุด Auto Scroll' : 'เริ่ม Auto Scroll'}
          >
            {isAutoScrolling ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            )}
          </button>

          {/* Auto Slide Cards Container */}
          <div className="relative overflow-hidden h-full">
            <div 
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-hidden"
              style={{ 
                scrollBehavior: 'smooth'
                // ลบ scrollSnapType เพื่อให้เลื่อน smooth
              }}
            >
              {/* Original cards */}
              {subArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                  // ลบ scrollSnapAlign เพื่อให้เลื่อน smooth
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
              
              {/* Duplicate cards for infinite scroll */}
              {subArticles.map((article) => (
                <div
                  key={`duplicate-${article.id}`}
                  className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                  // ลบ scrollSnapAlign เพื่อให้เลื่อน smooth
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

              {/* Triple cards for extra smooth infinite scroll */}
              {subArticles.map((article) => (
                <div
                  key={`triple-${article.id}`}
                  className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                  // ลบ scrollSnapAlign เพื่อให้เลื่อน smooth
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
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">{t('documents.title')}</h2>
          
          {/* Documents List */}
          <div className="space-y-3 h-full max-h-[700px] overflow-y-auto">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 pb-3 border-b border-gray-200 sticky top-0 bg-white z-10">
              <span className="text-base font-medium text-gray-600">{t('documents.name')}</span>
              <span className="text-base font-medium text-gray-600 text-center">{t('documents.update')}</span>
              <span></span>
            </div>

            {/* Document Items */}
            <div className="space-y-2 pb-4">
              {[
                { name: "Document: Permission Req...", date: "1/07/2568" },
                { name: "Document: Safety Data She...", date: "1/07/2568" },
                { name: "Document: Maintenance Log", date: "5/09/2568" },
                { name: "Document: Product Recom...", date: "3/05/2568" },
                { name: "Document: Service Agreem...", date: "14/08/2568" },
                { name: "Document: Invoice Template", date: "1/07/2568" },
                { name: "Document: Compliance Che...", date: "14/08/2568" },
                { name: "Document: Purchase Order...", date: "14/08/2568" },
                { name: "Document: User Manual", date: "1/07/2568" },
                { name: "Document: Project Proposal", date: "18/09/2568" },
                { name: "Document: Terms and Cond...", date: "21/09/2568" },
                { name: "Document: Marketing Strate...", date: "30/09/2568" },
                { name: "Document: Budget Report", date: "2/10/2568" },
                { name: "Document: Risk Assessment", date: "10/10/2568" },
                 { name: "Document: Purchase Order...", date: "14/08/2568" },
                { name: "Document: User Manual", date: "1/07/2568" },
                { name: "Document: Project Proposal", date: "18/09/2568" },
                { name: "Document: Terms and Cond...", date: "21/09/2568" },
                { name: "Document: Marketing Strate...", date: "30/09/2568" },
                { name: "Document: Budget Report", date: "2/10/2568" },
                { name: "Document: Risk Assessment", date: "10/10/2568" },
              ].map((doc, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-2  py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
                >
                  <span className="text-base text-gray-700 group-hover:text-blue-600 truncate">
                    {doc.name}
                  </span>
                  <span className="text-base text-gray-500 text-center">
                    {doc.date}
                  </span>
                  <div className="flex justify-end">
                  
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
