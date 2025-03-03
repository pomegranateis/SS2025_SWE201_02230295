import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function OTPScreen() {
  const router = useRouter();
  const method: string = "email";

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleTryAnotherMethod = () => {
    router.replace("/sign-up/verification-method");
  };

  const handleVerifyOTP = () => {
    console.log("OTP entered:", otp);
  };

  const displayMethod = method === "email" ? "E-Mail" : method.toUpperCase();

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

      <Text style={styles.title}>Enter OTP sent via {displayMethod}</Text>
      <Text style={styles.subtitle}>
        We've sent OTP to your {method.toLowerCase()}.
      </Text>

      <TextInput
        style={styles.otpInput}
        placeholder="OTP *"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      {timer > 0 ? (
        <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
      ) : (
        <Text style={styles.timer}>Expired. Resend OTP?</Text>
      )}

      <TouchableOpacity
        style={styles.anotherMethodButton}
        onPress={handleTryAnotherMethod}
      >
        <Text style={styles.anotherMethodText}>Try another method</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.verifyText}>Verify</Text>
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
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    padding: 12,
    marginBottom: 10,
  },
  timer: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
  },
  anotherMethodButton: {
    marginBottom: 20,
  },
  anotherMethodText: {
    fontSize: 14,
    color: "#000",
    textDecorationLine: "underline",
  },
  verifyButton: {
    backgroundColor: "#00AA00",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  verifyText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
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
