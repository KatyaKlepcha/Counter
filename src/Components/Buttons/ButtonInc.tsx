type ButtonIncType = {
    addDisplay: () => void
  }

export function ButtonInc(props: ButtonIncType) {
    return (
        <div>
            <button onClick={props.addDisplay} className={'button'}>Inc</button>
        </div>
    )
}