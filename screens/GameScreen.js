import { useEffect, useState } from "react";
import { StyleSheet , View , Text , Alert, ScrollView } from "react-native";


import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min , max , exclude){
       const rndNum = Math.floor(Math.random() * (max - min)) + min;

       if(rndNum === exclude){
        return generateRandomBetween(min , max , exclude);
       }
       else{
        return rndNum;
       }
}

   let max = 100;
   let min = 1;

function GameScreen({userNumber , onGameOver }) {
  const initialGuess = generateRandomBetween(1 , 100 , userNumber);  
  const [currentGuess , setCurentGuess] = useState(initialGuess);
  const [guessRounds , setGuessRounds] = useState([initialGuess]);

  useEffect(()=>{
    if(currentGuess === userNumber){
          onGameOver();
    }
  } , [currentGuess , userNumber , onGameOver]);

  useEffect(()=>{
    min=1;
    max=100;
  },[]);
    
  function nextGuessHandler(direction){
    if((direction === 'lower' && currentGuess < userNumber) || 
    (direction === 'greater' && currentGuess > userNumber)){
      Alert.alert("Don't lie !" , 'You know this is Wrong...' , [
       { text : 'Sorry' , style:'cancel'}
      ])
      return;
    }
    if(direction === 'lower'){
       max = currentGuess;
    }
    else{
      min = currentGuess+1;
    }
    const newrndNum = generateRandomBetween(min , max , currentGuess);
    setCurentGuess(newrndNum );
    setGuessRounds((previous) => [newrndNum , ...previous]);
  }
   
  let number = 0;

    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower?</Text>
        </View>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this , 'greater')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this , 'lower')}>-</PrimaryButton>
        </View>
        <ScrollView >
        {guessRounds.map(guessRound => <Text  style={styles.round} key={guessRound}>#{number = number+1}                                Opponent's Guess : {guessRound}</Text>
        )}
        </ScrollView>
      </View>
    );
  }
  


export default GameScreen;

const styles = StyleSheet.create({
    screen:{
         padding:30,
         flex:1
    },
    round:{
      backgroundColor:'#ddb52f',
      borderRadius:20,
      borderColor:'black',
      borderWidth:2,
      padding:10,
      marginTop:15
    }
});