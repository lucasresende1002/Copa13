import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (email === "admin@admin.com") {
      login({ role: "ADMIN", nome: "Administrador" });
      router.replace("./copa13/app/admin");
    } else {
      login({ role: "PLAYER", nome: "Jogador" });
      router.replace("./copa13/app/player");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", justifyContent: "center", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 30 }}>
        Copa 13 ⚽
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#94a3b8"
        style={{
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "#22c55e", padding: 15, borderRadius: 10 }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
