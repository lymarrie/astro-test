import * as React from "react";

const today = new Date();

export default function HydrationOnly() {
    return (
        <>
            <div className="section space-y-2 border-2 p-4 rounded-md drop-shadow-sm">
                <h2 className="text-2xl font-bold">client:only</h2>
                <div className="bg-gray-100 border-2 rounded-md p-4 space-y-2">
                    <div>
                        <span className="font-semibold">client:only=[string]</span> skips HTML server-rendering, and renders only on the client. It acts similar to <span className="font-semibold">client:load</span> in that it loads, renders and hydrates the component immediately on page load.
                    </div>
                </div>
                <div className="bg-yellow-50 border-2 rounded-md p-4 space-y-2">
                    <h4 className="font-bold">Time</h4> 
                    {today.toLocaleString()}; {today.getMilliseconds()} milliseconds
                </div>
            </div>
        </>
    );
}

