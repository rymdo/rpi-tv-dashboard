import React, { Component } from 'react';

import { defaultStyles } from './../style';

export interface YouTubeCardProps {
  videoId?: string;
  sound?: boolean;
  start?: number;
}

export class YouTubeCard extends Component<YouTubeCardProps> {
  public render(): JSX.Element {
    const { videoId = '', sound = false, start = 0 } = this.props;
    const paramAutoPlay = 'autoplay=1';
    const paramMute = `mute=${sound ? 0 : 1}`;
    const paramControls = 'controls=0';
    const paramLoop = 'loop=1';
    const paramStart = `start=${start}`;
    const src = `https://www.youtube.com/embed/${videoId}?${paramAutoPlay}&${paramMute}&${paramControls}&${paramLoop}&${paramStart}`;
    const iFrameProps: React.IframeHTMLAttributes<HTMLIFrameElement> = {
      style: defaultStyles,
      src,
      height: '100%',
      width: '100%',
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true,
    };
    return <iframe {...iFrameProps} />;
  }
}

export default YouTubeCard;
