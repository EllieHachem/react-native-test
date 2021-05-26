//This is a sub component that will be related to main app and used
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  SaveAreaView,
} from "react-native";
// created a function we do that for all  components/library using arrow function and we must export it

const bgImage = require("../assets/background.jpg");
const Register = ({ navigation }) => {
  const [firstName, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const submitHandler = async () => {
    //define response await becaies it is async so await will wait to fetch data
    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        //body(content) to send to server so it is type json and changes to string using strinigy in order to database to read it
        //type data  inside the strinigy each inside a {} with key and pair value and the paramter here depends on the backend user but we will assume it is it is same as our names though if they are the same we can just add 1 argument but nevermind that
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          password: password,
          email: email,
        }),
        //to tell serve what type of content we are sending it
        // you can find the type of json from internet we are sending json so we finded this
        headers: { "content-Type": "application/json" },
      });
      // response from server (it return response to us ) and returned in json format
      const responseJson = await response.json();
      console.log("response from json file ");
    } catch (error) {
      console.log("sumbit handler error");
    }
  };
  //go back to main page and every single data typed on the box will be rest
  const cancelHandler = () => {
    setName(null);
    setLastName(null);
    setEmail(null);
    setPassword(null);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image} />
      <Text style={styles.title}>Fav Movies</Text>
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder={"First Name"}
          placeholderTextColor="white"
          keyboardType="default"
          autoCorrect={false}
          value={firstName}
          //so here it is taking the parameter text from user and it uses the setName function to update the first name in the array and the value takes this new value
          onChangeText={(text) => {
            setName(text);
          }}
          // autoCapitalize = "none"
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder={"Last Name"}
          placeholderTextColor="white"
          keyboardType="default"
          autoCorrect={false}
          value={lastName}
          //so here it is taking the parameter text from user and it uses the setName function to update the first name in the array and the value takes this new value
          onChangeText={(text) => {
            setLastName(text);
          }}
          // autoCapitalize = "none"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          placeholderTextColor="white"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          //so here it is taking the parameter text from user and it uses the setName function to update the first name in the array and the value takes this new value
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder={"password"}
          placeholderTextColor="white"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          //so here it is taking the parameter text from user and it uses the setName function to update the first name in the array and the value takes this new value
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.primarybutton} onPress={submitHandler}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondarybutton}
          onPress={cancelHandler}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Cancel Registration
          </Text>
        </TouchableOpacity>
      </View>

      <ImageBackground />
    </View>
  );
};

export default Register;

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
    color: "#f04a5b",
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
});
