"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { GeneralForm } from "@/components/forms";

const GeneralPage = () => {
  const searchParams = useSearchParams();
  const userEmailAddress = JSON.parse(searchParams.get("email"));

  return (
    <main className={styles.fullContainer}>
      <header>
        <nav
          className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navContainer}`}
        >
          <div className="container-md">
            <a className="navbar-brand" href="#">
              <Image
                height="40"
                width="200"
                alt="Alimail"
                src="/static/logo.png"
              />
            </a>
          </div>
        </nav>
      </header>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className={styles.formContainer}>
            <GeneralForm emailAddress={userEmailAddress} />
            {/* <form
              className={`${styles.formInput} row`}
              onSubmit={handleSubmit(loginFormSubmit)}
            >
              <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                <input
                  className="form-control"
                  type="text"
                  name="emailAddress"
                  value={userEmailAddress}
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
            </form> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GeneralPage;
