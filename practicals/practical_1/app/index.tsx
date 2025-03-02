// app/index.tsx
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to welcome screen after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace with your own logo asset */}
      <Image
        source={require("../assets/images/gojek-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.fromText}>from goto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  fromText: {
    fontSize: 14,
    color: "#999",
  },
});
