import { get } from "./index";

const fetchCharacters = async (name, limit, page) => {
  const response = await get("characters", {
    nameStartsWith: name,
    limit,
    offset: (page - 1) * limit,
  });

  const characters = response?.data?.data?.results.map((character) => ({
    id: character.id,
    name: character.name,
    description: character.description,
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    comics: character.comics.available,
    series: character.series.available,
    stories: character.stories.available,
  }));

  return {
    characters,
    total: response.data.data.total,
  };
};

export default fetchCharacters;
