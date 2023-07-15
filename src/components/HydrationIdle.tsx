import React, { useState } from 'react';

const today = new Date();

export default function HydrationIdle() {
    return (
        <>
            <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                <h2 className="text-2xl font-bold">client:idle</h2>
                <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                    <div>
                        <span className="font-bold">Priority: </span>
                        Medium
                    </div>
                    <div>
                        <span className="font-bold">Useful for: </span> 
                        Lower-priority UI elements that don’t need to be immediately interactive.
                    </div>
                </div>
                <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                    <h4 className="font-bold">Time</h4> 
                    {today.toLocaleString()}; {today.getSeconds()} seconds, {today.getMilliseconds()} milliseconds
                </div>
            </div>
        </>
    );
}