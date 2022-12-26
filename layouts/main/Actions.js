import { AddIcon, Button } from "native-base";
import { StyleSheet, View } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { theme } from "../../ configs/colors.config";

export default function Actions() {
  return (
    <View style={style.container}>
      <Button style={style.btnCtn} borderRadius="50%" variant="ghost">
        <IconFeather name="home" size={24} color="danger.400" />
      </Button>
      <Button style={style.btnCtn} borderRadius="50%" variant="ghost">
        <IconEntypo name="list" size={24} color="emerald.700" />
      </Button>
      <Button borderRadius="50%" style={style.addBtnCtn}>
        <AddIcon size="5" mt="0.5" color="white" />
      </Button>
      <Button style={style.btnCtn} borderRadius="50%" variant="ghost">
        <IconFeather name="search" size={24} color="emerald.700" />
      </Button>
      <Button style={style.btnCtn} borderRadius="50%" variant="ghost">
        <IconFeather name="settings" size={24} color="emerald.700" />
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addBtnCtn: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transform: [
      {
        translateY: -10,
      },
    ],
    backgroundColor: theme.colors.primary['300'],
  },
  btnCtn: {
    width: 58,
    height: 58,
  }
});
