import { BasketItem } from "./BasketItem"

export const Basket = ({cart,deleteToBasket,countPlus,countMinus,total}) => {
    return <div className="col-md-5">
        <h3>items:{cart.length}</h3>
        <h3>total:{total}</h3>
      
        <BasketItem cart={cart} deleteToBasket={deleteToBasket} countPlus={countPlus} total={total} countMinus={countMinus} />
    </div>
}