import React from 'react';

interface CardProps {
    id?: string;
    title: string;
    body: any;
}

// basic card container with a header for each of the sections in the website
function CardContainer({ id, title, body }: CardProps) {
    return <div className="container" id={id}><div className="card mt-5 shadow-sm" >
        <div className="card-header bg-primary text-white text-center">{title}</div>
        <div className="card-body">{body}</div></div>
    </div>;
}
export default CardContainer;