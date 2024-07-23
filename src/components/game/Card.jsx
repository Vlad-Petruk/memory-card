

function Card({name, img}) {


    return (
        <div className="person-card">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Card