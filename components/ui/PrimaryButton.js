import { View,Text , StyleSheet, Pressable} from "react-native";

function PrimaryButton({children , onPress}){

   
    return(
        <View style={styles.buttonContainer}>
    <Pressable onPress={onPress} android_ripple={{Color:'black'}}>
       
          <Text style={styles.buttonText}>{children}</Text>
       
    </Pressable>
    </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer:{
       
        backgroundColor:'#72363c',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        marginVertical:8,
        elevation:4

    },
    buttonText:{
        
        textAlign:'center'
    }
});