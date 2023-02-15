import './Card.css';

const Card = ({title, text}) => {

  // const {title, text} = inputs

  return (
    <div className='Card'>
        <div className="CardBody">
          <h3 className="CardTitle"> {title}</h3>
          <p className='CardText'>{text}</p>
        </div>
    </div>
  )
}

export default Card