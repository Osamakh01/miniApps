import React, {useState} from "react";
//useState, we refer this as a HOOK, its a func that adds some additional functionality to a func component
import { Text, View, StyleSheet, Button } from "react-native";


const CounterScreen = () => {
    //counter is a piece of state that is going to change over time.
    const [counter, setCounter] = useState(0);  //using useState to initialize a new piece of state or
                                                //new peice of data that we are going to track     
                                                //and we must pass starting value or default value to useState
    //[counter, setCounter] square brackets refer to as ARRAY DESTRUCTURING
    //another way of pulling some elements or a reference to elements out of an array 
    //using array destructuring SO we would access whatever useState returns to us.
    //SetCounter is a func, anytime we want to update our piece of state, were going to call setCounter
                                //with a new value that we want counter to be    
        //becz react magically donot identify if a change is made manually to a counter Variable.                                   


    return <View>
        <Button
            title="Increase"
            onPress={() => {
                //DONT DO THIS      //we Dont MODIFY a state variable Directly.
                //instead anytime we want to change  a state variable, were going to  use the
                            //secondThing (setCounter) that comes back to us when we call useState
                //counter++;
                setCounter(counter + 1); //so here the value gets stored in setCounter
                console.log(counter);
                //console.log(setCounter);
            }} 
            
            //but anytime we call setCounter func, react is going to automatically re run the entire 
                //component func (CounterScreen). so everything inside this component is executed again.
                //but the 2nd time it gets executed, a value of counter will be whatever we passed 
                //into the setCounter 
        />

        

        <Button 
            title="Decrease"
            onPress={()=>{
                setCounter(counter - 1);
                console.log(counter);
            }}
        
        />

        <Text>Current Count: {counter} </Text>
    </View>

};

const style = StyleSheet.create({


});

export default CounterScreen;