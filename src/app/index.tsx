import { View, ScrollView } from "react-native";
import { Header } from '@/src/components/header/index';
import Constants from "expo-constants"
import { Banner } from "@/src/components/banner";
import { Search } from "@/src/components/search";
import { Section } from "@/src/components/section";
import { TrendingFoods } from "@/src/components/trending";
import { Restaurants } from "@/src/components/restaurants";
import { RestaurantVerticalList } from "@/src/components/list";


const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{flex:1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>
      </View>
      <Section
      name="Comidas em alta"
      label="veja mais"
      action={ () => console.log("Clicou no veja mais")}
      size="text-2xl"
      />
     <TrendingFoods/>
     <Section
      name="Famosos do DevFood"
      label="veja todos"
      action={ () => console.log("Clicou no veja todos")}
      size="text-xl"
      />
      <Restaurants/>
      <Section
      name="Restaurantes"
      label="veja todos"
      action={ () => console.log("Clicou no veja RESTAURANTES")}
      size="text-xl"
      />
      <RestaurantVerticalList/>
    </ScrollView>
  );
}
