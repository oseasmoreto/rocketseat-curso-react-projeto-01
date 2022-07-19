//props: {author:sting, content:string}

export function Post(props){
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <h4>Autor: {props.author}</h4>
      <hr />
    </div>
  )
}