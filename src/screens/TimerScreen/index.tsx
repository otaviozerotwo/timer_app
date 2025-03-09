import { Text, View } from "react-native"
import styles from "./styles"
import TimerButton from "../../components/TimerButton";
import Timer from "../../components/Timer";

const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <Timer />
      <TimerButton />
    </View>
  );
}

export default TimerScreen;