import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import colors from "../assets/colors/colors"
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';



const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/Onboard1.png'),
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/Onboard2.png'),
    },
    {
      title: 'Spend more time doing the things you love',
      text: "Get started within five minutes",
      image: require('../assets/images/Onboard3.png'),
    },
];

const Onboard = ()=>{
    const renderItem = ({item}) =>{
        return(
          <View style = {styles.Slide}>
            <Image 
              source = {item.image}
              style = {styles.Image}
            />
            <View>
              <Text style = {styles.Title}>{item.title}</Text>
              <Text style = {styles.text}>{item.text}</Text>
            </View>
          </View>
        );
    };
    
    const keyExtractor = (item) => item.title;


    const renderDoneButton = () =>{
    return(
      <TouchableOpacity  style={styles.doneButtonwrapper}>
        <Text style={styles.doneButtonText} onPress = {()=> alert("Done :)") }>Done</Text>
      </TouchableOpacity>
      // <LinearGradient 
      //   colors={['#A5CBFF', '#232868']}
      //   start={{x: 0, y: 0}} 
      //   end={{x: 1, y: 0}} 
      //   style={styles.doneButtonwrapper}
      // >
      //   <Text style={styles.doneButtonText} onPress = {()=> alert("Done :)") }>Done</Text>
      // </LinearGradient>
    );
    };
    
    const renderNextButton = () =>{
    return(
        <View style = {styles.rightTextWrapper}>
        <Text style = {styles.rightText}>Next</Text>
    </View>
    );
    };
    
    const renderPrevButton = () =>{
    return(
        <View style = {styles.leftTextWrapper}>
        <Text style = {styles.leftText}>Prev</Text>
    </View>
    );
    };

    
    return(
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor = {keyExtractor}
                renderItem = {renderItem}
                renderDoneButton = {renderDoneButton}
                renderNextButton = {renderNextButton}
                renderPrevButton = {renderPrevButton}
                showPrevButton
                dotStyle = {styles.dotStyle}
                activeDotStyle = {styles.activeDotStyle}
                data={data}
            />
        </View>
    );
};




const styles = StyleSheet.create({
    Slide: {
      flex: 1,
      backgroundColor:colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Image:{
      marginVertical:30,
  
    },
    Title:{
      fontSize:20,
      color:colors.black,
      textAlign:"center",
      marginHorizontal:60,
      fontFamily:"OpenSans_700Bold",
    },
    text:{
      fontSize:13,
      color:colors.gray,
      textAlign:"center",
      marginHorizontal:60,
      fontFamily:"OpenSans_600SemiBold",
      marginTop:20,
    },
    rightTextWrapper:{
      width:40,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      marginRight:20,
    },
    rightText:{
      color:colors.black,
      fontSize:14,
      fontFamily:"OpenSans_600SemiBold",
    },
    leftTextWrapper:{
      width:40,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:20,
    },
    leftText:{
      color:colors.black,
      fontSize:14,
      fontFamily:"OpenSans_600SemiBold",
    },
    dotStyle:{
      backgroundColor:colors.blueFaded,
    },
    activeDotStyle:{
      backgroundColor:colors.blue,
    },
    doneButtonwrapper:{
      paddingLeft: 35,
      paddingRight: 50,
      borderRadius: 25,
      marginRight:-40,
      backgroundColor:colors.lightsteelblue,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
    },
    doneButtonText:{
      fontSize: 14,
      fontFamily:"OpenSans_600SemiBold",
      textAlign: 'center',
      margin: 10,
      color: colors.white,
      
    },
});
  

export default Onboard;