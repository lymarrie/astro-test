import React, { useEffect, useState } from 'react';


export default function HydrationVisible() {
    const [isComponentVisible, setComponentVisible] = useState(true);

    let today = new Date();

    const toggleComponentVisibility = () => {
        let today = new Date();
        setComponentVisible(!isComponentVisible);
    };
    if (!isComponentVisible) {
        return (
            <>
                <div className="hidden md:block">
                    <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                    <button
                        onClick={toggleComponentVisibility}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Show Time
                    </button>
                        <h2 className="text-2xl font-bold">client:visible</h2>
                        <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                            <div>
                                <span className="font-bold">Priority: </span>
                                Low
                            </div>
                            <div>
                                <span className="font-bold">Useful for: </span> 
                                Sidebar toggles, or other elements that might only be visible on certain screen sizes.
                            </div>
                        </div>
                        {/* <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                            <h4 className="font-bold">Time</h4> 
                            {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                        </div> */}
                    </div>
                </div>
            </>
        );
    }
    
    return (
        <>
            <div className="hidden md:block">
                <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                <button
                    onClick={toggleComponentVisibility}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Hide Time
                </button>
                    <h2 className="text-2xl font-bold">client:visible</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                            <div>
                                <span className="font-bold">Priority: </span>
                                Low
                            </div>
                            <div>
                                <span className="font-bold">Useful for: </span> 
                                Sidebar toggles, or other elements that might only be visible on certain screen sizes.
                            </div>
                        </div>
                        <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                            <h4 className="font-bold">Time</h4> 
                            {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}