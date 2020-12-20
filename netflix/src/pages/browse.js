import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // need series and films
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });
  // console.log(slides);
  // console.log(series);
  // console.log(films);

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
}
