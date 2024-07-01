import './ClickComponent.css';

function ClickComponent({ score, drinkCoffee }) {
    return(
        <div className='Click-Component'>
            <h2> Click Component </h2>
            <h3>Score: {score}</h3>
            <div className='clicker' onClick={ drinkCoffee }>Drip Coffee</div>
        </div>
    );
}

export default ClickComponent;