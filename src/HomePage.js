import './HomePage.css';
import AuthContext from './AuthContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SkillTreeComponent from './GameComponents/SkillTreeComponent';
import ClickComponent from './GameComponents/ClickComponent';
import ShopComponent from './GameComponents/ShopComponent';
import StatusDashComponent from './GameComponents/StatusDashComponent';

function HomePage() {
    const { loggedIn, logout } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [skillTreeVisible, setSkillTreeVisible] = useState(false);

    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("logging out");
        logout();
        navigate('/');
    }

    const openSkillTree = () => {
        setSkillTreeVisible(true);
        console.log("open skill tree");
    }

    const closeSkillTree = () => {
        setSkillTreeVisible(false);
        console.log("close skill tree");
    }

    // game data
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [baseClick, setBaseClick] = useState(1);

    const drinkCoffee = () => {
        let newScore = score + (baseClick * multiplier);
        setScore(newScore);
    }


    useEffect(() => {
        if (!loggedIn) {
            navigate('/');
        }
        setIsLoading(false);
    }, [navigate, loggedIn]);

    if (isLoading) {
        return(<div> Loading... </div>);
    }

    return (
        <div className='Home-Page'>
            {skillTreeVisible && <SkillTreeComponent/>}
            <StatusDashComponent/>
            <div className='game-elements'>
                <div className='Main-Game'>
                    <ClickComponent score={ score } drinkCoffee={ drinkCoffee }/>
                    <ShopComponent/>
                </div>
                <div className='Side-Buttons'>
                    <button onClick={ skillTreeVisible ? closeSkillTree : openSkillTree }>Skill Tree</button>
                    <button onClick={ handleLogout }>Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;