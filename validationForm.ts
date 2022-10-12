interface IForm {
  name: string;
  password: number;
}

const form: IForm = {
  name: 'Vasya',
  password: 2345678,
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Должен быть больше 5 символов' },
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};
