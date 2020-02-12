/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
//export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
//export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      console.log('changephrase: ', CHANGE_PHRASE);
      return {
        ...statePart,
        searchPhrase: action.payload,
      };

    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {  //"type" oznacza "from" i "to"
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload, //dlaczego działa bez ".tag" i dodatkowo wykonuje akcję remove po ponowny kliknięciu?
        ],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload, //nie musiałam dodawać tego kodu aby usuwał zznaczony wcześniej tag- dlaczego?
        ],
      };
    default:
      return statePart;
  }
}
