import { useState } from 'react';
import { StyleSheet, ImageBackground , SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
      
    const [userNumber , setUserNumber] = useState();
    const [gameIsOver , setGameIsOver] = useState(true);
    const [gameRounds , setGameRounds] = useState(0);


    function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
      setGameIsOver(false);
    }
    
    function gameOverHandler(){
      setGameIsOver(true);
    }

    function newGameHandler(){
       setUserNumber(null);
       setGameRounds(0);

    }


    let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if(userNumber){
        screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if(gameIsOver && userNumber){
        screen=<GameOverScreen userNumber={userNumber}  Rounds={gameRounds}  onStartNewGame={newGameHandler} />
    }


  return (
    <ScrollView style={styles.rootScreen}>
    <KeyboardAvoidingView style={styles.rootScreen} behavior='position'>
    <LinearGradient colors={['#72062c' , "#ddb00f"  ]} style={styles.rootScreen}>
    <ImageBackground  style={styles.rootScreen} source={require('./assets/images/background.png')} imageStyle={styles.backgroundImage}>
     
     <SafeAreaView style={styles.rootScreen}>
     {screen}
     </SafeAreaView>

   </ImageBackground>
   </LinearGradient>
   </KeyboardAvoidingView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
 
  },
  backgroundImage:{
    opacity:0.15
  }
});
