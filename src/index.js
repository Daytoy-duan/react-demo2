import ReactDOM from 'react-dom/client';
import Routes from './components/Routes';
import { Provider } from 'react-redux'
import store from './store'
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/index'
import "./style.css"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

