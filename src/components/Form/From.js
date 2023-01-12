import React from "react";

const styles = {
  form: "flex flex-col gap-[20px] mt-[30px]",
  label:
    "block  tracking-wide text-[#545454] text-[14px] leading-[17px] font-medium mb-2",
  input:
    "block appearance-none  font-normal h-[37px] text-[14px] w-full bg-gray-200 border  text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-2 focus:bg-white focus:border-[#3766E8]",
  select__input:
    "block appearance-none   font-normal h-[37px] text-[14px] w-full bg-gray-200 border  text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-2 focus:bg-white focus:border-[#3766E8] cursor-pointer",
  radio__input:
    "form-check-input form-check-input appearance-none  rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-white checked:border-4 checked:border-[#3766E8] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
  radio__label:
    "form-check-label inline-block text-black text-[15px]  font-normal     ",
  btn__container: "",
  btn: "bg-[#3766E8]  w-full rounded mt-[1.1rem] hover:bg-[#194dde] cursor-pointer  flex justify-center items-center text-white font-500 py-[0.5rem] ease-in duration-300",
};

const From = () => {
  return (
    <div className={styles.form__container}>
      <form className={styles.form}>
        <div>
          <label className={styles.label}>Company name</label>
          <input className={styles.input} placeholder="e.g. Example inc" />
        </div>

        <div class="w-full">
          <label className={styles.label} for="grid-state">
            Industry
          </label>
          <div class="relative">
            <select className={styles.select__input} placeholder="Select">
              <option value="" disabled selected>
                Select{" "}
              </option>
              <option>IT Services & Consulting</option>
              <option>Banking</option>
              <option>E-Commerce</option>
              <option>Hardware & Networking</option>
              <option>Software Product</option>
              <option>Banking</option>
              <option>Insurance</option>
              <option>Education/Training</option>
              <option>Automobile</option>
              <option>Real Estate</option>
              <option>Railways</option>
              <option>Fashion</option>
              <option>Advertising & Marketing</option>
              <option>Designing</option>
              <option>Gaming</option>
              <option>Travel</option>
              <option>Home Textile</option>
              <option>Technical Textile</option>
              <option>Handicraft</option>
              <option>Urban Transport</option>
              <option>Import & Export</option>
              <option>Printing & Publishing</option>
              <option>Cloud</option>
              <option>Block Chain</option>
              <option>Cybersecurity</option>
              <option>Digital Marketing</option>

            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className={styles.label}>Company size</label>
          <div class="flex gap-[1rem]">
            <div class="form-check form-check-inline">
              <input
                className={styles.radio__input}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className={styles.radio__label} for="inlineRadio10">
                1-20
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className={styles.radio__input}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className={styles.radio__label} for="inlineRadio20">
                21-50
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className={styles.radio__input}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option2"
              />
              <label className={styles.radio__label} for="inlineRadio20">
                51-200
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className={styles.radio__input}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option2"
              />
              <label className={styles.radio__label} for="inlineRadio20">
                201-500
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className={styles.radio__input}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio5"
                value="option2"
              />
              <label className={styles.radio__label} for="inlineRadio20">
                500+
              </label>
            </div>
          </div>
        </div>
        <div className={styles.btn__container}>
          <button className={styles.btn}>Get Started</button>
        </div>
      </form>
    </div>
  );
};

export default From;
