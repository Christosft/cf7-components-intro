type Props = {
    title: string;
}

const ArrowFunctionalComponentProps = ({ title } : Props) => {
    return <h1 className= "text-center mt-12 text-xl font-bold">{title}</h1>
}

export default ArrowFunctionalComponentProps;