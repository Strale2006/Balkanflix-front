const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


exports.register = async (req, res, next) =>{
    const {username, email, password} = req.body;

    try{
        const user = await User.create({
            username,email,password
        });

        sendToken(user, 201, res);
    }catch (e){
        next(e);
    }
}

exports.login = async (req, res, next) =>{
    const {email, password} = req.body;

    if (!email || !password){
        return next(new ErrorResponse("Please provide an email and a password", 400));
    }

    try{
        const user = await User.findOne({email}).select("+password");

        if (!user){
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch){
            return next(new ErrorResponse("Invalid credentials", 404));
        }

        sendToken(user, 200, res);

    }catch (e) {
        next(e);
    }

}

exports.forgotPassword = async (req, res, next) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user) {
            return next(new ErrorResponse("Email could not be sent", 404));
        }

        const resetToken = user.getResetPasswordToken();
        await user.save();

        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
                            <!DOCTYPE html>
                              <html lang="en">
                              <head>
                                  <meta charset="UTF-8">
                                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                  <title>Email Template</title>
                                  <style>
                                      /* Reset some default styles for email clients */
                                      body, div, p, h1, a {
                                          margin: 0;
                                          padding: 0;
                                      }
                            
                                      /* Set a background color and text color for the email */
                                      body {
                                          background-color: #f0f0f0;
                                          color: #333;
                                          font-family: 'Poppins', sans-serif;
                                      }
                            
                                      /* Add margin to create spacing between elements */
                                      .email-content {
                                          margin: 50px; /* Adjust this value to control the spacing */
                                      }
                                  </style>
                                  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900" rel="stylesheet">
                              </head>
                              <body>
                                  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                          <td align="center" valign="top">
                                              <table role="presentation" width="1200" border="0" cellspacing="0" cellpadding="0" class="email-content">
                                                  <tr>
                                                      <td align="center" valign="top" style="background: radial-gradient(ellipse at bottom, #1B2735 0%, #12141d 100%); padding: 40px;">
                                                          <h1 style="font-size: 30px; color: #ffeba7;">You have requested a new password reset</h1>
                                                          <p style="font-size: 20px; color: #ffeba7;">Please go to this link to reset your password:</p>
                                                          <p style="margin-top: 25px;">
                                                              <a href="${resetUrl}" style="text-decoration: none;">
                                                                  <button style="background-color: #ffeba7; border: none; border-radius: 25px; padding: 15px 30px; font-size: 18px; font-weight: bold; color: #333; cursor: pointer;">
                                                                      Reset Password
                                                                  </button>
                                                              </a>
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </body>
                              </html>
        `;

        try {
            await sendEmail({
                to: user.email,
                subject: "Password Reset - HaD",
                text: message,
            });

            res.status(200).json({success: true, data: "Email sent"});
        } catch (emailError) {
            console.error(emailError);

            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("Email could not be sent", 500));
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};


exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = req.params.resetToken

    console.log("Hashed Token from URL:", resetPasswordToken);

    try {
        const timestamp = Date.now();
        const dateObject = new Date(timestamp);

        console.log("Timestamp:", timestamp);
        console.log("Date Object:", dateObject);
        console.log("Reset Password Token:", resetPasswordToken);

        let userCheck = await User.findById("64de27cd210fd4a3839462ab")
        console.log(userCheck.resetPasswordToken + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

        const user = await User.findOne({ "resetPasswordToken": resetPasswordToken });
        console.log("User Found:", user);

        if (!user) {
            return next(new ErrorResponse("Invalid Reset Token", 400));
        }

        // The following lines shouldn't be reached if the user is null
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();
        console.log("Password Reset Successful:", user);

        res.status(201).json({
            success: true,
            data: "Password Reset Success",
            token: user.getSignToken(),
        });
    } catch (e) {
        console.error('An error occurred:', e); // Log the error for debugging
        next(e);
    }


}

const sendToken = (user, statusCode, res)=>{
    const token = user.getSignToken();

    res.status(statusCode).json({success:true, token});
}



