import {useState, useEffect} from 'react'
import { FlatList } from 'react-native';
import {CardHorizontalFood} from "@/src/components/food"

export interface FoodProps{
  id: string,
  name: string,
  price: number,
  time: string,
  delivery: number,
  rating:number,
  image:string,
  restaurantId: string
}

export function TrendingFoods() {
const [foods, setFoods] = useState<FoodProps[]>([])

useEffect( () => {
    async function getFoods() {
        const resp = await fetch("http://192.168.100.59:3000/foods")
        const data = await resp.json()
        setFoods(data)
    }
    getFoods()
}, [])

 return (
   <FlatList
   data={foods}
   renderItem={ ({item}) => <CardHorizontalFood food={item}/>}
   horizontal={true}
   contentContainerStyle={{gap:14, paddingLeft:16, paddingRight:16}}
   showsHorizontalScrollIndicator={false}
   />
  );
}