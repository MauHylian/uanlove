import { StyleSheet } from "react-native";

const MainColours = {
  primary: "#000",
  secondary: "rgba(127,127,127,0.5)",
}

const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contain: {
    resizeMode: 'contain',
  },

  row: {
    flexDirection: "row",
  },

  fx1: {
    flex: 1,
  },
  fx2: {
    flex: 2,
  },
  fx3: {
    flex: 3,
  },

  alignCenter: {
    alignItems: "center",
  },

  justifyCenter: {
    justifyContent: "center",
  },

  h64: {
    height: 64,
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },

  description: {
    fontWeight: '800',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  }
});

export {
  MainColours,
  MainStyles,
}