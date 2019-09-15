import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
  render(){
      return(
        <div className="landing-body">
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://drive.google.com/uc?export=view&id=1g0LIW9mrYH4Nq17CemHdx3IEXU9QQR1C"
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                   <h1>Software Engineer</h1>

                <hr/>
                <p>Java | Spring | Hibernate |C# | Python | React | SQL | AWS | </p>

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
