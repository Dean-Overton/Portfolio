import Header from "@/components/Header";
import React from "react";
import { useState, Suspense } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

const Havoc: React.FC = () => {
  const [showUnity, setShowUnity] = useState(false);

  return (
    <div className="text-center mt-4 w-full pt-16 min-h-screen p-8">
      <Header title="Havoc" subtitle="Game Controls" />
      <ul>
        <li>
          <strong>Move:</strong> WASD
        </li>
        <li>
          <strong>Dash:</strong> Right-Click
        </li>
        <li>
          <strong>Shoot:</strong> Left-Click
        </li>
        <li>
          <strong>Reload:</strong> Automatic after a short delay
        </li>
      </ul>
      <div className="flex flex-col items-center mt-8">
        {!showUnity ? (
          <button
            onClick={() => setShowUnity(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
          >
            Load Game
          </button>
        ) : (
          <Suspense fallback={<p>Loading Unity...</p>}>
            <UnityComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
};

// Separate component so React code-splits it
function UnityComponent() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/build.loader.js",
    dataUrl: "/unity/Build/build.data",
    frameworkUrl: "/unity/Build/build.framework.js",
    codeUrl: "/unity/Build/build.wasm",
  });

  return (
    <div className="w-full h-[600px]">
      {!isLoaded && <p>Loading {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default Havoc;
