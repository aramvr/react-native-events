import React, {Component} from 'react';
import styles from '../styles.js';
import { 
    Image, 
    Animated, 
    TouchableWithoutFeedback 
} from 'react-native';
import { 
    Container, 
    Header, 
    Footer, 
    Content, 
    Button, 
    Text, 
    View, 
    Left, 
    Right, 
    Icon 
} from 'native-base';

export default class EventDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentHeight: new Animated.Value(0),
            eventDetailedTexts: new Animated.Value(0),
            footerHeight : new Animated.Value(0),
            buttonRotate : new Animated.Value(0),
            buttonRotate2 : new Animated.Value(90),
            spin : '0deg'
        }
    }
    componentDidMount(){             
        Animated.timing(       
            this.state.contentHeight,
                {
                    toValue: 180,
                    duration: 300,
                    delay: 200
                }
        ).start(); 
        
        Animated.timing(       
            this.state.eventDetailedTexts,
                {
                    toValue: 180,
                    duration: 300,
                    delay: 350
                }
        ).start(); 

        Animated.timing(       
            this.state.footerHeight,
                {
                    toValue: 55,
                    duration: 300,
                    delay: 400
                }
        ).start(); 

        Animated.timing(       
            this.state.buttonRotate,
                {
                    toValue: 90,
                    duration: 300,
                    delay: 1000,
                }
        ).start(); 

        Animated.timing(       
            this.state.buttonRotate2,
                {
                toValue: 0,
                duration: 300,
                delay: 1300,
                
                }
        ).start(); 
        
    }


    render() {

        const rotateX = this.state.buttonRotate.interpolate({
            inputRange: [0, 90],
            outputRange: ['0deg', '90deg']
          });

          const rotateX2 = this.state.buttonRotate2.interpolate({
            inputRange: [0, 90],
            outputRange: ['0deg', '90deg']
          });
        const event = this.props.navigation.state.params.event;

      return (
          <Container style={styles.container}>
            <View style={styles.eventsDetailsHeaderView}>
                <Header iosBarStyle="light-content" style={[styles.eventsHeader, styles.eventsDetailsHeader]}>
                <Left>
                    <Button transparent onPress={()=> this.props.navigation.goBack()}>
                        <Icon style={styles.iconWhite} name='arrow-round-back' />
                        <Text style={styles.whiteTitle}>Event Detail</Text>
                    </Button>
                </Left>
                </Header>
            </View>
                <View>
                    <Image style={styles.heroImage} source={event.image} />
                </View>    
            <Animated.View style={[{height: this.state.contentHeight},styles.detailedEventBottom]}>
                <Animated.View style={[{height: this.state.eventDetailedTexts},styles.DetailedEventTitleCont, styles.eventDetailedTexts]}>
                    <Left>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.addressCont}>
                            <View><Icon name='ios-pin' style={styles.eventPin} /></View>
                            <View><Text style={[styles.eventAddress, styles.detailedEventAddress]}>{event.address}</Text></View>
                        </Text>
                        <Text style={styles.detailedEventDate}>{event.date}</Text>
                    </Left> 
                    <Right style={{height: 75}}>
                        <Animated.View style={{ transform: [{ rotateY: rotateX}]}}>
                            <Button style={[{backgroundColor: '#5A5155'}, styles.btnGoing]}><Text style={styles.btnText}>Interest</Text></Button>
                        </Animated.View>
                        
                        <Animated.View style={{marginTop:-40, transform: [{ rotateY: rotateX2}]}}>
                            <Button style={[{backgroundColor: '#51c950'}, styles.btnGoing]}><Text style={styles.btnText}>Going</Text></Button>
                        </Animated.View>

                    </Right>
                </Animated.View>
                <Animated.View style={[{height:this.state.footerHeight},styles.animatedFooter]}>
                    <Footer style={[styles.eventsFooter, styles.detailedEventsFooter]}>
                        <Left>
                            <Button transparent>
                                <Text style={styles.addCalendarText}>Add to Calendar</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Text style={styles.knowMoreText}>Know More</Text>
                                <Icon style={styles.ArrowForward} name='arrow-round-forward'/>
                            </Button>
                        </Right>
                    </Footer>
                </Animated.View>
            </Animated.View>
          </Container>
        
      );
    }
  }