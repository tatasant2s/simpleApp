import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  viewClients: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 3,
    padding: 15,
  },

  text: {
    fontWeight: "bold",
  },

  editClients: {
    position: "absolute",
    right: 20,
    bottom: 30,
    padding: 10,
  },
});
