import './ClickComponent.css';

function ClickComponent({ baseClick, multiplier, score, drinkCoffee }) {
    return(
        <div className='Click-Component'>
            <h2> Click Component </h2>
            <h3>Score: {score}</h3>
            <div className='clicker' onClick={ drinkCoffee }>Drip Coffee</div>
            <p>Base Drip: { baseClick }</p>
            <p>Multiplier: { multiplier }</p>
        </div>
    );
}

export default ClickComponent;