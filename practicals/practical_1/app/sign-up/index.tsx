// app/sign-up/index.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function SignUpPhoneScreen() {
  const router = useRouter();
  // Default country code (can be updated via a country-code picker)
  const countryCode = "+65";

  // Declare phoneNumber state for the TextInput
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    // In a real app, you might validate the phone number here
    console.log("Phone Number:", phoneNumber);
    // Navigate to the verification method screen
    router.push("/sign-up/verification-method");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Top Bar with Gojek logo */}
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/gojek-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title & Subtitle */}
      <Text style={styles.title}>Welcome to Gojek!</Text>
      <Text style={styles.subtitle}>
        Enter or create an account in a few easy steps.
      </Text>

      {/* Phone Input Section */}
      <View style={styles.inputContainer}>
        {/* Country Code Button */}
        <TouchableOpacity
          style={styles.countryCodeButton}
          onPress={() => router.push("/sign-up/country-code")}
        >
          <Text style={styles.countryCodeText}>{countryCode}</Text>
        </TouchableOpacity>

        {/* Phone Number Input */}
        <TextInput
          style={styles.phoneInput}
          keyboardType="phone-pad"
          placeholder="92325933"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Terms and Privacy */}
      <Text style={styles.termsText}>
        I agree to Gojek's{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          Terms of Service
        </Text>{" "}
        &{" "}
        <Text style={{ textDecorationLine: "underline" }}>Privacy Policy</Text>.
      </Text>

      {/* "Issue with number?" link */}
      <TouchableOpacity
        onPress={() => {
          /* Handle "Issue with number?" if needed */
        }}
      >
        <Text style={styles.issueText}>Issue with number?</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.fromGoto}>from goto</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  topBar: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  countryCodeButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#00AA00",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  continueText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  termsText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginBottom: 8,
  },
  issueText: {
    fontSize: 14,
    color: "#000",
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  fromGoto: {
    fontSize: 14,
    color: "#999",
  },
});
