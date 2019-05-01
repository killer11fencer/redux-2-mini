import axios from 'axios'

let initialState = {
    loading: false,
    articles: []
}

const MEDIUM_ARTICLES = 'MEDIUM_ARTICLES'

export const mediumArticles = () => {
    let articles = axios.get('/api/medium');
    return { type: MEDIUM_ARTICLES,
            payload: articles}
}
export default function(state = initialState, action) {
    switch(action.type) {
        case `${MEDIUM_ARTICLES}_PENDING`:
        return {...state, loading: true}
        case `${MEDIUM_ARTICLES}_FULFILLED`:
        return {...state,loading: false, articles: action.payload.data}
        default:
        return state
    }
    
}