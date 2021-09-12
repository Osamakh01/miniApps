import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


//we dont necessarily have to refer to the entire props object. so we can destructure the properties we care about
/*const ImageDetail = (prop) => {      //prop system working   ///  ../../ going to root directory
    return <View>
        <Image source = {prop.imageSource} />
        <Text> {prop.titleName} </Text>
        <Text> Image Score - {prop.imageScore} </Text>
    </View>
};*/
 
///optional Optimization:
const ImageDetail = ( {imageSource, titleName, imageScore} ) => {      //prop system working   ///  ../../ going to root directory
    return <View>
        <Image source = {imageSource} />
        <Text> {titleName} </Text>
        <Text> Image Score - {imageScore} </Text>
    </View>
};

const style= StyleSheet.create({}); 

export default ImageDetail;
