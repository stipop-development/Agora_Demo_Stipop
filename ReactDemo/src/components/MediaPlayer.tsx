import { ILocalVideoTrack, IRemoteVideoTrack, ILocalAudioTrack, IRemoteAudioTrack } from "agora-rtc-sdk-ng";
import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { ReactionButtonWrapper, ReactionsWrapper, ReactionsWrapper2 } from "./MediaPlayer.styles";

import hahaha from '../images/hahaha.png';
import angry from '../images/angry.png';
import hi from '../images/hi.png';
import lov from '../images/love.png';
import sa from '../images/sad.png';

import { Input } from "./input";
import axios from 'axios';
import { createLoopVariable } from "typescript";

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

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [stickers, setStickers] = useState<any[]>([]);
  const [float, setFloat] = useState('');

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

  const queryHandler = async (event) => {
    setQuery(event.target.value);
    console.log("Query: ", query);

    const response = await axios(`/v1/search?userId=123&pageNumber=1&searchText=${query}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'apiKey': 'e0fb71a7418582285972d33562218343',
        }
    });
    const results = response.data.body.stickerList;
    console.log(results);
    setStickers(results);
    return results;
  }

  return (
    <>
      <div ref={container}  className="video-player" style={{ width: "500px", height: "500px"}}>
        { float === '' ?
          null
          :
          <Draggable
            bounds={{top:-23, left:-15, right: 410, bottom: 405}}
          >
            <div style={{ position: 'absolute', zIndex: 1}}>
              <img style={{ width: '100px', height: '100px' }} draggable={false} src={float} />
            </div>
          </Draggable>
      }        
      </div>
      <div>
        <div style={{display: 'flex'}}>
          <ReactionsWrapper>
            <ReactionButtonWrapper onClick={() => {
                setTransparent(100);
                const wayUp = between(-200, -220);
                const isFull = between(1, 10);
                const leftRight = between(-20, 20)

                setWiggle(leftRight);
                setFull(isFull);
                setLove(wayUp);
              }} src={lov}
            />
            <ReactionButtonWrapper  onClick={() => {
                const wayUp = between(-200, -220);
                const isFull = between(1, 10);
                const leftRight = between(-20, 20)
                setWiggle2(leftRight);
                setFull2(isFull);
                setLaugh(wayUp);
              }} src={hi}
            />
            <ReactionButtonWrapper onClick={() => {
                const wayUp = between(-200, -220);
                const isFull = between(1, 10);
                const leftRight = between(-20, 20)
                setWiggle3(leftRight);
                setFull3(isFull);
                setThumbUp(wayUp);
              }}
              src={hahaha}
            />
            <ReactionButtonWrapper onClick={() => {
                const wayUp = between(-200, -220);
                const isFull = between(1, 10);
                const leftRight = between(-20, 20)
                setWiggle4(leftRight);
                setFull4(isFull);
                setMad(wayUp);
              }}
              src={angry}
            />
            <ReactionButtonWrapper onClick={() => {
                const wayUp = between(-200, -220);
                const isFull = between(1, 10);
                const leftRight = between(-20, 20)
                setWiggle5(leftRight);
                setFull5(isFull);
                setSad(wayUp);
              }}
              src={sa}
            />
          </ReactionsWrapper>
          <div
            onClick={() => setOpen(true)} 
            style={{ width: '20px', height: '20px', backgroundColor: 'black', marginTop: '12px', marginLeft: '10px'}}
          >
            {open ? 
              <div
                style={{
                  marginLeft: '40px', 
                  width: '430px',
                  maxWidth: 'calc(100vw - 50px)',
                  padding: '1',
                  borderRadius: 'light',
                  border: 'solid'
                }}
              >
                <form
                >
                  <input 
                    style={{ width: '400px', marginLeft: '10px', marginTop: '10px'}}
                    type="text"
                    placeholder="search for stickers!"
                    onChange={queryHandler}
                  />
                </form>
                {query ? 
                  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                      {stickers &&
                          stickers.map((sticker, index) => {
                              return (
                                  <div key={sticker.stickerId}>
                                      <img src={sticker.stickerImg} onClick={() => setFloat(sticker.stickerImg)} style={{ width: '130px', height: '150px'}} />
                                  </div>
                              );                         
                          })
                          
                      }
                  </div>
                  :
                  <>
                    <div style={{ textAlign: 'center', marginTop: '35px'}}>
                        <img style={{width: '250px', height: '250px' }}src="https://img.stipop.io/2019/5/30/1559203142542_MOE_006.gif" />
                    </div>
                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Search for Stickers!</div>
                  </> 
                }
              </div>
              :
              null
            }
          </div>
        </div>
        <ReactionsWrapper2>
          <ReactionButtonWrapper
            animate={{x: [0, wiggle, 0, wiggle, 0, wiggle, 0, wiggle], y: [0, love], opacity: [0, full, 0]}}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            transition={{ ease: "easeOut", duration: 1.5}}  
            src={lov} 
          /> 
          <ReactionButtonWrapper 
            animate={{x: [0, wiggle2, 0, wiggle2, 0, wiggle2, 0, wiggle2], y: [0, laugh], opacity: [full2, 0] }} 
            transition={{ ease: "easeOut", duration: 1.5}}  

            src={hi} 
          />

          <ReactionButtonWrapper 
            animate={{x: [0, wiggle3, 0, wiggle3, 0, wiggle3, 0, wiggle3], y: [0, thumbUp], opacity: [full3, 0] }}
            transition={{ ease: "easeOut", duration: 1.5}}  
        
            src={hahaha} 
          />

          <ReactionButtonWrapper 
            animate={{x: [0, wiggle4, 0, wiggle4, 0, wiggle4, 0, wiggle4], y: [0, mad], opacity: [full4, 0]}} 
            transition={{ ease: "easeOut", duration: 1.5}}  

            src={angry} 
          />

          <ReactionButtonWrapper 
            animate={{x: [0, wiggle5, 0, wiggle5, 0, wiggle5, 0, wiggle5], y: [0, sad], opacity: [full5, 0] }}
            transition={{ ease: "easeOut", duration: 1.5}}  
        
            src={sa} 
          />
        </ReactionsWrapper2>
      </div>
    </>
  );
}

export default MediaPlayer;