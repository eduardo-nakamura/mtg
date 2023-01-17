import { Card } from './card'

export const CARDS: Card[] = [
  {
    multiverseid: 1,
    name: 'Counterspell',
    manaCost: '{U}{U}',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=102&type=card',
    type: 'Instant',
    text: 'Counter target spell.',
    colors: ['U'],
    colorIdentity: ['U']
  },
  {
    multiverseid: 204,
    name: 'Gray Ogre',
    manaCost: '{2}{R}',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204&type=card',
    type: 'Creature — Ogre',
    text: 'The Ogre philosopher Gnerdel believed the purpose of life was to live as high on the food chain as possible. She refused to eat vegetarians, and preferred to live entirely on creatures that preyed on sentient beings.',
    colors: ['R'],
    colorIdentity: ['R']
  },
  {
    multiverseid: 352,
    name: 'Deathlace',
    manaCost: '{B}',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=352&type=card',
    type: 'Instant',
    text: 'Target spell or permanent becomes black. (Mana symbols on that permanent remain unchanged.)',
    colors: ['B'],
    colorIdentity: ['B']
  },
];