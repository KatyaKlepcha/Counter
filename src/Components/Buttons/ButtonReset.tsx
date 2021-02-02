type ButtonResetType = {
    resetDisplay: () => void
}

export function ButtonReset(props: ButtonResetType) {
    return (
        <div>
            <button onClick={props.resetDisplay} className={'button'}>Reset</button>
        </div>
    )
}