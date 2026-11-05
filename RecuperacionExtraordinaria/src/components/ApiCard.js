import {View,Text,Image,StyleSheet} from 'react-native';
export default function ApiCard({show}) {
    return(
        <View style = {styles.card}>
            {show.image?(
                <image
            source ={{uri: show.image}}
        style = {styles.Image}
    resizeMode= "cover"
    />
            ):(
                <View style = {styles.noImage}>  
                <Text> sin imagen </Text>     
                </View>
            )}

            <Text style = {styles.title}>{show.title}</Text>
            <Text style = {styles.genre}>{show.genres.join('•')}</Text>
            <Text style = {styles.date}>Estreno: {show.premiered}</Text>
            <Text style = {styles.description}>{show.description}</Text>
    </View>
    );
}

const styles = StyleSheet.create({card:{
backgroundColor : '#29234F',
borderRadius: 15,
padding : 12,
marginBottom : 12,
elevation: 2
},
Image:{
    width: '100%',
    height :190,
    borderRadius: 10,
},
noImage:{
    height :80,
    alignItems:"center",
    justifyContent: 'center',
},
title:{
    color: "#29234F",
    fontSize:18,
    fontWeight:"bold",
    margintop:9
},
genre:{
color : "#5145CD",
marginTop : 4,
},
date:{
    color : "#77718F",
    margintop: 4
},
description:{
    color: "#444055",
    margintop : 7
}
});