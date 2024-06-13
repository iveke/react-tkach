const { useSearchParams } = require("react-router-dom");

export const useFilterParams = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();
  const title = searchParams.get("title") ?? "";
  const level = searchParams.get("level") ?? "all";

  const setLevelParams = (value) => {
    setSeacrhParams({title, level: value});
  };
  const setTitleParams = (value) => {
    setSeacrhParams({level, title: value});
  };

  return [{title, level}, {setLevelParams, setTitleParams}]
};
