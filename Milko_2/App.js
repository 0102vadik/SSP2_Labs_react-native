import { Text, StyleSheet, View, Button, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.main_view}>
      <Text style={styles.title}>Журнал Bright</Text>
      <View>
        <View style={styles.content}>
          <View style={styles.link_view}>
            <Text style={styles.link} onPress={() => setIsPressed(true)}>
              Новости
            </Text>
          </View>
          <View>
            <Image
              style={styles.img}
              source={{
                uri: 'https://brightmagazine.ru/wp-content/uploads/2020/11/pexels-andrea-piacquadio-3839098-1024x683.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.article_title}>
              Превращаем стресс в своего помощника
            </Text>
          </View>
          <View>
            <Text style={styles.text_style}>
              Исследователи Йельского университета заявляют, что люди, которые
              рассматривают стресс, как возможность личностного роста, отмечают
              улучшение качества жизни. Сегодня узнаем, как это работает и как
              увидеть положительные стороны стресса.
            </Text>
          </View>
          <View style={styles.button_view}>
            <Button title="Читать далее" color="orange" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: 'lightgrey',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '650',
    fontSize: '1.2rem',
  },
  link: {
    color: 'blue',
  },
  link_view: {
    margin: '10% 0%',
  },
  content: {
    backgroundColor: 'white',
    marginTop: '5%',
    padding: '0% 8% 8%',
  },
  img: {
    height: 200,
    marginHorizontal: 20,
  },
  article_title: {
    fontWeight: '700',
    fontSize: '18',
    margin: 20,
  },
  text_style:{
    paddingHorizontal:20,
    textAlign: 'justify'
  },
  button_view: {
    margin: '5%',
  },
});

export default App;
