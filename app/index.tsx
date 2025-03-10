import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";
import PostItImage from "@/assets/images/post-it.png";

const HomeScreen = () => {

    const router = useRouter();
  return (
    <View
style = {styles.container}
    >
        <Image source={PostItImage} style={styles.image}/>
      <Text style={styles.title}>Welcome to notes app</Text>
      <Text style={styles.subTitle}> Capture your thoughts anytime anywhere</Text>

        <TouchableOpacity style={styles.button}
                          onPress={() => router.push('/notes')}>

            <Text style={styles.buttonText}>
                Get started
            </Text>
        </TouchableOpacity>
    </View>
  );
}


export default HomeScreen;
const styles = StyleSheet.create({
    container: {


        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image:{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width:100,
        height:100,
        marginBottom:20,
        borderRadius:10,

    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom:10,
        color:"#333",

    },
    subTitle: {
        fontSize: 16,
        color:"#666",
        textAlign: "center",
        marginBottom:20,

    },

    button:{
        backgroundColor:"#007bff",
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:8,
        alignItems:"center",
    },
    buttonText: {
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    }
})