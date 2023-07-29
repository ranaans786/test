import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const users = [
  { id: 1, name: "Zaid" },
  {
    id: 2,
    name: "Ans",
  },
  {
    id: 3,
    name: "Ayyaz",
  },
  {
    id: 4,
    name: "Sufyan",
  },
  {
    id: 5,
    name: "Ali",
  },
  {
    id: 6,
    name: "Salman",
  },
  {
    id: 7,
    name: "Rizwan",
  },
  {
    id: 8,
    name: "Shehzad",
  },
  {
    id: 9,
    name: "Abid",
  },
  {
    id: 10,
    name: "Shoukat",
  },
  {
    id: 11,
    name: "Illiyas",
  },
  {
    id: 12,
    name: "Khalil",
  },
  {
    id: 13,
    name: "Basharat",
  },
  {
    id: 14,
    name: "Tariq",
  },
  {
    id: 15,
    name: "Ayyaz",
  },
];

const ListComp = () => {
  const [showList, setList] = useState(false);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.ListStyle}>{item.name}</Text>
        )}
      />

      <View>
        {showList ? (
          <Button title="clear Data" onPress={() => setList(false)} />
        ) : (
          <Button title="Show Data" onPress={() => setList(true)} />
        )}
      </View>

      {showList ? (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.ListStyle}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      ) : (
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ListStyle: {
    backgroundColor: "pink",
    padding: 10,
    margin: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListComp;
