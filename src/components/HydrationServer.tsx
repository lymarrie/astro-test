import React, { useState } from 'react';

const today = new Date();

export default function HydrationServer() {
    return (
        <>
            <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                <h2 className="text-2xl font-bold">client:server (Default)</h2>
                <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                    <div>
                        By default, a UI Framework component is not hydrated in the client. If no <span className="font-semibold">client:*</span> directive is provided, its HTML is rendered onto the page without JavaScript.
                    </div>
                </div>
                <div>
                    <div className="bg-yellow-50  border-2 rounded-md p-4 space-y-2">
                        <h4 className="font-bold">Time</h4> 
                        {today.toLocaleString()}; {today.getSeconds()} seconds, {today.getMilliseconds()} milliseconds
                    </div>
                </div>
            </div>
        </>
    );
}