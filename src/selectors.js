export const getCities = state => state.cities
export const getFavorites = state => state.favorites
export const getForecast = state => state.forecast

export const getCityList = state => {
  const cities = getCities(state);
  const favorites = getFavorites(state);
  const favoritesIds = favorites.map(x => x.woeid)
  
  return cities.map((x, i) => {
    if(favoritesIds.includes(x.woeid)) {
      return {...x, isActive:true}
    }
    
    return x;
  })
}
