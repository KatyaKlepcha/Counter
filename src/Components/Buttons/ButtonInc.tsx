type ButtonIncType = {
    addDisplay: () => void
    disabled: boolean
  }

export function ButtonInc(props: ButtonIncType) {
    return (
        <div>
            <button onClick={props.addDisplay} className={'button'} disabled={props.disabled}>Inc</button>
        </div>
    )
}