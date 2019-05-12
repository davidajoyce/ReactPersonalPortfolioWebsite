import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={4}>
              <h2>David Joyce</h2>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQHnehhdUcKSNQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=2bfKMRNJm9GZTTWJVTMmf_lnU7azEECyrzjPUTrJGPo"
                 alt="avatar"
                 style={{height: '250px'}}
                 />
            </Cell>
            <Cell col={8}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                   <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton'}}>
                   <i className="fa fa-envelope" aria-hidden="true"/>
                   davidajoyce141@gmail.com
                   </ListItemContent>
                  </ListItem>

                </List>
              </div>



            </Cell>
          </Grid>
        </div>
      )
    }
}

export default Contact;
