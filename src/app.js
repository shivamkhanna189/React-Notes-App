import ReactDOM from "react-dom/client"
import NotesComponent from "./components/notes";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"

const App = () => {
    return (<NotesComponent/>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    )