import React from "react";
import Ifondo from "../../assets/img/unah-image.jpg"

// reactstrap components

// core components

const ProfilePageHeader: React.FC = () => { 
  let pageHeader = React.createRef();
  const [allDeals, setAllDeals] = React.useState();
/* 
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }); */

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + Ifondo + ")"
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        // ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeader;
