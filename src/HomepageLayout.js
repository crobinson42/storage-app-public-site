import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import { ResponsiveContainer } from "./components/ResponsiveContainer";
import office from './Photos/House.png'
import cameras from './Photos/Cameras.jpg'



const HomepageLayout = () => (
  
  <ResponsiveContainer >
    <Segment id = 'spaces' style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "3em" }}>
              Spaces & Pricing
            </Header>
            <p style={{ fontSize: "1.5em" }}>
              Spaces are 12' wide and any reasonable length
              
            </p>
            <p style={{ fontSize: "1.5em" }}>
              Spaces are $1 per foot of length for each month
            </p>
            <p style={{ fontSize: "1.33em" }}>
              Custom spaces are availble upon request
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={office}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment id = 'pricing' style={{ padding: "8em" }} vertical>
    <Grid  container stackable verticalAlign="middle">
        <Grid.Row  textAlign="center">
        <Grid.Column  floated="center" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={cameras}
            />
          </Grid.Column>
          <Grid.Column  floated="right" width={6} style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "3em" }}>
              Details
            </Header>
            <p style={{ fontSize: "1.5em" }}>
              No unattended access
              <br></br> 
              Perfect for long term 
              <br></br> 
              Great security
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment id = 'contact' style={{ padding: "8em 0em" }} vertical>
      <Container text >
        <Header as="h3" style={{ fontSize: "2em" }}>
          Contact
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          If you are interested in reserving a spot, please reach out at prairieavestorage@gmail.com
        </p>
        <Button as="a" size="large">
        <a href="mailto:prairieavestorage@email.com">E-mail</a>
        </Button>
        
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export { HomepageLayout };
