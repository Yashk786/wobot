import React from "react";
import logo from "../logo.jpg"

const styles = {
  header__container: "flex flex-col  justify-center  items-center 	 w-full",
  img__container: "h-[2rem] w-[3rem] mb-[1rem] ",
  img: "object-contain ",
  heading__container: "text-center",
  heading:
    "text-[#343434] font-medium text-[26px] leading-8 text-center my-[0.9rem]",
  p: "font-normal text-sm text-gray-600",
};

export const Header = () => {
  return (

    <div className={styles.header__container}>
      <div className={styles.img__container}>
        <img
          className={styles.img}
          src={logo}
        ></img>
      </div>
      <div className={styles.heading__container}>
        <h2 className={styles.heading}>
          It's a delight to have you <br /> onbroad
        </h2>
        <p className={styles.p}>Help us know you better</p>
        <p className={styles.p}>
          (This is how we optimize Wobot as per your business needs)
        </p>
      </div>
    </div>
  );
};
