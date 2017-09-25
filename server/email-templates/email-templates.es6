'use strict';

const moment = require('moment');
const vcapConstants = require('../vcap-constants.es6');
const util = require('../util.es6');
const email = {};

email.noncommercialApplicationSubmittedConfirmation = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'Your noncommercial permit application has been submitted for review!',
    body: `
Submitted for review!
**************************************

Your permit application has been submitted for review, but is NOT APPROVED until you hear from a special use administrator. Submitting an application does not guarantee your permit will be approved.


Application details
**************************************

Event name: ${application.eventName}
Start date: ${moment(application.noncommercialFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
End date: ${moment(application.noncommercialFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
Number of participants: ${application.noncommercialFieldsNumberParticipants}
Number of spectators: ${application.noncommercialFieldsSpectatorCount}
Location: ${application.noncommercialFieldsLocationDescription}


What happens next?
**************************************

1. Your application will be reviewed by our staff within 48 hours.
2. If additional information is needed, a representative of the National Forest Service will contact you via email to resolve any issues.
3. Once your application has been reviewed by our staff, you will be notified of the application status.
4. If your application is approved, you will receive your permit within 2 weeks of approval.


Contact us
**************************************

If you have questions or need to contact the permit staff at the National Forest Service, please use a method listed below.

Noncommercial contact
Name: Sue Sherman-Biery
Title: Special use administrator
Phone: 360-854-2660
Email: sshermanbiery@fs.fed.us

Thank you for your interest in our National Forests.
`
  };
};

email.tempOutfitterApplicationSubmittedConfirmation = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'Your temporary outfitter permit application has been submitted for review.',
    body: `
Submitted for review!
**************************************

Your permit application has been submitted for review, but is NOT APPROVED until you hear from a special use administrator. Submitting an application does not guarantee your permit will be approved.


Application details
**************************************

Business name: ${application.applicantInfoOrganizationName}
Start date: ${moment(application.tempOutfitterFieldsActDescFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format(
      'MM/DD/YYYY hh:mm a'
    )}
End date: ${moment(application.tempOutfitterFieldsActDescFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format(
      'MM/DD/YYYY hh:mm a'
    )}
Number of trips: ${application.tempOutfitterFieldsActDescFieldsNumTrips}
Number of participants: ${application.tempOutfitterFieldsActDescFieldsPartySize}
Services: ${application.tempOutfitterFieldsActDescFieldsServProvided}


What happens next?
**************************************

1. Your application will be reviewed by our staff.
2. If additional information is needed, a representative of the National Forest Service will contact you via email to resolve any issues.
3. Once your application has been reviewed by our staff, you will be notified of the application status.
4. If your application is approved, you will receive your permit within 2 weeks of approval.


Contact us
**************************************

If you have questions or need to contact the permit staff at the National Forest Service, please use a method listed below.

Temp outfitter contact
Name: Sue Sherman-Biery
Title: Special use administrator
Phone: 360-854-2660
Email: sshermanbiery@fs.fed.us

Thank you for your interest in our National Forests.
`
  };
};

email.noncommercialApplicationSubmittedAdminConfirmation = application => {
  const applicationUrl = `${vcapConstants.intakeClientBaseUrl}/admin/applications/noncommercial/${application.appControlNumber}`;

  return {
    to: vcapConstants.specialUseAdminEmailAddresses,
    subject: `A new permit application with a start date of ${moment(
      application.noncommercialFieldsStartDateTime,
      'YYYY-MM-DDTHH:mm:ss'
    ).format('MM/DD/YYYY')} has been submitted to the Mt. Baker-Snoqualmie National Forest.`,
    body: `
Application details
**************************************

Permit type:  ${util.camelCaseToRegularForm(application.type)}
Event name: ${application.eventName}
Start date: ${moment(application.noncommercialFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
End date: ${moment(application.noncommercialFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
Number of participants: ${application.noncommercialFieldsNumberParticipants}
Number of spectators: ${application.noncommercialFieldsSpectatorCount}
Location: ${application.noncommercialFieldsLocationDescription}

Go to ${applicationUrl} to log in and view the application.
`
  };
};

email.tempOutfitterApplicationSubmittedAdminConfirmation = application => {
  const applicationUrl = `${vcapConstants.intakeClientBaseUrl}/admin/applications/temp-outfitter/${application.appControlNumber}`;

  return {
    to: vcapConstants.specialUseAdminEmailAddresses,
    subject: `A new permit application with a start date of ${moment(
      application.tempOutfitterFieldsActDescFieldsStartDateTime,
      'YYYY-MM-DDTHH:mm:ss'
    ).format('MM/DD/YYYY')} has been submitted to the Mt. Baker-Snoqualmie National Forest.`,
    body: `
Application details
**************************************

Permit type: ${util.camelCaseToRegularForm(application.type)}
Business name: ${application.applicantInfoOrganizationName}
Start date: ${moment(application.tempOutfitterFieldsActDescFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format(
      'MM/DD/YYYY'
    )}
End date: ${moment(application.tempOutfitterFieldsActDescFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY')}
Number of trips: ${application.tempOutfitterFieldsActDescFieldsNumTrips}
Number of participants: ${application.tempOutfitterFieldsActDescFieldsPartySize}
Services: ${application.tempOutfitterFieldsActDescFieldsServProvided}

Go to ${applicationUrl} to log in and view the application.
`
  };
};

email.noncommercialApplicationReturned = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'An update on your recent permit application to the Forest Service.',
    body: `
Permit application status update
**************************************

Unfortunately the following permit application has not been accepted.

${application.applicantMessage}


Application details
**************************************

Event name: ${application.eventName}
Start date: ${moment(application.noncommercialFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
End date: ${moment(application.noncommercialFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY hh:mm a')}
Number of participants: ${application.noncommercialFieldsNumberParticipants}
Number of spectators: ${application.noncommercialFieldsSpectatorCount}
Location: ${application.noncommercialFieldsLocationDescription}

If you would like to submit another permit application visit ${vcapConstants.intakeClientBaseUrl}.


Contact us
**************************************

If you have questions or need to contact the permit staff at the National Forest Service, please use a method listed below.

Noncommercial contact
Name: Sue Sherman-Biery
Title: Special use administrator
Phone: 360-854-2660
Email: sshermanbiery@fs.fed.us

Thank you for your interest in our National Forests.
`
  };
};

email.tempOutfitterApplicationReturned = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'An update on your recent permit application to the Forest Service.',
    body: `
Permit application status update
**************************************

Unfortunately the following permit application has not been accepted.


${application.applicantMessage}

Application details
**************************************

Business name: ${application.applicantInfoOrganizationName}
Start date: ${moment(application.tempOutfitterFieldsActDescFieldsStartDateTime, 'YYYY-MM-DDTHH:mm:ss').format(
      'MM/DD/YYYY hh:mm a'
    )}
End date: ${moment(application.tempOutfitterFieldsActDescFieldsEndDateTime, 'YYYY-MM-DDTHH:mm:ss').format(
      'MM/DD/YYYY hh:mm a'
    )}
Number of trips: ${application.tempOutfitterFieldsActDescFieldsNumTrips}
Number of participants: ${application.tempOutfitterFieldsActDescFieldsPartySize}
Services: ${application.tempOutfitterFieldsActDescFieldsServProvided}

If you would like to submit another permit application visit ${vcapConstants.intakeClientBaseUrl}.


Contact us
**************************************

If you have questions or need to contact the permit staff at the National Forest Service, please use a method listed below.

Temp outfitter contact
Name: Sue Sherman-Biery
Title: Special use administrator
Phone: 360-854-2660
Email: sshermanbiery@fs.fed.us

Thank you for your interest in our National Forests.
`
  };
};

email.noncommercialApplicationHold = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'Your noncommercial permit application has been submitted for review!',
    body: `
Your application has been set to hold because
${application.applicantMessage}
`
  };
};

email.tempOutfitterApplicationHold = application => {
  return {
    to: application.applicantInfoEmailAddress,
    subject: 'Your noncommercial permit application has been submitted for review!',
    body: `
Your application has been set to hold because
${application.applicantMessage}
`
  };
};

module.exports = email;