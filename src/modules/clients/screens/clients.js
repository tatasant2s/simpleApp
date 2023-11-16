import { styles } from "../styles/clients_style";
import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useClients, useData } from "../../../store";
import { CardList, InputSearch } from "../../../shared/components";

export default function Clients() {
  const { data } = useData();
  const { clients, filterData, setFilter } = useClients();

  useEffect(() => {
    if (data === "") {
      setFilter(clients);
    } else {
      setFilter(
        clients.filter((item) => {
          if (item.name.toLowerCase().indexOf(data.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <InputSearch
        outlineStyle={styles.inputSearchView}
        placeholder="Buscar"
        mode="outlined"
      />

      <FlatList
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardList cli={item} />}
      />
    </View>
  );
}
