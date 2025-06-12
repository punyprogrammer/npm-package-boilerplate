import moment from "moment";

export function log(data) {
  console.log("logger called ");
  console.log(data);
  console.log("moment called");
  const momentRes = moment("20111031", "YYYYMMDD").fromNow();
  console.log("Moment format", momentRes);
}
