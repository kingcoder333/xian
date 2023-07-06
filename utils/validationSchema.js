import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  emailAddress: yup.string().trim().required("请输入您的电子邮件地址"),
  password: yup.string().trim().required("请输入你的密码"),
});
