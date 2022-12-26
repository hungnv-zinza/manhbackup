import { Text, View } from "react-native";
import TransactionList from "../../components/Transaction/TransactionList";

export default function HomeScreen() {
  return (
    <View style={{flexGrow: 1}}>
      <TransactionList />
    </View>
  );
}
