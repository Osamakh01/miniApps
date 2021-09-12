import React, {useReducer} from "react";
import { Text, View, StyleSheet, Button } from "react-native";



const reducer = (state, action) => {
    //state=== {counter: number}
    //action=== {valueToChange: , amount: 1 | -1}
    /*if(action.valueToChange='counter'){
        return {...state, counter: state.counter + action.amount }
    }
    else{
        return state;
    }*/

    /* using reducer community convention i.e {type: ' change_red ', payload: } */
    //state=== {counter: number}
    //action === {type: 'increment' || 'decrement', payload: 1}

    switch(action.type){
        case 'increment':
            return {...state, counter: state.counter + action.payload}

        case 'decrement':
            return {...state, counter: state.counter - action.payload}

        default:
            return state;    

    }

    

};

const CounterScreen = () => {        
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    //const {counter} = state;          


    return <View>
        <Button
            title="Increase"
            onPress={() => {                
                dispatch({type: 'increment', payload: 1 })
            }} 
        />

        

        <Button 
            title="Decrease"
            onPress={()=>{
                dispatch({type: 'decrement', payload: 1 })
            }}
        />

        <Text>Current Count: {state.counter} </Text>
    </View>

};

const style = StyleSheet.create({


});

export default CounterScreen;