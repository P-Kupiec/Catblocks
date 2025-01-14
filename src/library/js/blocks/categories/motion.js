'use strict';

export default {
  PlaceAtBrick: {
    message0: '%{BKY_MOTION_PLACEATXY}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'X_POSITION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'X_POSITION_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'Y_POSITION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'Y_POSITION_INFO'
      }
    ]
  },
  SetXBrick: {
    message0: '%{BKY_MOTION_SETXTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'X_POSITION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'X_POSITION_INFO'
      }
    ]
  },
  SetYBrick: {
    message0: '%{BKY_MOTION_SETYTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'Y_POSITION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'Y_POSITION_INFO'
      }
    ]
  },
  ChangeXByNBrick: {
    message0: '%{BKY_MOTION_CHANGEXBY}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'X_POSITION_CHANGE',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'X_POSITION_CHANGE_INFO'
      }
    ]
  },
  ChangeYByNBrick: {
    message0: '%{BKY_MOTION_CHANGEYBY}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'Y_POSITION_CHANGE',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'Y_POSITION_CHANGE_INFO'
      }
    ]
  },
  GoToBrick: {
    message0: '%{BKY_MOTION_GOTO}',
    args0: [
      {
        type: 'field_catblocksspinner',
        name: 'SPINNER',
        catroid_field_id: 'brick_go_to_spinner'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'SPINNER_INFO'
      }
    ]
  },
  IfOnEdgeBounceBrick: {
    message0: '%{BKY_MOTION_IFONEDGEBOUNCE}'
  },
  MoveNStepsBrick: {
    message0: '%{BKY_MOTION_MOVESTEPS}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'STEPS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'STEPS_INFO'
      }
    ]
  },
  TurnRightBrick: {
    message0: '%{BKY_MOTION_TURNRIGHTDEGREES}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'TURN_RIGHT_DEGREES',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'TURN_RIGHT_DEGREES_INFO'
      }
    ]
  },
  TurnLeftBrick: {
    message0: '%{BKY_MOTION_TURNLEFTDEGREES}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'TURN_LEFT_DEGREES',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'TURN_LEFT_DEGREES_INFO'
      }
    ]
  },
  PointInDirectionBrick: {
    message0: '%{BKY_MOTION_POINTINDIRECTIONDEGREES}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DEGREES',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DEGREES_INFO'
      }
    ]
  },
  PointToBrick: {
    message0: '%{BKY_MOTION_POINTTOWARDS}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_point_to_spinner',
        name: 'DROPDOWN'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DROPDOWN_INFO'
      }
    ]
  },
  SetRotationStyleBrick: {
    message0: '%{BKY_MOTION_SETROTATIONSTYLE}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_set_rotation_style_spinner',
        name: 'SPINNER'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'SPINNER_INFO'
      }
    ]
  },
  GlideToBrick: {
    message0: '%{BKY_MOTION_GLIDESECONDTOXY}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DURATION_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DURATION_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'X_DESTINATION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'X_DESTINATION_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'Y_DESTINATION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'Y_DESTINATION_INFO'
      }
    ]
  },
  GoNStepsBackBrick: {
    message0: '%{BKY_MOTION_GOBACKLAYER}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'STEPS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'STEPS_INFO'
      }
    ]
  },
  ComeToFrontBrick: {
    message0: '%{BKY_MOTION_GOTOFRONT}'
  },
  VibrationBrick: {
    message0: '%{BKY_MOTION_VIBRATEFORSECOND}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'VIBRATE_DURATION_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'VIBRATE_DURATION_IN_SECONDS_INFO'
      }
    ]
  },
  SetPhysicsObjectTypeBrick: {
    message0: '%{BKY_MOTION_SETYOURMOTIONTYPETO}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_set_physics_object_type_spinner',
        name: 'DROPDOWN'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DROPDOWN_INFO'
      }
    ]
  },
  SetVelocityBrick: {
    message0: '%{BKY_MOTION_SETVELOCITYTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_VELOCITY_X',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_VELOCITY_X_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_VELOCITY_Y',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_VELOCITY_Y_INFO'
      }
    ]
  },
  TurnLeftSpeedBrick: {
    message0: '%{BKY_MOTION_SPINLEFTDEGREESSECOND}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_TURN_LEFT_SPEED',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_TURN_LEFT_SPEED_INFO'
      }
    ]
  },
  TurnRightSpeedBrick: {
    message0: '%{BKY_MOTION_SPINRIGHTDEGREESSECOND}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_TURN_RIGHT_SPEED',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_TURN_RIGHT_SPEED_INFO'
      }
    ]
  },
  SetGravityBrick: {
    message0: '%{BKY_MOTION_SETGRAVITYFORALLACTORSANDOBJECTSTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_GRAVITY_X',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_GRAVITY_X_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_GRAVITY_Y',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_GRAVITY_Y_INFO'
      }
    ]
  },
  SetMassBrick: {
    message0: '%{BKY_MOTION_SETMASSTOKILOGRAM}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_MASS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_MASS_INFO'
      }
    ]
  },
  SetBounceBrick: {
    message0: '%{BKY_MOTION_SETBOUNCEFACTORTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_BOUNCE_FACTOR',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_BOUNCE_FACTOR_INFO'
      }
    ]
  },
  SetFrictionBrick: {
    message0: '%{BKY_MOTION_SETFRICTIONTO}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'PHYSICS_FRICTION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'PHYSICS_FRICTION_INFO'
      }
    ]
  },
  DroneTakeOffLandBrick: {
    message0: '%{BKY_DRONE_TAKEOFFLAND}'
  },
  DroneEmergencyBrick: {
    message0: '%{BKY_DRONE_EMERGENCY}'
  },
  DroneMoveUpBrick: {
    message0: '%{BKY_DRONE_MOVEUP}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneMoveDownBrick: {
    message0: '%{BKY_DRONE_MOVEDOWN}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneMoveLeftBrick: {
    message0: '%{BKY_DRONE_MOVELEFT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneMoveRightBrick: {
    message0: '%{BKY_DRONE_MOVERIGHT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneMoveForwardBrick: {
    message0: '%{BKY_DRONE_MOVEFORWARD}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneMoveBackwardBrick: {
    message0: '%{BKY_DRONE_MOVEBACKWARD}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneTurnLeftBrick: {
    message0: '%{BKY_DRONE_TURNLEFT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneTurnRightBrick: {
    message0: '%{BKY_DRONE_TURNRIGHT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_TIME_TO_FLY_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'DRONE_POWER_IN_PERCENT',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DRONE_POWER_IN_PERCENT_INFO'
      }
    ]
  },
  DroneFlipBrick: {
    message0: '%{BKY_DRONE_FLIP}'
  },
  DronePlayLedAnimationBrick: {
    message0: '%{BKY_DRONE_PLAYLEDANIMATION}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_drone_play_led_animation_spinner',
        name: 'ADRONEANIMATION',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'ADRONEANIMATION_INFO'
      }
    ]
  },
  JumpingSumoAnimationsBrick: {
    message0: '%{BKY_SUMO_ANIMATION}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_jumping_sumo_animation_spinner',
        name: 'ANIMATION'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'ANIMATION_INFO'
      }
    ]
  },
  JumpingSumoJumpHighBrick: {
    message0: '%{BKY_SUMO_JUMPHIGH}'
  },
  JumpingSumoJumpLongBrick: {
    message0: '%{BKY_SUMO_JUMPLONG}'
  },
  JumpingSumoMoveBackwardBrick: {
    message0: '%{BKY_SUMO_MOVEBACKWARD}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_TIME_TO_DRIVE_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_TIME_TO_DRIVE_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_SPEED',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_SPEED_INFO'
      }
    ]
  },
  JumpingSumoMoveForwardBrick: {
    message0: '%{BKY_SUMO_MOVEFORWARD}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_TIME_TO_DRIVE_IN_SECONDS',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_TIME_TO_DRIVE_IN_SECONDS_INFO'
      },
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_SPEED',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_SPEED_INFO'
      }
    ]
  },
  JumpingSumoRotateLeftBrick: {
    message0: '%{BKY_SUMO_ROTATELEFT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_ROTATE',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_ROTATE_INFO'
      }
    ]
  },
  JumpingSumoRotateRightBrick: {
    message0: '%{BKY_SUMO_ROTATERIGHT}',
    args0: [
      {
        type: 'field_catblockstext',
        name: 'JUMPING_SUMO_ROTATE',
        text: 'unset'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'JUMPING_SUMO_ROTATE_INFO'
      }
    ]
  },
  JumpingSumoTurnBrick: {
    message0: '%{BKY_SUMO_TURN}'
  },
  JumpingSumoTakingPictureBrick: {
    message0: '%{BKY_SUMO_TAKINGPICTURE}'
  },
  WhenBounceOffScript: {
    message0: '%{BKY_EVENT_WHENYOUBOUNCEOFF}',
    args0: [
      {
        type: 'field_catblocksspinner',
        catroid_field_id: 'brick_when_bounce_off_spinner',
        name: 'DROPDOWN'
      },
      {
        type: 'field_image',
        src: `${document.location.pathname}media/info_icon.svg`,
        height: 24,
        width: 24,
        alt: '(i)',
        flip_rtl: true,
        name: 'DROPDOWN_INFO'
      }
    ]
  }
};
