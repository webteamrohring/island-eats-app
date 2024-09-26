import {Text, View} from 'react-native';
import {Modal} from '@ant-design/react-native';
import {Colors, Fonts} from '@styles';
import {PropsWithChildren} from 'react';
import {InfoModalProps} from '@interfaces';
import SimpleBtn from '@components/Buttons/SimpleBtn.tsx';
import {SvgXml} from 'react-native-svg';
import infoIcon from '@icons/info.svg';

export default ({
  visible,
  title,
  body,
  onDismiss,
}: PropsWithChildren<InfoModalProps>) => {
  return (
    <Modal
      visible={visible}
      transparent
      bodyStyle={{alignItems: 'center', borderRadius: 8, gap: 20}}>
      <SvgXml xml={infoIcon.toString()} width={48} height={48} />
      <View style={{gap: 5, alignItems: 'center'}}>
        <Text style={[Fonts.header4, {textAlign: 'center'}]}>{title}</Text>
        <Text
          style={[Fonts.body, {color: Colors.grayText11, textAlign: 'center'}]}>
          {body}
        </Text>
      </View>

      <SimpleBtn
        onPress={onDismiss}
        height={43}
        title="Okay"
        containerStyle={{width: '100%'}}
        borderRadius={6}
      />
    </Modal>
  );
};
