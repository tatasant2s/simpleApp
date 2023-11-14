import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  swipeable: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "white",
    shadowColor: "gray",
    elevation: 3,
  },

  containerView: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  containerText: {
    fontWeight: "bold",
  },

  editClients: {
    position: "absolute",
    right: 20,
    bottom: 30,
    padding: 10,
  },
});
