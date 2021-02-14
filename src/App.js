import './App.css';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import { CARDS } from './constants';
import Controls from './Controls';

const cards = new Cards;

function App() {
  const [cardList, setCardList] = useState([]);
  const [stage, setStage] = useState(0);
  const [done, setDone] = useState(false);
  const [cardsPreparedToRemove, prepareToRemove] = useState(initialPrepareToRemove);

  useEffect(() => {
      cards.rand();
      rerenderList();
  }, []);

  useEffect(() => {
    rerenderList();
  }, [cardsPreparedToRemove]);

  useEffect(() => {
    if(stage === 0) {
      setDone(isStage0Done());
    }
  }, [cardsPreparedToRemove])


  function prepareToRemoveACard(typeIndex, cardIndex) {
    if(cardsPreparedToRemove.get(typeIndex).has(cardIndex)) {
      cardsPreparedToRemove.get(typeIndex).delete(cardIndex);
    }
    else if(canRemoveCard(typeIndex)) {
      cardsPreparedToRemove.get(typeIndex).set(cardIndex);
    }
    prepareToRemove(new Map(cardsPreparedToRemove));
  }
 
  function canRemoveCard(typeIndex) {
      if(stage == 0) {
        return cards.typeRemove[typeIndex] > cardsPreparedToRemove.get(typeIndex).size;
      }
      else if(stage === 1) {
        for(const cardsOfType of cardsPreparedToRemove.values()) {
            if(cardsOfType.size > 0) {
              return false;
            }
            return true;
        }
      }
      return false;
  }

  function rerenderList() {
    setCardList(cards.pickedCards.map((cardsFromType, typeIndex) =>
      <div key={typeIndex}>
        {stage === 0 ? <div>Необходимо удалить {cards.typeRemove[typeIndex]}</div> : ''}
        <ol>
          {
            cardsFromType.map((card, cardIndex) =>  
              <li disabled={!canRemoveCard(typeIndex) && stage < 2} onClick={prepareToRemoveACard.bind(null, typeIndex, cardIndex)} key={card}>
                {stage < 2 ? <input type="checkbox" readOnly checked={cardsPreparedToRemove.get(typeIndex).has(cardIndex)}></input> : ""}
                {card}
              </li>
            )
          }
        </ol>
      </div>
    ));
  }

  function isStage0Done() {
      return stage > 0 || allCardsPreparedToRemove();
  }

  function allCardsPreparedToRemove() {
      for(const [typeIndex, cardsFromType] of cardsPreparedToRemove.entries()){
          if(cards.typeRemove[typeIndex] !== cardsFromType.size) {
            return false;
          }
      }
      return true;
  }

  function onStageChange() {
    stage === 0 ? onStage0Change() : onStage1Change();
  }

  function onStage0Change() {
      if(!isStage0Done()) return;
      for(const [typeIndex, cardsFromType] of cardsPreparedToRemove.entries()){
        cards.unpick(typeIndex, Array.from(cardsFromType.keys()));
      }
      setStage(1);
      prepareToRemove(initialPrepareToRemove());
      rerenderList();
  }

  function onStage1Change() {
    for(const [typeIndex, cardsFromType] of cardsPreparedToRemove.entries()){
      for(const cardIndex of cardsFromType.keys()) {
        cards.repick(typeIndex, cardIndex);
      }
    }
    setStage(2);
    prepareToRemove(initialPrepareToRemove());
    rerenderList();
}


  function initialPrepareToRemove() {
    const cardsPreparedToRemove = new Map();
      for(const index in CARDS) {
          cardsPreparedToRemove.set(Number(index), new Map);
      }
      return cardsPreparedToRemove;
  }


  return (
    <div className="App">
      <header className="App-header">
        {stage === 0 ? 'Удалите ненужные карты' : ''}
        {stage === 1 ? 'Можете заменить одну карту, на случайную того-же типа' : ''}
        {stage === 2 ? 'Готово' : ''}
      </header>
      <div>
        {cardList}
      </div>
      <Controls stage={stage} onStageChange={onStageChange} done={done} />
    </div>
  );
}

export default App;
