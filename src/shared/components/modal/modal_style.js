import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
    padding: 30,
  },

  modalText: {
    marginTop: 10,
    fontWeight: "bold",
  },

  buttonClose: {
    width: 60,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#009e54",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
