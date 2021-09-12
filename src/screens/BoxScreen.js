import React from 'react'
import { View, Text, StyleSheet, TextInput, YellowBox } from 'react-native'

const BoxScreen = () => {
    return (
        // <View style={styles.parentViewStyle}>

        //     <Text style={styles.textStyle} >Mini APP</Text>

        //     <View style={styles.viewStyle1} />
        //     <View style={styles.viewStyle2} />
        //     <View style={styles.viewStyle3} />
        // </View>
        // Parent view
        <View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                borderColor: 'black',
                borderWidth: 3
            }}>
                <Text>Mini app</Text>
            </View>
            <View style={{
                height: 50,
                flexDirection: 'row'
            }}>
                <View style={styles.viewStyle1} />
                <View style={styles.viewStyle2} />

            </View>
        </View>

        /*  
            <Text style={styles.textOneStyle}>Child # 01</Text>
            <Text style={styles.textTwoStyle}>Child # 2</Text>
            <Text style={styles.textThreeStyle}>Child # 3</Text> 
        */
    );
};

const styles = StyleSheet.create({
    //adding 2 styling objects or properties
    /*viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'center',
        //flexDirection: 'row',
        height: 200,
        //justifyContent: 'center'
        
    },

    /*textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4,
        //alignSelf: 'flex-end'
    },

    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'yellow',
        //flex: 4,
        /*position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom:0,*/
    //thse 5 properties help child 2 to fill the entire parent view element space
    //shortcut of these 5 diff properties: 
    /*...StyleSheet.absoluteFillObject
    //absoluteFillObject is essentially a hardcoded object that has set of these 5 properties
},

textThreeStyle:{
    borderWidth: 3,
    borderColor: 'red',
    //flex: 2
   
}*/



    parentViewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        height: 50,
    },

    textStyle: {
        margin: 15,


    },

    viewStyle1: {
        height: 50,
        width: 50,
        backgroundColor: 'pink',
        alignSelf: 'flex-start',

    },

    viewStyle2: {
        height: 50,
        width: 50,
        backgroundColor: 'plum',
        alignSelf: 'flex-end',
        bottom: 50
    },

    viewStyle3: {
        height: 50,
        width: 50,
        backgroundColor: '#A8E4A0',
        bottom: 50
    },

});


export default BoxScreen;