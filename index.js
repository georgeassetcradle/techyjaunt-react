import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { getGlobals } from "common-es";
import dotenv from "dotenv";
import axios from "axios";
import nodemailer from "nodemailer";
dotenv.config();
const { __dirname, __filename } = getGlobals(import.meta.url);
const server = express();
let api_key = process.env.VITE_EMAIL_OCTOPUS_API_KEY;
let smtp_key = process.env.VITE_SMTP_KEY;

const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, "dist");

server.use(express.static(buildPath));
server.use(express.json());
server.use(cors());

// cohort registration
server.post("/signup", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    selectedCourse,
    knowlegeOfTechyJaunt,
    gender,
  } = req.body;
  let launchpadListId = "f5df6366-355d-11ef-a271-c910cdc2b923";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    selectedCourse === "" ||
    knowlegeOfTechyJaunt === "" ||
    gender === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        SelectedCourse: selectedCourse,
        HowYouHeard: knowlegeOfTechyJaunt,
        PhoneNumber: phoneNumber,
        Gender: gender,
      },
      tags: ["STUDENT"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "alreadysignedup",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// ADVANCED BOOTCAMP
server.post("/advanced-register", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    selectedCourse,
    knowlegeOfTechyJaunt,
    gender,
    reasonForConsideration,
  } = req.body;
  let launchpadListId = "191d8990-8bc4-11ef-8d2e-7350387a057f";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    selectedCourse === "" ||
    knowlegeOfTechyJaunt === "" ||
    gender === "" ||
    reasonForConsideration === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        SelectedCourse: selectedCourse,
        HowYouHeard: knowlegeOfTechyJaunt,
        PhoneNumber: phoneNumber,
        Gender: gender,
        ReasonForConsideration: reasonForConsideration,
      },
      tags: ["STUDENT"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// email subscription
server.post("/subscribe", (req, res) => {
  let listId = "56fcc9f4-c91c-11ed-a5a5-197bd1869247";
  const { firstName, lastName, email } = req.body;

  if (email === "" || firstName === "" || lastName === "") {
    return res.status(400).json({
      status: "failed",
      message: "Bad Request",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        FirstName: firstName,
        LastName: lastName,
      },
      tags: ["VIP"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "subscribed",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(304).json({
          status: "invalid",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

//payment
server.post("/payment", (req, res) => {
  let paidListId = "8fce3572-4b90-11ef-be1e-553041d2c7af";
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    selectedCourse,
    completedPayment,
  } = req.body;

  if (
    email === "" ||
    firstName === "" ||
    lastName === "" ||
    selectedCourse === "" ||
    completedPayment != "yes"
  ) {
    return res.status(500).json({
      status: "failed",
      message: "Bad Request",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${paidListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        SelectedCourse: selectedCourse,
        PhoneNumber: phoneNumber,
        HasPaid: completedPayment,
      },
      tags: ["PAID"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "paid",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(304).json({
          status: "invalid",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// TECHYJAUNT EVENT REGISTRATION
server.post("/event-register", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    stateAttendedFrom,
    // knowlegeOfTechyJaunt,
    expectation,
  } = req.body;
  let launchpadListId = "29cbfad2-b1fa-11ee-a619-f1b1eed8817b";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    stateAttendedFrom === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        State: stateAttendedFrom,
      },
      tags: ["EVENT"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// TECHYJAUNT hackathon REGISTRATION
server.post("/hackathon-register", (req, res) => {
  const { firstName, lastName, email, phoneNumber, skills } = req.body;
  let launchpadListId = "0924d0f6-dbe9-11ee-a149-f523ad48b042";
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    skills === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        Skills: skills,
      },
      tags: ["HACKATHON"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// techyjaunt community
server.post("/community-register", (req, res) => {
  const { firstName, lastName, email, phoneNumber, skills, state } = req.body;
  let launchpadListId = "56fcc9f4-c91c-11ed-a5a5-197bd1869247";
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    skills === "" ||
    state === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        Skills: skills,
        State: state,
        PhoneNumber: phoneNumber,
      },
      tags: ["COMMUNITY"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// techyjaunt crypto bootcamp
server.post("/crypto-bootcamp-reg", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    cryptoCourse,
    cryptoKnowledge,
  } = req.body;
  let launchpadListId = "cb52e782-04c8-11ef-9361-0513f19ef29c";
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    cryptoCourse === "" ||
    cryptoKnowledge === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        CryptoCourse: cryptoCourse,
        CryptoKnowledge: cryptoKnowledge,
      },
      tags: ["COMMUNITY"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// CHANGE LINK
server.post("/change-link", (req, res) => {
  const { newLink } = req.body;
  let launchpadListId = "3ba60ad4-4450-11ef-8a91-35a8181df958";

  fetch(
    `https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts/b11e9384-4456-11ef-9d2a-6bb348736cd8`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key,
        email_address: "support@techyjaunt.com",
        fields: {
          EmailAddress: "support@techyjaunt.com",
          FirstName: "techyjaunt",
          LastName: "admin",
          NewLink: newLink,
        },
        status: "SUBSCRIBED",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "LINK HAS BEEN SUCCESSFULLY CHANGED",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "THIS LINK ALREADY EXISTS",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "FAILED, PLEASE TRY AGAIN",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// fetch link
server.get("/get-link", (req, res) => {
  let launchpadListId = "3ba60ad4-4450-11ef-8a91-35a8181df958";
  fetch(
    `https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts/b11e9384-4456-11ef-9d2a-6bb348736cd8?api_key=${api_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          data: data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// book meeting
server.post("/schedule-meeting", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    companyName,
    companyPosition,
    companyWebsite,
    meetingDate,
    meetingTime,
    extraDetails,
  } = req.body;
  console.log(req.body);
  let launchpadListId = "88336d88-53dc-11ef-a73c-2f5b267643d3";

  const transporter = nodemailer.createTransport({
    service: "Zoho",
    auth: {
      user: "pasomba41@gmail.com",
      pass: smtp_key,
    },
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
  });

  // Email options
  const mailOptions = {
    from: email,
    to: "george@techyjaunt.com",
    subject: "CRYPTO MEETING NOTIFICATION",
    // text: "Body of your email",
    html: `<p>Your meeting has been scheduled with ${
      firstName + " " + lastName
    } on ${meetingDate} at ${meetingTime}</p>`,
  };

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        CompanyName: companyName,
        CompanyPosition: companyPosition,
        CompanyWebsite: companyWebsite,
        MeetingDate: meetingDate,
        MeetingTime: meetingTime,
        ExtraDetails: extraDetails,
      },
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "SUBSCRIBED") {
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Email sent: " + info.response);
        });
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "alreadysignedup",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// get schedule
server.get("/get-schedule", (req, res) => {
  let launchpadListId = "88336d88-53dc-11ef-a73c-2f5b267643d3";
  fetch(
    `https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts?api_key=${api_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      return res.status(200).json({
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// delete schedule
server.post("/delete-schedule", (req, res) => {
  const { userId } = req.body;
  let launchpadListId = "88336d88-53dc-11ef-a73c-2f5b267643d3";
  fetch(
    `https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts/${userId}?api_key=${api_key}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return res.status(200).json({
        status: "success",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

//survey
server.post("/survey-register", (req, res) => {
  const {
    emailAddress,
    apartmentType,
    firstName,
    lastName,
    phoneNumber,
    apartmentRent,
    prptyApp,
    prptyMgmt,
    otherPrptyMgmt,
    prptyHireReason,
    otherPrptyHireReason,
    prptyLocation,
    prptyMgmtReason,
    otherPrptyMgmtReason,
    bedroomNumber,
    otherBedroomNumber,
    otherApartmentType,
    otherApartmentRent,
    prptyProblems,
  } = req.body;
  console.log(req.body);
  let launchpadListId = "ec462042-7f1d-11ef-9f53-c756179f1324";

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: emailAddress,
      fields: {
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        EmailAddress: emailAddress,
        ApartmentType: apartmentType,
        OtherApartmentType: otherApartmentType || "-",
        ApartmentRent: apartmentRent,
        OtherApartmentRent: otherApartmentRent || "-",
        WillUseApp: prptyApp,
        WhoManagesProperty: prptyMgmt,
        OtherWhoManagesProperty: otherPrptyMgmt || "-",
        PropertyHireReason: prptyHireReason,
        OtherPropertyHireReason: otherPrptyHireReason || "-",
        propertyLocation: prptyLocation,
        WhyPropertyIsNotManaged: prptyMgmtReason,
        OtherWhyPropertyIsNotManaged: otherPrptyMgmtReason || "-",
        NumberOfBedrooms: bedroomNumber,
        OtherNumberOfBedrooms: otherBedroomNumber || "-",
        PropertyProblems: prptyProblems || "-",
      },
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.status || data.error.code);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

// verify payment
server.post("/verify-payment", async (req, res) => {
  let paidListId = "8fce3572-4b90-11ef-be1e-553041d2c7af";
  const SECRET_KEY = "sk_test_6fb27b676acdd12e4e3bf7284e1fe5a758def421";
  const { reference, firstName, lastName, email, phoneNumber, selectedCourse } =
    req.body;
  console.log(reference);
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${SECRET_KEY}`,
        },
      }
    );
    console.log(response);
    if (response.data.data.status === "success") {
      // Handle successful payment verification
      res.json({ success: true, message: "Payment verified successfully" });
      fetch(`https://emailoctopus.com/api/1.6/lists/${paidListId}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key,
          email_address: email,
          fields: {
            EmailAddress: email,
            FirstName: firstName,
            LastName: lastName,
            SelectedCourse: selectedCourse,
            PhoneNumber: phoneNumber,
          },
          tags: ["PAID"],
          status: "SUBSCRIBED",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Handle failed payment verification
      res.json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    res
      .status(500)
      .json({ success: false, message: "Payment verification error" });
  }
});

server.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

server.listen(port, () => {
  console.log("server is running");
});
