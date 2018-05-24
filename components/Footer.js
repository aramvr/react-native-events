import React, { Component } from 'react';
import { 
  Container, 
  Text, 
  View, 
  Footer, 
  Left, 
  Right, 
  Button, 
  Icon,
} from 'native-base';
import styles from '../styles';

export default class EventsFooter extends Component {
  render() {
    return (
        <Footer style={styles.eventsFooter}>
          <Left>
            <Button transparent>
                <Icon style={styles.iconBlack} name='ios-menu'/>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>
              <View style={styles.plusIconCont}><Icon style={styles.plusIcon} name='md-add'/></View>
              <View><Text style={styles.createEvent}>Create Event</Text></View>
              </Text>
            </Button>
          </Right>
        </Footer>
    );
  }
}