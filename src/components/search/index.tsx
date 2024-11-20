import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

export function Search() {
 return (
   <View className="w-full flex-row border items-center gap-2 px-4 border-slate-500 rounded-full bg-transparent">
    <Feather name="search" size={24} color="#64748b"/>
    <TextInput 
    placeholder='Procure sua comida...'
    className='bg-transparent w-full h-full flex-1 '
    />
   </View>
  );
}