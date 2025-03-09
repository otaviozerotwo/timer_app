import { Pressable, PressableProps, Text } from "react-native"
import styles from "./styles"

interface TimerButtonProps extends PressableProps {
  buttonText: string;
  onPress: () => void;
}

const TimerButton = ({ buttonText, onPress }: TimerButtonProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Text>{buttonText}</Text>
    </Pressable>
  );
}

export default TimerButton;