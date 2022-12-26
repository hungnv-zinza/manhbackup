import { NativeBaseProvider, extendTheme } from "native-base";
import { theme } from "./ configs/colors.config";
import MainLayout from "./layouts/main";
import HomeScreen from "./screens/Home";

export default function App() {
  return (
    <NativeBaseProvider theme={extendTheme(theme)}>
      <MainLayout>
        <HomeScreen />
      </MainLayout>
    </NativeBaseProvider>
  );
}
