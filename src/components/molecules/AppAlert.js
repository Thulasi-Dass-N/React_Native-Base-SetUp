import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const AppAlert = ({
  visible,
  onRequestClose,
  Alert,
  SuccessName,
  CancelName,
  SuccessButton,
  CancelButton,
}) => {
  return (
    <Modal
      AanimationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <Text style={styles.alert}>{Alert}</Text>
          <View style={styles.ButtonContainer}>
            <Pressable
              style={[styles.Button, { marginRight: 7 }]}
              onPress={() => {
                SuccessButton && SuccessButton();
              }}>
              <Text style={styles.ButtonText}>{SuccessName}</Text>
            </Pressable>
            <Pressable
              style={[styles.Button, { marginLeft: 7 }]}
              onPress={() => {
                CancelButton && CancelButton();
              }}>
              <Text style={styles.ButtonText}>{CancelName}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppAlert;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000040",
  },
  alertContainer: {
    height: 217,
    marginHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 10,
  },
  alert: {
    fontSize: 16,
    marginTop: 50,
    textAlign: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  Button: {
    height: 33,
    width: 123,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 33,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ButtonText: {
    fontSize: 14,
  },
});
