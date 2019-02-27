export const appConfig = {
  // local host port of WEB LAYER

  //  apiUrl: 'http://localhost:54690/', // url for local
  // apiUrl: 'http://localhost:7000/', // url for dev
   apiUrl: 'http://zil189:90/', // url for dev
  //apiUrl: 'http://zil395:8080/', // url for production
  identityUrl: 'http://zil189:9050/',

  pattern: {
    NAME: /^[a-zA-Z.\-\']*$/,//^[^-\s0-9$#@!%*?&^]
    CITY: /^[a-zA-Z . \-\']*$/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/, // /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    PHONE_NO: /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/,
    // DESCRIPTION: /^[ A-Za-z0-9_@./#&+-;']*$/,
    TASK_CODE: /^[0-9999]{1,4}$/,
    SUB_DOMAIN: /^[/a-z/A-Z][a-zA-Z0-9-]*[^/-/./0-9]$/,
    PHONE_NO_MASK: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    IVR_ACTION_KEY: /^[0-9]*$/,
    IVR_NUMBER: /^[0-9]*$/,
    RADIUS: /^[0-9]*(?:.)([0-9])+$/,
    LATLONG: /^\s*(\-?\d+(\.\d+)?)$/,
    SSN: /^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$/,
    SSN_MASK: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    US_PHONE_NO: /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/,
    DECIMAL: /^[0-9]+([,.][0-9]+)?$/,
    DECIMAL_WITHOUTZERO: '^($|)([1-9]d{0,2}(,d{3})*|([1-9]d*))(.d{2})?$',
    DESCRIPTION: '^[A-Za-z0-9 _@./#&+-;]*[A-Za-z0-9@./#&+-;][A-Za-z0-9 _@./#&+-;]*$',
    // STRING_WITHOURSPACE:'^[A-Za-z0-9 _@./#&+-;]*[A-Za-z0-9@./#&+-;][A-Za-z0-9 _@./#&+-;]*$',
    // STRING_WITHOURSPACE:'^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$',
    PINCODE:/^[1-9][0-9]{5}$/,
    YEAR:/^[1-9][0-9]{3}$/,
    PERCENTAGE:/^[^-.#!@$%^&*(/)_:;[{,}|<>"?'-+=_a-zA-Z]\d{0,1}(\.\d{0,2})*$/
  }
};
