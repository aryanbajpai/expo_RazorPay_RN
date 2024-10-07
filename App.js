import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { RAZORPAY_TEST_KEY_ID, RAZORPAY_KEY_SECRET } from "@env";
import RazorpayCheckout from "react-native-razorpay";

export default function App() {
  const testKey = RAZORPAY_TEST_KEY_ID; // Use a more descriptive name
  const secretKey = RAZORPAY_KEY_SECRET; // Consider using this for server-side operations
  const amount = 100; // Amount in rupees
  const currency = "INR"; // Define currency
  const dummyOrderId = "order_9A33XWu170g"; // Replace with your dynamic order ID

  const handlePayments = () => {
    // Declare Options for Payment
    const options = {
      description: "Payment related Individual descriptions over here.",
      image: "https://imgur.com/3g7nmJC",
      currency: currency,
      key: testKey,
      amount: amount * 100, // Convert to paise
      name: "Credit Card Holder",
      order_id: dummyOrderId, // Use a valid order ID from your server
      prefill: {
        email: "buyers@gmail.com",
        contact: "9191919191",
        name: "Buyers Name",
      },
      theme: { color: "#53a20e" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        console.error("Payment error:", error);
        alert(`Error: ${error.code} | ${error.description}`);
      });

    console.log(RazorpayCheckout);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataBlock}>
        <Text style={styles.title}>
          React Native Expo App - RazorPay Payment
        </Text>
        <Text style={styles.textData}>
          01. npx create-expo-app prjctNm --template (Blank)
        </Text>
        <Text style={styles.textData}>02. cd prjctNm</Text>
        <Text style={styles.textData}>
          03. npm install -D react-native-dotenv
        </Text>
        <Text style={styles.textData}>
          04. npx expo install react-native-razorpay
        </Text>
        <Text style={styles.textData}>05. npx expo prebuild</Text>
        <Text style={styles.textData}>06. cd android</Text>
        <Text style={styles.textData}>07. ./gradlew clean && cd ..</Text>
        <Text style={styles.textData}>08. expo eject</Text>
        <Text style={styles.textData}>09. npx react-native run-android</Text>
        <Text style={styles.textData}>10. clear && npm start</Text>

        <Pressable onPress={handlePayments} style={styles.button}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#ad6f56",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#16f5f1",
    paddingHorizontal: 25,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#325a63",
    textAlign: "center",
  },
  textData: {
    fontSize: 18,
    color: "#fff",
  },
  dataBlock: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff'
  },
});
