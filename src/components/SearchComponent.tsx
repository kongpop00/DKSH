import React, { useState } from 'react';
import { Input, Button, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';

interface SearchComponentProps {
  placeholder?: string;
  onSearch?: (searchText: string, selectedDate?: Dayjs | null) => void;
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ 
  placeholder = "ค้นหาด้วยรหัส,ชื่อ-นามสกุล หรืออีเมลของผู้ดูแล", 
  onSearch,
  className = ""
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue, selectedDate);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex items-center gap-2 w-[45%] ${className}`}>
      <div className="flex-1 relative " >
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="h-10 pr-10 rounded-md"
          style={{ borderRadius: '14px' }}
        />
      </div>
      <DatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholder="วันที่สร้าง"
        className="h-10"
        style={{ borderRadius: '14px' }}
      />
      <Button 
        type="primary" 
        onClick={handleSearch}
        className="h-10 px-6"
        style={{ borderRadius: '10px' }}
      >
        ค้นหา
      </Button>
    </div>
  );
};

export default SearchComponent;