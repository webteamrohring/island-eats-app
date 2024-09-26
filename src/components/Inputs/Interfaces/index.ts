import {ListItemType} from '@interfaces';
import {
  Control,
  FieldValues,
  RegisterOptions,
  UseControllerProps,
} from 'react-hook-form';

import {
  DimensionValue,
  TextInputIOSProps,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import {NativeSyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {TextInputSubmitEditingEventData} from 'react-native/Libraries/Components/TextInput/TextInput';

export type CollapsibleInputProps = {
  width?: number | undefined;
  list: ListItemType[];
  control?: Control<FieldValues> | undefined;
  value?: string | string[] | undefined | null;
  onChange?: (value: string | string[], selected?: boolean) => void;
  name: string;
  placeholder: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
      >
    | undefined;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  textFont?: TextStyle;
  arrowUpIcon?: string;
  arrowDownIcon?: string;
  floating?: Boolean;
};

export type CollapsibleInputContainerProps = {
  placeholder?: string | undefined;
  value: string | string[] | undefined | null;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  height?: number | undefined;
  width?: number | undefined;
  textFont?: TextStyle;
  multiple?: Boolean;
  arrowUpIcon?: string;
  arrowDownIcon?: string;
  floating?: Boolean;
};

export type CheckBoxListProps = {
  list: ListItemType[];
  value: string | string[] | null | undefined;
  onChange: (value: string | string[], selected?: boolean) => void;
  multiple?: Boolean;
  max?: number;
};

export type SearchInputProps = {
  placeholder: string;
  style?: ViewStyle;
  height?: DimensionValue;
  width?: DimensionValue;
  value: string | undefined;
  onChangeText: Dispatch<SetStateAction<string | undefined>>;
  borderColor?: string;
  inputFont?: TextStyle;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  textContentType?: TextInputIOSProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
};

export type SimpleInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  height?: DimensionValue;
  width?: DimensionValue;
  title?: string;
  titleFont?: TextStyle;
  borderColor?: string;
  inputFont?: TextStyle;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  textContentType?: TextInputIOSProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
} & UseControllerProps;
