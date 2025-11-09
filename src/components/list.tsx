type PropsList = {
    title: string,
    items:{
        name: string,
    }[]
}

export function List(props: PropsList){
    return(
        <>
            <h2>{props.title}</h2>
            <ul>
                {props.items.map(item => {
                    return(
                        <li key={item.name}>{item.name}</li>
                    )
                })}
            </ul>
        </>
    )
}