import { Button } from "@/components/button";
import { commonStyles } from "@/lib/@tokens/src/common-styles";
import { StyleSheet, Text, View } from "react-native";

export default function OnboardingPage() {
  return (
    <View
      style={[styles.layout, commonStyles.alignStart, commonStyles.justifyEnd]}
    >
      <Text
        style={{
          fontSize: 24,
        }}
      >
        Seja bem vindo(a)
      </Text>

      <Text
        style={{
          fontSize: 14,
        }}
      >
        Aqui comeca os seus primeiros passos com a gente
      </Text>

      <Button
        size="medium"
        title="Comecar agora"
        styles={{
          marginTop: 24,
        }}
        onPress={() => {}}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  layout: {
    padding: 16,
    flex: 1,
    width: "100%",
    height: "100%",
    marginBottom: 32,
  },
});
