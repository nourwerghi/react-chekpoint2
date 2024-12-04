import players from "../player"
import Player from "./Player"
const Playerlist= () =>{
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
        {players.map((el)=> <Player {...el}/>)}
        </div>
    )
}
export default Playerlist