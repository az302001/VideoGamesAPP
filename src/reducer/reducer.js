import {
    GET_CONTRIES,
    FILTER_CONTRIES,
    GET_ACTIVITIES,
    POST_CONTRY,
    ORDER_BY_NAME,
    ORDER_BY_ACTIVITIES,
    ORDER_BY_POBLATION,
    GET_COUNTRY_NAME,
    GET_COUNTRY,
    ORDER_BY_CONTINENTS,
} from "../actions/index.js";


const initialState = {
    contryfilter: [],
    contries: [],
    searchInpunt: '',
    temporaryCountries: [],
    contryDetail: [],
    activities: [],
    activtyAdded: {},
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTRIES:
            return {
                ...state,
                temporaryCountries: action.payload,
                contries: [...action.payload],
                contryfilter: [...action.payload]
            }
        case FILTER_CONTRIES:
            console.log(action.payload.filter);
            if (action.payload.filter === 'activities') {
                return {
                    ...state,
                    paises: state.temporaryCountries.filter((p) => {
                        return p.activities.reduce((e, g) => {
                            return e || (g.name === action.payload.filterBy)
                        }, false)
                    })
                }
            }
            return {
                ...state,
                paises: state.temporaryCountries.filter((p) => {
                    return p.status === action.payload.filterBy
                })
            }


        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case GET_COUNTRY:
            return{
                ...state,
                contryDetail: action.payload
            }
        case GET_COUNTRY_NAME:
            return{
                ...state,
                contryfilter: action.payload
            }

        case POST_CONTRY:
            return{
                ...state,
                activtyAdded: action.payload
            }


        case ORDER_BY_NAME:
            const countrybyorder = action.payload==='atoz' ? state.contryfilter.sort((a,b)=>{
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                else return -1
            }) : state.contryfilter.sort((a,b)=>{
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                else return -1
            })
            return {
                ...state,
                contryfilter: countrybyorder
            }

        case ORDER_BY_POBLATION:
            let recipesByPoblation= action.payload === "MenorMayor" ? state.contryfilter.sort((a,b)=>{
                if(a.población> b.población){
                    return 1
                }
                if (b.población> a.población){
                    return -1
                }
                return 0
            }) : state.contryfilter.sort(function(a,b) {
                if(a.población> b.población){
                    return -1
                }
                if (b.población> a.población){
                    return 1
                }
                return 0
            })

            return {
                ...state,
                contryfilter:recipesByPoblation
            }
        
        case ORDER_BY_ACTIVITIES:
            const  contries_all = state.contries
            const filterByActivities= action.payload === 'all'? contries_all : contries_all.filter(contry=>{
                if(contry.activities.length > 0){
                    if(contry.activities.find(e=>e.name === action.payload)) return contry
                }
            })
            return {
                ...state,
                contryfilter: filterByActivities
            }

        case ORDER_BY_CONTINENTS:
            const contries_all_continets= state.contries
            const filterByContinents = action.payload === 'all'? contries_all_continets : contries_all_continets.filter(contry=>{
                if(contry.continents===action.payload){
                   return contry
                }
            })
            return {
                ...state,
                contryfilter: filterByContinents
            }
        
        default: return state;

    }
}

export default rootReducer;