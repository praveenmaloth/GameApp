import { Text, View , Image ,StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({userNumber , Rounds , onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={require('../assets/images/success.png')}/>
             </View>
             <Text style={styles.summaryText}>Your device took 
             <Text style={styles.highlight}>{Rounds}</Text> 
             rounds to Guess the Number <Text style={styles.highlight}>{userNumber}</Text>
             </Text>
             <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({

    rootContainer:{
        flex:1,
        padding:24,
        alignItems:'center',
        justifyContent:'center'
    },
    imagecontainer:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'black',
        overflow:"hidden",
        borderWidth:3,
        margin:30
    },
    image:{
        width:'100%',
        height:'100%'
    },
    highlight:{

    },
    summaryText:{

    }
});