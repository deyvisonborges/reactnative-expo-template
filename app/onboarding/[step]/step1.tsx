import { Text, View } from "react-native";

export function Step1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Flexible learning made for you
      </Text>
      <Text style={{ color: "#666", textAlign: "center", marginTop: 8 }}>
        Set your own course duration, pay in installments, and learn at your
        pace.
      </Text>
    </View>
  );
}
