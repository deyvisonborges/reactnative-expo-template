import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { TextInput, View } from "react-native";

export function ForgotPasswordPage() {
  return (
    <View>
      <Typography
        style={{
          marginBottom: 24,
        }}
        variant="h2"
      >
        Forgot your password?
      </Typography>
      <Typography style={{ marginBottom: 12 }} variant="caption">
        Enter your email
      </Typography>
      <Typography variant="caption" style={{ marginBottom: 8 }}>
        We will you the 4 digit verification code
      </Typography>

      <TextInput
        placeholder="Email"
        style={{
          borderColor: "#c8c8c8",
          paddingHorizontal: 12,
          paddingVertical: 8,
          marginBottom: 8,
        }}
      />

      <Button title="Send" />
      <Button title="Try another way?" />
    </View>
  );
}
