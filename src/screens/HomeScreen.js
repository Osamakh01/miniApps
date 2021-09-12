import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
//using button with view becz by default a component only returns a single root element.
//so thats why we're wrapping up text and button in a view to get a single root element returned.


//whenever a component that we create is passed a props object, it always showed up as the first 
//argument to this const HomeScreeen() func.      
/////props object contains diff properties. One of property inside there is a function that we can call inside
/////our code and tell StackNavigator() that we want to change some content on the screen.  


//const HomeScreen = (props) => {     ///here we are destructuring the navigation from props.
                                        ///we dont want to use props again and again

const HomeScreen = ( {navigation} ) => {
  
  return <View>
  <Text style={styles.text}>HomeScreen</Text>
  <Button
    //onPress={() => {console.log('Simple Button Pressed')} } //console.log appears in the same terminal(cmd) where RN is running
    //onPress={()=> {return props.navigation.navigate("Components")}} //navigate is the main func that we use to change the content on the screen
    onPress={()=> navigation.navigate("Components")}
    title="Simple Button Directs to COMPONENTS SCREEN"
  />

  <Button 
    title="Simple Button Directs to LIST SCREEN"
    //onPress={()=> props.navigation.navigate('List')}
    onPress={()=> navigation.navigate('List')}
  />

  <Button 
    title="Simple Button Directs to IMAGE SCREEN"
    onPress={()=> navigation.navigate('Image')}
  />

  <Button 
    title="Simple Button Directs to COUNTER SCREEN"
    onPress={()=> navigation.navigate('Counter')}
  />

  <Button 
    title="Simple Button Directs to COLOR SCREEN"
    onPress={()=> navigation.navigate('Color')}
  />

  <Button 
    title="Simple Button Directs to SQUARE SCREEN COLOR BOX"
    onPress={()=> navigation.navigate('Square')}
  />

  <Button 
    title="Simple Button Directs to TEXT SCREEN"
    onPress={()=> navigation.navigate('Text')}
  />

  <Button 
    title="Simple Button Directs to BOX SCREEN"
    onPress={()=> navigation.navigate('Box')}
  />


  <TouchableOpacity onPress={()=> {return navigation.navigate('List')}}>
    <Text>TouchableOpacity Button Directs to LIST SCREEN</Text>
    <Text>TouchableOpacity Button Directs to LIST SCREEN</Text>
    <Text>TouchableOpacity Button Directs to LIST SCREEN</Text>
  </TouchableOpacity>

  
  </View>
  //In JSX we can pass string to a prop without using red curly braces. this is one of a few exceptions
  //where we are trying to assign a value to a prop for just about every other type of value, 
  //we use red braces. for STRINGS we use " ".
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

