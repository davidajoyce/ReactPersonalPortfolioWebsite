import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
  render(){
      return(
        <div>
           <Grid>
             <Cell col={4}>
               <div style={{textAlign: 'center'}}>
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQHnehhdUcKSNQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=2bfKMRNJm9GZTTWJVTMmf_lnU7azEECyrzjPUTrJGPo"
                    alt="avatar"
                    style={{height: '200px'}}
                  />
               </div>

               <h2 style={{paddingTop: '2em'}}>David Joyce</h2>
               <h4 style={{color: 'grey'}}>Programmer</h4>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
               <p>Enthusiastic Software engineer with experience in developing and maintaining an enterprise application with Java and C#. Previous 1+ years experience as an operations manager and analyst where I developed reports in SQL along with leading successful client projects.
               </p>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
               <h5>Email</h5>
               <p>davidajoyce141@gmail.com</p>
               <h5>Web</h5>
               <p>davidajoyce.co.uk</p>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

             </Cell>
             <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>

                <Education
                  startYear={2015}
                  endYear={2016}
                  schoolName="Imperial College London"
                  schoolDescription="Dissertation: Cost Benefit Analysis Model Using Bayesian Attack Graphs."
                  awards="Awarded The Philips Group Project Prize in Computing Science."
                />

                <Education
                  startYear={2011}
                  endYear={2015}
                  schoolName="National University of Ireland, Galway"
                  schoolDescription="Dissertation: Finite element modelling of welded connections of a P91 steel welded T-joint for high temperature fatigue."
                  awards="Awarded a student scholarship for first class honours."
                />
                <hr style={{borderTop: '3px solid #e22947'}} />

                <h2>Experience</h2>

                <Experience
                  startYear={2018}
                  endYear={2019}
                  jobName="Software Engineer"
                  jobDescription="Work in a Scrum team to design, build, test, deploy and maintain an energy enterprise product. 
                  Develop UI with C#, Back End and APIs with Java and Spring framework. 
                  Testing champion where I am implementing integration tests and unit tests throughout our team. 
                  Review Pull Requests for fellow peers code"
                />

                <Experience
                  startYear={2016}
                  endYear={2017}
                  jobName="Operations Manager and Analyst"
                  jobDescription="Lead projects and interfaced with clients to make sure requirements were
                  fulfilled. Organized support outsourcing, developed relationships with longstanding
                  partners, and created standards that improved efficiency within the company
                  Developed reports in SQL for our data analytics software. Troubleshooted client network and software support issues"
                />

                <hr style={{borderTop: '3px solid #e22947'}} />

                <h2>Skills</h2>
                <Skills
                   skill="Java"
                   progress={85}
                />

                <Skills
                   skill="Python"
                   progress={65}
                />

                <Skills
                   skill="C#"
                   progress={50}
                />

                <Skills
                   skill="React"
                   progress={30}
                />
             </Cell>
           </Grid>
        </div>
      )
    }
}

export default Resume;
