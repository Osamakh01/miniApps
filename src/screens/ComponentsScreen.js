import React from 'react';                                          ///PART 1: IMPORTING LIBRARIES
import {Text, StyleSheet, View} from 'react-native';
 
/*const ComponentsScreen = () => {                                 ///PART 2: MAKING COMPONENT
    return ( 
    <View>  
    <Text style= {styles.textStyle}>this is a component Screen</Text>
    <Text>WHats UP</Text>
    </View>
    );
};

const styles = StyleSheet.create({                                  ///PART 3: STYLING THE COMPONENT
    textStyle: {
        fontSize: 30

    }
});*/

const ComponentsScreen = () => {
    const Name = 'Osama'
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native </Text>
            <Text style={styles.subheading}>My name is {Name} </Text>

        </View>

    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subheading: {
        fontSize: 20
    }
});

export default ComponentsScreen;                                   ///PART 4: EXPORTING THE COMPONENT