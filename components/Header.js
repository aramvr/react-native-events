import React, { Component } from 'react';
import { 
  Container, 
  Text, 
  View, 
  Header, 
  Left, 
  Right, 
  Button, 
  Icon, 
} from 'native-base';
import styles from '../styles';
export default class EventsHeader extends Component {
  render() {
    return (
        <Header style={styles.eventsHeader}>
          <Left>
            <Button transparent>
                <Icon style={styles.iconBlack} name='arrow-round-back' />
                <Text style={styles.blackTitle}>{this.props.title}</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon style={styles.iconBlack} name='ios-search' />
            </Button>
          </Right>
        </Header>
    );
  }
}