import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
};

export const appStyles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  textInput: {
    height: 40,
    fontFamily: "space-mono",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    maxWidth: "100%"
  },
  textStyle: (color = "#fff", size = 16, weight = "normal") => ({
    fontFamily: "space-mono",
    fontSize: size,
    color: color,
    fontWeight: weight
  }),
  buttonStyle: {
    backgroundColor: "#0f143b",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center"
  },
  rowItem: { flex: 1, flexDirection: "row", alignItems: "center" },
  boxShadow: {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10
  }
});
