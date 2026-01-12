import { Redirect } from 'expo-router';

export default function Index() {
  // Redireciona para a tela de login na raiz da pasta app
  return <Redirect href="/login" />;
}