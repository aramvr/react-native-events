import React, { Component } from 'react';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Events from './components/Events';
import EventDetails from './components/EventDetails';

const Navigation = StackNavigator({
  Events: { screen: Events },
  EventDetails : {screen: EventDetails}
},
{
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
  mode : 'modal'
}
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Navigation/>
      </Root>
    );
  }
}

