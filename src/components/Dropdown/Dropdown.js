import React from 'react';

const dropdown = (props) => {
    return (
        <select onChange={props.changed}>
            <option value="al-jazeera-english">Aljazeera English</option>
            <option value="bbc-news">BBC News</option>
            <option value="cnn">CNN</option>
            <option value="espn">ESPN</option>
            <option value="fox-news">Fox News</option>
        </select>
    );
};

export default dropdown;