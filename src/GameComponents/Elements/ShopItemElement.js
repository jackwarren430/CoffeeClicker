import './ShopItemElement.css'

function ShopItemElement({ itemSymbol, onBuyFunction }) {
    return(
        <div className='shop-item'>
            <div className='item-symbol'>{ itemSymbol }</div>
            <button className='buy-button' onClick={ onBuyFunction }>Buy</button>
        </div>
    );
}

export default ShopItemElement;