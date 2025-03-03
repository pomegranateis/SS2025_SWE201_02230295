import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function VerificationMethodScreen() {
  const router = useRouter();

  const handleMethodSelect = (method: string) => {
    router.push(`/sign-up/otp?method=${method}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/24/000000/chevron-left.png",
            }}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Choose verification method</Text>

      <TouchableOpacity
        style={styles.methodItem}
        onPress={() => handleMethodSelect("email")}
      >
        <Text style={styles.methodText}>OTP via E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.methodItem}
        onPress={() => handleMethodSelect("whatsapp")}
      >
        <Text style={styles.methodText}>OTP via WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.methodItem}
        onPress={() => handleMethodSelect("sms")}
      >
        <Text style={styles.methodText}>OTP via SMS</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.fromGoto}>from goto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  methodItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  methodText: { fontSize: 16 },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  fromGoto: { fontSize: 14, color: "#999" },
});
