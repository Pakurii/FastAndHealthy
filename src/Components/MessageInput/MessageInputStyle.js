import {StyleSheet} from 'react-native';
export default StyleSheet.create({

   root:{
    flexDirection:"row",
    padding:10,
    
},
inputContainer:{
    backgroundColor:"#f2f2f2",
    flex:1,
    marginRight:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:"#dedede",
    alignItems:"center",
    flexDirection:"row",
    padding:0
   },
   buttonContainer:{
    width:50,
    height:50,
    backgroundColor:"#3777f0",
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
   },
   input:{
    flex:1,
    
   },
   icon:{
    marginHorizontal:5,
   }
});