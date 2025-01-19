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
    'service_f4j02kf',
    'template_y1cf82s',
    templateParams,
    '3iXzyN0w1eBUUKcs2'
  );
};
