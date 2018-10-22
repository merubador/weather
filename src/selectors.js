export const getCities = state => state.cities
export const getFavorites = state => state.favorites

export const getCityList = state => {
  const cities = getCities(state);
  const favorites = getFavorites(state);

  const favoritesIds = favorites.map(x => x.woeid)

  console.log(cities, favorites, 'selector')
  
  return cities.map((x, i) => {
    if(favoritesIds.includes(x.woeid)) {
      return {...x, isActive:true}
    }
  
    return x;
  })
 
}