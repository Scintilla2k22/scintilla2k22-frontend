import { asset } from ".";

export const getEventSvg = (code) => {

  switch (code) {

    case "DANC":
      return `${asset}/image/sci-assets/dance.svg`;

    case "SING":
      return `${asset}/image/sci-assets/singing.svg`;

    case "SKIT":
      return `${asset}/image/sci-assets/drama.svg`;

    case "POET":
      return `${asset}/image/sci-assets/poetry.svg`;

    case "TALE":
      return `${asset}/image/sci-assets/talenthunt.svg`;

    case "CAMP":
      return `${asset}/image/sci-assets/poetry.svg`;

    case "FACE":
      return `${asset}/image/sci-assets/painting.svg`;

    case "FRAM":
      return `${asset}/image/sci-assets/framedesining.svg`;

    case "TREA":
      return `${asset}/image/sci-assets/treasurehunt.svg`;

    case "MAND":
      return `${asset}/image/sci-assets/mandala.svg`;

    case "PHOT":
      return `${asset}/image/sci-assets/photography.svg`;

    case "ROAD":
      return `${asset}/image/sci-assets/roadies.svg`;


    default:
      return `${asset}/image/sci-assets/talenthunt.svg`;

  }
};
