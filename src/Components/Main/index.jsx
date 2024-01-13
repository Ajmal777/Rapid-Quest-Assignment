import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"

export default function Main(){
    return <>
        <Left />
        <div className="main-body" style={{ display: 'flex', gap: '2.5rem', padding: '2.5rem 4rem'}}>
            <Middle />
            <Right />
        </div>
    </>
}