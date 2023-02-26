import "./heroBanner.css";
import BackgroundVideo from "../../../BackgroundVideo.mp4";
export default function HeroBanner() {
  return (
    <div className="hero-container">
      <video src={BackgroundVideo} autoPlay loop muted />
      <p> Welcome To SpaceX </p>
    </div>
  );
}
