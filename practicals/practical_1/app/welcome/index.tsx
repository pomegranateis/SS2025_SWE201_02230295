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

// Example slides data
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

  // Handle pagination (dots) by checking scroll position
  const onScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const handleLanguagePress = () => {
    // Navigate to the language modal/screen
    router.push("/language");
  };

  return (
    <View style={styles.container}>
      {/* Top Bar with Gojek logo (left) and Language icon (right) */}
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

      {/* Swipeable Slides */}
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

      {/* Pagination Dots */}
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

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            /* router.push("/sign-in") etc. */
          }}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            /* router.push("/sign-up") etc. */
          }}
        >
          <Text style={styles.signupText}>I’m new, sign me up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50, // adjust for status bar if needed
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
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#00AA00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
