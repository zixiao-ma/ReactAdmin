import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeLayout from "./layout";
import Login from "./views/login";
import LoadingView from "./views/other/Loading";
import Permission from "./permission";
import {useSelector} from "react-redux";
import filterRouter from "./utils/filterRouter";
import {Index} from "./views/index";

function App() {
    const menus = useSelector(state => state.user.userInfo.menus);
    const routerList = filterRouter(menus);

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/' element={
                        <Permission>
                            <HomeLayout/>
                        </Permission>}
                    >
                        <Route path="/Home/" element={<Index/>}></Route>
                        {routerList.map(item => {
                            return (<Route key={item.id} path={`/Home${item.path}`}
                                           element={item.element}></Route>)
                        })}
                        <Route path="*" element={<LoadingView></LoadingView>}></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
