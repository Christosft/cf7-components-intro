//import ViteIntro from "./pages/ViteIntro.tsx";

// // import ClassComponent from "./components/ClassComponent.tsx";
// // import FunctionalComponent from "./components/FunctionalComponent.tsx";
// // import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// // import ArrowFunctionalComponentProps from "./components/ArrowFunctionalComponentProps.tsx";
// // import ArrowFunctionalComponentPropsType from "./components/ArrowFunctionalComponentPropsType.tsx";
import Layout from "./components/Layout.tsx";
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
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";




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
                <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="name-changer" element={<NameChangerPage />} />
                </Routes>
                </Layout>
            </BrowserRouter>


        </>
    )
}

export default App
