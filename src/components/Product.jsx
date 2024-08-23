export const Product = ({ id, name, price, photo, onMove,deleteToProduct }) => {
    return <div className="col-md-4">
        {<h3>Product</h3>}
        <img src={photo}
            style={{ width: 200, height: 200, objectFit: "cover" }} />
        <p>{name}</p>
        <p><strong>{price}USD</strong></p>
        <button onClick={() => onMove(id)} className="btn btn-primary">Move</button>
        <button onClick={()=> deleteToProduct(id)} className="btn btn-danger">Delete</button>
    </div>
}