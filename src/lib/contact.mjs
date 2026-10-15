export function whatsappUrl(phone, message) {
  const digits = String(phone).replace(/\D/g, '');
  if (!/^[1-9]\d{9,14}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
export function quoteMessage(values) {
  return ['Olá, Studio Notreve! Gostaria de conversar sobre um projeto.', '',
    `Nome: ${values.name}`, `Empresa: ${values.company || 'Não informada'}`,
    `WhatsApp: ${values.phone}`, `E-mail: ${values.email}`,
    `Serviço: ${values.service}`, `Investimento estimado: ${values.budget || 'Prefiro conversar antes'}`,
    '', `Sobre o projeto: ${values.description || 'Gostaria de conversar para definir o escopo.'}`].join('\n');
}
