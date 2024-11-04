import React from 'react';
import { FaChevronLeft,  FaChevronRight, FaCalendarAlt   } from "react-icons/fa";
// import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';

const Datess = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  // Function to get the ordinal suffix for a number
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Handles 11th to 19th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const navigate = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const getDates = () => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const buttonClasses = "group p-4 text-gray-600 transition-colors hover:bg-[#6B46C1]";

  return (
    <div className="flex items-center max-w-3xl mt-4 shadow-sm ">
      <button 
        onClick={() => navigate('prev')}
        className={`${buttonClasses} rounded-l-lg`}
      >
        <FaChevronLeft className="w-4 h-5 group-hover:text-white"/>
        {/* <ChevronLeft  /> */}
      </button>
      
      {getDates().map((date, index) => {
        const isSelected = index === 2;

        // Get the day of the month and apply the ordinal suffix
        const dayOfMonth = date.getDate();
        const shortDate = `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`;

        // Day of the week in short form
        const day = date.toLocaleString('default', { weekday: isSelected ? 'long' : 'short' });

        // Full date with month, day, and year for the selected date
        const fullDate = date.toLocaleString('default', { 
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        return (
          <div
            key={date.toISOString()}
            className={`flex-1 py-2 text-center cursor-pointer whitespace-nowrap transition-colors
              ${isSelected 
                ? 'bg-green-600 text-white hover:bg-[#6B46C1]' 
                : 'hover:bg-[#6B46C1] hover:text-white'
              }`}
          >
            <div className="flex items-center gap-x-3 justify-center mb-1">
              <div className="text-sm">{day}</div> {/* Full day name if active */}
              {isSelected && <FaCalendarAlt className="w-4 h-4 mr-1 " /> } {/* Calendar icon only for active date */}
            </div>
            <div className="text-xs mt-1">
              {isSelected ? fullDate : shortDate} {/* Full date only for selected */}
            </div>
          </div>
        );
      })}
      
      <button 
        onClick={() => navigate('next')}
        className={`${buttonClasses} rounded-r-lg`}
      >
        <FaChevronRight className="w-5 h-5 group-hover:text-white"/>
        {/* <ChevronRight className="w-5 h-5 group-hover:text-white" /> */}
      </button>
    </div>
  );
};

export default Datess;
