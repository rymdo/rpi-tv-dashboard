import React, { Component } from 'react';

import { defaultStyles } from './../style';

export interface IFrameCardProps {
  src?: string;
  allowFullScreen?: boolean;
  height?: number | string;
  name?: string;
  width?: string;
  sandbox?:
    | 'allow-forms'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-top-navigation'
    | '';
  seamless?: boolean;
}

export class IFrameCard extends Component<IFrameCardProps> {
  public render(): JSX.Element {
    const { src = '', height = '100%', width = '100%' } = this.props;
    const iFrameProps: React.IframeHTMLAttributes<HTMLIFrameElement> = {
      style: defaultStyles,
      src,
      height,
      width,
    };
    return <iframe {...iFrameProps} />;
  }
}

export default IFrameCard;
