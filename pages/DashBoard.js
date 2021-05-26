//This is a sub component that will be related to main app and used
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
// created a function we do that for all  components/library using arrow function and we must export it

const bgImage = require("../assets/background.jpg");
const DashBoard = ({ navigation }) => {
  // creating our own mockup object to use it to create style from it
  const [events, setEvents] = useState([
    {
      _id: "random1",
      title: "Plugit",
      sport: "running",
      description: "plugit app",
      price: "39.00",
      thumbnail_url:
        "https://www.bestexecution.net/wp-content/uploads/2018/01/PlugIT_LOGO_473x220.jpg",
    },
    {
      _id: "random2",
      title: "Plugit",
      sport: "running",
      description: "plugit app",
      price: "39.00",
      thumbnail_url:
        "https://www.bestexecution.net/wp-content/uploads/2018/01/PlugIT_LOGO_473x220.jpg",
    },
    {
      _id: "random3",
      title: "Plugit",
      sport: "running",
      description: "plugit app",
      price: "39.00",
      thumbnail_url:
        "https://www.bestexecution.net/wp-content/uploads/2018/01/PlugIT_LOGO_473x220.jpg",
    },
  ]);
  //go back to main page and every single data typed on the box will be rest
  const cancelHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image} />
      <Text style={styles.title}>Welcome To Plugit DashBoard</Text>
      <FlatList
        style={styles.lists}
        //this attribute used to collect the data from the object
        data={events}
        showsVerticalScrollIndicator={false}
        //mapping event by event from the event property we created up
        //code will still run without they keyextractor in the frontend so it is for backend
        keyExtractor={(event) => event._id}
        //to render what the flatlist will show as we use it like a normal function but we path item for it
        // this item class lets you access items in the DATA event (remnember the event passed to data)
        //since the usestate (intial) had 3 objects then we see 3 objects on screen
        // we then return a view that contain image of the item that will be listed and text 3 text element that descript the element and lastly a button that will register the items we buy
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.thumbnail_url }}
              />
              <Text style={styles.eventTitle}>Title : {item.title}</Text>
              <Text style={styles.sport}>Sport : {item.sport}</Text>
              <Text style={styles.price}>Price : {"$" + item.price}</Text>
              <Text style={styles.description}>
                Description : {item.description}
              </Text>
              <TouchableOpacity
                style={styles.primarybutton}
                onPress={cancelHandler}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.secondarybutton}
          onPress={cancelHandler}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground />
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#444",
    marginButton: 15,
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "400",
    height: 44,
    marginButton: 30,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  primarybutton: {
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
  },

  secondarybutton: {
    height: 40,
    backgroundColor: "#f04a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
  },
  lists: {
    paddingHorizontal: 20,
    width: 400,
    height: 400,
  },
  thumbnail: {
    width: "auto",
    height: 150,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#444",
    marginButton: 15,
  },
  sport: {
    fontSize: 15,
    color: "#444",
  },
  price: {
    fontSize: 16,
    color: "#999",
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    color: "#444",
  },
  listItem: {
    padding: 8,
    backgroundColor: "#FFFF",
    marginVertical: 8,
    opacity: 0.9,
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#444",
    fontSize: 13,
  },
});
