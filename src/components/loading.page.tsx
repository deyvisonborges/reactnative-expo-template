import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export function LoadingPage() {
  return (
    <View style={styles.container}>
      <Text>
        Loading... <ActivityIndicator />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c2c4c1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
