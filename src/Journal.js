function Journal(props){
    return(
        <>
        <div className="row">
            <img src={props.img} className="img"/>
            <div className="col">
                <div className="loc">
                    <div><img src="./images/location.png" className="location"/>
                    <p>{props.country}</p></div>
                    <p className="view">View on Google Maps</p>
                </div>
                <h3>{props.title}</h3>
                <p className="date">{props.date}</p>
                <p className="desc">{props.description}</p>
            </div>
            
        </div>
        {!props.last && <div className="line"></div>}
        
        </>
    )
}
export default Journal