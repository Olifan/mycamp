import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import styles from "./RegistrationForm.module.css";
import ContentService from "../../services/ContentService";
import { Controller, useForm } from "react-hook-form";
import Modal from "../Modal/Modal";

const RegistrationForm = ({activeShiftTitle, activeShiftId}) => {

  const contentService = new ContentService();

  const [shifts, setShifts] = useState("");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  console.log(activeShiftId + activeShiftTitle);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange", values: {shift: activeShiftId} });

  useEffect(() => {
    contentService.getShift().then((response) => {
      setShifts(response);
    });
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    contentService.postRequest(data);
    reset();
    toggleModal();
  };

  return (
    <div className={styles.registrationForm}>
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="https://assets.website-files.com/62e852b3b3432f63a22b8844/62eb8e9bdc4b4d07b438002f_streamlinehq-interface-file-clipboard-text-interface-essential-250-2.SVG"
      />
      <h2>Registration Form</h2>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="name">Name</label>
            <input
              id="name"
              {...register("name", {
                required: true,
                minLength: 2,
                pattern: /[А-Яа-я]/,
              })}
              className={styles.input}
              type="text"
              name="name"
              data-name="Name"
              placeholder=""
            />
            {errors.name && (
              <p className={styles.errorMessage}>⚠ Щось не так</p>
            )}
          </div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              className={styles.input}
              type="text"
              name="email"
              data-name="Email"
              placeholder=""
            />
            {errors.email && (
              <p className={styles.errorMessage}>⚠ Щось не так</p>
            )}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                minLength: 15
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  onChange={(value, country, e, formattedValue) => onChange(formattedValue)}
                  country={"ua"}
                  masks={{ ua: "(...) ... .. .." }}
                  placeholder=''
                  specialLabel=""
                  disableCountryCode={true}
                  id="phone"
                  inputClass={styles.input}
                />
              )}
            />
            { errors.phone && (
              <p className={styles.errorMessage}>⚠ Введіть номер телефону</p>
            )}
          </div>
          <div>
            <label for="shift">Shift</label>
            {/* <select
              id="shift"
              {...register("shift", { required: true })}
              className={styles.input}
              type="text"
              data-name="Shift"
              placeholder=""
            >
              <option hidden></option>
              {shifts &&
                shifts.data.attributes.shifts.data.map((dataShift) => (
                  <option value={dataShift.id}>
                    {dataShift.attributes.title}
                  </option>
                ))}
            </select> */}

            <div className={styles.input}
              {...register("shift")}
            >
              {activeShiftTitle}            
            </div>

            {/* {errors.shift && (
              <p className={styles.errorMessage}>⚠ Щось не так</p>
            )} */}
          </div>
          <input
            className={styles.button}
            type="submit"
            value="Відправити запит"
          />
        </form>
        <Modal
          show = {showModal}
          close = {toggleModal}
          content = {
            <>
              <h4>Дякуємо!</h4>
              <p>З Вами зв'яжуться.</p>
            </>
          }
        />          
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {};

RegistrationForm.defaultProps = {};

export default RegistrationForm;
