import { Pressable, Text } from "react-native"
import styles from "./styles"

const TimerButton = () => {
  return (
    <Pressable
      style={styles.container}
    >
      <Text>Start</Text>
    </Pressable>
  );
}

export default TimerButton;