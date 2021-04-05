import { useState } from 'react';
import './LikeButton.css'
function LikeButton(){
const [count,setCount] = useState(0)
const [liked,setLiked] = useState(false)
const handleLike = e => { 
   
    //Post was unliked, decrement count
    if(liked == true ){
        
        setCount(count-1)
        setLiked(false)
        
    }
    else{
        
        setCount(count+1)
        setLiked(true)
    }

}
const colour = liked ? "red" : "grey"
return(
<div>

<button className = 'but' onClick={handleLike} style = {{color: colour}}>{count} saves</button>
</div>
)
}
export default LikeButton