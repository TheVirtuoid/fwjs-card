/**
 * The base 'Card' class. All games that use anytype of card should extend this class.
 * Every instance of the class is design to be immutable.
 */
export class Card {
	#suit;
	#rank;
	#value;

	/**
	 * Create a new card
	 * @param {Object} cardParameters Card options to set initial values
	 * @param {string} [cardParameters.suit] The suit of the card
	 * @param {string} [cardParameters.rank] The ranking of the card
	 * @param {*} [cardParameters.value] The value given to the card
	 */
	constructor(cardParameters = {}) {
		const { suit, rank, value } = cardParameters;
		this.#suit = suit;
		this.#rank = rank;
		this.#value = value;
	}

	/**
	 * Getter to retrieve the suit
	 * @returns {string}
	 */
	get suit() {
		return this.#suit;
	}

	/**
	 * Getter to retrieve the rank
	 * @returns {string}
	 */
	get rank() {
		return this.#rank;
	}

	/**
	 * Getter to retrieve the value
	 * @returns {*}
	 */
	get value() {
		return this.#value;
	}

	/**
	 * Setter to change 'value'
	 * @param newValue<*>
	 */
	set value(newValue) {
		this.#value = newValue;
	}

	/**
	 * Tests the suit,rank, and value of the current card against the argument
	 * @param {Card} card
	 * @returns {boolean}
	 */
	is(card) {
		return card.suit === this.suit &&
				card.rank === this.rank &&
				card.value === this.value;
	}

	/**
	 * Tests the suit of the current card against the argument
	 * @param {string} suit
	 * @returns {boolean}
	 */
	isSuit(suit) {
		return this.suit === suit;
	}

	/**
	 * Tests the rank of the current card against the argument
	 * @param {string} rank
	 * @returns {boolean}
	 */
	isRank(rank) {
		return this.rank === rank;
	}

	/**
	 * Tests the value of the current card against the argument
	 * @param {*} value
	 * @returns {boolean}
	 */
	isValue(value) {
		return this.value === value;
	}

	/**
	 * Abstract method to compare two cards.
	 * @param card
	 * @returns {undefined}
	 * This method will always return 'undefined' in the base class, as this method is designed
	 * to be defined within extended classes. This lets developers define a more precise comparison
	 * method unique to their application.
	 */
	compare(card) {
		return undefined;
	}
}
