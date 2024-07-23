

function Card({name, img, handleClick}) {


    return (
        <div className="person-card" onClick={handleClick}>
            <img src={img} alt={name}  />
            <p>{name}</p>
        </div>
    )
}

export default Card