import React from 'react';
import './HomeBody.css';

const HomeBody = () => {
    return (
        <>
        <div className="container">
            <div className="task task-1"><a href='/'>Health and Hygiene</a > </div>
            <div className="task task-2"><a href='/'>Communication Skills</a ></div>
            <div className="task task-3"><a href='/'>Presentation Skills</a ></div>
            <div className="task task-4"><a href='/'>Technical Skills</a ></div>
            <div className="task task-5"><a href='/'>Physical Apperance</a ></div>
        </div>
        </>
    );
};

export default HomeBody;