import { useState } from "react"
function Header() {
    return <div>
        <h2>NIma gap</h2> 
        <p>Hello</p>
    </div> 
}

function Content() {
    return <div>
    <h2>What's it metter</h2> 
    <p>Salom</p>
</div> 
}

function Product(props) {
    return <h1>{props.name} , {props.age}</h1>
}

function Student(props) {
    return <h1>{props.name} {props.age}  {props.guruh}</h1>
}

function Counter() {
    const [son, setSon] = useState(0);

    return (
        <div>
            <h1>{son}</h1>
            <button onClick={() => setSon(son+1)}>+</button>
            <button onClick={() => setSon(son-1)}>-</button>
        </div>
    );
}

function Almashtir() {
    const [almash, setAlmash] = useState("Asslomu aleykum")

    return (
        <div>
            <h1>{almash}</h1>
            <button onClick={() => setAlmash("Hello world")}>bos!</button>
        </div>
    )
}

function Like() {
    const [like , setLike] = useState("Like:")
    const [son, setSon] = useState(0);

    return (
        <div>
            <h1>{like} {son}</h1>
            <button onClick={() => setSon(son+1)}>+</button>
        </div>
    );
}

export {Header, Content , Product , Student , Counter , Almashtir , Like};