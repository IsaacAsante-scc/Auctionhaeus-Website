import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Footer from "./Footer";

const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;

const CustomForm = () => (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={({ subscribe, status, message }) => (
        <div>
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    />
  )