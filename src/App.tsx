import 'react-native-gesture-handler';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-native-paper';
import AppNavigator from './routes/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
