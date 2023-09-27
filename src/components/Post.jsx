export function Post(props) {
    return (
       <div className="post">
            <h1> { props.author} </h1>
            <p>  { props.content} </p>
       </div>
    )
}