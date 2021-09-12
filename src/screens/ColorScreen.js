import React, {useState} from 'react';
import { View, Button, StyleSheet, Text, FlatList } from 'react-native';


const ColorScreen = () => {
    //colors is a state variable
    const [colors, setColors] = useState([]); //empty array of string is a default value.
    console.log(colors)


    return <View>
        <Button title="Add a COLOR" onPress={()=>{
            setColors([...colors, randomRGB()])
            //we are creating here a new array by putting square brackets.
            // ... means take a look at colors array, take all the elements inside there and add them inside
            //of this new array
            // after this, adding a new entry by calling randomRGB()
        //Result= we call setColors with a brand new array that has everything from original colors variable
        //and our brand new one arrray that is setColors array
        //we get setColors array with the mixture/addition of colors array and randomRGB string array
        }} />  

        {/*  <View style={{height: 100, width: 100, backgroundColor: randomRGB()}}   //rgb(61,55,77)   />   */}

        <FlatList 
            //in this we donot use destructuring, as we receive string directly
            //we use destructing in only renderItem
            // key must be unique, so here rgb must be use a key

            keyExtractor={(item)=> {return item}} //returing item, as its a array of rbg string that is already
                                                                                                //unique
////FOR INPUT////
            data={colors} //array of pieces of data that we want to turn into a List

            // renderItem is a func thats going to be called with every element inside of array
            // 1st aurgement here has a lot of diff pieces of data or properties inside of it. 
            // item === 'rgb(0,0,0)'
////FOR OUTPUT////            
            renderItem= {( {item} ) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}} />
                //in backgroundColor, rather than again creating a brand new array of randomly generated clr
                //i.e randomRGB, we are going use the random clr that we already generated and 
                // is available inside this func as ITEM
            } }
            
        />
        
    </View>
            //using hardcoded styling above, bcz we want generate this style object on the fly, as we are
            //randomly generating the color 
};



//Its a helper function that helps create random clrs 
const randomRGB =() => {        //math.random gives number b/w 0 and 1
    const red = Math.floor(Math.random() * 256) ;
                                        ///colors are from 0 to 255, so 256 will give values b/w 0 to 256.
                    //Math.floor() method is used to round off the number passed as a parameter to its 
                    //nearest integer in Downward direction of rounding i.e. towards the lesser value.
                    ///This will help us end up getting numbers b/w 0 to 255
                    // e.g multiply 0.9999 * 256 = 255.99
                    //then math.floor with lessen the value and round off to 255
    
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    //injecting or interpolating these variables red green blue
    //placeholders are ${red}, ${green} and ${blue}
        //basically you can add values into js string using a template literal.This is a dollar sign followed
        //by a pair of curly brackets. 
        //Within the curly brackets should be the expression whose value you want to embed in the string.
        // here RGB is prolly is a STRING
    return `rgb(${red}, ${green}, ${blue})`;    //this will return :  rgb(61,55,77) or any random values
    // `` is a template string, back ticks character
};

//TEMPLATE LITERALS 

/*Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax*/

//Template literals let you embed values into a string without relying on concatenation.
//To declare a template literal, your string must be enclosed in back ticks (“) instead of quotation marks.

//Template literals provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation.

//Automatic replacing of variables with real values is called string interpolation.
//Automatic replacing of expressions with real values is called string interpolation.


const style = StyleSheet.create({
});



export default ColorScreen;