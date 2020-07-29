import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { useState, useEffect } from 'react';
import { Execute } from '@gooddata/react-components';
import C from './catalog';
import config from './config';
import { loginMachinery } from './utils';

// import '@gooddata/react-components/styles/css/main.css';
// import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   loginMachinery({ ...config }, () => setIsLogged(true));
  // });

  // if (!isLogged) {
  //   return <span>Checking your credentials, please wait…</span>;
  // }

  return (
      <Scene
        // vr-mode-ui={{ enabled: true }}
        // renderer="logarithmicDepthBuffer: true;"
        // embedded
        // arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        // arjs={{ trackingMethod: 'best', sourceType: 'webcam', debugUIEnabled: false }}
        inspector="http://localhost:3333"
      >
        <div style={{ height: 70 }}></div>
        {/* <a-nft
          type="nft"
          url="<path-to-your-image-descriptors>"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="100 100 0"
          ></a-entity>
        </a-nft> */}
        {/* <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box> */}
        {/* <Entity geometry={{ primitive: 'box' }} material={{ color: '#4CC3D9' }} position={{ x: -1, y: 0.5, z: -3 }} shadow /> */}
        {/* <Entity primitive="a-box" color="red" position="0 0 -5" /> */}
        <Entity
          primitive="a-nft"
          type="nft"
          url="https://arjs-cors-proxy.herokuapp.com/https://gooddata-demo.s3.amazonaws.com/gd-ui-boilerplate-ar/dinosaur/arjs3-image-tracking" smooth={true} smoothCount={10} smoothTolerance={.01} smoothThreshold={5}
        >
          <Entity primitive="a-box" color="blue" position="0 0 -5" />
          <Entity primitive="a-box" color="blue" position="100 100 0" />
          {/* <Entity
            primitive="a-entity"
š           gltf-model="https://arjs-cors-proxy.herokuapp.com/https://gooddata-demo.s3.amazonaws.com/gd-ui-boilerplate-ar/resources/Flamingo.glb"
            scale="5 5 5"
            position="100 100 0"
          /> */}
        </Entity>
        {/* <a-entity camera></a-entity> */}
        {/* <Entity primitive="camera" /> */}
        <Entity primitive="a-entity" camera={true} type="camera" />
        <Execute
            {...config}
            afm={{
              measures: [{
                localIdentifier: 'm1',
                definition: {
                  measure: {
                    item: {
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }],
            }}
          >{({error, isLoading, result}) => {
            let text = '';

            if (error) {
              text = 'Error';
            }

            if (isLoading) {
              text = '⏳';
            }

            if (result) {
              text = result.executionResult.data[0];
            }

            return (
              <>
                <Entity text={{value: `# Bicycles: ${isLoading ? '⏳' : 4}`, color: 'yellow'}} position={{x: 0, y: 1.5, z: -1}}/>
                <Entity text={{value: `# Checks: ${text}`, color: 'green'}} position={{x: 0.6, y: 0.5, z: -1}}/>
                <Entity text={{value: `# Windows: ${isLoading ? '⏳' : 2}`, color: 'red'}} position={{x: 0.8, y: 1.6, z: -1}}/>
              </>
            );
          }}
        </Execute>
      </Scene>
  );
}

export default App;
