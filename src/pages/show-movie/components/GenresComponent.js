import styled from "@emotion/styled";

const GenresContainer = styled.div`
  font-size: 14px;
  color: gray;
`;
export const Genres = ({ genres }) => {
  let genres_parsed;
  if (genres) genres_parsed = JSON.parse(genres);
  return (
    <GenresContainer>
      {genres_parsed?.map((e, i) =>
        i !== genres_parsed.length - 1 ? e.name + " / " : e.name
      )}
    </GenresContainer>
  );
};
