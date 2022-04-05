import React, { useState, useEffect } from "react";
import Dice from "./components/Dice";

function App() {
  const [dices, setDices] = useState([]);
  const [diceData, setDiceData] = useState([]);

  useEffect(() => {
    //Tableau de <Dice /> avec les data associes
    let data = initDices();

    let news = data.map((diceData) => {
      return (
        <Dice
          key={diceData.id}
          data={diceData}
          freeze={() => freeze(diceData.id)}
        />
      );
    });
    setDices(news);
    setDiceData(data);
  }, []);

  useEffect(() => {
    let news = diceData.map((diceData) => {
      return (
        <Dice
          key={diceData.id}
          data={diceData}
          freeze={() => freeze(diceData.id)}
        />
      );
    });
    setDices(news);
  }, [diceData]);

  // Initialise pour chaque des sa propre valeur dans un tableau
  let initDices = () => {
    let listData = [];
    for (let i = 0; i < 10; i++) {
      listData.push({
        id: i,
        value: Math.floor(Math.random() * 7),
        isFreezed: false,
      });
    }
    return listData;
  };

  // freeze function pour changer la valeur isFreezed de l'objet js associer au dice
  let freeze = (currentId) => {
    console.log(currentId);
    setDiceData(
      diceData.map((dice) => {
        return dice.id === currentId
          ? {
              ...dice,
              isFreezed: !dice.isFreezed,
            }
          : dice;
      })
    );

    setDices(
      diceData.map((diceData) => (
        <Dice
          key={diceData.id}
          id={diceData.id}
          data={diceData}
          freeze={() => freeze(diceData.id)}
        />
      ))
    );
  };

  // onClick function Roll pour relancer les des
  // on change les valeurs de chaque des
  //{...prevDiceDate, value: random} .map .set

  let rollDice = () => {
    setDiceData(
      diceData.map((dice) => {
        return dice.isFreezed
          ? dice
          : {
              ...dice,
              value: Math.floor(Math.random() * 6) + 1,
            };
      })
    );

    setDices(
      diceData.map((diceData) => (
        <Dice
          key={diceData.id}
          id={diceData.id}
          data={diceData}
          freeze={() => freeze(diceData.id)}
        />
      ))
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each dice to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dices">{dices}</div>

      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}

export default App;
