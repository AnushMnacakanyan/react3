export const BasketItem = ({ cart,deleteToBasket,countPlus,countMinus }) => {
    return <>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(elm => <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.price}</td>
                        <td>{elm.count}</td>
                        <td>{elm.count*elm.price}</td>
                        <td>
                            <button onClick={()=>countPlus(elm.id)} className="btn btn-success">+</button>
                            <button onClick={()=>countMinus(elm.id)} className="btn btn-warning" >-</button>
                            <button onClick={()=>deleteToBasket(elm.id)}  className="btn btn-danger">&times;</button>
                        </td>
                    </tr>)
                }

            </tbody>

        </table>
    </>
}