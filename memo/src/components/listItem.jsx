import React, {memo} from 'react';
import './listItem.css'
export default memo( function ListItem({value}){
    console.log(`rendered ${value.id}`)
    return (
        <div className={'card'}>
            {value.title}
        </div>
    );
})

