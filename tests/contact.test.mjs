import { test } from 'node:test';
import assert from 'node:assert/strict';
import { whatsappUrl, quoteMessage } from '../src/lib/contact.mjs';
test('orçamento preserva acentos e dados; telefone ausente não gera link falso', () => {
  const values = {name:'João & Ana',phone:'11999999999',email:'contato@example.com',service:'Automação / IA',description:'Integração & atendimento?'};
  const message = quoteMessage(values);
  const url = new URL(whatsappUrl('5511999999999', message));
  assert.equal(url.searchParams.get('text'), message);
  assert.ok(message.includes(values.name));
  assert.ok(message.includes(values.description));
  assert.equal(whatsappUrl('', message), null);
  assert.equal(whatsappUrl('123', message), null);
});
