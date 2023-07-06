"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "./forms.module.css";

const QiyeLoginForm = () => {
  return (
    <Fragment>
      <h4>Sign In!</h4>
      <p>Sign in to access your dashboard.</p>
      <form>
        <div className="form-group row mb-3">
          <div className="col-lg-12">
            <input
              type="email"
              className={`form-control w-100 ${styles.formInput}`}
              name="emailAddress"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="form-group row position-relative">
          <div className="col-lg-12 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control w-100 ${styles.formInput}`}
              name="password"
              placeholder="Password"
            />
            <span
              className={styles.formIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff fontSize="19px" color="var(--nav-color)" />
              ) : (
                <FiEye fontSize="19px" color="var(--nav-color)" />
              )}
            </span>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-lg-12">
            <button className={styles.formAuthBtn}>Access Dashboard</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default QiyeLoginForm;
