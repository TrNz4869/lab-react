import React, { useState } from 'react';
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
        completed: false,
        lose: false
    }
}
export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated.`)
        let guess = '' + state.guess + c
        if(state.attempt < 4){ 
            setState({ ...state, guess })

            if (guess.length === state.word.length) {
                if (guess === state.word) {
                    console.log('yeah!')
                    setState({ ...state, guess: '', completed: true })
                } else {
                    console.log('reset, next attempt')
                    setState({ ...state, guess: '', attempt: state.attempt + 1 })
                    if(state.attempt === 3)
                    setState({...state, lose: true})
                }
            }

            console.log(guess)
        }
    }
    return (
        <div>
            {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)}
            <h3>Attempt left = {4 - state.attempt}</h3>
            <h1>{state.completed? "You Win" : ""}</h1>
            <h1>{state.lose? "You Lose" : ""}</h1>
        </div>
    );
}
