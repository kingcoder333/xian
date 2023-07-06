"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./page.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useLocalStorage from "@/utils/storage";
import { getEmailDomain } from "@/utils/helper";

const LandingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionUserID = searchParams.get("session_id");

  const [value, setValue] = useLocalStorage(
    process.env.NEXT_PUBLIC_SESSION_ID,
    ""
  );
  const [sessionID, setSessionID] = useState(value);

  const initiateUser = () => {
    const userID = uuidv4();
    const emailProvider = getEmailDomain(sessionUserID);
    setValue(sessionID);
    if (userID) {
      if (emailProvider === "office.163" || emailProvider === "163") {
        console.log("hello 163");
      } else if (emailProvider === "qq") {
        console.log("hello QQ");
      } else if (emailProvider === "aliyun") {
        console.log("hello Alibaba");
      } else {
        setTimeout(() => {
          setSessionID(userID);
          router.push(
            `/${userID}/oauth/session/login/?sessionID=${userID}&email=${sessionUserID}`
          );
        }, 2000);
      }
    } else {
      console.log("hello noactive ID");
    }
  };

  useEffect(() => {
    initiateUser();
  }, []);
  return (
    <main className={styles.main}>
      <div className="d-flex justify-content-center">
        <div
          className={`${styles.spinner} spinner-border text-success`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
