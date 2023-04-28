import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: {
    ...this.centerContainer,
  },
  loginRegisterContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: "top",
    alignItems: "center",
    paddingTop: "30%", // Add paddingTop to push the container down
  },
  scanUploadContainer: {
    ...this.centerContainer,
    backgroundColor: DefaultTheme.colors.background,
  },
  savedScansContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    marginBottom: 20,
    color: "#666666",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemContent: {
    marginLeft: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemResponse: {
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "#666666",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    // marginBottom: 10,
    color: "#333333",
    textAlign: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: DefaultTheme.colors.background,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  scanDetailsContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    padding: 10,
  },
  scanDetailsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scanDetailsResponse: {
    fontSize: 16,
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    color: DefaultTheme.colors.primary,
  },  
});
