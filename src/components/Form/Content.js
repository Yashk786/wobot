import React from "react";
import Footer from "./Footer";
import From from "./From";
import { Header } from "./Header";

const styles = {
  wrapper: "bg-gradient-to-r from-white via-[#e5e5e5] to-[#e5e5e5] h-fit flex flex-col w-full py-[1rem] px-[2rem] ",
  logo__container:"mt-[1rem] ml-[2rem] cursor-pointer",
  content__container: "flex flex-col relative",
  content:
    "  flex flex-col w-[500px] h-fit self-center content-center pt-[30px] pb-[36px]	px-[50px]   bg-[#ffffff]  rounded-[15px] shadow-[4px_4px_20px_rgba(157, 157, 157, 0.12)] 	",
    div:"absolute w-[590px] h-[13.44px] left-[-124.11px] top-[440px] bg-[#E0E8FC] rotate-[-30deg]",
    line:"absolute w-[488px] h-[13.44px] left-[890px] top-[430px] bg-[#3766E8] opacity-20 rotate-[-30deg]",

};

const Content = () => {
  return (
    <div className={styles.wrapper}>
      {/* logo container */}
      <div className={styles.logo__container}>
        <img className={styles.img} src="https://app.wobot.ai/assets/images/wobot-logo.png"></img>
        <div className={styles.div}></div>
        <div className={styles.bg}></div>
        <div className={styles.line}></div>
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
