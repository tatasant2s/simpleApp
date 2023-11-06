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

  editClients: {
    position: "absolute",
    right: 20,
    bottom: 25,
    padding: 10,
  },
});
