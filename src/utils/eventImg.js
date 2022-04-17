import { asset } from "."; 

export const getEventSvg = (code) => {
  switch (code) {
    case "DANC":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/dance.svg`}
            alt="LOGO "
          />
        </div>
      );
      break;
    case "SING":
      return (
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/singing.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "SKIT":
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${asset}/image/sci-assets/singing.svg`}
          alt="LOGO "
        />
      </div>;

    case "POET":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/poetry.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "TALE":
      return (
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/talenthunt.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "CAMP":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/poetry.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "FACE":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/painting.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "FRAM":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/framedesining.svg`}
            alt="LOGO "
          />
        </div>
      );

    case "TREA":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/treasurehunt.svg`}
            alt="LOGO "
          />
        </div>
      );

    default:
      return (
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: "scale(1)",
          
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${asset}/image/sci-assets/talenthunt.svg`}
            alt="LOGO "
          />
        </div>
      );
  }
};
