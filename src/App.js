import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Login from "./views/login";
import NotFound from "./views/other/notFound";
import AuthComponent from "./permission";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={
                        <AuthComponent>
                            <Layout/>
                        </AuthComponent>}>
                    </Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
