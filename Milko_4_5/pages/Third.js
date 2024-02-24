import { useNavigationState } from '@react-navigation/native';
import { StyleSheet, Image, View, Button } from 'react-native';
import { all } from '../consts';


function Third({ navigation }) {
    const routes = useNavigationState(state => state.routes[2].name)

    return (
        <View style={styles.container}>

            {all.map((a) => routes === (a.name + "/:" + a.id) &&
                <Image key={a.id} style={styles.img} source={a.img} />
            )}

            <View style={styles.bnt}>
                <Button title="Назад" onPress={() => { navigation.goBack(); }} />
                <Button title="Назад на главную" onPress={() => { navigation.popToTop(); }} />
            </View>
        </View>
    );
}

export default Third;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    img: {
        width: 412,
        height: 300,
    },
    bnt: {
        top: 144,
    }
});