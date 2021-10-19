import './App.css';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import { CARDS, CARD_NAMES, CARD_GROUP_HINTS, CARD_HINTS } from './constants';
import Controls from './Controls';
import {ExpirableLocalStorage} from './ExpirableLocalStorage';
import { Hint } from './components/hint/Hint';

const cards = new Cards();
const expirableLocalStorage = new ExpirableLocalStorage();
const data = expirableLocalStorage.get('data');

function App() {
  const [fixMode, setFixMode] = useState(expirableLocalStorage.fixMode);
  const [cardList, setCardList] = useState([]);
  const [time, setTime] = useState(null);
  const [showTime, setShowTime] = useState(false);
  const [stage, setStage] = useState(0);
  const [cardsPreparedToRemove, prepareToRemove] = useState(initialPrepareToRemove);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if(typeof data.cards !== 'undefined' && typeof data.time !== 'undefined' && typeof data.stage !== 'undefined') {
      const data = expirableLocalStorage.get('data');
      cards.restoreFromObject(data.cards);
      setTime(new Date(data.time));
      setStage(data.stage);
    }
    else {
      cards.rand();
      const newTime = new Date();
      setTime(newTime);
      expirableLocalStorage.set('data', {cards, time: newTime, stage: 0})
    }
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

  useEffect(() => {
    rerenderList();
  }, [stage])


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
      if(stage === 0) {
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
        <div>
          {CARD_NAMES[typeIndex]}
          {stage === 0 ? <span> Необходимо удалить {cards.typeRemove[typeIndex]}</span> : ''}
          {CARD_GROUP_HINTS[typeIndex] && <span style={{paddingLeft: '5px'}}><Hint message={CARD_GROUP_HINTS[typeIndex]} /></span>}
        </div>
        <ol>
          {
            cardsFromType.map((card, cardIndex) =>  
              <li disabled={!canRemoveCard(typeIndex) && stage < 2} >
                {CARD_HINTS[card] && <Hint message={CARD_HINTS[card]} />}
                <span onClick={prepareToRemoveACard.bind(null, typeIndex, cardIndex)} key={card}>
                  {stage < 2 ? <input type="checkbox" readOnly checked={cardsPreparedToRemove.get(typeIndex).has(cardIndex)}></input> : ""}
                  <span dangerouslySetInnerHTML={{__html: card}} />
                </span>
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
      expirableLocalStorage.set('data', {cards, time, stage: 1})
      prepareToRemove(initialPrepareToRemove());
  }

  function onStage1Change() {
    for(const [typeIndex, cardsFromType] of cardsPreparedToRemove.entries()){
      for(const cardIndex of cardsFromType.keys()) {
        cards.repick(typeIndex, cardIndex);
      }
    }
    setStage(2);
    expirableLocalStorage.set('data', {cards, time, stage: 2})
    prepareToRemove(initialPrepareToRemove());
}


  function initialPrepareToRemove() {
    const cardsPreparedToRemove = new Map();
      for(const index in CARDS) {
          cardsPreparedToRemove.set(Number(index), new Map());
      }
      return cardsPreparedToRemove;
  }

  function toggleFixMode() {
    expirableLocalStorage.fixMode = !fixMode;
    setFixMode(!fixMode);
  }


  return (
    <div className="App">
      <header className="App-header">
        {stage === 0 ? 'Удалите ненужные карты' : ''}
        {stage === 1 ? 'Можете заменить одну карту, на случайную того-же типа' : ''}
        {stage === 2 ? 'Готово' : ''}
        <button onClick={() => setShowTime(true)}>
          Время
        </button>
      </header>
      <div>
        {cardList}
      </div>
      <Controls stage={stage} onStageChange={onStageChange} done={done || stage > 0} />
      <button class="btn__fix-mode" onClick={toggleFixMode}>{fixMode ? 'Fix mode on' : 'Fix mode off'}</button>
      <div className="modal" style={{display: showTime ? 'flex' : 'none'}} onClick={() => setShowTime(false)}>
        <div className="modal-content">
          {time ? time.toLocaleTimeString() : 'Time is not set'}
        </div>
      </div>
    </div>
  );
}

export default App;
