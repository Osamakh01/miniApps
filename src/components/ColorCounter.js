import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';


//2 props callback onIncrease onDecrease
const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
    return <View>
        <Text>      {colorName}        </Text>

        
        <Button onPress={() => onIncrease()} title= {`Increase ${colorName}`} 

        /* <Button onPress={() => setRed(red + 1) } title= "Increase Red" /> 
        
        /*if a user clicks on button i.e INCREASE COLOR, im going to call the
         onIncrease callback

        when we call onIncrease() we can imagine that setRed(red + 1) is like copy pasting from parent
         and throwing directly into this button callback or the onPress handler. our child component can 
         directly call setRed(red + 1) but its being done with onIncrease & onDecrease callbacks*/

          
        /> 
        

        <Button onPress={() => onDecrease()} title= {`Decrease ${colorName}`} 
        /* remember we learnt earlier when we place string inside JSX element, we dont need to use curly braces
        but in this case we'll be using string interpolation or string templating to inject colorName variable
        into into this string (i.e title= ....)
        And if we're using string interpolation then we do use curly braces, thats why we wrapped the title string
        with curly braces. and replacing double quotes with back tics characters
        */
        
        />



        
</View>
};

const Styles = StyleSheet.create({});

export default ColorCounter;