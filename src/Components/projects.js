import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid mdl-grid">
          
          <div class="mdl-cell">
            {/*Project 2*/}
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
              <CardTitle style={{color: '#000000', height: '176px', background:
              'url(https://fitsmallbusiness.com/wp-content/uploads/2019/01/AWS-Amplify-icon.png) center / cover'}}></CardTitle>
              <CardText>
                Deployed my personal portfolio React website on AWS amplify.
              </CardText>
              <CardActions border>
                <Button onClick={this.ReactAWSLink} colored>Github</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>

          <div class="mdl-cell">
            {/*Project 3*/}
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
              <CardTitle style={{color: '#000000', height: '176px', background:
              'url(https://javainterviewpoint-7ac9.kxcdn.com/wp-content/uploads/2019/02/Spring-MVC-Tutorial.png) center / cover'}}></CardTitle>
              <CardText>
                Feedback Forum using Spring MVC and MySQL
              </CardText>
              <CardActions border>
                <Button onClick={this.SpringFeedbackLink} colored>Github</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>

          <div class="mdl-cell">
            {/*Project 4*/}
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
              <CardTitle style={{color: '#000000', height: '176px', background:
              'url(https://png.pngtree.com/svg/20161116/bbb0b8e89d.svg) center / cover'}}></CardTitle>
              <CardText>
                Web Supermarket Price Scraping Script using Python
              </CardText>
              <CardActions border>
                <Button onClick={this.PythonWebPriceScraping} colored>Github</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>

        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div><h1>This is </h1></div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div><h1>This is </h1></div>
      )
    } else if(this.state.activeTab === 3){
      return(
        <div><h1>This is </h1></div>
      )
    }
  }

  ReactAWSLink(){
    window.open('https://github.com/davidajoyce/ReactPersonalPortfolioWebsite','_blank');
  }

  ReactLink(){
    window.open('https://github.com/davidajoyce/MyPersonalPortfolioReactNative','_blank');
  }

  SpringFeedbackLink(){
    window.open('https://github.com/davidajoyce/JavaSpringWebDev','_blank');
  }

  PythonWebPriceScraping(){
    window.open('https://github.com/davidajoyce/PythonWebSupermarketPriceScraping','_blank');
  }

  render(){
      return(
        <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
              <Tab>Projects</Tab>
           </Tabs>

             <Grid>
               <Cell col={12}>
                 <div className="content">{this.toggleCategories()}</div>
               </Cell>
             </Grid>
        </div>
      )
    }
}

export default Projects;
