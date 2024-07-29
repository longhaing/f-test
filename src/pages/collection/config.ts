import { CollectionItem } from '../../model/collection';

export const InitCollectionItem: CollectionItem = {
  id: 0,
  player: {
    firstname: '',
    lastname: '',
    birthday: '',
    image: '',
  },
};

export interface FormErrors {
  player?: {
    firstname?: string;
    lastname?: string;
    birthday?: string;
    image?: string;
  };
}

export const FIRSTNAME_FIELD_ERROR_MESSAGE = 'firstname is required';
export const LASTNAME_FIELD_ERROR_MESSAGE = 'lastname is required';
export const BIRTHDAY_FIELD_ERROR_MESSAGE = 'birthday is required';
export const IMAGE_FIELD_ERROR_MESSAGE = 'image is required';

export const validateForm = (values: CollectionItem): FormErrors => {
  let errors: FormErrors = {};
  const player = values.player || {
    firstname: '',
    lastname: '',
    birthday: '',
    image: '',
  };

  if (!player.firstname) {
    if (!errors.player) errors.player = {};
    errors.player.firstname = FIRSTNAME_FIELD_ERROR_MESSAGE;
  }
  if (!player.lastname) {
    if (!errors.player) errors.player = {};
    errors.player.lastname = LASTNAME_FIELD_ERROR_MESSAGE;
  }
  if (!player.birthday) {
    if (!errors.player) errors.player = {};
    errors.player.birthday = BIRTHDAY_FIELD_ERROR_MESSAGE;
  }
  if (!player.image) {
    if (!errors.player) errors.player = {};
    errors.player.image = IMAGE_FIELD_ERROR_MESSAGE;
  }

  return errors;
};
