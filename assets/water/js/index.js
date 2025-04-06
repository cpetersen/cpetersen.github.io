/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pkg/water.js":
/*!**********************!*\
  !*** ./pkg/water.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FluidSimulation: () => (/* binding */ FluidSimulation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initSync: () => (/* binding */ initSync)\n/* harmony export */ });\nlet wasm;\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedDataViewMemory0 = null;\n\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nconst FluidSimulationFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_fluidsimulation_free(ptr >>> 0, 1));\n\nclass FluidSimulation {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(FluidSimulation.prototype);\n        obj.__wbg_ptr = ptr;\n        FluidSimulationFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        FluidSimulationFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_fluidsimulation_free(ptr, 0);\n    }\n    /**\n     * Creates a new fluid simulation with the specified parameters\n     *\n     * * `width` - Width of the simulation grid\n     * * `height` - Height of the simulation grid\n     * * `diff` - Diffusion rate (how quickly the fluid spreads)\n     * * `visc` - Viscosity (how thick/sticky the fluid is)\n     * * `dt` - Time step for the simulation\n     * @param {number} width\n     * @param {number} height\n     * @param {number} diff\n     * @param {number} visc\n     * @param {number} dt\n     * @returns {FluidSimulation}\n     */\n    static new(width, height, diff, visc, dt) {\n        const ret = wasm.fluidsimulation_new(width, height, diff, visc, dt);\n        return FluidSimulation.__wrap(ret);\n    }\n    step() {\n        wasm.fluidsimulation_step(this.__wbg_ptr);\n    }\n    /**\n     * @param {number} x\n     * @param {number} y\n     * @param {number} amount\n     */\n    add_density(x, y, amount) {\n        wasm.fluidsimulation_add_density(this.__wbg_ptr, x, y, amount);\n    }\n    /**\n     * @param {number} x\n     * @param {number} y\n     * @param {number} amount_x\n     * @param {number} amount_y\n     */\n    add_velocity(x, y, amount_x, amount_y) {\n        wasm.fluidsimulation_add_velocity(this.__wbg_ptr, x, y, amount_x, amount_y);\n    }\n    /**\n     * @param {CanvasRenderingContext2D} ctx\n     * @param {HTMLCanvasElement} canvas\n     */\n    render(ctx, canvas) {\n        wasm.fluidsimulation_render(this.__wbg_ptr, ctx, canvas);\n    }\n    /**\n     * @param {CanvasRenderingContext2D} ctx\n     * @param {HTMLCanvasElement} canvas\n     * @param {number} r\n     * @param {number} g\n     * @param {number} b\n     * @param {number} intensity\n     */\n    render_with_color(ctx, canvas, r, g, b, intensity) {\n        wasm.fluidsimulation_render_with_color(this.__wbg_ptr, ctx, canvas, r, g, b, intensity);\n    }\n    /**\n     * Apply decay to the density and velocity fields\n     *\n     * * `density_decay` - Multiplier for density (1.0 = no decay, 0.9 = 10% decay per step)\n     * * `velocity_decay` - Multiplier for velocity (1.0 = no decay, 0.9 = 10% decay per step)\n     * @param {number} density_decay\n     * @param {number} velocity_decay\n     */\n    apply_decay(density_decay, velocity_decay) {\n        wasm.fluidsimulation_apply_decay(this.__wbg_ptr, density_decay, velocity_decay);\n    }\n    /**\n     * Get the x component of velocity at a specific grid position\n     * @param {number} x\n     * @param {number} y\n     * @returns {number}\n     */\n    get_velocity_x(x, y) {\n        const ret = wasm.fluidsimulation_get_velocity_x(this.__wbg_ptr, x, y);\n        return ret;\n    }\n    /**\n     * Get the y component of velocity at a specific grid position\n     * @param {number} x\n     * @param {number} y\n     * @returns {number}\n     */\n    get_velocity_y(x, y) {\n        const ret = wasm.fluidsimulation_get_velocity_y(this.__wbg_ptr, x, y);\n        return ret;\n    }\n    /**\n     * Get the density at a specific grid position\n     * @param {number} x\n     * @param {number} y\n     * @returns {number}\n     */\n    get_density(x, y) {\n        const ret = wasm.fluidsimulation_get_density(this.__wbg_ptr, x, y);\n        return ret;\n    }\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_error_7534b8e9a36f1ab4 = function(arg0, arg1) {\n        let deferred0_0;\n        let deferred0_1;\n        try {\n            deferred0_0 = arg0;\n            deferred0_1 = arg1;\n            console.error(getStringFromWasm0(arg0, arg1));\n        } finally {\n            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);\n        }\n    };\n    imports.wbg.__wbg_fillRect_c38d5d56492a2368 = function(arg0, arg1, arg2, arg3, arg4) {\n        arg0.fillRect(arg1, arg2, arg3, arg4);\n    };\n    imports.wbg.__wbg_height_838cee19ba8597db = function(arg0) {\n        const ret = arg0.height;\n        return ret;\n    };\n    imports.wbg.__wbg_new_8a6f238a6ece86ea = function() {\n        const ret = new Error();\n        return ret;\n    };\n    imports.wbg.__wbg_setfillStyle_4f8f616d87dea4df = function(arg0, arg1) {\n        arg0.fillStyle = arg1;\n    };\n    imports.wbg.__wbg_stack_0ed75d68575b0f3c = function(arg0, arg1) {\n        const ret = arg1.stack;\n        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len1 = WASM_VECTOR_LEN;\n        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n    };\n    imports.wbg.__wbg_width_5dde457d606ba683 = function(arg0) {\n        const ret = arg0.width;\n        return ret;\n    };\n    imports.wbg.__wbindgen_init_externref_table = function() {\n        const table = wasm.__wbindgen_export_3;\n        const offset = table.grow(4);\n        table.set(0, undefined);\n        table.set(offset + 0, undefined);\n        table.set(offset + 1, null);\n        table.set(offset + 2, true);\n        table.set(offset + 3, false);\n        ;\n    };\n    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {\n        const ret = getStringFromWasm0(arg0, arg1);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedDataViewMemory0 = null;\n    cachedUint8ArrayMemory0 = null;\n\n\n    wasm.__wbindgen_start();\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n\n    if (typeof module !== 'undefined') {\n        if (Object.getPrototypeOf(module) === Object.prototype) {\n            ({module} = module)\n        } else {\n            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')\n        }\n    }\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(module_or_path) {\n    if (wasm !== undefined) return wasm;\n\n\n    if (typeof module_or_path !== 'undefined') {\n        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {\n            ({module_or_path} = module_or_path)\n        } else {\n            console.warn('using deprecated parameters for the initialization function; pass a single object instead')\n        }\n    }\n\n    if (typeof module_or_path === 'undefined') {\n        module_or_path = new URL(/* asset import */ __webpack_require__(/*! water_bg.wasm */ \"./pkg/water_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {\n        module_or_path = fetch(module_or_path);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await module_or_path, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://water/./pkg/water.js?");

/***/ }),

/***/ "./pkg/water_bg.wasm":
/*!***************************!*\
  !*** ./pkg/water_bg.wasm ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"244366f3d7831117a2df.wasm\";\n\n//# sourceURL=webpack://water/./pkg/water_bg.wasm?");

/***/ }),

/***/ "./src/web/index.js":
/*!**************************!*\
  !*** ./src/web/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_water__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pkg/water */ \"./pkg/water.js\");\n// Import the WASM module\n\n\n// Default configuration - will be overridden by window.FLUID_CONFIG if available\nconst DEFAULT_CONFIG = {\n  // Grid and simulation settings\n  gridSize: 100,               // Grid resolution (higher values = more detailed but slower)\n  diffusion: 0.0001,           // How quickly the fluid diffuses (higher = more diffusion)\n  viscosity: 0.0000001,        // Fluid thickness (higher = more viscous/thicker)\n  timeStep: 0.2,               // Simulation time step (higher = faster but less stable)\n  \n  // Interaction settings\n  densityAmount: 5.0,          // Amount of density added per interaction (higher = more visible)\n  velocityScale: 0.05,         // How strongly mouse movements affect the fluid\n  \n  // Fluid decay\n  densityDecay: 0.999,         // Rate at which density fades (1.0 = no decay, 0.9 = fast decay)\n  velocityDecay: 0.99,         // Rate at which velocity slows down\n  \n  // Visual settings\n  fluidColor: [0, 100, 255],   // RGB values for fluid color\n  backgroundColor: [0, 0, 0],  // RGB values for background\n  colorIntensity: 0.5,         // Intensity multiplier for colors\n  \n  // Effect settings\n  responsive: true,            // Whether to resize with the window\n  showVelocity: false,         // Show velocity vectors (for debugging)\n  \n  // Performance settings\n  frameSkip: 0                 // Skip N frames between calculations (0 = calculate every frame)\n};\n\n// Merge default config with any user-provided config\nconst CONFIG = Object.assign({}, DEFAULT_CONFIG, window.FLUID_CONFIG || {});\n\n// Initialize the WASM module\n(0,_pkg_water__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(() => {\n  // Canvas setup\n  const canvas = document.getElementById('fluid-canvas');\n  const ctx = canvas.getContext('2d');\n\n  // Set canvas size based on settings\n  if (CONFIG.responsive) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    \n    // Add resize listener\n    window.addEventListener('resize', () => {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    });\n  } else {\n    // Use the size from CSS or set a default\n    canvas.width = canvas.clientWidth || 800;\n    canvas.height = canvas.clientHeight || 600;\n  }\n\n  // Create fluid simulation with configurable parameters\n  const fluidSim = _pkg_water__WEBPACK_IMPORTED_MODULE_0__.FluidSimulation.new(\n    CONFIG.gridSize,\n    CONFIG.gridSize, \n    CONFIG.diffusion,\n    CONFIG.viscosity, \n    CONFIG.timeStep\n  );\n\n  // Mouse tracking\n  let mouseX = 0;\n  let mouseY = 0;\n  let lastMouseX = 0;\n  let lastMouseY = 0;\n  let isMouseDown = false;\n\n  canvas.addEventListener('mousedown', (e) => {\n    isMouseDown = true;\n    \n    // Get mouse coordinates relative to the canvas\n    const rect = canvas.getBoundingClientRect();\n    const scaleX = canvas.width / rect.width;\n    const scaleY = canvas.height / rect.height;\n    \n    // Calculate mouse position relative to the canvas, accounting for scaling\n    lastMouseX = mouseX = (e.clientX - rect.left) * scaleX;\n    lastMouseY = mouseY = (e.clientY - rect.top) * scaleY;\n  });\n\n  canvas.addEventListener('mouseup', () => {\n    isMouseDown = false;\n  });\n  \n  // Add touch support for mobile devices\n  canvas.addEventListener('touchstart', (e) => {\n    e.preventDefault(); // Prevent scrolling\n    isMouseDown = true;\n    \n    const touch = e.touches[0];\n    const rect = canvas.getBoundingClientRect();\n    const scaleX = canvas.width / rect.width;\n    const scaleY = canvas.height / rect.height;\n    \n    lastMouseX = mouseX = (touch.clientX - rect.left) * scaleX;\n    lastMouseY = mouseY = (touch.clientY - rect.top) * scaleY;\n  });\n  \n  canvas.addEventListener('touchend', (e) => {\n    e.preventDefault();\n    isMouseDown = false;\n  });\n  \n  canvas.addEventListener('touchmove', (e) => {\n    e.preventDefault();\n    \n    if (isMouseDown) {\n      try {\n        const touch = e.touches[0];\n        const rect = canvas.getBoundingClientRect();\n        const scaleX = canvas.width / rect.width;\n        const scaleY = canvas.height / rect.height;\n        \n        mouseX = (touch.clientX - rect.left) * scaleX;\n        mouseY = (touch.clientY - rect.top) * scaleY;\n        \n        // Calculate grid position\n        const gridX = Math.floor(mouseX / canvas.width * CONFIG.gridSize);\n        const gridY = Math.floor(mouseY / canvas.height * CONFIG.gridSize);\n        \n        // Make sure grid coordinates are valid\n        if (gridX >= 0 && gridX < CONFIG.gridSize && gridY >= 0 && gridY < CONFIG.gridSize) {\n          // Add density at touch position\n          fluidSim.add_density(gridX, gridY, CONFIG.densityAmount);\n          \n          // Add velocity based on touch movement\n          const dx = Math.max(-10, Math.min(10, (mouseX - lastMouseX)));\n          const dy = Math.max(-10, Math.min(10, (mouseY - lastMouseY)));\n          fluidSim.add_velocity(gridX, gridY, dx * CONFIG.velocityScale, dy * CONFIG.velocityScale);\n        }\n        \n        lastMouseX = mouseX;\n        lastMouseY = mouseY;\n      } catch (error) {\n        console.error(\"Error in touch interaction:\", error);\n      }\n    }\n  });\n\n  canvas.addEventListener('mousemove', (e) => {\n    // Get mouse coordinates relative to the canvas\n    const rect = canvas.getBoundingClientRect();\n    const scaleX = canvas.width / rect.width;\n    const scaleY = canvas.height / rect.height;\n    \n    // Calculate mouse position relative to the canvas, accounting for scaling\n    mouseX = (e.clientX - rect.left) * scaleX;\n    mouseY = (e.clientY - rect.top) * scaleY;\n    \n    if (isMouseDown) {\n      try {\n        // Calculate grid position\n        const gridX = Math.floor(mouseX / canvas.width * CONFIG.gridSize);\n        const gridY = Math.floor(mouseY / canvas.height * CONFIG.gridSize);\n        \n        // Make sure grid coordinates are valid\n        if (gridX >= 0 && gridX < CONFIG.gridSize && gridY >= 0 && gridY < CONFIG.gridSize) {\n          // Add density at mouse position using the configured amount\n          fluidSim.add_density(gridX, gridY, CONFIG.densityAmount);\n          \n          // Add velocity based on mouse movement with configurable scaling\n          // Scale the velocity by the same factor as the canvas\n          const dx = Math.max(-10, Math.min(10, (mouseX - lastMouseX)));\n          const dy = Math.max(-10, Math.min(10, (mouseY - lastMouseY)));\n          fluidSim.add_velocity(gridX, gridY, dx * CONFIG.velocityScale, dy * CONFIG.velocityScale);\n        }\n        \n        lastMouseX = mouseX;\n        lastMouseY = mouseY;\n      } catch (error) {\n        console.error(\"Error in mouse interaction:\", error);\n      }\n    }\n  });\n\n  // Frame counter for frame skipping\n  let frameCount = 0;\n\n  // Animation loop\n  function animate() {\n    try {\n      // Clear canvas with configured background color\n      const [r, g, b] = CONFIG.backgroundColor;\n      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n      \n      // Only process physics on appropriate frames (allows frame skipping for performance)\n      if (frameCount % (CONFIG.frameSkip + 1) === 0) {\n        // Apply density and velocity decay if configured\n        if (CONFIG.densityDecay !== 1.0 || CONFIG.velocityDecay !== 1.0) {\n          fluidSim.apply_decay(CONFIG.densityDecay, CONFIG.velocityDecay);\n        }\n        \n        // Step simulation\n        fluidSim.step();\n      }\n      \n      // Render fluid with configured color settings\n      fluidSim.render_with_color(\n        ctx, \n        canvas, \n        CONFIG.fluidColor[0],\n        CONFIG.fluidColor[1], \n        CONFIG.fluidColor[2],\n        CONFIG.colorIntensity\n      );\n      \n      // Optionally draw velocity visualization\n      if (CONFIG.showVelocity) {\n        drawVelocityField(fluidSim, ctx, canvas);\n      }\n      \n      // Increment frame counter\n      frameCount = (frameCount + 1) % 1000; // Prevent potential overflow\n    } catch (error) {\n      console.error(\"Error in animation loop:\", error);\n      // Continue the animation loop even if there's an error\n    }\n    \n    requestAnimationFrame(animate);\n  }\n  \n  // Helper function to visualize velocity field\n  function drawVelocityField(sim, ctx, canvas) {\n    const cellWidth = canvas.width / CONFIG.gridSize;\n    const cellHeight = canvas.height / CONFIG.gridSize;\n    \n    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';\n    ctx.lineWidth = 1;\n    \n    // Draw every 5th vector to avoid clutter\n    for (let i = 5; i < CONFIG.gridSize; i += 5) {\n      for (let j = 5; j < CONFIG.gridSize; j += 5) {\n        const vx = sim.get_velocity_x(i, j);\n        const vy = sim.get_velocity_y(i, j);\n        \n        const x = i * cellWidth;\n        const y = j * cellHeight;\n        \n        ctx.beginPath();\n        ctx.moveTo(x, y);\n        ctx.lineTo(x + vx * 50, y + vy * 50); // Scale for visibility\n        ctx.stroke();\n      }\n    }\n  }\n\n  animate();\n});\n\n//# sourceURL=webpack://water/./src/web/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/web/index.js");
/******/ 	
/******/ })()
;