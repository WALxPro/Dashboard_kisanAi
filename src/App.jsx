import { Provider } from "react-redux";
import Routing from "./routes/routes";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";



function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routing />
        </PersistGate>
      </Provider>
  );
}

export default App;
