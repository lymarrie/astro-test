import React, { useEffect, useState } from 'react';

export default function HydrationLoad() {
    const today = new Date();
    const [sortedDaysOfWeek, setSortedDaysOfWeek] = useState([]);

    useEffect(() => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
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
                <h2 className="text-2xl font-bold">
                    <a href="https://docs.astro.build/en/reference/directives-reference/#clientload">client:load</a>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                        <div>
                            <span className="font-bold">Priority: </span>
                            High
                        </div>
                        <div>
                            <span className="font-bold">Useful for: </span> 
                            Immediately-visible UI elements that need to be interactive as soon as possible.
                        </div>
                        <div>Load and hydrate the component JavaScript immediately on page load.</div>
                    </div>
                    <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                        <h4 className="font-bold">Time</h4> 
                        {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                        <div className="pt-2">
                            <h4 className="font-bold">Days of the Week (With hydration)</h4>
                            <ul className="pl-6 list-disc">
                                {sortedDaysOfWeek.map((day, index) => (
                                    <li key={index} style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>
                                        {day}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}