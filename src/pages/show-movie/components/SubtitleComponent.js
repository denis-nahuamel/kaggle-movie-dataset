import styled from "@emotion/styled";
import { RunTime } from "./RuntimeComponent";

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 14px;
  color: gray;
`;
export const Subtitle = ({ genres, runtime, date }) => {
  let genres_parsed;
  if (genres) genres_parsed = JSON.parse(genres);
  return (
    <SubtitleContainer>
      <div>{date?.slice(0, 4)}</div>
      <div>
        {genres_parsed?.map((e, i) =>
          i !== genres_parsed.length - 1 ? e.name + " / " : e.name
        )}
      </div>
      <RunTime runtime={runtime}></RunTime>
    </SubtitleContainer>
  );
};
