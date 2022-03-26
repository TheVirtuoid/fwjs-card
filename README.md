# Fun With JavaScript - 'Card' classes

This repository is for the 'Card' classes used in the Fun with JavaScript series.

## Versions

1.1.3 : Unfixed npm publish error because I have no idea what I'm doing.
1.1.2 : Fixed npm publish error
1.1.1 : **BREAKING CHANGE** Card is consumed as an ES Module. To use in Node, you will need to enable module loading.
1.0.0 : Initial Version

## Installation

```
npm install --save @virtuoid/cards
```

## Usage

There is currently 1 Card class associated with this repository:

### Base Class (Card)

```javascript
import { Card } from '@virtuoid/cards';

const suit = 'mySuit';          // this can be any string
const rank = 'myRank';          // this can be any string
const value = 1;                // this can be any data type
const myCard = new Card({ suit, rank, value });
```
#### Properties
| Name | R/W | Description                   |
|-------| --- |-------------------------------|
| rank  | RO | The assigned rank of the card |
| suit  | RO | The assigned suit of the card |
| value | RO | The assigned value of the card |

#### Methods
| Name | Returns | Description|
| --- | --- | --- |
| compare(Card card) | undefined | This is meant to be implemented by classes that extend this class. That class will determine the type of comparison that will be made. |
| is(Card card) | boolean | Returns true if the card argument matches the suit, rank, and value of the current card object |
| isRank(String rank) | boolean | Returns true if the current card matches the rank |
| isSuit(String suit) | boolean | Returns true if the current card matches the suit |
| isValue(any value) | boolean | Returns trus if the current card matches the value. **NOTE:** This only works for the simple data types. If more complex values are needed, then define your own by using the 'compare' method. |

## Classes

As time goes on, more 'Card' classes will be added to this repository. These directions will be updated as they are added.

## Github

```
https://github.com/TheVirtuoid/fwjs-card
```

