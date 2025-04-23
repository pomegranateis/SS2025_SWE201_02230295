// src/screens/AuthOptionsScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { supabase } from "../supabase";

export default function AuthOptionsScreen({ navigation }) {
  const [email, setEmail] = useState("");

  // 1) Email & Password sign-in
  function goToSignIn() {
    navigation.navigate("SignIn");
  }

  // 2) Sign up flow
  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  // 3) Magic Link via email
  function goToMagicLink() {
    navigation.navigate("MagicLink");
  }

  // 4) Google OAuth
  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "myapp://authredirect" },
    });
    if (error) {
      Alert.alert("Google Sign-In Error", error.message);
    }
  }

  // 5) Guest login
  async function signInAnonymously() {
    const randomId = Math.floor(Math.random() * 1000000);
    const guestEmail = `guest${randomId}@yourdomain.com`;
    const guestPass = Math.random().toString(36).slice(-8);
    const { error } = await supabase.auth.signUp({
      email: guestEmail,
      password: guestPass,
    });
    if (error) {
      Alert.alert("Guest Login Error", error.message);
    } else {
      Alert.alert("Welcome Guest!", "Signed in anonymously.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Sign-In Method</Text>

      <View style={styles.section}>
        <Button title="Email & Password" onPress={goToSignIn} />
      </View>

      <View style={styles.section}>
        <Button title="Magic Link (Email)" onPress={goToMagicLink} />
      </View>

      <View style={styles.section}>
        <Button title="Sign Up (Email)" onPress={goToSignUp} />
      </View>

      <View style={styles.section}>
        <Button title="Sign In with Google" onPress={signInWithGoogle} />
      </View>

      <View style={styles.section}>
        <Button title="Continue as Guest" onPress={signInAnonymously} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 32,
  },
  section: {
    marginVertical: 8,
  },
});
