import { useRouter } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export function Step1() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "yellow",
        height: "100%",
        width: "100%",
      }}
    >
      <Image
        source={require("@/assets/images/onboarding-step-1.png")}
        style={{
          width: width, // 90% da tela
          // height: height * 0.1, // deixa o RN calcular
          height: "auto",
          aspectRatio: 1, // ajuste conforme a imagem real
          resizeMode: "contain",
          marginTop: 24,
        }}
      />
      <Text onPress={() => router.push("/keyboard")}>Ir para Keyboard</Text>
      <TouchableOpacity onPress={() => router.push("/onboarding/step2")}>
        <Text style={{ color: "#666", textAlign: "center", marginTop: 8 }}>
          Set your own course duration, pay in installments, and learn at your
          pace.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
