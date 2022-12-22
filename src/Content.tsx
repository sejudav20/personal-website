import React from 'react';

export function Bio() {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center">
                    <img src={"./profile.jpg"} alt="Davin Seju profile" width="300" height="300"></img>
                </div>
                <div className="col-sm p-3 d-flex justify-content-start" >
                    <p className="lead">I am an undergraduate student in my third year in the University of Washington in Seattle.
                        I am a double major studying both Computer Science and Applied Math. I have lived in the Seattle area for
                        10 years and  I am an avid learner and I am constantly
                        looking for new opportunities to gain skills and experience in software development
                    </p>
                </div>

            </div>

        </>
    )
}


export function Skills() {
    return (
        <>
            <p className="h4"> Computer Science Skills: </p>

            <div id="accordion" className="accordion p-5">

                <SkillItem id="collapseOne" title="Java and Python"
                    body="I have been coding in Java for school and outside projects for 7 years. I also have been
                    coding in Python for 4 years."/>

                <SkillItem id="collapseTwo" title="Several Programming Languages and Environments"
                    body="I am familiar with several IDEs including Visual Studio, IntelliJ Idea, and Jupyter
                    Notebooks. I have worked with several programming languages including C, MatLab, Kotlin and
                    JavaScript. I am mainly familiar with Windows but I have experience using both MacOs and the
                    Linux terminal."/>
                <SkillItem id="collapseThree" title="REST APIs, HTTP Requests, Postman, and JSON"
                    body="I have created and worked on REST APIs through frameworks such as Spring Boot.
                    I am also familiar with tools such as Postman to test, receive and analyze HTTP requests
                    and JSON obects."/>

                <SkillItem id="collapseFour" title="Database Design and Implementation"
                    body="I have used both Relational and NoSQL databases. I have some experience working on cloud platforms
                    such as AWS and Azure."/>
                <SkillItem id="collapseFive" title="Mobile Development and Multiplatform Applications"
                    body="I have been programming android applications for many years and I have published two applications
                    to the app store. I have used both Jetpack Compose and Flutter. I have also had experience working
                    with Kotlin Multiplatform and using Compose to create applications for desktop, web, and mobile."/>

                <SkillItem id="collapseSix" title="Data Science and Applied Mathematics"
                    body=" I am familiar with data science tools in Python such as Pandas, Matplotlib, and Scikit Learn. I
                    have used Jupyter Notebooks and MatLab for data analysis, mathematical modeling, and for scientific
                    computing."/>
                <SkillItem id="collapseSeven" title="Git and Github"
                    body="I have used Git repositories for several projects. I have experience with both
                            Github and GitLab. I am familiar with the basic software develoment workflow including
                            using and creating GitHub actions."/>


            </div>
            <p className="h4"> Other Skills: </p>
            <ul className="list-group">
                <li className="list-group-item"> Working in teams </li>
                <li className="list-group-item"> Preparing and Delivering Presentations</li>
                <li className="list-group-item"> Willingness to Learn and Listen </li>
            </ul>
        </>
    )
}
interface SkillProps {
    id: string
    title: string
    body: string
}
function SkillItem({ id, title, body }: SkillProps) {
    return (<><div className="accordion-item">
        <div className="accordion-header" id={id + "_heading"}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {title}
            </button>
        </div>
        <div id={id} className="accordion-collapse collapse" aria-labelledby={id + "_heading"} data-bs-parent="#accordion">
            <div className="accordion-body">
                {body}
            </div>
        </div>
    </div></>);
}

export function Work() {
    return (
        <> <div className="row d-flex justify-content-center">
            <div className="col d-flex flex-column align-items-center">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/4/49/VIZIO_logo.svg"}
                    alt="VIZIO logo" width="250" height="150"></img>

                <img src={"./seattle.jpg"}
                    alt="Seattle Skyline" width="250" height="150"></img>
            </div>
            <div className="col-sm p-3 d-flex justify-content-start" >
                <p className="lead"> From June to August in 2022 I joined Vizio as an software engineer intern at their Seattle office.
                    I joined the software team working on Vizio Account. I got experience working in an agile development
                    environment and learned a lot from my team members. I got familiar working with the Kotlin Multiplatform
                    framework, Postman and the Vizio Smart TVs. I was able to create a testing application with Kotlin for both
                    web and desktop that tracked the performance of Vizio Account cloud services.
                </p>
            </div>

        </div></>
    );
}
export function Classes() {
    return (
        <>  <p>Classes I have taken at the University of Washington</p>
            <div className="row p-5">
                <div className="col">
                    {ClassCard("CSE 331 Software Design and Implementation", "Explores designing and programming in higher level languages. Focuses on proving code correctness and testing.")}
                </div>
                <div className="col">
                    {ClassCard("CSE 373 Data Structures and Algorithms", "Teaches fundamental algorithms and data structures in Java")}
                </div>
                <div className="col">
                    {ClassCard("CSE 351 The Hardware/Software Interface", "Explores machine architecture and introduces C, assembly, and memory management")}
                </div>
            </div>
            <div className="row p-5">
                <div className="col">
                    {ClassCard("CSE 414 Introduction to Database Systems ", "Explores Database Management Systems focusing on SQL and relational databases")}
                </div>
                <div className="col">
                    {ClassCard("CSE 163 Intermediate Data Programming", "Teaches how to use the various tools available in Python to analyze, manipulate and visualize Data")}
                </div>
                <div className="col">
                    {ClassCard("AMATH 481 Scientific Computing", "Explores implementing numerical differential equation solvers in Python and MatLab")}
                </div>
            </div>
        </>
    )
}
function ClassCard(title: String, text: String) {
    return (<>
        <div className="card shadow-sm h-100 p-3 rounded">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{text}</p>

            </div>
        </div></>)
}
export function Projects() {
    return (
        <></>
    )
}
export function Fun() {
    return (
        <></>
    )
}