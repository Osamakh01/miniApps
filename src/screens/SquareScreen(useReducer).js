import React, {useReducer} from 'react';
//useReducer is a hook func very similar to useState hook func as well
import { View,Text,StyleSheet,Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 15;

/*we can define this func inside of squarescreen, but usually by convention, we define it  
    outside of our component. REASON: argument 1 to our reducer is going to be our current state object
    if we define it inside func component we will want to refer to that 1st argument as state, 
    because that is going to be our state object
    and here in component it wil be confused with the other state declaration i.e const[state,dispatch]... 
    it will not result in an error but it will be confusing.*/
const reducer = (state, action) => {
//1st argument -> state object i.e {red: number, green: number, blue: number}
//2nd argument -> action i.e how should we change our state object. what change are we making? decr or increasing
//state === {red: number, green: number, blue: number}
//action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15

switch(action.colorToChange){
    case 'red':
        //here on this point we want to modify the value of red. but we cant modify the state.red=state.red+15
        /* anytime you want to change a property inside of our state object, we're going to rebuild 
            that entire state object from scratch.but the new object is going to have the changed value
            for red that we want*/
        return state.red + action.amount > 255 || state.red + action.amount < 0     //ternanry condition
        ? state     //true condition
        : {...state, red: state.red + action.amount};   //false condition
        //return {{red: 0, green: 0, blue: 0} , red: state.red + action.amount}
        // {=== make a brand new object
        // ...state===take existing properties out of our state object. and copy paste them into new one.
        //red:===take the current value of red (and add in) how much we specified on that action object
/*here we are not making any changes to our state object. instead we're copy pasting all the values out of it
and adding them to this new object and then making a change to the new object*/
    case 'green':
        return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'blue':
        return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:  
        return state; /*if we donot match any of these cases that means we dont want to make any change to 
                        to our state whatsoever. so in default case: always return state object*/
    //here technicality #2 is also successfull.
    //no matter what we are always returning a new object to be used as our state.  
}

};

const SquareScreen = () => {
    //when we use useReducer
    //anytimg our state object changes becz of our reducer func, the entire component is goin to re-render
/*everytime reducer returns state gets updated so its a must that everytime reducer func must return 
something as a new state object or else when reducer returns value, React is goin to automatically re*render
entire component and state would be empty and it would show during the next render as undefined.*/
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state; //destructing from state
    //when we make use of reducer, we have to provide an initial value for our state object
    //2nd argument essentially set the tone for what our state looks like
    //we should have an object that has a red,green,blue property that will start off as zero
    /// state variable initially is going to be equal to that object
    /// the state variable is going to be essentially how we access our diff state values
    /// so before we had 3 seperate diff values floating around of red,green,blue, now instead they are all
                            ////combined into this one single object i.e [state]
    console.log(state);     //{red: 0, green: 0, blue: 0}   starting initial value of state

    /*dispatch, 2nd name must be runMyReducer
    whenever we're goin to make a change to our state object, we're goin to run dispatch(runMyReducer)
    and we're goin to pass in an argument to be used as our action object */
/*when we run dispatch(runMyReducer), we're going to pass in some objects that desc how we want to
modify our state. REACT is then goin to automatically run reducer func and whatever we passed in to 
(runMyReducer) will be provided as the 2nd argument in reducer func. */  


    //now we need to start to customize the text inside of ColorCounter by using prop system
    //2 props callback onIncrease onDecrease
    return <View>
        <ColorCounter
        /*2 callback func (i.e onIncrease and onDecrease) calling in each bcz each one need to either increment
         or decrement the current state value*/ 
        onIncrease= {()=> dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) } 
        //2 objects that are passing into reducer func 2nd argument i.e ACTION. then switch case runs
        onDecrease= {()=> dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) } //multiply -1 so we get proper -ve value 
        colorName="Red" 
        />

        <ColorCounter
         onIncrease= {()=> dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
         onDecrease= {()=> dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
         colorName="Green"
        />

        <ColorCounter
         onIncrease= {()=> dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) }
         onDecrease= {()=> dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }
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