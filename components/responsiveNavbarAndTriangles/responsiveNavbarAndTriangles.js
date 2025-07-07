"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import NavBar from "../navBar/navBar";
import NavBarMobile from "../navBarMobile/navBarMobile";
import TriangleGenerator from "../triangleGenerator/triangleGenerator";

const ResponsiveNavbarAndTriangles = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null;
  }

  return (
    <div>
      {isMobile ? <NavBarMobile /> : <NavBar />}
      {isMobile ? (
        <TriangleGenerator trianglesNumber={10} />
      ) : (
        <TriangleGenerator trianglesNumber={20} />
      )}
    </div>
  );
};

export default ResponsiveNavbarAndTriangles;
