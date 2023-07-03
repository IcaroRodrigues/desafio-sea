import { Cadastro } from './Pages/Cadastro'
import { Provider } from 'react-redux'
import store from './Redux/store'


function App() {
  return (
    <>
      <Provider store={store}>
        <Cadastro />
      </Provider>
    </>
  )
}

export default App
