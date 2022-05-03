import './Card.css';
function Card(props){
    const classs="Card "+props.className;
    return (
        <div className={classs}>{props.children}</div>
    )
}
export default Card;