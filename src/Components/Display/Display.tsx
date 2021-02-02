type DisplayType = {
    number: number
}

export function Display(props: DisplayType) {

    return (
        <div className={props.number ===5 ? 'red' : ''}>{props.number}</div>
    )
}

