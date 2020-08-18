import React, { useState } from 'react'

const RegisterTrip = () => {

    const [trip, setTrip] = useState(null);

    const addTrip = () => {
        console.log('clicked submit button');
        let date = document.getElementById('date-input-field').value;
        let minutes = document.getElementById('minutes-input-field').value;
        let notes = document.getElementById('notes-input-field').value;

        if (date !== "" && minutes !== "" && notes  !== "") {
            if (minutes <= 0 ) {
                alert('Minutes cannot be a negative number');
                
            } else {
                console.log('sending in '+ date +', '+ minutes +', '+notes);
                
            }
        } else {
            console.log('... but the submission was unsuccessful');
            alert('Please fill in all inputs in the form!')
        }
    }
    const valueChanged = (e) => {
        let date = e.target.value;
        console.log('value: '+date);
    }

    return (
        <form className="tripform">
            <div className="dateinput">
                <p>Date:</p>
                <input type="date" onChange={valueChanged} id="date-input-field"/>
            </div>
            <div className="minutesinput">
                <p>Minutes:</p>
                <input type="number" onChange={valueChanged} id="minutes-input-field"/>
            </div>
            <div className="notesinput">
                <p>Notes:</p>
                <input type="text" className="textinput" id="notes-input-field"/>
            </div>
            <div>
                <p />
                <button type="button" onClick={addTrip}>Submit</button>
            </div>
        </form>
    )
}

export default RegisterTrip
