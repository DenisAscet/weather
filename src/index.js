import {createRoot} from 'react-dom/client';
import {App} from './core/App/App';
import { store } from "./ui";
import { Provider } from "react-redux";

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);