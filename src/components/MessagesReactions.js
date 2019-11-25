import React from 'react';

function MessageReactions ({messageReaction}){
if (!messageReaction) return null;


    return(
      messageReaction.map((reaction,index)=>{
          const{id,emoji,username}=reaction

          return(
              <span key={id}>
                <em>{username}: </em>
                {emoji}
                {index!==messageReaction.length-1?', ':null}
              </span>
          )
      })
    )
}

export default MessageReactions;