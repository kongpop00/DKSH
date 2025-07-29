import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/user/header';
import { mockArticles } from '../mock/Article';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(article => article.id === parseInt(id || '0'));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ไม่พบบทความ</h1>
            <p className="text-gray-600 mb-8">ขออภัย ไม่พบบทความที่คุณต้องการ</p>
            <button 
              onClick={() => window.close()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex justify-center items-center space-x-6 text-lg">
              <span>วันที่เผยแพร่: {article.publishDate}</span>
              {article.main && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  บทความหลัก
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">บทนำ</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {article.intro}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.close()}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors mr-4"
            >
              ปิดหน้าต่าง
            </button>
            <button 
              onClick={() => window.open('/', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              กลับหน้าหลัก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
