import { commonStyles } from "@/lib/@tokens/src/common-styles";
import { themes } from "@/lib/@tokens/src/theme";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, Text, View } from "react-native";
import {
  SafeAreaView
} from "react-native-safe-area-context";

export function Header() {

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        backgroundColor: "red",
      }}
    >
      <StatusBar
        translucent={false} // força o background a não "vazar" para o conteúdo
        backgroundColor="#f6f6f6" // mesma cor do header
        barStyle="dark-content" // ícones escuros (ajuste conforme o tema)
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          backgroundColor: "blue",
          ...commonStyles.justifyStart,
          height: 56,
          width: "100%",
        }}
      >
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color={themes.default.light.color.neutral.brightness[300]}
        />
        <Text style={{ marginLeft: 24, flex: 1 }}>Home</Text>
        <View
          style={{
            ...commonStyles.centered,
            gap: 16,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="search-outline"
            size={24}
            color={themes.default.light.color.neutral.brightness[300]}
          />
          <Ionicons
            name="filter-outline"
            size={24}
            color={themes.default.light.color.neutral.brightness[300]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
