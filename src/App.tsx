//import ViteIntro from "./pages/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentProps from "./components/ArrowFunctionalComponentProps.tsx";
import ArrowFunctionalComponentPropsType from "./components/ArrowFunctionalComponentPropsType.tsx";

function App() {


    return (
        <>
            {/*<ViteIntro />*/}
            <ClassComponent />
            <FunctionalComponent />
            <ArrowFunctionalComponent />
            <ArrowFunctionalComponentProps title = "Is an arrow functional component with props"/>
            <ArrowFunctionalComponentPropsType title = "Is an arrow functional component with props" description="This is a description"/>
        </>
    )
}

export default App
