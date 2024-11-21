import { View,Image, Pressable, Text } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantItem({item} : {item:RestaurantsProps}) {
 return (
<Pressable className='flex flex-col items-center justify-center' onPress={() => console.log("clicou no restaurante " + item.name)}>
    <Image 
    source={{uri: item.image}}
    className='w-20 h-20 rounded-full'
    />
    <Text 
    className='text-sm text-black mt-2 w-20 text-center leading-4' 
    numberOfLines={2}>
        {item.name}
    </Text>
</Pressable>
  );
}