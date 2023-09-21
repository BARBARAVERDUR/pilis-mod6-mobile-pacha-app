
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  selectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#00BFFF", // Color de fondo cuando está seleccionado
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
  },
  selectedText: {
    marginLeft: 10,
    color: "white", // Color del texto cuando está seleccionado
  },
});
