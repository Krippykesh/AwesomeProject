import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import ApiCall from "./components/apicall";

export default function App() {
  const [value, setvalue] = useState("");
  const [ListOfNotes, setListOfNotes] = useState([]);

  function HandleOnChangeText(getEnteredText) {
    setvalue(getEnteredText);
  }
  function HandleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    setvalue("");
  }
  function HandleRemoveItem(getCurrentIndex) {
    console.log("Item Pressed");
    let copycat = [...ListOfNotes];
    copycat = copycat.filter((_, index) => getCurrentIndex !== index);
    setListOfNotes(copycat);
  }
  return (
    <View
      style={{
        padding: 60,
        paddingHorizontal: 15,
        flex: 1,
      }}
    >
      <View style={styles.IC}>
        <TextInput
          onChangeText={HandleOnChangeText}
          style={styles.IP}
          placeholder="Speak Up!"
          value={value}
        />
        <Button onPress={HandleOnPressButton} color={"#111"} title="Ender" />
      </View>
      <View style={styles.LC}>
        <FlatList
          data={ListOfNotes}
          renderItem={(itemData) => (
            <Pressable onPress={() => HandleRemoveItem(itemData.index)}>
              <Text style={styles.LI}>{itemData.item}</Text>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.API}>
        <ApiCall />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IC: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  IP: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  LC: {
    paddingTop: 30,
    flex: 1,
  },
  LI: {
    borderRadius: 30,
    borderColor: "blue",
    backgroundColor: "grey",
    padding: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
  API:{
    flex:2
  }
});
