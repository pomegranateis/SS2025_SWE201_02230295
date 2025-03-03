// app/sign-up/_layout.tsx
import { Stack } from "expo-router";

export default function SignUpLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        // Hide just the text, keep the arrow:
        headerBackTitle: "",
      }}
    />
  );
}
