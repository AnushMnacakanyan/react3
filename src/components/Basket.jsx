import { BasketItem } from "./BasketItem"

export const Basket = ({cart,deleteToBasket,countPlus,countMinus}) => {
    return <div className="col-md-5">
        <h3>items:{cart.length}</h3>
        {/* <div>
            {
                cart.map(elm=> <BasketItem key={elm.id} cart={elm} />)
            }
        </div> */}
        <BasketItem cart={cart} deleteToBasket={deleteToBasket} countPlus={countPlus} countMinus={countMinus} />
    </div>
}