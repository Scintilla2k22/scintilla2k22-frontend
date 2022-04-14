export const particlePreset = 
 {
    background: {
        color: {
            // value: "#0d47a1",
            value: "transparent",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: false,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 0,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#fff",
        },
        links: {
            color: "transparent",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 5,
            straight: false,
        },
        number: {
            density: {
                enable: false,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
        "twinkle": {
          "lines": {
            "enable": true,
            "frequency": 0.005,
            "opacity": 1,
            "color": {
              "value": "#ff0000"
            }
          },
          "particles": {
            "enable": true,
            "frequency": 0.05,
            "opacity": 1,
            "color": {
              "value": "#ffff00"
            }
          }
        },
    },
    detectRetina: true,
    style: {
        position: "absolute",
    }
};

export const particleStatic =  {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "transparent"
      },
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": false,
          "mode": []
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": false,
          "mode": [],
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4,
          "mix": false
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad"
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": false,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#fff",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 3
          },
          "rate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true
        }
      },
      "gradient": [],
      "groups": {},
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#fff"
        },
        "consent": false,
        "distance": 100,
        "enable": false,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#000"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "radius": 0
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": false,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": false,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 100
      },
      "opacity": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 2,
          "sync": false,
          "destroy": "none",
          "startValue": "random"
        }
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 45
        },
        "width": 1
      },
      "reduceDuplicates": false,
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {},
        "type": "circle"
      },
      "size": {
        "random": {
          "enable": false,
          "minimumValue": 1
        },
        "value": 3,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 5,
          "sync": false,
          "destroy": "none",
          "startValue": "random"
        }
      },
      "stroke": {
        "width": 0
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": 50
      },
      "zIndex": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      },
      "twinkle": {
        "lines": {
          "enable": true,
          "frequency": 0.0005,
          "opacity": 1,
          "color": {
            "value": "#ff0000"
          }
        },
        "particles": {
          "enable": true,
          "frequency": 0.0005,
          "opacity": 1,
          "color": {
            "value": "#ffff00"
          }
        }
      },
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "style": {},
    "themes": [],
    "zLayers": 100
  }


  export const particleTwinkle = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "transparent"
      },
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 400,
          "duration": 2,
          "mix": false,
          "opacity": 0.8,
          "size": 40,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 400,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "selectors": []
          }
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": false,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#ff0000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 3
          },
          "rate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true
        }
      },
      "gradient": [],
      "groups": {},
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#ffffff"
        },
        "consent": false,
        "distance": 150,
        "enable": true,
        "frequency": 1,
        "opacity": 0.4,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#000"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "radius": 0
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 80
      },
      "opacity": {
        "random": {
          "enable": true,
          "minimumValue": 0.1
        },
        "value": {
          "min": 0.1,
          "max": 0.5
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 3,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 0.1
        }
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 45
        },
        "width": 1
      },
      "reduceDuplicates": false,
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {},
        "type": "circle"
      },
      "size": {
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": {
          "min": 0.1,
          "max": 5
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 20,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 0.1
        }
      },
      "stroke": {
        "width": 0
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": true,
          "frequency": 0.005,
          "opacity": 1,
          "color": {
            "value": "#ff0000"
          }
        },
        "particles": {
          "enable": true,
          "frequency": 0.05,
          "opacity": 1,
          "color": {
            "value": "#ffff00"
          }
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": 50
      },
      "zIndex": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "style": {},
    "themes": [],
    "zLayers": 100
  }