export interface ContactFormData {
  contactInfo: {
    emailClass: string;
    email: string;
    phoneClass: string;
    phone: string;
  };
  formFields: {
    name: {
      label: string;
      inputType: string;
    };
    email: {
      label: string;
      inputType: string;
    };
    message: {
      label: string;
      inputType: string;
      privacyText: string;
    };
  };
  descriptionText: string;
}
