import { Stack } from 'expo-router';
import React from 'react';
import '../global.css'; // Importa seu Tailwind!
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    // GestureHandler é necessário para gestos de swipe e scroll
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="RegisterScreen" />
        <Stack.Screen name="ConnectTypeScreen" />
        <Stack.Screen name="ForgotPasswordScreen" />
        <Stack.Screen name="NovaSenhaScreen" />
        <Stack.Screen name="SenhaAlteradaScreen" />
        <Stack.Screen name="Terms" />
        <Stack.Screen name="Polity" />
        
        {/* Telas dos grupos de rotas */}
        <Stack.Screen name="(pacient)" />
        <Stack.Screen name="(professional)" />
        <Stack.Screen name="(clinic)" />
      </Stack>
    </GestureHandlerRootView>
  );
}