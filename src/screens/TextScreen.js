import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput  } from 'react-native';

const TextScreen = () => {
const [name, setName] = useState('')

    
        /*<TextInput 
            //must include these 3 props for entering email, passwords, usernames
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}     //bydefault its set to TRUE
            value={name}
            //onChangeText= {(newValue) => setName(newValue)}
        />*/

        //<Text>My name is {name}</Text>

        return <View>
            <Text>Enter Password: </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText= {(newValue) => setName(newValue)}
        />
    
        {name.length > 4 ? null : <Text>password must be longer than 5 characters</Text> 
        //use curly braces inside of JSX to execute JS
        }

    </View>


};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2 
    }
});


export default TextScreen;
