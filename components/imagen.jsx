import { Image, StyleSheet} from "react-native"

export default function Imagen({ imagen }) {
    return (
        <Image 
              source={{ uri: imagen }}
            style={styles.imagen}
        />
    )
}
const styles = StyleSheet.create({
    imagen: {
        alignSelf:"center",
        width: "90%",
        height: 250,
        resizeMode: "cover",
        borderRadius: 10,
    },
})