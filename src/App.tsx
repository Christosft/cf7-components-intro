//import ViteIntro from "./pages/ViteIntro.tsx";

// // import ClassComponent from "./components/ClassComponent.tsx";
// // import FunctionalComponent from "./components/FunctionalComponent.tsx";
// // import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// // import ArrowFunctionalComponentProps from "./components/ArrowFunctionalComponentProps.tsx";
// // import ArrowFunctionalComponentPropsType from "./components/ArrowFunctionalComponentPropsType.tsx";
// import Layout from "./components/Layout.tsx";
// // import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// // import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// // import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// // import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// // import CounterAdvanced from "./components/CounterAdvanced.tsx";
// // import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// // import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplePage from "./pages/ExamplePage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AutoRedirectPageAdvanced from "./pages/AutoRedirectPageAdvanced.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";




function App() {


    return (
        <>
            {/*<Layout>*/}
            {/*/!*<ViteIntro />*!/*/}
            {/*/!*<ClassComponent />*!/*/}
            {/*/!*<FunctionalComponent />*!/*/}
            {/*/!*<ArrowFunctionalComponent />*!/*/}
            {/*/!*<ArrowFunctionalComponentProps title = "Is an arrow functional component with props"/>*!/*/}
            {/*/!*<ArrowFunctionalComponentPropsType title = "Is an arrow functional component with props" description="This is a description"/>*!/*/}
            {/*/!*{ <CodingFactoryLogo />  }*!/*/}
            {/*/!*<ClassComponentWithState />*!/*/}


            {/*    <h1 className="text-2xl font-bold text-center"></h1>*/}
            {/*    /!*<FunctionalComponent />*!/*/}
            {/*    /!*<FunctionalComponentWithState />*!/*/}
            {/*    /!*<Counter />*!/*/}
            {/*    <NameChanger />*/}
            {/*    /!*<CounterWithMoreStates />*!/*/}
            {/*    /!*<CounterAdvanced />*!/*/}
            {/*    /!*<CounterWithMoreStates />*!/*/}
            {/*    /!*<CounterWithCustomHook />*!/*/}
            {/*    /!*<CounterAdvancedWithCustomHook />*!/*/}
            {/*    <CounterWithReducer />*/}
            {/*    <Todo />*/}
            {/*    <OnlineStatus />*/}
            {/*</Layout>*/}

            <BrowserRouter>
                {/*<Layout>*/}
                <Routes>
                    {/*<Route path="/" element={<HomePage />} />*/}
                    <Route element={<RouterLayout />} >
                        {/*<Route index element={<HomePage />} />*/}
                        {/*<Route path="name-changer" element={<NameChangerPage />} />*/}
                        <Route index element={<FocusInput />} />
                    </Route>
                    <Route path="examples" element={<RouterExamplesLayout />}>
                        <Route index element={<ExamplePage />} />
                        <Route path="name-changer" element={<NameChangerPage />} />
                        <Route path="online-status" element={<OnlineStatusPage />} />
                        {/*<Route path="auto-redirect" element={<AutoRedirectPage />} />*/}
                        <Route path={"auto-redirect-advanced"} element={<AutoRedirectPageAdvanced />} />
                    </Route>
                        <Route path="users/:userId" element={<UserPage />} />
                        <Route path="users" element={<UserPage />} />
                    {/*<Route path="files/*" element={<FilePage />} />*/}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                {/*</Layout>*/}
            </BrowserRouter>


        </>
    )
}

export default App
