import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      opened:false,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      opened:false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      opened:false,
    },
  ];

const App = () => {
  return (
    <GestureHandlerRootView>
    <View>
      <FlatList
      data={Data}
      renderItem={({item,index})=>{
        return (<Item item={item} index={index}/>)
      }}
      />
    </View>
      </GestureHandlerRootView>
  )
}

export default App

const Item = ({item,index}:{item:any,index:any})=>{

  const leftSwipe = ()=>{
    const handleDelete = () => {
      // Do something to delete the item
      console.log(item);
    };
    return (
   <View style={{display:"flex",flexDirection:"row"}}>
       <TouchableOpacity style={{backgroundColor:"red",height:100,width:80,position:'relative',top:10,display:"flex",justifyContent:'center',alignItems:"center"}} onPress={handleDelete}>
         <Text style={{fontSize:24,color:"white",fontWeight:"500"}}>Delete</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:"blue",height:100,width:80,position:'relative',top:10,display:"flex",justifyContent:'center',alignItems:"center"}}>
         <Text style={{fontSize:24,color:"white",fontWeight:"500"}}>Edit</Text>
      </TouchableOpacity>
   </View>
    )
  }
  const RightSwipe = ()=>{
    return (
      <TouchableOpacity style={{backgroundColor:"green",height:100,width:80,position:'relative',top:10,display:"flex",justifyContent:'center',alignItems:"center"}}>
         <Text style={{fontSize:20,color:"white",fontWeight:"500"}}>Add</Text>
      </TouchableOpacity>
    )
  }
    return (
      <Swipeable renderLeftActions={leftSwipe} renderRightActions={RightSwipe}>
        <View key={item.id} style={{backgroundColor:"grey",height:100,marginVertical:10,marginHorizontal:30,display:"flex",justifyContent:'center',alignItems:"center"}}>
          <Text style={{fontSize:28,fontWeight:'500',color:"white"}}>{item.title}</Text>
        </View>
      </Swipeable>
    )
}

// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const AsyncStoragePage = () => {
//   const setData = ()=>{
//     AsyncStorage.setItem("name","Deepanshu Gupta",()=>{console.log('item is set')})
//   }
//   const getData = async()=>{
//     const name = await AsyncStorage.getItem("name");
//     console.log(name)
//   }
//   return (
//     <View>
//       <View style={{margin:20}}>
//       <Button title='Set Data' onPress={setData}/>
//       </View>
//       <View style={{margin:20}}>
//       <Button title='Show Data' onPress={getData}/>
//       </View>
//       <View style={{margin:20}}>
//       <Button title='Clear Data' onPress={()=>{AsyncStorage.clear()}}/>
//       </View>
//     </View>
//   )
// }

// export default AsyncStoragePage