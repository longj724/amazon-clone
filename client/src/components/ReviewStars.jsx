import React from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

function ReviewStars(props) {
    //rating is some deci
    const rating = Math.round(props.rating);
    let bool_array = [];
    for (let i = 0; i < rating; ++i) {
        bool_array.push(true);
    }
    for (let i = rating; i < 5; ++i) {
        bool_array.push(false)
    }
    return (
        <span>
            {bool_array.map((bool, index) => bool ? <GradeIcon key={index}/> : <GradeOutlinedIcon key={index}/>)}
        </span>
    );
}

export default ReviewStars;
