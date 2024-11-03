'use client';

// ref: https://github.com/tsparticles/react/?tab=readme-ov-file#typescript-support---object
// ref: https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html

import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  Engine,
  type ISourceOptions,
  type Container,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const Background: React.FC = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('particlesLoaded', container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'whitesmoke',
        },
      },
      fullScreen: {
        enable: true,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: {
            enable: false,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: ['#00bbdd', '#404B69', '#DBEDF3'],
        },
        links: {
          color: 'random',
          distance: 200,
          enable: true,
          opacity: 1,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
      pauseOnBlur: true,
      responsive: [
        {
          // どういう意味？ドキュメントを読んでもよく分からない...
          mode: 'canvas',
          // mode: 'screen',
        },
      ],
    }),
    []
  );

  return (
    <>
      {init && (
        <Particles
          id={'tsparticles'}
          particlesLoaded={particlesLoaded}
          options={options}
          className={'absolute -z-50 opacity-85'}
        />
      )}
    </>
  );
};

export default Background;
