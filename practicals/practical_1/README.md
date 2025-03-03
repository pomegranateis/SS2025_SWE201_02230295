# Gojek UI Clone with Expo Router

## Overview
This project is a **practical assignment** demonstrating how to build a multi-page mobile UI inspired by the Gojek app using **React Native** and **Expo Router**. It covers:
- A **Splash Screen**  
- A **Swipeable Welcome Screen** (onboarding slides)  
- A **Language Selection** modal/screen  
- A **Sign-Up Flow** with phone input, country code picker, verification methods, and OTP entry

## Folder Structure


> **Note**: Your actual folder names and file paths may differ slightly based on your setup.

## How It Works

1. **Splash Screen (`app/index.tsx`)**  
   - Displays a Gojek logo and navigates to `/welcome` after a short delay.

2. **Welcome Screen (`app/welcome/index.tsx`)**  
   - Shows swipeable slides (onboarding) with text and illustrations.  
   - Has a **“Log in”** and **“I’m new, sign me up”** button at the bottom.  
   - Tapping **“I’m new, sign me up”** navigates to the sign-up flow (`/sign-up`).

3. **Language Screen (`app/language/index.tsx`)**  
   - Accessible via a button in the top-right corner of the welcome screen.  
   - Lets the user select a language.  
   - Closes or navigates back on confirmation.

4. **Sign-Up Flow (`app/sign-up/…`)**  
   - **`index.tsx`**: Phone number input and country code button.  
   - **`country-code.tsx`**: Displays a list of countries to pick from.  
   - **`verification-method.tsx`**: Choose verification via Email, WhatsApp, or SMS.  
   - **`otp.tsx`**: Enter the received OTP. Includes a simple timer and a “Try another method” option.

## Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
2. **Start the Expo development server:**
   ```bash
   npx expo start
3. **Open** on a device or emulator (Android Studio, iOS Simulator, or Expo Go).

## Usage Notes

- **Swipe** left/right on the welcome screen to cycle through onboarding slides.
- **Tap** the language button (top-right) to see the language selection modal.
- **Tap** “I’m new, sign me up” to enter the sign-up flow.
- **Country Code** screen is accessed by tapping the “+65” button (default code).
- **Verification Method** screen offers Email, WhatsApp, or SMS.
- **OTP** screen has a 60-second timer and a “Try another method” link.

## Acknowledgments

* **React Native** for the cross-platform UI.
* **Expo Router** for file-based routing.
* **Gojek** brand/UI references for design inspiration. (This project is for educational/demo purposes only.)
