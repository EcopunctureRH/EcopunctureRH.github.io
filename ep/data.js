var APP_DATA = {
  "scenes": [
    {
      "id": "0-home",
      "name": "Home",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.005857714821251747,
          "pitch": 0.15245995336680984,
          "rotation": 0,
          "target": "3-ostansicht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dachterrasse",
      "name": "Dachterrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7471555133140804,
          "pitch": 0.01403412001020854,
          "rotation": 0,
          "target": "2-nordansicht"
        },
        {
          "yaw": -1.693806058572564,
          "pitch": 0.21338689907592112,
          "rotation": 0,
          "target": "4-sdansicht"
        },
        {
          "yaw": -0.14295330801628126,
          "pitch": -0.005812562769001772,
          "rotation": 0,
          "target": "3-ostansicht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nordansicht",
      "name": "Nordansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4104771474900648,
          "pitch": 0.19644895396043438,
          "rotation": 0,
          "target": "0-home"
        },
        {
          "yaw": 0.20172012959840124,
          "pitch": -0.36957574063451304,
          "rotation": 0,
          "target": "1-dachterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ostansicht",
      "name": "Ostansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0218678677324249,
          "pitch": 0.0016157442401603106,
          "rotation": 0,
          "target": "4-sdansicht"
        },
        {
          "yaw": -0.3501755205808834,
          "pitch": -0.07669710751564551,
          "rotation": 0,
          "target": "2-nordansicht"
        },
        {
          "yaw": -2.710324107880128,
          "pitch": 0.10389584575402999,
          "rotation": 0,
          "target": "0-home"
        },
        {
          "yaw": 0.22542322411371707,
          "pitch": -1.0274794113167314,
          "rotation": 0,
          "target": "1-dachterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sdansicht",
      "name": "Südansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14790281079529422,
          "pitch": -0.5483381757542727,
          "rotation": 0,
          "target": "1-dachterrasse"
        },
        {
          "yaw": -0.9322990823782487,
          "pitch": 0.1477552112814262,
          "rotation": 0,
          "target": "0-home"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
