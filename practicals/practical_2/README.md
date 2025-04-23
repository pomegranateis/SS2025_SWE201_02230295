# Authentication in Expo React Native with Supabase

## What I Have Done

### 1. Project Setup
* initialised an Expo React Native project
* installed and configured dependencies for Supabase
* set up a Supabase project
* added environment variables in *.env* and wired them into *src/supabase.js*

### 2. Authentication Flows
* **Email & Password Login**
* **Magic Link**
* **Anonymous Login (guest)**

### 3. Navigation & State Management
* used React Navigation stack navigator to conditionally render screens based on auth state.
* subscribed to supabase.auth.onAuthStateChange and supabase.auth.getSession to manage session and loading state.
* designed a centralized .js file for all entry points to authentication methods.

### 4. UI and Structure
* organised source files (app.js as navigation entry)
* for better UX on iOS, added a *KeyboardAvoidingView* to the login screen on email magic link screen.

## What I Have Learnt

***1. Supabase Integration:***
* how to configure and connect to Supabase from a React Native app.
* differences between Supabase JS v1 and v2 methods (signInWithPassword, signInWithOtp).

***2. Environment Management:***
* using .env with react-native-dotenv to manage sensitive keys.
* importance of clearing Metro cache (expo start -c) after env changes.

***3. Expo CLI & Deep Linking:***
* migrated from global expo-cli to local npx expo.
* configured app.json scheme for deep links (myapp://authredirect).

***4. React Navigation:***
* conditional stack rendering based on auth session.
* navigating between multiple auth flows cleanly.

***5. Error Debugging:***
* fixing undefined method errors by upgrading Supabase JS version.

***6. External Services:***
* configured Twilio in Supabase Dashboard for sending OTP to verified phone numbers.

## Challenges Faced and How I Overcame Them

***1. Supabase Project Pausing:***
- Free-tier project auto-paused after inactivity; lacked permission to resume.
- Had to create a new Supabase project with proper credentials.

***2. Phone OTP with Twilio:***
- Twilio trial account only sends SMS to verified numbers.

***3. Navigation .then() Error:***
- mistakenly used .then() on navigation.navigate, causing runtime errors. 
- fixed by calling OAuth directly without chaining on navigation.

***4. Version Mismatch:***
- initial errors like signInWithOtp is not a function due to Supabase JS v1 installation.
- resolved by upgrading to Supabase JS v2.