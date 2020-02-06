import React from "react"
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from "react-native"
import {DrawerNavigatorItems} from "react-navigation-drawer"
import {Ionicons} from "@expo/vector-icons"

export default Sidebar = props => (
  <ScrollView>
    <ImageBackground
    //source=style={require("../assets/snack-icon.png")}
    style={{width: undefined, backgroundColor: "#EE82EE", padding: 16, paddingTop: 48}}>
    <Image 
    source={require("../assets/snack-icon.png")}
    style={styles.profile}/>
    <Text style={styles.name}>Brittany</Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.followers}>734 Followers</Text>
        <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
      </View>
    </ImageBackground>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
  },
  followers: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginRight: 5,
  }
})
