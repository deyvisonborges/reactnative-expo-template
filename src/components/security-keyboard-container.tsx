import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SecutiryKeyboardContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        // 'padding' funciona muito bem no iOS, 'height' ou 'padding' no Android.
        // É comum usar 'padding' no iOS e deixar 'undefined' ou 'height' no Android
        // para melhor compatibilidade.
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Usar um ScrollView aqui é uma boa prática para telas com campos de input,
            garantindo que o conteúdo possa rolar se for "empurrado" pelo teclado. */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {children}
          {/* Exemplo de Input para teste */}
          <TextInput placeholder="Digite algo" style={styles.input} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "blue", // Cor de fundo da área segura
  },
  keyboardAvoiding: {
    backgroundColor: "green",
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça
    paddingHorizontal: 20, // Padding lateral opcional
    justifyContent: "flex-end", // Opcional: Para manter os inputs na parte inferior
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 50,
  },
});
