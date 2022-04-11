import { TFunction as TranslateByIdType, useTranslation } from 'next-i18next';

//Main function for translating messages

const translate = ({
  translateById,
  id,
  defaultMessage,
  values = {},
}: FormatMessageParams & { translateById: TranslateByIdType }) => {
  //translate the message using the given id which is a key in the json files
  let translatedMessage = translateById(id);
  //if the returned translated message is the same as the id, thus the key is not existent
  //if that's the case we return the default message
  //--In case the defualt message is not passed as well, we basically return the id
  translatedMessage = translatedMessage === id ? defaultMessage ?? id : translatedMessage;
  //now replace any replacable dynamic values
  for (const [key, value] of Object.entries(values)) {
    translatedMessage = translatedMessage.replace(new RegExp(`\\{${key}\\}`, 'ig'), `${value}`);
  }

  return translatedMessage;
};

//values that can be dynamically replaced in message
type Values = Record<string | number, string | number>;

type FormatMessageParams = {
  name?: string;
  id: string;
  defaultMessage?: string;
  values?: Values;
};

//custom hook to be used at top level of components
export const useFormat = (args?: Pick<FormatMessageParams, 'name'>) => {
  //get the translations from the passed file
  const { t: translateById } = useTranslation(args?.name);

  return {
    formatMessage(args: Omit<FormatMessageParams, 'name'>) {
      return translate({ translateById, ...args });
    },
  };
};
