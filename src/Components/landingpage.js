import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
  render(){
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQHnehhdUcKSNQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=2bfKMRNJm9GZTTWJVTMmf_lnU7azEECyrzjPUTrJGPo"
                alt="avatar"
                className="avatar-img"
                />
            </Cell>
            <Cell col={12}>
                <div className="banner-text">
                   <h1>Software Engineer</h1>

                <hr/>
                <p>Java | Spring | Hibernate |C# | Python | React | SQL | Bash | AWS | </p>

              <div className="social-links">

                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/david-joyce-01397296/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a href="https://github.com/davidajoyce" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
                </div>
            </Cell>
          </Grid>
        </div>
      )
    }
}

export default LandingPage;
