//import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentProps from "./components/ArrowFunctionalComponentProps.tsx";
// import ArrowFunctionalComponentPropsType from "./components/ArrowFunctionalComponentPropsType.tsx";
import Layout from "./components/Layout.tsx";
import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";




function App() {


    return (
        <>
            <Layout>
            {/*/!*<ViteIntro />*!/*/}
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentProps title = "Is an arrow functional component with props"/>*/}
            {/*<ArrowFunctionalComponentPropsType title = "Is an arrow functional component with props" description="This is a description"/>*/}
            {/*{ <CodingFactoryLogo />  }*/}
            <ClassComponentWithState />


                <h1 className="text-2xl font-bold text-center"></h1>
                <FunctionalComponent/>
                <FunctionalComponentWithState />
                <Counter />
            </Layout>


        </>
    )
}

export default App
