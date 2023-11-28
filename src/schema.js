import * as yup from "yup";

// 1 küçük harf
// 1 büyük harf
// 1 sayı
// 1 özel karakter
// minimum 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  email: yup.string().email('Lütfen geçerli formatta bir e-mail adresi giriniz').required('E-mail alanı boş bırakılamaz'),
  age: yup.number().min(18, 'Yaş 18 den küçük olamaz').max(100, 'Yaş yüzden büyük olamaz').integer(),
  password: yup.string().min(5, 'Şifre 5 karakterden kısa olamaz').matches(regex, 'Şifreniz yeterince güçlü değil').required('Şifre alanı boş bırakılamaz'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Onay şifreniz doğru değil').required('Lütfen şifrenizi onaylayın'),
});
