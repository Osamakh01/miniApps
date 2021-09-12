import React, {useState} from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);          //seperate State Variable 
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    // now we need to somehow make sure that our colorCounter components have the ability to somehow change
    //these diff state values
    //we are going to pass down a callback func from parent down to child.
    //in that callback func, we're going to allow these children to modify the value of red,green,blue 


/////*HELPER FUNC*/////     
    //it decide what clr we want to update and then do a quick validation on the update and then if we 
    //dont go above 255 or below 0, then we'll go ahead and make the actual update
    //1st argument must be some string that desc what value we're trying to change
    //2nd argumnt tells the amount that we want to change that particular color by
    const setColor = (color, change) => {
    //color === 'red','green','blue' as a string. it decides what clr we are trying to change
    //change === +15,-15
        switch(color){
            case 'red':
            //this condition helps our app to instantly change the color while capping the state color values
                                    //(condition) ? expressionTrue : expressionFalse;
            red + change > 255 || red + change < 0 ? null : setRed(red + change)    //TERNARY EXPRESSION//
                            //unfortunately we cant return directly from ternary statement, so instead we are
                            //just going to evaluate this expression to NULL i.e dont do anything

          /*  if (red + change > 255 || red + change < 0){        //red + change(+/- value) < 0
                return;     //out of bounds then simply return, or goto next condition
            } else{
                //if we pass the bound then go ahead and commit the update 
                setRed(red + change);
            }   */
            return;     //always terminate the case with the return at the very end, so we dont fall thru 
                        //to any other case statement or other cases tht we might have inside of here

            case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change)    //TERNARY EXPRESSION//
            return;

            case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)    //TERNARY EXPRESSION//
            return;

            default:     //color that we pass doesnt match red green blue will instead run this case 
            return;     //in this case we'll just return say don't do anything

        }

    };

    //now we need to start to customize the text inside of ColorCounter by using prop system
    //2 props callback onIncrease onDecrease
    return <View>
        
        <ColorCounter
        /*2 callback func (i.e onIncrease and onDecrease) calling in each bcz each one need to either increment
         or decrement the the current state value*/ 
        onIncrease= {()=> setColor('red', COLOR_INCREMENT)}    //setRed(red + COLOR_INCREMENT)
        onDecrease= {()=> setColor('red', -1 * COLOR_INCREMENT)} //multiply -1 so we get proper -ve value 
        colorName="Red" 
        />

        <ColorCounter
         onIncrease= {()=> setColor('green', COLOR_INCREMENT)}
         onDecrease= {()=> setColor('green', -1 * COLOR_INCREMENT)}
         colorName="Green"
        />

        <ColorCounter
         onIncrease= {()=> setColor('blue', COLOR_INCREMENT)}
         onDecrease= {()=> setColor('blue', -1 * COLOR_INCREMENT)}
         colorName="Blue" 
        />

        
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}  
        //2 sets of curly braces. the outerset means we're about reference some JS expression
        //the inner set is creating an actual object literal.
        />

    </View>
    
    
};

const Styles = StyleSheet.create({});

export default SquareScreen;