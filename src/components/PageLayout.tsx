import * as React from "react";

export interface PageLayoutProps {
    title?: string;
    children?: React.ReactNode;
  }


export default function PageLayout({title, children}:PageLayoutProps) {
    return (
        <>
            <div className="centered-container">
                <h1 className="text-4xl font-bold text-center">{title}</h1>
                    {children}
            </div>
        </>
    );
}

