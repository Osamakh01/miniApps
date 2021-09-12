import React from 'react';                                  ///PART 1: IMPORTING LIBRARIES
import {View, Text, StyleSheet, FlatList} from 'react-native';
 

///***METHOD 1 FOR USING KEY PROPERTY***///
/*const ListScreen = () => {                                  ///PART 2: MAKING COMPONENT
    const friends = [
        {name: 'Friend #1', key: '1'},                      ///this is an array of objects
        {name: 'Friend #2', key: '2'},
        {name: 'Friend #3', key: '3'},
        {name: 'Friend #4', key: '4'},
        {name: 'Friend #5', key: '5'},
        {name: 'Friend #6', key: '6'},
        {name: 'Friend #7', key: '7'},
        {name: 'Friend #8', key: '8'},
        {name: 'Friend #9', key: '9'},
    ];

    return <FlatList               //this is like= <Text style= {styles.textStyles}> Hello Boys </Text>
    data={friends}                                      ////****INPUT****//// type of
    //renderItem={(element)=>{}
        //element === {item: {name: "friend #1"}, index:0 } we just wanna pullout item property which 
                                                        //have object inside our array
                                                    //to do this, we will use destructuring technique
    /*renderItem={( {item} )=> {                          ////****OUTPUT****////
        //item === {name: 'friend #1'}
    /*     return <Text> {item.name} </Text>

    }}                                                    

    /> 

};


///***METHOD 2 FOR USING KEY PROPERTY***///
const ListScreen = () => {                                  ///PART 2: MAKING COMPONENT
    const friends = [
        {name: 'Friend #1', age: 20 },                      ///this is an array of objects
        {name: 'Friend #2', age: 22 },
        {name: 'Friend #3', age: 23 },
        {name: 'Friend #4', age: 21 },
        {name: 'Friend #5', age: 25 },
        {name: 'Friend #6', age: 22 },
        {name: 'Friend #7', age: 22 },
        {name: 'Friend #8', age: 21 },
        {name: 'Friend #9', age: 23 },
    ];

    /*return <FlatList               //this is like= <Text style= {styles.textStyles}> Hello Boys </Text>

    horizontal                  //equavalent to horizontal = {true}
    showsHorizontalScrollIndicator= {false}  //hides the scrolling bar from the bottom screen

    //runtime key generator
    keyExtractor= {(friend) => { return friend.name} }      //arrow function returning 
                                                                    //friendsArray name property as a key

    data={friends}      //array of pieces of data that we want to turn into a List      ////****INPUT****//// 
    //renderItem={(element)=>{}
        //element === {item: {name: "friend #1"}, index:0 } we just wanna pullout item property which 
                                                        //have object inside our array
                                                    //to do this, we will use destructuring technique
   /* renderItem={( {item} )=> {                          ////****OUTPUT****////
        //item === {name: 'friend #1'}
     /*    return <Text style= {Styles.textStyle}> {item.name} </Text>

    }}   

    />*/
    
    return <FlatList
    keyExtractor= {(friend) => {return friend.name}}

    data= {friends}
    renderItem = {( {item} ) => {
        return <Text> {item.name} - Age {item.age} </Text>
    } }

    
    />

}; 




const Styles = StyleSheet.create({                          ///PART 3: STYLING THE COMPONENT
    textStyle: {
        marginVertical: 50
    }

});

export default ListScreen;                                  ///PART 4: EXPORTING THE COMPONENT