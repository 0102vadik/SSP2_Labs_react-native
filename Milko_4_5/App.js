import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Third from './pages/Third';
import Second from './pages/Second';
import { all, categories } from './consts';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        {categories.map((c) =>
          <Stack.Screen key={c.name} name={c.name} component={Second} />
        )}

        {all.map((a) =>
          <Stack.Screen key={a.id} name={a.name + "/:" + a.id} component={Third} />
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}