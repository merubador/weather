export const getCities = state => state.cities
export const getFavorites = state => state.favorites
export const getForecast = state => state.forecast
export const getFilteredCity = state => state.filteredCity

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

export const getFilteredList = state => {
  const filteredCity = getFilteredCity(state);
  const favorites = getFavorites(state);

  return favorites.filter(favorite => favorite.name.toLowerCase().includes(filteredCity));
}
