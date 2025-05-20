type Props = {
  title: string;
  description: string;
}

// type A = {
//     title: string;
// }
//
// type B = {
//     description: string;
// }
//
// type MergedProps  = A & B;

const ArrowFunctionalComponentPropsType= ({ title, description } : Props) => {
    return (
        <>
            <h1 className= "text-center mt-12 text-xl font-bold">{title}</h1>;
            <p className="text-center mt-12 text-xl font-bold">{description}</p>;
        </>
    )
}

export default ArrowFunctionalComponentPropsType;