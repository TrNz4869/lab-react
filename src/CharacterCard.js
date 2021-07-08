import React, { useState } from 'react';
export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    return (
        <div className='card'>{props.value}</div>
    )
}
