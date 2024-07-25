import "./LoadingScreen.css";
function LoadingScreen({ house }) {
  return <div className={`loading ${house}`}>{/* Loading... */}</div>;
}

export default LoadingScreen;
