import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
export const default_theme  = {
    fullScreen: {
        zIndex: -1
      },
    background: {
      color: {
        value: ""
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push
        },
        onHover: {
          enable: false,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: MoveDirection.outside,
        enable: true,
        outModes: {
          default: OutMode.out
        },
        random: true,
        speed: 1,
        straight: true
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 500
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };
export const tunnel = {
    fullScreen: {
      zIndex: -1
    },
    particles: {
      number: {
        value: 0
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.8
        }
      },
      size: {
        value: {
          min: 1,
          max: 10
        }
      },
      move: {
        enable: true,
        size: true,
        speed: 5,
        direction: MoveDirection.none,
        outModes: {
          default: OutMode.destroy
        },
        trail: {
          enable: true,
          fillColor: "#000000",
          length: 3
        }
      }
    },
    background: {
      color: ""
    },
    emitters: {
      direction: "none",
      rate: {
        delay: 0.25,
        quantity: 10
      },
      position: {
        x: 50,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      },
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: 5
          },
          l: {
            enable: true,
            speed: 0,
            offset: {
              min: 20,
              max: 80
            }
          }
        }
      }
    }
  } ;

  export const hexagonPath =  {
    particles: {
      color: {
        value: "#FF0000",
        animation: {
          enable: true,
          speed: 10
        }
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000
          }
        },
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.destroy
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          }
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: "#000",
          length: 20,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 2
      }
    },
    background: {
      color: "#000"
    },
    fullScreen: {
      zIndex: -1
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      }
    }
  };