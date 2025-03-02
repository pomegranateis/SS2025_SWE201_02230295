// app/language/index.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LanguageScreen() {
  const router = useRouter();

  const handleSelectLanguage = (lang: string) => {
    // Do something with selected language
    console.log("Selected language:", lang);
  };

  const handleContinue = () => {
    // Close or go back
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change language</Text>
      <Text style={styles.subtitle}>Which language do you prefer?</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSelectLanguage("English")}
      >
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSelectLanguage("Bahasa Indonesia")}
      >
        <Text>Bahasa Indonesia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSelectLanguage("Tiếng Việt")}
      >
        <Text>Tiếng Việt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue in English</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: "#00AA00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  continueText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
