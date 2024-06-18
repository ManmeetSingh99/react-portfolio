const dev = {
  SERVICE_ID: "service_01lixmb",
  TEMPLATE_ID: "template_zqgqq1c",
  USER_ID: "g3ezO-xzHo2Qyrrc7",
};
const prod = {
  SERVICE_ID: "service_01lixmb",
  TEMPLATE_ID: "template_zqgqq1c",
  USER_ID: "g3ezO-xzHo2Qyrrc7",
};

const config = process.env.NODE_ENV == "development" ? dev : prod;
export default config;
