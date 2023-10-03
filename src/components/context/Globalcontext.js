import { createContext, useContext, useReducer } from "react";
const initailstate ={
    watched:[],
    watchlist:[],
}
const reducer = (state , action)=>{
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':  //action.type
          return{
          ...state, //save my move
          watchlist : [action.payload , ...state.watchlist] // add move and save my prev movise
        }
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
          return{
            ...state,
            watchlist : state.watchlist.filter((movie)=>movie.imdbID !== action.payload) //retern eny felim not equl this id
          }
        
        case 'ADD_MOVIE_TO_WATCHED':
          return{
            ...state,
            watchlist : state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID),
            watched : [action.payload , ...state.watched] // add move in whached and remove move list
          }
          case 'MOVE_TO_WATCHLIST':
            return{
              ...state,
              watched : state.watched.filter((movie)=> movie.imdbID !== action.payload.imdbID),
              watchlist : [action.payload , ...state.watchlist] // add to whatch list,and save my prev movise
            }
        case 'REMOVE_FROM_WATCHED':
          return{
            ...state,
            watched : state.watched.filter((movie)=> movie.imdbID !== action.payload)
          }
        default:
            return state
    }
}

export const GlobalContext= createContext(initailstate)

const GlobleProvider =(props)=>{
    
    const [state,dispatch]=useReducer(reducer,initailstate);
return(
    <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched ,MoviesDispatch:dispatch }}>
         {props.children}
     </GlobalContext.Provider>
)
}
export default GlobleProvider
// coustom fun use eny wheare


export const useMoveContext =()=>{
    return useContext(GlobalContext)
}