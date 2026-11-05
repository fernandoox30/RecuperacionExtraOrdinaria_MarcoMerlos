import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#5145CD' },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="Estudiante"
          component={StudentScreen}
          options={{ title: 'Estudiante' }}
        />
        <Stack.Screen
          name="Series"
          component={ApiScreen}
          options={{ title: 'Series de TV' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}