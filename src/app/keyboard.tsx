import { SecutiryKeyboardContainer } from "@/components/security-keyboard-container";
import { useEffect, useState } from "react";
import { Button, Keyboard, TextInput } from "react-native";

export default function HomeScreen() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardHide
    );

    return () => {
      showSubscription.remove();
    };
  }, []);

  const handleKeyboardShow = (event) => {
    setIsKeyboardVisible(true);
  };

  const handleKeyboardHide = (event) => {
    setIsKeyboardVisible(false);
  };

  return (
    <SecutiryKeyboardContainer>
      {isKeyboardVisible && (
        <Button title="Dismiss keyboard" onPress={Keyboard.dismiss} />
      )}
      <TextInput placeholder="Type here..." />
    </SecutiryKeyboardContainer>
  );
}
