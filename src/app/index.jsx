import { Text, View, ActivityIndicator, StyleSheet, ImageBackground, ScrollView } from "react-native"
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
        <ImageBackground source={require("../../assets/fondo.jpg")} style={styles.fondo} resizeMode= "cover">

            <ScrollView style = {styles.container}>

                <View style={styles.container}>
                    <Titulo titulo={datos.title}/>
                    <Imagen imagen={datos.url} />
                    <Descripcion texto={datos.explanation}/>
                </View>

            </ScrollView>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
       flex:"1",
    },
})
