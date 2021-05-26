//This is also a library/sub app /component  to be used
//importing what is needed
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
// props is passing class/object from app.js
//giving the image a variable and passing require function in order to use the image the require is like include function
const bgImage = require("../assets/background.jpg");
// created an arrow function and exported
// we did pass here navigation which is a class from the main app
// we dont need to import this class since it is in the main app(that is a react cabability) though ONLY from the main app
//we used this class imported from main up a method from it called navigate and we passed argument to register page
// again we did not import register here but this class is imported from main app so we can use register too as argument SINCE IT WILL BE EXUCTED FROM MAIN FUNCTION
//so ya navigation here is a function(class) passed from main app so that we can now use one of this class method which is navigate
const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const submitHandler = async () => {
    //define response await becaies it is async so await will wait to fetch data
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        //body(content) to send to server so it is type json and changes to string using strinigy in order to database to read it
        //type data  inside the strinigy each inside a {} with key and pair value and the paramter here depends on the backend user but we will assume it is it is same as our names though if they are the same we can just add 1 argument but nevermind that
        body: JSON.stringify({
          password: password,
          email: email,
        }),
        //to tell serve what type of content we are sending it
        // you can find the type of json from internet we are sending json so we finded this
        headers: { "content-Type": "application/json" },
      });
      // response from server (it return response to us ) and returned in json format
      const responseJson = await response.json();

      if (responseJson.user && resonseJson.user_id) {
        // if we have user and user id then we save token in db
        //route user to DashBoard
        // means being able to log in when we have both in the database
        //here we dont have a backend so ya

        navigation.navigation("Dashboard");
      }

      console.log("response from json file ");
    } catch (error) {
      console.log("sumbit handler error");
    }
  };
  //go back to main page and every single data typed on the box will be rest
  const registerInsteadHanlder = () => {
    setEmail(null);
    setPassword(null);
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image} />
      <Text style={styles.title}>Fav Movies</Text>
      <View style={styles.form}>
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
        <TouchableOpacity
          style={styles.primarybutton}
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondarybutton}
          onPress={registerInsteadHanlder}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
        <ImageBackground />
      </View>
    </View>
  );
};

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
export default Login;
