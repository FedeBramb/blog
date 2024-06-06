import React, { useState, useEffect } from "react";
import RenderIfVisible from "react-render-if-visible";

const LazyComponent = ({ LoadableComponent, ...rest }) => {
  const [keepInView, setKeepInView] = useState(false);

  useEffect(() => {
    if (keepInView) {
      // Qui puoi eseguire altre azioni quando il componente è in vista
      console.log("Componente in vista!");
    }
  }, [keepInView]);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !keepInView) {
      setKeepInView(true);
    }
  };

  return (
    <RenderIfVisible onChange={handleVisibilityChange}>
      {keepInView && <LoadableComponent {...rest} />}
    </RenderIfVisible>
  );
};


export default LazyComponent;