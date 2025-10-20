### References

- <https://www.reactnativecrossroads.com/posts/level-up-react-native-styles/>
- <https://gist.github.com/mrousavy/0de7486814c655de8a110df5cef74ddc>
- <https://github.com/mrousavy/react-native-style-utilities/blob/main/src/useFlatStyle.ts>

#### Estilos fixos

✅ Melhor prática: sempre usar StyleSheet.create para estilos fixos.
💡 Por quê: React Native converte em IDs nativos — mais leve e rápido que objetos JS.

```jsx
import { StyleSheet, View, Text } from "react-native";

export function ExampleCreate() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estilos criados com StyleSheet.create</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
```

### Composição e sobrescrita condicional

```tsx
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function ExampleArrayStyles({ type = "primary", disabled = false }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "secondary" && styles.secondaryButton,
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}
    >
      <Text style={styles.text}>Botão {type}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },
  secondaryButton: {
    backgroundColor: "#ddd",
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
```

✅ Melhor prática: usar style={[...]} para compor e sobrescrever dinamicamente.
💡 Por quê: evita recriar objetos, mantém performance e leitura.
💡 Nao prejudica o useMemo

#### Ler ou manipular o estilo final

```tsx
import { StyleSheet, View, Text } from "react-native";

export function ExampleFlatten() {
  const combinedStyle = StyleSheet.flatten([
    styles.card,
    { backgroundColor: "lightblue" },
  ]);

  // Aqui podemos acessar valores finais
  console.log("Background final:", combinedStyle.backgroundColor);

  return (
    <View style={combinedStyle}>
      <Text>Card com estilo combinado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
```

✅ Melhor prática: use StyleSheet.flatten() somente quando precisa acessar ou calcular valores do estilo em runtime.
💡 Ex: extrair backgroundColor para usar em animação ou lógica de layout.

#### Uso avançado — misto com useMemo

> Se for necessário gerar estilo dinâmico, faça de forma memoizada:

```tsx
import { useMemo } from "react";
import { View, StyleSheet } from "react-native";

export function ExampleUseMemo({ size = "medium" }) {
  const dynamicStyle = useMemo(() => {
    const sizes = {
      small: 50,
      medium: 100,
      large: 150,
    };
    return { width: sizes[size], height: sizes[size] };
  }, [size]);

  return <View style={[styles.box, dynamicStyle]} />;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "purple",
    borderRadius: 10,
  },
});
```

✅ Melhor prática: quando precisar de estilos totalmente dinâmicos (ex: tamanhos, cores vindas de props), use useMemo.
