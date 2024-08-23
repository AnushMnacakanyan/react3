export const Product = ({ elm ,onMove,deleteToProduct }) => {
    return <div className="col-md-4">
        {<h3>Product</h3>}
        <img src={elm.photo}
            style={{ width: 200, height: 200, objectFit: "cover" }} />
        <p>{elm.name}</p>
        <p><strong>{elm.price}USD</strong></p>
        <button onClick={() => onMove(elm)} className="btn btn-primary">Move</button>
        <button onClick={()=> deleteToProduct(elm.id)} className="btn btn-danger">Delete</button>
    </div>
}