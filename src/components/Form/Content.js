import React from "react";
import Footer from "./Footer";
import From from "./From";
import { Header } from "./Header";

const styles = {
  wrapper: "bg-[#E5E5E5] h-full flex flex-col w-full py-[1rem] px-[2rem] ",
  logo__container:"mt-[1rem] ml-[2rem] cursor-pointer",
  content__container: "flex flex-col",
  content:
    "flex flex-col self-center content-center pt-[30px] pb-[36px]	px-[40px] w-[480px] h-fit  bg-[#ffffff] rounded-[15px] shadow-[4px_4px_20px_rgba(157, 157, 157, 0.12)] 	",
};

const Content = () => {
  return (
    <div className={styles.wrapper}>
      {/* logo container */}
      <div className={styles.logo__container}>
        <img className={styles.img} src="https://app.wobot.ai/assets/images/wobot-logo.png"></img>
      </div>

      <div className={styles.content__container}>
        <div className={styles.content}>
          <Header />
          <From />
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Content;
