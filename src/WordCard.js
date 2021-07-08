import React from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
export default function WordCard(props) {
    const activationHandler = c => { console.log(`${c} has been activated.`) }
    return (
        <div>
            {Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} />)}
        </div>
    );
}
