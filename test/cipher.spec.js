//import { Cipher } from "crypto";

describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=> {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");  
    });
    it ('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });
    it ('deberia retornar con espacios "hij klm nopqrstuvwxyzabcdefg" para "abc def ghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"abc def ghijklmnopqrstuvwxyz"),"hij klm nopqrstuvwxyzabcdefg");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "abcdef ghi jklmnopqrstuvwxyz" para "hijklm nop qrstuvwxyzabcdefg" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"hijklm nop qrstuvwxyzabcdefg"), "abcdef ghi jklmnopqrstuvwxyz");
    });
   
  });
});
