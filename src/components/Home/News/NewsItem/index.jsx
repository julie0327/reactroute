import React from 'react'
import { useLocation } from 'react-router-dom'

const NewsItem = () => {
    const location = useLocation();
    return <p>
       { location.pathname }
    </p>
};

export default NewsItem;