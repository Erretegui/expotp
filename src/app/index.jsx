import { Text, View, ActivityIndicator, StyleSheet } from "react-native"
import { useApi } from "../../hooks/api"
import Imagen from "../../components/imagen"
import Descripcion from "../../components/descripcion"
import Titulo from "../../components/titulo"

export default function Index() {

    const datos = useApi()

    if (!datos) {
        return <ActivityIndicator size="large" />
    }

    return (
        <View style={styles.container}>
            <Titulo titulo={datos.title}/>
            <Imagen imagen={datos.url} />
            <Descripcion texto={datos.explanation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ec3305",
    },
})
