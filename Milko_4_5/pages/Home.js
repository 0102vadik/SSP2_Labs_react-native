import { StyleSheet, Text, View, Image } from 'react-native';
import { categories } from '../consts';


function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.middleview}>

                {categories.map((c) =>
                    <View key={c.name} style={styles.view} onStartShouldSetResponder={() => navigation.navigate(c.name)}>
                        <Image style={styles.img} source={c.img} />
                        <Text style={styles.text}>{c.name}</Text>
                    </View>
                )}

            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0
    },
    middleview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10
    },
    img: {
        width: 200,
        height: 200
    },
    text: {
        fontSize: 21,
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: -40,
        color: 'white'
    },
    view: {
        paddingLeft: 4,
        alignItems: 'center',
        paddingBottom: 10
    }
});
