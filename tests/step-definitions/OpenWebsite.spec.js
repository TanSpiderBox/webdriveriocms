import { Given } from "cucumber";
import { DataLogin } from "../data/Data.Login";

/* Open Website MMAP */
Given("User Access CSM Website", () => {
  browser.url(DataLogin.url);
});