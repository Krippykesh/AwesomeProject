import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function ApiCall() {
  const [ApiData, SetApiData] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    async function GetDataFromApi() {
      const response = await fetch("https://dummyjson.com/users");
      const FinalData = await response.json();
      if (FinalData) {
        SetApiData(FinalData.users.map((userItem) => userItem.firstName));
        SetLoading(false);
      }
    }
    GetDataFromApi();
  }, []);
  if (Loading){
    return (
        <ActivityIndicator color={'blue'} size='large'/>
    )
  }
  
  return (
    <View>
      <Text>ApiCall</Text>
      <View>
        <FlatList
          data={ApiData}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
        />
      </View>
    </View>
  );
}
