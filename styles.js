import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default StyleSheet.create({
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBlack : {
    color: '#252525'
  },
  iconWhite : {
    color: '#fff'
  },
  blackTitle : {
    color: '#252525',
    paddingLeft: 22,
    fontSize: 17
  },
  whiteTitle : {
    color: '#fff',
    paddingLeft: 22,
    fontSize: 17,
    fontWeight:'bold'
  },
  eventsHeader : {
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth:0,
    backgroundColor: '#fff'
  },
  eventsDetailsHeaderView : {
    position:'absolute',
    width:viewportWidth,
    height: 40,
    zIndex: 9,
  },
  eventsDetailsHeader : {
    backgroundColor: 'transparent',
  },
  eventsFooter : {
    borderTopWidth :0,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 30,
  },
  container : {
    backgroundColor: '#fff'
  },

  addressCont : {
    marginTop:5
  },
  eventTitle : {
    fontSize: 26,
    fontWeight:'800',
    color: '#252525'
  },
  eventDate :{
    color: '#636363',
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventPin : {
    color: '#636363',
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventAddress : {
    color: '#636363',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft:8
  },
  detailedEventAddress :{
    color: '#201629',
    paddingTop:7,
  },
  detailedEventDate : {
    fontSize: 11,
    color: '#201629',
    fontWeight: 'bold',
    paddingTop:7,

  },
  slideImage : {
    height: 440,
    width: 313,
    flex: 1,
    borderRadius: 20,
    top: 0,
    left: 0
  },
  createEvent : {
    fontSize: 16,
    color: '#232323',
  },
  plusIcon : {
    fontSize:12,
    color: '#232323',
    marginLeft:10,
    paddingLeft:10,
    lineHeight:15,
  },
  plusIconCont : {
    marginLeft: 3
  },
  heroImage :{
    width: viewportWidth,
    height: viewportHeight
  },
  btnGoing :{
    width: 95,
    height:40,
  },
  btnText :{
    fontSize: 14,
    width:95,
    fontWeight:'bold',
    textAlign:'center'
  },
  detailedEventsFooter : {
    borderTopWidth : 1,
    borderColor : '#f7f7f7',
    backgroundColor:'#fff'
  },
  addCalendarText : {
    fontSize : 15,
    color: '#232323',
    fontWeight:'bold'
  },
  knowMoreText :{
    fontSize : 15,
    color: '#51c950',
    fontWeight:'bold',
    paddingTop:2,
    textAlign:'right'
  },
  ArrowForward: {
    color : '#201629',
    fontSize: 25,
    lineHeight:32,
    marginLeft:-8
  },
  detailedEventBottom : {
    width : viewportWidth,
    bottom: 0,
    backgroundColor:'#fff',
    position:'absolute'
  },
  eventDetailedTexts : {
    position: 'absolute',
    width : viewportWidth,
    bottom:30
  },
  animatedFooter : {
    position:'absolute',
    width : viewportWidth,
    bottom:0
  },
  animatedHeader :{
    width : viewportWidth,
    flex: 1,
    flexDirection: 'row'
  },
  eventDetailsAnim : {
    width: viewportWidth,
    height:300,
  },
  eventDetailsAll : {
    height:60,
    marginBottom:25,
    overflow:'hidden'
  },
  eventTitleCont : {
    flex: 1,
    flexDirection : 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:15,
    marginBottom:60,
    marginTop:10
  },
  DetailedEventTitleCont : {
    flex: 1,
    flexDirection : 'row',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop:0
  }
});