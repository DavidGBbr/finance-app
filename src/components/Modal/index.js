import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import ActionModal from "../ActionModal";
import { View, Modal as ModalComponent } from "react-native";

export default function Modal() {
  const { visibleModal, setVisibleModal } = useContext(AuthContext);
  return (
    <View>
      <ModalComponent
        animationType="slide"
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
      >
        <ActionModal handleClose={() => setVisibleModal(false)} />
      </ModalComponent>
    </View>
  );
}
