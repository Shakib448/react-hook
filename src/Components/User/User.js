import React from 'react';
import './User.css';

const User = (props) => {
    const {name, img, salary, job } = props.people;
    const hadelAddPeople = props.hadelAddPeople;

    return (
        <div className="details">
            <div className="details-container">
                <h1><small>Name : {name}</small></h1>
                <h1><small>Job : {job}</small></h1>
                <img src={img} alt=""/>
                <h1><small>Salary : {salary}</small></h1>
                <button className="add-me" onClick={() => hadelAddPeople(props.people)}>Add Me</button>
            </div>
        </div>
    )
}

export default User;
