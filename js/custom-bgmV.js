ig.module("impact.feature.bgm.bgm-vtfa")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      "mirrorEncounter": {
        path: "media/bgm/Retnuocne.ogg",
        loopEnd: 99.560,
        volume: 1.5
      },
      "mirrorBF": {
        path: "media/bgm/Tserof-Oib.ogg",
        loopEnd: 92.440,
        volume: 1.5
      },
      "newVegasDungeon6": {
        path: "media/bgm/newVegasDungeon6.ogg",
        loopEnd: 128.000,
        volume: 1.5
      },
      "guardianTalesBattle1": {
        path: "media/bgm/gt-battle1.ogg",
        loopEnd: 60.000,
        volume: 1.0
      },
      "guardianTalesBattle2": {
        path: "media/bgm/gt-battle2.ogg",
        loopEnd: 54.865,
        volume: 1.0
      },
      "guardianTalesShop": {
        path: "media/bgm/gt-shop.ogg",
        loopEnd: 80.000,
        volume: 1.0
      },
      "guardianTalesKBForest": {
        path: "media/bgm/gt-forest.ogg",
        loopEnd: 64.000,
        volume: 1.0
      },
      "starManTheme": {
        path: "media/bgm/starmanTheme.ogg",
        loopEnd: 11.925,
        volume: 1.0,
        introPath: "media/bgm/starmanThemeIntro.ogg",
        introEnd: 14.180
      },
      "vermillionFacility": {
        path: "media/bgm/vermillion-training-facility.ogg",
        loopEnd: 358.437,
        volume: 1.0
      },
      "actionTime": {
        path: "media/bgm/testing-time.ogg",
        loopEnd: 153.627,
        volume: 1.0
      },
      "obscureFloor": {
        path: "media/bgm/obscureFloors.ogg",
        loopEnd: 158.360,
        volume: 1.0
      },
      "action2": {
        path: "media/bgm/Action2.ogg",
        loopEnd: 145.920,
        volume: 1.0
      },
      "action3": {
        path: "media/bgm/Action3.ogg",
        loopEnd: 115,
        volume: 1.0
      },
      "lowHazard": {
        path: "media/bgm/lowHazardChallenge.ogg",
        loopEnd: 162.915,
        volume: 1.0
      },
      "puzzleSolving": {
        path: "media/bgm/puzzleSolving.ogg",
        loopEnd: 216.000,
        volume: 1.0
      },
      "outLook": {
        path: "media/bgm/outLook.ogg",
        loopEnd: 115.200,
        volume: 1.0
      },
      "hardChallenge": {
        path: "media/bgm/hardChallenge.ogg",
        loopEnd: 191.788,
        volume: 1.0
      },
      "golem": {
        path: "media/bgm/GOLEM.ogg",
        loopEnd: 107.900,
        volume: 1.0,
        introPath: "media/bgm/GOLEM-I.ogg",
        introEnd: 12.115
      },
      "advancedRank": {
        path: "media/bgm/advanced-rank.ogg",
        loopEnd: 169.447,
        volume: 1.0
      },
      "corridorChallenge": {
        path: "media/bgm/challengeCorridors.ogg",
        loopEnd: 120.000,
        volume: 1.0
      },
      "secretChallenge": {
        path: "media/bgm/secretChallenge.ogg",
        loopEnd: 140.600,
        volume: 1.0
      },
      "bioWalk": {
        path: "media/bgm/bioForest.ogg",
        loopEnd: 120.905,
        volume: 1.0
      },
      "fightOn": {
        path: "media/bgm/fightion.ogg",
        loopEnd: 99.550,
        volume: 1.0
      },
      "action2.1": {
        path: "media/bgm/Action2.1.ogg",
        loopEnd: 153.605,
        volume: 1.0
      },
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      trainingLily: {
        field: {
          track: "vermillionFacility",
          volume: 1.2,
        },
        battle: {
          track: "actionTime",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "actionTime",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "advancedRank",
    			volume: 1.2,
    		}
      },
      vtfPuzzle: {
        field: {
          track: "puzzleSolving",
          volume: 1.2,
        },
        battle: {
          track: "actionTime",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "actionTime",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "advancedRank",
    			volume: 1.2,
    		}
      },
      vtfHub: {
        field: {
          track: "outLook",
          volume: 1.2,
        },
        battle: {
          track: "actionTime",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "actionTime",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "advancedRank",
    			volume: 1.2,
    		}
      },
      vtfBio: {
        field: {
          track: "bioWalk",
          volume: 1.2,
        },
        battle: {
          track: "fightOn",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "fightOn",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "fightOn",
    			volume: 1.2,
    		}
      },
      vtfObscure: {
        field: {
          track: "corridorChallenge",
          volume: 1.1,
        },
        battle: {
          track: "action2.1",
          volume: 1.1,
        },
    		rankBattle: {
    			track: "action2.1",
    			volume: 1.1
    		},
    		sRankBattle: {
    			track: "action2.1",
    			volume: 1.1,
    		}
      },
      guardianTalesBG: {
        field: {
          track: "guardianTalesShop",
          volume: 1.2,
        },
        battle: {
          track: "guardianTalesBattle1",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "guardianTalesBattle1",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "guardianTalesBattle2",
    			volume: 1.2,
    		}
      },
      guardianTalesSummon: {
        field: {
          track: "guardianTalesShop",
          volume: 1.2,
        },
        battle: {
          track: "guardianTalesShop",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "guardianTalesShop",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "guardianTalesShop",
    			volume: 1.2,
    		}
      },
      guardianTalesForest: {
        field: {
          track: "guardianTalesKBForest",
          volume: 1.2,
        },
        battle: {
          track: "guardianTalesBattle1",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "guardianTalesBattle1",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "guardianTalesBattle1",
    			volume: 1.2,
    		}
      },
      mirroredBioForest: {
        field: {
          track: "mirrorBF",
          volume: 1.2,
        },
        battle: {
          track: "mirrorEncounter",
          volume: 1.2,
        },
    		rankBattle: {
    			track: "mirrorEncounter",
    			volume: 1.2
    		},
    		sRankBattle: {
    			track: "mirrorEncounter",
    			volume: 1.2,
    		}
      }

    });
  });