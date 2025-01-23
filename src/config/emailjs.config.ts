import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  phone_number: string;
  message: string;
}

export const sendEmail = async ({
  name,
  phone_number,
  message,
}: EmailParams): Promise<void> => {
  const templateParams = {
    name,
    phone_number,
    message,
  };
  await emailjs.send(
    'service_0tqpbhk',
    'template_jq7sezs',
    templateParams,
    'ETaMDc8Ihr7nPECnj'
  );
};
