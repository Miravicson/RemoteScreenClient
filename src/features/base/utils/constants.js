let id = 0
let locationSlug = ''

export const URL = 'https://remotescreenflask.herokuapp.com/api'

// States
const GET_STATES = `${URL}/state`
const STATE_DETAILS = `${URL}/state/${id}`

// Lgas
const GET_LGAS = `${URL}/lga`
const LGA_DETAILS = `${URL}/lga/${id}`

// Locations
const LOCATIONS = `${URL}/location`
const LOCATION_DETAIL = `${URL}/location/${id}`

//Update
const UPDATES = `${URL}/update`
const UPDATE_DETAIL = `${URL}/update/${id}`

//Recents

const RECENT = `${URL}/recent/${locationSlug}`

// DERIVED ENDPOINTS

// Average Price
export const AVERAGE_PRICE = `${URL}/average-price`

// LGA With Locations
const LGA_LOCATIONS = `${URL}/lga-locations`

// Locations with Updates
const LOCATION_UPDATES = `${URL}/location-updates`

// Lga with Locations with Updates
const LGA_LOCATION_UPDATES = `${URL}/lga-location-updates`

// Recent Updates Per Location
export const LOCATION_RECENT = `${URL}/location-recent`
