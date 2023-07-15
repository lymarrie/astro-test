import React, { useEffect, useState } from 'react';


export default function HydrationServer() {
    const today = new Date();
    const [sortedDaysOfWeek, setSortedDaysOfWeek] = useState([]);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
    
        const sortDaysOfWeek = () => {
          const today = new Date().getDay(); // Get today's day index (0-6)
          const sortedDays = daysOfWeek.slice(today).concat(daysOfWeek.slice(0, today));
          return sortedDays;
        };
    
        const sortedDays = sortDaysOfWeek();
        setSortedDaysOfWeek(sortedDays);
      }, []);
      
    return (
        <>
            <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                <h2 className="text-2xl font-bold">client:server (Default)</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                        <div>
                            By default, a UI Framework component is not hydrated in the client. If no <span className="font-semibold">client:*</span> directive is provided, its HTML is rendered onto the page without JavaScript.
                        </div>
                    </div>
                    <div>
                        <div className="bg-yellow-50  border-2 rounded-md p-4 space-y-2">
                            <h4 className="font-bold">Time</h4> 
                            {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                            <div className="pt-2">
                                <h4 className="font-bold">Days of the Week (No hydration)</h4>
                                <ul className="pl-6 list-disc">
                                    {sortedDaysOfWeek.length ? (
                                    sortedDaysOfWeek.map((day, index) => (
                                        <li key={index} style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>
                                        {day}
                                        </li>
                                    ))
                                    ) : (
                                    daysOfWeek.map((day, index) => (
                                        <li key={index} style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>
                                        {day}
                                        </li>
                                    ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}