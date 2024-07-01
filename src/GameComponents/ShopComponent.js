import './ShopComponent.css';
import ShopItemElement from './Elements/ShopItemElement'

function ShopComponent({ buyMachine, buyUpgradeMachines }) {
    return(
        <div className='shop'>
            <div className='shop-header'>
                <h2>Shop Component</h2>
            </div>
            <div className='shop-items'>
                <ShopItemElement itemSymbol={"☕️"} onBuyFunction={ buyMachine }/>
                <ShopItemElement itemSymbol={"🛠️"} onBuyFunction={ buyUpgradeMachines }/>
            </div>
        </div>
    );
}

export default ShopComponent;