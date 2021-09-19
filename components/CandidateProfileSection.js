import React from "react";
import { View, Text } from "react-native";

const CandidateProfileSection = ({ title, children }) => (
  <View style={{}}>
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
    {children}
  </View>
);

export default CandidateProfileSection;
