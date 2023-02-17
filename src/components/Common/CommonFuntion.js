/** 공통함수  */
/**최종수정일(작성일)을 적어주세요 (변동가능성) */

/**
  빈값 확인
  parm : array, object, string
  return : boolean
  최종수정 : 230217 조성환
*/
export default function isEmpty(value) {

    if(value === null) return true;
    if(value ===undefined) return true;
    if(value ==='') return true;

    if (Array.isArray(value)) {
      return value.length === 0;
    } else if (typeof value === 'string' || value instanceof String) {
      return value.trim().length === 0;
    } else if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
    return true;
  }

  /**
  이메일 형식인지 확인
  parm : string
  return : boolean
  최종수정 : 230217 조성환
  */
  export function isEmail(emailStr){

    const emailRegex = /^\S+@\S+\.\S+$/;

    return emailRegex.test(emailStr);
  }

  /**
  날짜를 지정형식에 맞게 변경
  parm : date, format(string)
  return : string 
  example : format='YYYY-DD-MM' , format='YYYY/MM/DD'
  최종수정 : 230217 조성환
  */
  export function formatDate(date, format){
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
  
    return format
      .replace("YYYY", year)
      .replace("MM", month)
      .replace("DD", day);
  }

  /**
  숫자(0-9, 소수점도 제외)로만 이루어졌는지 확인한다
  parm : number , str
  return : boolean
  최종수정 : 230217 조성환
  */
  export function isNumeric(value) {

    const pattern = /^[0-9]+$/;

    return pattern.test(value);
  }

  