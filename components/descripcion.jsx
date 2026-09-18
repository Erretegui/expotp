
import { Text, View, StyleSheet} from "react-native"

export default function Descripcion({ texto }) {
    return (
        
        <Text style={styles.Descripcion}>{texto}</Text>
        
    )
}

const styles = StyleSheet.create({
    Descripcion: {
        backgroundColor: "#fa280dd7",
       
        color: "#eee3e3",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "justify",
        marginTop: 15,
        
    },
       
    
})