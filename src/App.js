import InputForm from './components/InputForm'
import List from './components/List'
import store from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputForm />
        <List />
      </div>
    </Provider>
  );
}