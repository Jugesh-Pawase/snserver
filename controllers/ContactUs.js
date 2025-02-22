const { contactUsEmail } = require("../mail/ContactForm");
const mailSender = require("../Utils/mailSender");

exports.contactUsController = async (req, res) => {
  const { email, firstName, lastName, message, phoneNo, countrycode } =
    req.body;
  // console.log(req.body);
  try {
    await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstName, lastName, message, phoneNo, countrycode)
    );
    return res.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
