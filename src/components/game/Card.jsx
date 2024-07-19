

function Card({name, img, key}) {


    return (
        <div className="person-card" key={key}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Card