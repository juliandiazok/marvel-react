export const filteredFavorites = (query, arrayOfFavorites) =>
	arrayOfFavorites.filter((f) =>
		f.name.toUpperCase().startsWith(query.toUpperCase())
	);
