import { useNavigationState } from '@react-navigation/native';
import { StyleSheet, View, Button, Image, ScrollView, TouchableHighlight } from 'react-native';
import { all } from '../consts';


function Second({ navigation }) {
    const routes = useNavigationState(state => state.routes[1].name)

    return (
        <View style={styles.container}>
            <ScrollView>

                {all.map((a) => routes === a.name &&
                    <TouchableHighlight key={a.id} onPress={() => navigation.navigate(a.name + "/:" + a.id)}>
                        <View>
                            <Image style={styles.img} source={a.img} />
                        </View>
                    </TouchableHighlight>
                )}

            </ScrollView>

            <Button title="Назад" onPress={() => { navigation.goBack(); }} />
        </View>
    );
}

export default Second;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: 412,
        height: 300,
        marginBottom: 10
    }
});