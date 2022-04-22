import './Card.css';
function Card(props){
    const classs="Card "+props.className;
    console.log(props);
    return (
        <div className={classs}>{props.children}</div>
    )
}
export default Card;