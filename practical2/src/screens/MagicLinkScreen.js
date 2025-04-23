// src/screens/MagicLinkScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { supabase } from "../supabase";

export default function MagicLinkScreen() {
  const [email, setEmail] = useState("");

  async function sendMagicLink() {
    if (!email) {
      Alert.alert("Please enter your email");
      return;
    }
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) Alert.alert("Error", error.message);
    else Alert.alert("Sent!", "Check your inbox for the link.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Magic Link Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="you@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={sendMagicLink}>
        <Text style={styles.buttonText}>Send Magic Link</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#006fee",
    borderRadius: 6,
    padding: 14,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
