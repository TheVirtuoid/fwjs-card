import { Card } from './../../../src/Card/Card.js';

const baseCard = {
	suit: 'suit',
	rank: 'rank',
	value: 1
}

describe('card creation', () => {
	it('should create a blank card', () => {
		const card = new Card();
		expect(card.suit).to.be.undefined;
		expect(card.rank).to.be.undefined;
		expect(card.value).to.be.undefined;
	});
	it('should create the card specified', () => {
		const card = new Card(baseCard);
		expect(card.suit).to.equal(baseCard.suit);
		expect(card.rank).to.equal(baseCard.rank);
		expect(card.value).to.equal(baseCard.value);
	});
	it('should NOT be able to change the suit', () => {
		const card = new Card(baseCard);
		try {
			card.suit = 'newsuit';
			expect(true).to.be.false;
		} catch(err) {
			expect(err.name).to.equal('TypeError');
		}
	});
	it('should NOT be able to change the rank', () => {
		const card = new Card(baseCard);
		try {
			card.rank = 'newrank';
			expect(true).to.be.false;
		} catch(err) {
			expect(err.name).to.equal('TypeError');
		}
	});
	it('should NOT be able to change the value', () => {
		const card = new Card(baseCard);
		try {
			card.value = 2;
			expect(true).to.be.false;
		} catch(err) {
			expect(err.name).to.equal('TypeError');
		}
	});
});

describe('locating card', () => {
	it('should find the card given a matching card', () => {
		const card = new Card(baseCard);
		const newCard = {...baseCard};
		expect(card.is(newCard)).to.be.true;
	});
	it('should NOT find the card when the suit is incorrect', () => {
		const card = new Card(baseCard);
		const newCard = {...baseCard};
		newCard.suit = 'newsuit';
		expect(card.is(newCard)).to.be.false;
	});
	it('should NOT find the card when the rank is incorrect', () => {
		const card = new Card(baseCard);
		const newCard = {...baseCard};
		newCard.rank = 'newrank';
		expect(card.is(newCard)).to.be.false;
	});
	it('should NOT find the card when the value is incorrect', () => {
		const card = new Card(baseCard);
		const newCard = {...baseCard};
		newCard.value = 2;
		expect(card.is(newCard)).to.be.false;
	});
	it('should find the card given a correct suit', () => {
		const card = new Card(baseCard);
		expect(card.isSuit(baseCard.suit)).to.be.true;
	});
	it('should NOT find a card given an incorrect suit', () => {
		const card = new Card(baseCard);
		expect(card.isSuit('newsuit')).to.be.false;
	});
	it('should find the card given a correct rank', () => {
		const card = new Card(baseCard);
		expect(card.isRank(baseCard.rank)).to.be.true;
	});
	it('should NOT find the card given an incorrect rank', () => {
		const card = new Card(baseCard);
		expect(card.isRank('newrank')).to.be.false;
	});
	it('should find the card given a correct value', () => {
		const card = new Card(baseCard);
		expect(card.isValue(baseCard.value)).to.be.true;
	});
	it('should NOT find the card given an incorrect value', () => {
		const card = new Card(baseCard);
		expect(card.isValue(2)).to.be.false;
	});
	it('should not make any comparisons at all', () => {
		const card = new Card(baseCard);
		const newCard = new Card(baseCard);
		expect(card.compare(newCard)).to.be.undefined;
	});
});
