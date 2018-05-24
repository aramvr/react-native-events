import React, {Component} from 'react';
import styles from '../styles.js';
import { 
    Image, 
    Animated, 
    LayoutAnimation, 
    NativeModules, 
    TouchableWithoutFeedback
 } from 'react-native';

import { 
    Container,
    Content, 
    Button, 
    Text, 
    View, 
    Left, 
    Right, 
    Icon 
} from 'native-base';

import EventsHeader from './Header';
import EventsFooter from './Footer';
import Carousel from 'react-native-snap-carousel';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventDetailsTop: 0,
            entries: [
                {
                    title: 'Fashion Talk',
                    address: 'Yerevan, Armenia',
                    image: require('../assets/slide3.jpg'),
                    date: 'Jan 24, 2018'
                },
                {
                    title: 'Kabali Show',
                    address: 'London, England',
                    image: require('../assets/slide1.jpg'),
                    date: 'Jan 26, 2018'
                },
                {
                    title: 'Yoke Party',
                    address: 'Yerevan, Armenia',
                    image: require('../assets/slide2.jpg'),
                    date: 'Jan 30, 2018'
                }
            ],
            active : 0,
        }
        this.onSnapToItem = this.onSnapToItem.bind(this);
        this.onSelectEvent = this.onSelectEvent.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }


    onSnapToItem(active){
        LayoutAnimation.spring();
        const sldieValue = active < this.state.active ? -100 : 100;
        this.setState({
            eventDetailsTop: this.state.eventDetailsTop + sldieValue,
            active
        });
    }

    onSelectEvent(event){
        this.props.navigation.navigate('EventDetails', {event: this.state.entries[event]});
    }

    renderItem ({item, index}) {
        return (
            <TouchableWithoutFeedback  onPress={()=>this.onSelectEvent(index)}>
                <View style={styles.slide} >
                    <Image source={item.image} style={[styles.slideImage]}/>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }

    eventDetails(){

        const events = this.state.entries.map((event, index)=>{
            return(
                <View key={index} style={styles.eventTitleCont}>
                    <Left style={{height:50}}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.addressCont}>
                            <View><Icon name='ios-pin' style={styles.eventPin} /></View>
                            <View><Text style={styles.eventAddress}>{event.address}</Text></View>
                        </Text>
                    </Left>
                    <Right style={{height: 40}}>
                        <View>
                            <Text style={styles.eventDate}>{event.date}</Text>
                        </View>
                    </Right>
                </View>
            );
        });

        return events;
        
    }

    render() {
        let active = this.state.active;
        const entries  = this.state.entries;
      return (
          <Container style={styles.container}>
            <EventsHeader title="Events" />
            <Content>
                <View style={styles.eventDetailsAll}>
                    <View style={[{marginTop:-this.state.eventDetailsTop}, styles.eventDetailsAnim]}>
                        {this.eventDetails()}
                    </View>
                </View>    
            
                <Carousel 
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this.renderItem}
                sliderWidth={358}
                itemWidth={313} 
                layout={'stack'} 
                onBeforeSnapToItem={this.onSnapToItem} 
                />
            </Content>
            <EventsFooter/>
          </Container>
        
      );
    }
  }