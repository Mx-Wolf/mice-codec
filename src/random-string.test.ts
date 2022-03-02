import { expect,  } from 'chai';
import {getRandomString} from './random-string';
describe('получение случайного пароля',()=>{
  it('создает строку асинхронно', async ()=>{
    if(typeof window !== 'object'){
      expect(getRandomString).to.throw();
      return;
    }
    const result = await getRandomString();
    expect(result.length>0).to.eq(true);
  });
});
