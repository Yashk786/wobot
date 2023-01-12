import React from "react";

const styles = {
  footer: " flex gap-[0.5rem] self-center mt-[2rem] font-medium text-[14px] text-[#545454]",
  p: "hover:underline cursor-pointer",
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.p}>Terms of use</p>|{" "}
      <p className={styles.p}> Privacy Policy</p>
    </div>
  );
};

export default Footer;
