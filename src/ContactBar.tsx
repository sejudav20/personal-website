import React from 'react';


interface ContactBarProp {
    id?: string;
}

// Adds Contact bar to end of screen with linkedin and emial
function ContactBar({ id }: ContactBarProp) {
    return (<div id={id} className="mt-5 p-4  text-white bg-dark shadow-sm">
        <center><h4>Contact</h4></center>
        <h5>Email:</h5>
        <a className="btn btn-link mb-2 text-light" href='mailto:davinseju@gmail.com'>davinseju@gmail.com</a>

        <h5>LinkedIn:</h5>
        <a className="btn btn-link mb-2 text-light" href='https://www.linkedin.com/in/davin-seju-7813601b3/'>https://www.linkedin.com/in/davin-seju-7813601b3/</a>
    </div>);
}

export default ContactBar;