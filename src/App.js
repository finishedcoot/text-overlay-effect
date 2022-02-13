import "./App.scss";
import useScrollPosition from "./useScrollPosition";

function App() {
  const scrollPos = useScrollPosition();

  return (
    <div className="page-wrapper">
      <div className="text-parent">
        <h1
          style={{
            transform: `translate3d(-${scrollPos / 2}px,-${
              scrollPos * 0.1
            }px,0px)`,
          }}
        >
          To live is the rarest thing in the world.
        </h1>
        <h1
          style={{
            transform: `translate3d(${scrollPos / 2}px,${
              scrollPos * 0.1
            }px,0px)`,
          }}
        >
          Learn as if you were to live forever
        </h1>
      </div>

      <img
        style={{
          transform: `translate3d(-50%,calc(-${scrollPos * 0.9}px-50%),0px)`,
        }}
        className="text-outline-image"
        src="/jelly-fish.jpg"
        alt=""
      />

      <div className="text-parent">
        <h1
          style={{
            transform: `translate3d(-${scrollPos / 2}px,-${
              scrollPos * 0.1
            }px,0px)`,
          }}
          className="outline"
        >
          To live is the rarest thing in the world.
        </h1>
        <h1
          style={{
            transform: `translate3d(${scrollPos / 2}px,${
              scrollPos * 0.1
            }px,0px)`,
          }}
          className="outline"
        >
          Learn as if you were to live forever
        </h1>
      </div>
    </div>
  );
}

export default App;
