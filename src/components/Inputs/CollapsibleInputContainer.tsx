import React, {PropsWithChildren, useEffect, useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '@styles';
import Collapsible from 'react-native-collapsible';
import {centerContent} from '@styles/MainStyles';

import ArrowUpIcon from '@icons/arrowUp.svg';
import ArrowDownIcon from '@icons/arrowDown.svg';
import {CollapsibleInputContainerProps} from '@components/Inputs/Interfaces';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {SvgXml} from 'react-native-svg';

export default function CollapsibleInputContainer(
  props: PropsWithChildren<CollapsibleInputContainerProps>,
) {
  const {
    placeholder,
    value,
    style,
    buttonStyle,
    buttonTextStyle,
    height = responsiveHeight(3.82),
    width = responsiveWidth(100),
    textFont = Fonts.footnote,
    multiple = false,
    children,
    arrowUpIcon = ArrowUpIcon.toString(),
    arrowDownIcon = ArrowDownIcon.toString(),
    floating = false,
  } = props;

  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (!collapsed && !multiple) {
      setCollapsed(true);
    }
  }, [value]);

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <View
      style={[
        floating && {
          position: 'absolute',
          right: 0,
          top: responsiveHeight(0.5),
          zIndex: 9999,
        },
        {
          gap: 4.5,
          alignItems: 'center',
          marginRight: -responsiveWidth(2),
        },
        style,
      ]}>
      <TouchableOpacity
        onPress={onToggle}
        style={[
          {
            width: width,
            height: collapsed ? height : null,
            backgroundColor: Colors.white,
            borderWidth: 0.76,
            borderColor: Colors.border2,
            borderRadius: 7,
          },
          buttonStyle,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: height,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Text
              style={[
                textFont,
                {
                  color:
                    typeof value !== 'undefined' && value && value.length > 0
                      ? Colors.black
                      : Colors.grayText,
                  textTransform: 'capitalize',
                },
                buttonTextStyle,
              ]}>
              {typeof value !== 'undefined' && value && value.length > 0
                ? multiple && Array.isArray(value)
                  ? value.join(', ')
                  : value
                : placeholder}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              height: '100%',
              ...centerContent,
            }}>
            {!collapsed ? (
              <SvgXml xml={arrowUpIcon} width="6" height="6" />
            ) : (
              <SvgXml xml={arrowDownIcon} width="6" height="6" />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible
        collapsed={collapsed}
        style={{
          width: width + responsiveWidth(4),
          backgroundColor: Colors.transparent,
          overflow: 'hidden',
          borderRadius: 7,
          padding: 4,
        }}>
        {children}
      </Collapsible>
    </View>
  );
}
