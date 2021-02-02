type ButtonResetType = {
    resetDisplay: () => void
}

export function ButtonReset(props: ButtonResetType) {
    return (
        <div>
            <button onClick={props.resetDisplay}>Reset</button>
        </div>
    )
}