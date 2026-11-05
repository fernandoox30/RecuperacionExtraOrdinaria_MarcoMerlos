import { View,StyleSheet} from "react-native";
export default function InfoRow({label,value}){
    return(
        <View style = {styles.row}>
            <Text style = {styles.label}>{label}</Text>
            <Text style = {styles.value}>{value}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    row:{
backgroundColor:"#FFFFFF",
padding:12,
borderRadius: 12,
marginBottom:9
    },
    label:{
        color :"#5145CD",
        fontWeight:"bold"
    },
    value:{
        color :"#29234F",
        fontSize:16
    }
});