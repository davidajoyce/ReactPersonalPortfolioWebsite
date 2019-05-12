import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component{
  render(){
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
            </Cell>
            <Cell className="about-me-cell" col={12}>
                <div className="banner-text">
                  <h1>About Me</h1>

                <hr/>
                <h3>Software engineer using Java and C# to develop a Java Enterprise utility billing application for Gentrack Ltd along with developing APIs using the Java Spring framework.
          In my spare time, I love trying out new technologies, for instance, I develop python scripts for my family’s supermarket business to obtain key data insights. Another project I've developed in my spare time is a Java Spring Web feedback section using Spring MVC and MySQL.</h3>
                </div>
            </Cell>
          </Grid>
        </div>
      )
    }
}

export default Aboutme;
