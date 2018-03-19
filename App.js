import React from 'react';
import { StyleSheet, Text, View , TextInput, ActivityIndicator,Image,Dimensions} from 'react-native';
import Footerbudget from './component/footerbudget';
import Navigation from './component/navigation' ;
import flexDirection from './component/flexbox';
import { ScrollView } from 'react-native-gesture-handler';



export default class App extends React.Component {

    constructor() {
      super()
      this.data = [];
      
    }
     
    state = {
      isLoading : true,
      konten : {}
    }
      

    componentDidMount() {
      var {height, width}= Dimensions.get('window');
      const data = [];
      console.log('test height' + height)
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d17b14bf30e6e5442255051b425e62ae&language=en-US&page=1s', {
        method: 'GET',
      }).then((response => {
        this.data = JSON.parse(response._bodyInit)['results'];
        console.log('landing here response', data);
        this.setState({
          isLoading : false,
          konten : JSON.parse(response._bodyInit)
        })
      }));
    }
render() {
    if (this.state.isLoading === true) {
      return (
        <ActivityIndicator/>
      )
    } else {
      
      return (
        <ScrollView>
          {
            this.data.map( (value, index) => {
                let imgUrl = 'https://image.tmdb.org/t/p/w500/' + value.poster_path;
                return (
                    <View>
                    <Image
                      style={{width: 375, height: 450, alignItems: 'center' , backgroundColor:'pink',justifyContent:'center', resizeMode:('stretch') }}
                      source={{uri: imgUrl}}
                    />
                    <Text>{value.title}</Text>
                    </View>
                )
              }
            )

          }
          
          
        </ScrollView>
      )
      
    }
  }
}

 const styles = StyleSheet.create({
   container: {
   color : 'blue',
   fontWeight: 'bold',
   fontSize: 45,

     }})

//      TextStyle:  {
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: 300,
//       marginRight: 2,
//        fontSize:34 , },

//        image : {
//          flex: 1,
//          flexDirection: 'row',
//          justifyContent: 'space-between',
//        }
// 
