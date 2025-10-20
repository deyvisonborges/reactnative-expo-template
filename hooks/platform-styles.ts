import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  button: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#3498db",
    ...Platform.select({
      ios: {
        paddingVertical: 14, // iOS buttons typically have more padding
      },
      android: {
        paddingVertical: 10,
      },
    }),
  },
});
