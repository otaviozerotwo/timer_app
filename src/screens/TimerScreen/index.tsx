import { View } from "react-native"
import styles from "./styles"
import Timer from "../../components/Timer";

const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

export default TimerScreen;