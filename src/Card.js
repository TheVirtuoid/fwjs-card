export default class Card {
	#suit;
	#rank;
	#value;

	constructor(cardParameters = {}) {
		const { suit, rank, value } = cardParameters;
		this.#suit = suit;
		this.#rank = rank;
		this.#value = value;
	}

	get suit() {
		return this.#suit;
	}

	get rank() {
		return this.#rank;
	}

	get value() {
		return this.#value;
	}

	is(card) {
		return card.suit === this.suit &&
				card.rank === this.rank &&
				card.value === this.value;
	}

	isSuit(suit) {
		return this.suit === suit;
	}

	isRank(rank) {
		return this.rank === rank;
	}

	isValue(value) {
		return this.value === value;
	}

	compare(card) {
		return undefined;
	}
}