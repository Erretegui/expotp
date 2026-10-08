
import { Text, View, StyleSheet} from "react-native"

export default function Descripcion({ texto }) {
    return (
        
        <Text style={styles.Descripcion}>{texto}</Text>
        
    )
}

const styles = StyleSheet.create({
    Descripcion: {
       
       
        color: "#eee3e3",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "justify",
         margin: "15",
        padding:"18",
       
    },
       
    
})