import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';        /// .. makes goes 1 directory backwards
///now we can write ImageDetail inside of our JSX Tags as a primitive element like <Text> <View>
import beachimg from '../../assets/beach.jpg';

const ImageScreen = () => {
    ///using view since we alwaays have to return only one single root element, and here we'll be using multiple images
    return <View>               
        <ImageDetail titleName = "Forest"   //titleName is a self madeup Prop as this is our own madeup Component
                                            //that is ImageDetail. and we'll pass this prop to the child
        imageSource = {require('../../assets/forest.jpg')} 
        imageScore ={ 9 }    //assigning number to a prop, must be assigned inside curly braces
        />    

        <ImageDetail titleName = "Beach" 
        imageSource = {beachimg}
        imageScore ={ 7 } 
        />

        <ImageDetail titleName = "Mountain" 
        imageSource = {require('../../assets/mountain.jpg')} 
        imageScore ={ 4 } 
        />

    </View>
    ///ImageDetail-> titleName, imageSource  props are not the predefined ones. these props are of our own. 
};

const style= StyleSheet.create({});

export default ImageScreen;
