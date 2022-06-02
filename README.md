# Fun With JavaScript - 'Card' class

This repository is for the 'Card' classes used in the Fun with JavaScript series.

## Versions

1.4.0 : Added clone() method

1.3.0 : Added toString() method

1.2.1 : Fixed build option so intellisense will work with IDEs.

1.2.0 : Again, changing way the class is consumed. I think I really have it this time.

1.1.4 : Reformat of README file.

1.1.3 : Unfixed npm publish error because I have no idea what I'm doing.

1.1.2 : Fixed npm publish error

1.1.1 : **BREAKING CHANGE** Card is consumed as an ES Module. To use in Node, you will need to enable module loading.

1.0.0 : Initial Version


## Installation

```
npm install --save @virtuoid/cards
```

## Usage

```javascript
import Card from '@virtuoid/cards';

const suit = 'mySuit';          // this can be any string
const rank = 'myRank';          // this can be any string
const value = 1;                // this can be any data type
const myCard = new Card({ suit, rank, value });
```
#### Properties
| Name  | R/W | Description                    |
|-------|-----|--------------------------------|
| rank  | RO  | The assigned rank of the card  |
| suit  | RO  | The assigned suit of the card  |
| value | RW  | The assigned value of the card |

#### Methods
| Name                | Returns   | Description                                                                                                                                                                                     |
|---------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| compare(Card card)  | undefined | This is meant to be implemented by classes that extend this class. That class will determine the type of comparison that will be made.                                                          |
| is(Card card)       | boolean   | Returns true if the card argument matches the suit, rank, and value of the current card object                                                                                                  |
| isRank(String rank) | boolean   | Returns true if the current card matches the rank                                                                                                                                               |
| isSuit(String suit) | boolean   | Returns true if the current card matches the suit                                                                                                                                               |
| isValue(any value)  | boolean   | Returns true if the current card matches the value. **NOTE:** This only works for the simple data types. If more complex values are needed, then define your own by using the 'compare' method. |
| toString()          | string    | Returns a string representation of this card (rank + suit)                                                                                                                                      |
| clone()             | Card      | Makes a complete clone of the Card instance                                                                                                                                                     |

## Github
```
https://github.com/TheVirtuoid/fwjs-card
```

