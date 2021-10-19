import {CARDS, CARDS_IN_GROUP, CARDS_REMOVE_FROM_GROUP, CARD_GROUP_HINTS} from './constants';
import shuffle from 'shuffle-array';

export default class Cards {

    constructor() {
        const splitRegExp = new RegExp('\\d+\\. ');
        this.typeCount = CARDS_IN_GROUP;
        this.typeRemove = CARDS_REMOVE_FROM_GROUP;
        this.hints = CARD_GROUP_HINTS;
        this.cardTypes = CARDS.map(cards => cards.replace(/\n/g, ' ').split(splitRegExp).map(item => item.trim()).slice(1));
        this.pickedCards = [];
    }
    
    rand() {
        this.pickedCards = [];
        for(const index in this.cardTypes) {
            const cards = this.cardTypes[index];
            this.pickedCards.push(this._pickRandomFromArray(cards, this.typeCount[index]))
        }
        return this.pickedCards;
    }

    pick(cardType) {
        const card = this._pickRandomFromArray(this.cardTypes[cardType]);
        this.pickedCards[cardType].push(card);
        return card;
    }

    unpick(cardType, cardIndexes) {
        cardIndexes.sort((a, b) => b - a);
        for(const cardIndex of cardIndexes) {
            this.cardTypes[cardType].push(this.pickedCards[cardType].splice(cardIndex, 1));
        }
    }

    repick(cardType, cardIndex) {
        const oldCard = this.pickedCards[cardType].splice(cardIndex, 1);
        const newCard = this.pick(cardType);
        this.cardTypes[cardType].push(oldCard);
        return newCard;
    }

    _pickRandomFromArray(array, count = 1) {
        return shuffle(array).splice(0, count);
    }

    restoreFromObject(cards) {
        this.cardTypes = cards.cardTypes;
        this.pickedCards = cards.pickedCards;
    }
}
