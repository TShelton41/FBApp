import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, List } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [signInUserName, setSignInUserName] = useState();
  const [signInUserPW, setSignInUserPW] = useState();
  const [createUserFName, setCreateUserFName] = useState();
  const [createUserLName, setCreateUserLName] = useState();
  const [createUserName, setCreateUserName] = useState();
  const [createUserPW, setCreateUserPW] = useState();

  const signInUser = async () => {
    setSignInUserName("");
    setSignInUserPW("");
  };

  const createUser = async () => {
    setCreateUserFName("");
    setCreateUserLName("");
    setCreateUserName("");
    setCreateUserPW("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Sign In</Text>
        <TextInput
          style={styles.inputs}
          label="User Name"
          onChangeText={setSignInUserName}
          value={signInUserName}
        />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          label="Password"
          onChangeText={setSignInUserPW}
          value={signInUserPW}
        />
        <Button onPress={signInUser} style={styles.button} mode="contained">
          Sign In
        </Button>
      </View>

      <View>
        <Text style={styles.header}>Create Account</Text>
        <TextInput
          onChangeText={setCreateUserFName}
          style={styles.inputs}
          label="First Name:"
          value={createUserFName}
        />
        <TextInput
          onChangeText={setCreateUserLName}
          style={styles.inputs}
          label="Last Name:"
          value={createUserLName}
        />
        <TextInput
          onChangeText={setCreateUserName}
          style={styles.inputs}
          label="User Name:"
          value={createUserName}
        />
        <TextInput
          onChangeText={setCreateUserPW}
          style={styles.inputs}
          secureTextEntry={true}
          label="Password:"
          value={createUserPW}
        />
        <Button onPress={createUser} style={styles.button} mode="contained">
          Sign In
        </Button>
      </View>
      <Text>ComponentName</Text>
      <Button
        style={styles.button}
        title="Go to Login"
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        {" "}
        Go To Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
  },
  header: {
    fontSize: 24,
  },
  inputs: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});
