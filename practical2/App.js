// App.js

import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { supabase } from "./src/supabase";

import AuthOptionsScreen from "./src/screens/AuthOptionsScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import MagicLinkScreen from "./src/screens/MagicLinkScreen";

const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    }
    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {session ? (
          <Stack.Screen name="Home">
            {() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  title="Sign Out"
                  onPress={async () => {
                    await supabase.auth.signOut();
                  }}
                />
              </View>
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="AuthOptions"
              component={AuthOptionsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="MagicLink" component={MagicLinkScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
