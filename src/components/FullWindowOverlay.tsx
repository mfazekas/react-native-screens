import React, { PropsWithChildren, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// Native components
import FullWindowOverlayNativeComponent from '../fabric/FullWindowOverlayNativeComponent';
const NativeFullWindowOverlay: React.ComponentType<
  PropsWithChildren<{
    style: StyleProp<ViewStyle>;
  }>
> = FullWindowOverlayNativeComponent as any;

function FullWindowOverlay(props: { children: ReactNode }) {
  return (
    <NativeFullWindowOverlay
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {props.children}
    </NativeFullWindowOverlay>
  );
}

export default FullWindowOverlay;
