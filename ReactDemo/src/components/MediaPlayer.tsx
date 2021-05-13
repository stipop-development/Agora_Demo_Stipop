import { ILocalVideoTrack, IRemoteVideoTrack, ILocalAudioTrack, IRemoteAudioTrack } from "agora-rtc-sdk-ng";
import React, { useRef, useEffect, useState } from "react";
import { ReactionButtonWrapper, ReactionsWrapper, ReactionsWrapper2 } from "./MediaPlayer.styles";

export interface VideoPlayerProps {
  videoTrack: ILocalVideoTrack | IRemoteVideoTrack | undefined;
  audioTrack: ILocalAudioTrack | IRemoteAudioTrack | undefined;
}

const MediaPlayer = (props: VideoPlayerProps) => {

  const container = useRef<HTMLDivElement>(null);
  const [sticker, setSticker] = useState<any>([]);
  const [laugh, setLaugh] = useState(0);
  const [thumbUp, setThumbUp] = useState(0);
  const [love, setLove] = useState(0);
  const [mad, setMad] = useState(0);
  const [sad, setSad] = useState(0);
  const [transparent, setTransparent] = useState(100);

  const [full, setFull] = useState(0)
  const [full2, setFull2] = useState(0)
  const [full3, setFull3] = useState(0)
  const [full4, setFull4] = useState(0)
  const [full5, setFull5] = useState(0)
  const [wiggle, setWiggle] = useState(0);
  const [wiggle2, setWiggle2] = useState(0);
  const [wiggle3, setWiggle3] = useState(0);
  const [wiggle4, setWiggle4] = useState(0);
  const [wiggle5, setWiggle5] = useState(0);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'
    }
  }

  useEffect(() => {
    if (!container.current) return;
    props.videoTrack?.play(container.current);
    return () => {
      props.videoTrack?.stop();
    };
  }, [container, props.videoTrack]);
  useEffect(() => {

    fetch('/v1/sticker/reaction?userId=123', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'
      },
      method:"get"
    })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.body)
      setSticker(json.body.stickerList)
      console.log(sticker)
    })

    props.audioTrack?.play();
    return () => {
      props.audioTrack?.stop();
    };
  }, [props.audioTrack]);

  const between = (min, max) => Math.floor(
    Math.random() * (max - min) + min
  )

  return (
    <>
      <div ref={container}  className="video-player" style={{ width: "320px", height: "240px"}}>
      </div>
      <ReactionsWrapper>
        <ReactionButtonWrapper onClick={() => {
            setTransparent(100);
            const wayUp = between(-200, -220);
            const isFull = between(1, 10);
            const leftRight = between(-20, 20)

            setWiggle(leftRight);
            setFull(isFull);
            setLove(wayUp);
          }} src={sticker.length > 0 && sticker[0].stickerImg}
        />
        <ReactionButtonWrapper  onClick={() => {
            const wayUp = between(-200, -220);
            const isFull = between(1, 10);
            const leftRight = between(-20, 20)
            setWiggle2(leftRight);
            setFull2(isFull);
            setLaugh(wayUp);
          }}src={sticker.length > 0 && sticker[1].stickerImg}
        />
        <ReactionButtonWrapper onClick={() => {
            const wayUp = between(-200, -220);
            const isFull = between(1, 10);
            const leftRight = between(-20, 20)
            setWiggle3(leftRight);
            setFull3(isFull);
            setThumbUp(wayUp);
          }}
          src={sticker.length > 0 && sticker[2].stickerImg}
        />
        <ReactionButtonWrapper onClick={() => {
            const wayUp = between(-200, -220);
            const isFull = between(1, 10);
            const leftRight = between(-20, 20)
            setWiggle4(leftRight);
            setFull4(isFull);
            setMad(wayUp);
          }}
          src={sticker.length > 0 && sticker[3].stickerImg}
        />
        <ReactionButtonWrapper onClick={() => {
            const wayUp = between(-200, -220);
            const isFull = between(1, 10);
            const leftRight = between(-20, 20)
            setWiggle5(leftRight);
            setFull5(isFull);
            setSad(wayUp);
          }}
          src={sticker.length > 0 && sticker[4].stickerImg}
        />
      </ReactionsWrapper>
      <ReactionsWrapper2>
        <ReactionButtonWrapper
          animate={{x: [0, wiggle, 0, wiggle, 0, wiggle, 0, wiggle], y: [0, love], opacity: [0, full, 0]}}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          transition={{ ease: "easeOut", duration: 1.5}}  
          src={sticker.length > 0 && sticker[0].stickerImg} 
        /> 
        <ReactionButtonWrapper 
          animate={{x: [0, wiggle2, 0, wiggle2, 0, wiggle2, 0, wiggle2], y: [0, laugh], opacity: [full2, 0] }} 
          transition={{ ease: "easeOut", duration: 1.5}}  

          src={sticker.length > 0 && sticker[1].stickerImg} 
        />

        <ReactionButtonWrapper 
          animate={{x: [0, wiggle3, 0, wiggle3, 0, wiggle3, 0, wiggle3], y: [0, thumbUp], opacity: [full3, 0] }}
          transition={{ ease: "easeOut", duration: 1.5}}  
      
          src={sticker.length > 0 && sticker[2].stickerImg} 
        />

        <ReactionButtonWrapper 
          animate={{x: [0, wiggle4, 0, wiggle4, 0, wiggle4, 0, wiggle4], y: [0, mad], opacity: [full4, 0]}} 
          transition={{ ease: "easeOut", duration: 1.5}}  

          src={sticker.length > 0 && sticker[3].stickerImg} 
        />

        <ReactionButtonWrapper 
          animate={{x: [0, wiggle5, 0, wiggle5, 0, wiggle5, 0, wiggle5], y: [0, sad], opacity: [full5, 0] }}
          transition={{ ease: "easeOut", duration: 1.5}}  
      
          src={sticker.length > 0 && sticker[4].stickerImg} 
        />
      </ReactionsWrapper2>
    </>
  );
}

export default MediaPlayer;