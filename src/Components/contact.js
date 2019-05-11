import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>David Joyce</h2>
              <img
                 src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                 alt="avatar"
                 style={{height: '250px'}}
                 />
                 <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 This is example text to be filled allalalallajddiirjd</p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                   <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                   <i className="fa fa-phone-square" aria-hidden="true"/>
                   +44 749 057 0890
                   </ListItemContent>
                  </ListItem>

                  <ListItem>
                   <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                   <i className="fa fa-fax" aria-hidden="true"/>
                   +44 749 057 0890
                   </ListItemContent>
                  </ListItem>

                  <ListItem>
                   <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                   <i className="fa fa-envelope" aria-hidden="true"/>
                   davidajoyce141@gmail.com
                   </ListItemContent>
                  </ListItem>

                  <ListItem>
                   <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                   <i className="fa fa-skype" aria-hidden="true"/>
                   MySkypeId
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
