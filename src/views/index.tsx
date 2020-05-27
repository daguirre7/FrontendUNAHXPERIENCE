
import React from "react";

// reactstrap components
// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import NavigationTabs from "../components/Navbars/NavigationTabs";

// import IndexHeader from "../components/Headers/IndexHeader";
// import SectionCarousel from "../views/SectionCarousel";

const Index: React.FC = () => { 
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <NavigationTabs />


{/*       <SectionCarousel />
      <IndexHeader /> */}
    </>
  );
}

export default Index;