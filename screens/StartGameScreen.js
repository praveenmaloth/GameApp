import { TextInput, View,StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({onPickNumber}){

      const [enteredNumber , setenteredNumber] = useState('');

      function inputHandler(enteredText){
        setenteredNumber(enteredText);
      }

      function resetInputHandler(){
        setenteredNumber('');
      }

      function confirmInputHandler(){
          const chooseNumber = parseInt(enteredNumber);
          if(  (chooseNumber <=0) ||  (chooseNumber > 99) ){
            Alert.alert(
              'invalid Number' , 
               'Number has to be a number between 1 and 99!',
               [{text:'okay' , style:'default' , onPress:resetInputHandler }]
            );
            return;
          }
          onPickNumber(chooseNumber);
      }

     return(
        <View style={styles.inputcontainer}>
          <TextInput 
          style={styles.NumberInput} 
          maxLength={2} 
          keyboardType="number-pad" 
          autoCapitalize="none" 
          autoCorrect={false} 
          value={enteredNumber}
          onChangeText={inputHandler}
          />
        <View style={styles.buttonsContainer}>
        <View  style={styles.buttonContainer}>
           <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        
        </View>
    </View>
     );
    

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputcontainer:{
        alignItems:'center',
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#72062c',
        borderRadius:8,
        elevation:8,
        
    },
    NumberInput:{
        width:50,
        height:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        marginVertical:8,
        color:"#ddb52f",
        fontWeight:'bold'
    },
    buttonsContainer:{
       flexDirection:'row'
    },
    buttonContainer:{
      flex:1,
      marginLeft:10
    }
});