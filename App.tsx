import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationProvider from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationProvider />
  </SafeAreaProvider>
  );
}

