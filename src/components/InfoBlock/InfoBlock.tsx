import "./InfoBlock.css";
import cloudImage from "../../images/Academy-Weather-bg160.svg";

function InfoBlock() {
  return (
    <div className="info">
      <img
        src={cloudImage}
        alt="Облако"
        className="info__image"
      />
      <p className="info__description">
        Fill in all the fields and the weather will be displayed
      </p>
    </div>
  );
}

export default InfoBlock;