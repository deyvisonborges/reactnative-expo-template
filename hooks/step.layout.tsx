import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useStepNavigation } from "./use-step-navigation";

type StepLayoutProps = {
  steps: React.ReactNode[];
  onFinish?: () => void;
};

export function StepLayout({ steps, onFinish }: StepLayoutProps) {
  const { currentStep, goNext, goBack, isFirst, isLast } = useStepNavigation({
    totalSteps: steps.length,
    onFinish,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity disabled={isFirst} onPress={goBack}>
          <Text style={{ color: isFirst ? "#ccc" : "#007AFF" }}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onFinish}>
          <Text style={{ color: "#007AFF" }}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo da tela */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        {steps[currentStep]}
      </View>

      {/* Footer com dots e botão */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Dots */}
        <View style={{ flexDirection: "row" }}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: currentStep === index ? "#007AFF" : "#ccc",
              }}
            />
          ))}
        </View>

        <TouchableOpacity onPress={goNext}>
          <Text style={{ color: "#007AFF" }}>
            {isLast ? "Finish" : "Next →"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
