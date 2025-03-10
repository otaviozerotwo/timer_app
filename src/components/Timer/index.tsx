import { useEffect, useState } from "react"
import { Text, View } from "react-native";
import styles from "./styles";
import TimerButton from "../TimerButton";
import CustomModal from "../CustomModal";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setModalMessage('');
  }

  const timerStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const timerPause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const timerStop = () => {
    timerPause();
    setModalMessage('Finalizar atendimento?');
    setIsModalVisible(true);
  }

  const timerReset = () => {
    setTime(0);
    setIsRunning(false);
    handleCloseModal();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <TimerButton
          buttonText={ isRunning ? 'Pause' : 'Start'} 
          onPress={ !isRunning ? timerStart : timerPause }
        />
        { isRunning ? 
          <TimerButton 
            buttonText='Stop'
            onPress={timerStop}
          />
          :
          null
        }
        <CustomModal
          visible={isModalVisible}
          message={modalMessage}
          onPress={timerReset}
          close={handleCloseModal}
        />
      </View>
    </View>
  );
};

export default Timer;