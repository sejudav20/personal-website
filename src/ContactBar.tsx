import React from 'react';

// Adds Contact bar to end of screen

function ContactBar() {
    return (<div className="mt-2 p-5 bg-dark text-white shadow-sm">
        <center><h4>Contact</h4></center>
        <h5>Email:</h5>
        <a className="btn btn-link mb-2" href='mailto:davinseju@gmail.com'>davinseju@gmail.com</a>

        <h5>LinkedIn:</h5>
        <a className="btn btn-link mb-2" href='https://www.linkedin.com/in/davin-seju-7813601b3/'>https://www.linkedin.com/in/davin-seju-7813601b3/</a>
    </div>);
}

export default ContactBar;