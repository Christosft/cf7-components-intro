type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}


    const CounterButton = ({onClick, disabled = false, label, addClass = "bg-black"}: ButtonProps  ) => {
    return (
        <>
            <button
                className={"bg-cf-dark-grey disabled:bg-gray-700 text-white py-2 px-4 rounded " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {label}

            </button>


        </>
    )
}

export default CounterButton