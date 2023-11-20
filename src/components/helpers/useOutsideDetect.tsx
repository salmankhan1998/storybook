import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any, handleClick: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        console.log("clickl");
        handleClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideAlerter(props: any) {
  const wrapperRef = useRef(null);
  function handleClick() {
    props.outSideClickHandle();
  }
  useOutsideAlerter(wrapperRef, handleClick);

  return <div ref={wrapperRef}>{props.children}</div>;
}
