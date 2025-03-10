import { Modal, ModalProps, Pressable, Text, View } from "react-native"
import styles from "./styles";

interface CustomModalProps extends ModalProps {
  visible: boolean;
  onPress: () => void;
  message: string;
  close: () => void;
}

const CustomModal = ({ visible, onPress, message, close }: CustomModalProps) => {
  return (
    <Modal 
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={onPress}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={close}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;