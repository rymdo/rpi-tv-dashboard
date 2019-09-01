import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import { defaultStyles } from './../style';

// See more YouTube Parameters here:
// https://developers.google.com/youtube/player_parameters?playerVersion=HTML5

export interface YouTubeCardProps {
  videoId?: string;
  sound?: boolean;
  start?: number;
  style?: React.CSSProperties;
}

export class YouTubeCard extends Component<YouTubeCardProps> {
  private playerRef = React.createRef<ReactPlayer>();
  public render(): JSX.Element {
    const { videoId = '', start = 0, style = {} } = this.props;
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    return (
      <ReactPlayer
        ref={this.playerRef}
        url={url}
        loop={true}
        playing={true}
        muted={true}
        height={'100%'}
        width={'100%'}
        style={{ ...defaultStyles, ...style }}
        config={{
          youtube: {
            playerVars: {
              iv_load_policy: 3,
              rel: 0,
              start: start,
              fs: 0,
              enablejsapi: 1,
              disablekb: 1,
              controls: 0,
            },
          },
        }}
      />
    );
  }
}

export default YouTubeCard;
