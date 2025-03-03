// app/welcome/index.tsx
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../../assets/images/screen1.png"),
    title: "Get going with us",
    subtitle: "Use GoCar to get across town – from anywhere, at any time.",
  },
  {
    id: 2,
    image: require("../../assets/images/screen2.png"),
    title: "Welcome to Gojek",
    subtitle: "We’re your go-to app for hassle-free commutes.",
  },
  {
    id: 3,
    image: require("../../assets/images/screen3.png"),
    title: "Rides for all",
    subtitle:
      "Up to three stops with every trip – perfect for travel with friends and family.",
  },
];

export default function WelcomeScreen() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const handleLanguagePress = () => {
    router.push("/language");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/gojek-logo.png")}
          style={styles.topBarLogo}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={handleLanguagePress}
          style={styles.langButton}
        >
          <Text style={styles.langText}>English</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={[styles.slide, { width: SCREEN_WIDTH }]}>
            <Image
              source={slide.image}
              style={styles.slideImage}
              resizeMode="contain"
            />
            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={styles.slideSubtitle}>{slide.subtitle}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: isActive ? "#000" : "#ccc" },
              ]}
            />
          );
        })}
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
          }}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.signupText}>I’m new, sign me up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },
  topBarLogo: {
    width: 80,
    height: 40,
  },
  langButton: {
    padding: 8,
  },
  langText: {
    fontSize: 14,
    color: "#333",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  slideImage: {
    width: "80%",
    height: 200,
    marginBottom: 20,
  },
  slideTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  slideSubtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  bottomButtons: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: "#00AA00", // Green fill
    borderRadius: 50, // Large radius to make it oval
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginBottom: 16,
  },
  loginText: {
    color: "#FFF", // White text
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "#FFF", // White fill
    borderRadius: 50, // Large radius for oval shape
    borderWidth: 2, // Thicker border if you want
    borderColor: "#00AA00", // Green border
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  signupText: {
    color: "#00AA00", // Green text
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
