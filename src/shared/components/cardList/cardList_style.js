import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  swipeable: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "white",

    shadowColor: "gray",
    elevation: 5,
  },

  containerView: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  rightAction: {
    width: "20%",
    justifyContent: "center",
    backgroundColor: "red",
  },

  iconView: {
    padding: 5,
    alignItems: "center",
  },

  actionText: {
    color: "white",
    fontSize: 17,
  },

  // text: {
  //   fontWeight: "bold",
  // },

  // editClients: {
  //   position: "absolute",
  //   right: 20,
  //   bottom: 30,
  //   padding: 10,
  // },
});
