PixelForge is a full-featured, no-code, open-source game development software. You can build games for mobile, desktop and the web. PixelForge is fast and easy to use: the game logic is built up using an intuitive and powerful event-based system.

## Open the netlify link here
[PixelForge-Netlify](https://inspiring-malabi-96a7eb.netlify.app/).

## Overview of the architecture

| Directory     | ℹ️ Description                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------- |
| `Core`        | ClickEngine core library, containing common tools to implement the IDE and work with ClickEngine games. |
| `GDJS`        | The game engine, written in TypeScript, using PixiJS (WebGL), powering all ClickEngine games.        |
| `ClickEngine.js` | Bindings of `Core`, `GDJS` and `Extensions` to JavaScript (with WebAssembly), used by the IDE.    |
| `newIDE`      | The game editor, written in JavaScript with React, Electron and PixiJS.                           |
| `Extensions`  | Extensions for the game engine, providing objects, behaviors, events and new features.            |

In the evolving landscape of blockchain, MoveVM emerges as a transformative force, especially when integrated with Ethereum, facilitated by the innovative strides of Movement Labs. This integration represents a paradigm shift, merging MoveVM’s robust security and efficient programming model with Ethereum’s extensive ecosystem. The collaboration, driven by the M2 framework and Movement SDK, signifies a new era in blockchain technology, blending advanced security, efficiency, and interoperability to create a more efficient and scalable blockchain infrastructure.

**PixelForge is deployed on the move-evm network**

Through the strategic union of MoveVM and Ethereum, enhanced by the Fractal system’s seamless code translation and the scalability of Zero Knowledge proofs, a synergistic environment is forged. This not only elevates the technological capabilities of both platforms but also sets a precedent for future blockchain innovations. It promises a unified blockchain future where the integrated strengths of MoveVM and Ethereum catalyze the development of sophisticated, secure, and user-centric blockchain applications, heralding a new chapter in the digital economy’s evolution.

## License

- The Core library, the native and HTML5 game engines, the IDE, and all extensions (respectively `Core`, `GDJS`, `newIDE` and `Extensions` folders) are under the **MIT license**.
