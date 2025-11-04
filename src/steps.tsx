import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Email sent to:", email);
    // Adicione a lógica para enviar o código de verificação
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/your-forgot-password-image.png" }} // Substitua pela sua imagem
          style={styles.headerImage}
        />
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.subtitle}>
          We will send you the 4 digit verification code
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Try another way?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    console.log("Verifying OTP:", otp);
    // Adicione a lógica para verificar o OTP
  };

  const handleResend = () => {
    console.log("Resending OTP");
    // Adicione a lógica para reenviar o OTP
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.imgur.com/your-otp-verification-image.png",
          }} // Substitua pela sua imagem
          style={styles.headerImage}
        />
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the 4 digit code sent to</Text>
        <Text style={styles.emailDisplay}>Liv_Bria6@yahoo.com</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter the 4 digit code"
          placeholderTextColor="#A9A9A9"
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
        />
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive OTP? 60s to </Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    // Adicione a lógica para redefinir a senha
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/your-reset-password-image.png" }} // Substitua pela sua imagem
          style={styles.headerImage}
        />
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.subtitle}>Please enter your new password.</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={[styles.input, { marginTop: 15 }]}
          placeholder="Confirm Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.passwordHint}>
          Password must be at least 8 characters
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerImage: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  emailDisplay: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    backgroundColor: "#1E90FF", // Um azul vibrante
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#1E90FF",
    marginTop: 15,
    fontSize: 16,
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  resendText: {
    fontSize: 15,
    color: "#666",
  },
  resendLink: {
    fontSize: 15,
    color: "#1E90FF",
    fontWeight: "bold",
  },
  passwordHint: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: "#999",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: "#666",
  },
  signUpText: {
    fontSize: 16,
    color: "#1E90FF",
    fontWeight: "bold",
  },
});

export default function App() {
  return (
    // Você pode renderizar uma das telas aqui para testar, por exemplo:
    // <ForgotPasswordScreen />
    // <OTPVerificationScreen />
    <ResetPasswordScreen />
  );
}
