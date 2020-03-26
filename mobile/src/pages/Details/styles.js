import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 16,
    padding: 24
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#41414D",
    marginTop: 24
  },

  incidentValue: {
    fontSize: 15,
    marginTop: 10,
    color: "#737380"
  },

  contactBox: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    padding: 24
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },

  actions: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

  action: {
      backgroundColor: '#e02041',
      borderRadius: 8,
      height: 50,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  
  actionText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
  }
});
