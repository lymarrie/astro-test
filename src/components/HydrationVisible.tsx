import React, { useState } from 'react';
import astro from '/placeholder-hero.jpg';

const today = new Date();

export default function HydrationVisible() {
    return (
        <>
            <div className="hidden md:block">
                <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
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
                    <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                        <h4 className="font-bold">Time</h4> 
                        {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                    </div>
                    <div>
                        <img src={astro}></img>
                    </div>
                </div>
            </div>
        </>
    );
}