import { Stack } from "expo-router";
import {AuthProvider , useAuth} from "@/context/AuthContext";
import {TouchableOpacity, StyleSheet, Text} from "react-native";



const HeaderLogout = () => {
  const {user, logout} = useAuth()

  return user ? (
      <TouchableOpacity style = {styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
  ):null
}
const RootLayout = () => {
  return(
      <AuthProvider>
    <Stack
  screenOptions ={{
    headerStyle: {
      backgroundColor: "orange",
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
      fontSize: 25,
      fontWeight: "bold",
  },
    headerRight:() => <HeaderLogout/>,
    contentStyle: {
      paddingHorizontal: 20,
      paddingTop:10,
      backgroundColor: "white",
    },
  }}>
    <Stack.Screen name="index" options={{title:"Home"}} />
    <Stack.Screen name="notes" options={{headerTitle:"Notes"}} />
    <Stack.Screen name="auth" options={{headerTitle:"Login"}} />
  </Stack>

  </AuthProvider>);
}

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

 export default RootLayout;