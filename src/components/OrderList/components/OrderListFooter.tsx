import React from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from '@styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {centerContent, fullWidth} from '@styles/MainStyles.ts';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {IconOutline} from '@ant-design/icons-react-native';

export default ({itemCount, loading}: any) => {
  return (
    <View>
      {!loading && itemCount === 0 && (
        <View
          style={[
            {
              flex: 1,
              height: responsiveHeight(35),
              gap: 10,
            },
            centerContent,
          ]}>
          <IconOutline name="inbox" color={Colors.grayText6} size={40} />
          <Text style={[Fonts.subHeader2, {color: Colors.grayText6}]}>
            No Items
          </Text>
        </View>
      )}

      {loading && (
        <SkeletonPlaceholder
          borderRadius={12}
          backgroundColor={Colors.background6}
          highlightColor={Colors.white}>
          <SkeletonPlaceholder.Item
            width={fullWidth}
            alignSelf="center"
            gap={15}>
            <SkeletonPlaceholder.Item
              width="100%"
              height={165}
              borderRadius={12}
            />

            <SkeletonPlaceholder.Item
              width="100%"
              height={165}
              borderRadius={12}
            />

            <SkeletonPlaceholder.Item
              width="100%"
              height={165}
              borderRadius={12}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      )}
    </View>
  );
};
