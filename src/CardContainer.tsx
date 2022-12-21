import React from 'react';

interface CardProps {
    title: string;
    body: any;
}

// basic container with a header
function CardContainer({ title, body }: CardProps) {
    return <div className="container"><div className="card mt-5 shadow-sm">
        <div className="card-header text-center">{title}</div>
        <div className="card-body">{body}</div></div>
    </div>;
}
export default CardContainer;