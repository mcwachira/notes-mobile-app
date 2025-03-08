import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack
  screenOptions ={{
    headerStyle: {
      backgroundColor: "orange",
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
      fontSize: 25,
      fontWeight: "bold",
  },
    contentStyle: {
      paddingHorizontal: 20,
      paddingTop:10,
      backgroundColor: "white",
    },
  }}>
    <Stack.Screen name="index" options={{title:"Home"}} />
    <Stack.Screen name="notes" options={{headerTitle:"Notes"}} />
  </Stack>;
}
 export default RootLayout;