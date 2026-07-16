// =========================================
// Module: chunks:///_virtual/ActorManager.ts
// =========================================
System.register("chunks:///_virtual/ActorManager.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (t)
{
  var e,
  r;
  return
  {
    setters:[function (t)
    {
      e=t.createForOfIteratorHelperLoose
    },function (t)
    {
      r=t.cclegacy
    }],
    execute:function ()
    {
      r._RF.push(
      {

      },"13dedRnaWpP540k738TjKzW",
      "ActorManager",
      void 0),
      t("ActorManager",
      function ()
      {
        function t()
        {

        }return t.add=function (e)
        {
          e&&t._actors.add(e)
        },t.remove=function (e)
        {
          e&&t._actors.delete(e)
        },t.updateAll=function (r)
        {
          if(0!==t._actors.size)for(var c,
          o=e(t._actors);
          !(c=o()).done;
          )
          {
            var n=c.value;
            if(n&&"function"==typeof n.tick)try
            {
              n.tick(r)
            }catch(t)
            {

            }
          }
        },t.clear=function ()
        {
          t._actors.clear()
        },t
      }())._actors=new Set,
      r._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/ActorPlayer.ts
// =========================================
System.register("chunks:///_virtual/ActorPlayer.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Base.ts",
"./Constants.ts",
"./bullet.ts",
"./EventManager.ts",
"./AudioManager.ts",
"./ActorManager.ts"],
(function (t)
{
  var e,
  i,
  a,
  n,
  o,
  s,
  l,
  r,
  h,
  c,
  u,
  p,
  d,
  f,
  _,
  A,
  y,
  v,
  m,
  g,
  M,
  b,
  k,
  D,
  S;
  return
  {
    setters:[function (t)
    {
      e=t.applyDecoratedDescriptor,
      i=t.inheritsLoose,
      a=t.initializerDefineProperty,
      n=t.assertThisInitialized
    },function (t)
    {
      o=t.cclegacy,
      s=t._decorator,
      l=t.Node,
      r=t.ProgressBar,
      h=t.MeshRenderer,
      c=t.Material,
      u=t.Vec3,
      p=t.isValid,
      d=t.tween,
      f=t.v3,
      _=t.ParticleSystem,
      A=t.randomRange,
      y=t.Tween
    },function (t)
    {
      v=t.GameGlobal
    },function (t)
    {
      m=t.Base
    },function (t)
    {
      g=t.soldierAni,
      M=t.GAME_STATUS
    },function (t)
    {
      b=t.bullet
    },function (t)
    {
      k=t.default
    },function (t)
    {
      D=t.AudioManager
    },function (t)
    {
      S=t.ActorManager
    }],
    execute:function ()
    {
      var w,
      C,
      E,
      L,
      P,
      I,
      T,
      R,
      z,
      U,
      G,
      B,
      x,
      Y,
      F,
      N,
      O,
      H,
      W,
      Z,
      K,
      V,
      X;
      o._RF.push(
      {

      },"49c8dXhrFlFSYZBrHntIFmb",
      "ActorPlayer",
      void 0);
      var j=s.ccclass,
      q=s.property;
      t("ActorPlayer",
      (w=j("ActorPlayer"),
      C=q(l),
      E=q(r),
      L=q(h),
      P=q(c),
      I=q(c),
      T=q(c),
      R=q(l),
      z=q(l),
      U=q(l),
      w(((X=function (t)
      {
        function e()
        {
          for(var e,
          i=arguments.length,
          o=new Array(i),
          s=0;
          s<i;
          s++)o[s]=arguments[s];
          return e=t.call.apply(t,
          [this].concat(o))||this,
          a(e,
          "moveSpeed",
          x,
          n(e)),
          a(e,
          "fireEff",
          Y,
          n(e)),
          a(e,
          "hpBar",
          F,
          n(e)),
          a(e,
          "bodyMesh",
          N,
          n(e)),
          a(e,
          "normalMat",
          O,
          n(e)),
          a(e,
          "whiteMat",
          H,
          n(e)),
          a(e,
          "dieMat",
          W,
          n(e)),
          a(e,
          "lvUpEff",
          Z,
          n(e)),
          a(e,
          "weapon",
          K,
          n(e)),
          a(e,
          "weapon2",
          V,
          n(e)),
          e.moveDir=new u(0,
          0,
          0),
          e.isMoving=!1,
          e.endMove=!1,
          e._gameController=null,
          e._spawnControl=null,
          e._nodePoolMgr=null,
          e._currentState="",
          e._lvUpEffHideTime=-1,
          e._autoAttackDelay=-1,
          e._deathMaterialDelay=-1,
          e._dizzyRecoverDelay=-1,
          e.posZ=.9,
          e.maxHp=1,
          e.hp=1,
          e.hasGuide=!1,
          e.isLeft=!0,
          e.curAtkSpeed=0,
          e.curPoolIndex=0,
          e._isAttacking=!1,
          e._lastAttackTime=0,
          e._attackInterval=.5,
          e.curLv=0,
          e.bulletId=0,
          e.isDie=!1,
          e.DIE_ANIM_DURATION=.8,
          e.SCALE_FACTOR=1.2,
          e.GRAY_DELAY=.12,
          e.isCheer=!1,
          e
        }i(e,
        t);
        var o=e.prototype;
        return o.onLoad=function ()
        {
          v.actorPlayer=this,
          this.hp=this.maxHp
        },o.start=function ()
        {
          t.prototype.start.call(this)
        },o.onEnable=function ()
        {
          t.prototype.onEnable.call(this),
          this._gameController=v.GameController,
          this._spawnControl=v.spawnControl,
          this._nodePoolMgr=v.nodePoolMgr,
          S.add(this),
          this.node.setRotationFromEuler(0,
          180,
          0),
          this.animPlay(g.Idle),
          this.playLvUpEff(),
          this.playShowAni(),
          this._isAttacking=!1,
          D.audioPlay("鍗囩骇"),
          v.isAutoAttack&&(this._autoAttackDelay=.2),
          this._spawnControl.curBulletLv>=1&&(p(this.weapon)&&(this.weapon.active=!1),
          p(this.weapon2)&&(this.weapon2.active=!0)),
          this.isDie=!1,
          k.instance.on("LvUp",
          this.lvUp,
          this),
          k.instance.on("KillAll",
          this.doDie,
          this),
          k.instance.on("startMove",
          this.startAttack,
          this)
        },o.playShowAni=function ()
        {
          var t=this.node.position;
          this.node.setPosition(t.x,
          0,
          t.z),
          this.node.setScale(u.ZERO),
          d(this.node).to(.2,

          {
            scale:f(1.5,
            1.5,
            1)
          },
          {
            easing:"cubicOut"
          }).to(.1,

          {
            scale:u.ONE
          },
          {
            easing:"cubicIn"
          }).start()
        },o.playLvUpEff=function ()
        {
          this.lvUpEff.children.forEach((function (t)
          {
            t.getComponent(_).play()
          }))
        },o.onDisable=function ()
        {
          t.prototype.onDisable.call(this),
          k.instance.off("LvUp",
          this.lvUp,
          this),
          k.instance.off("KillAll",
          this.doDie,
          this),
          k.instance.off("startMove",
          this.startAttack,
          this),
          S.remove(this),
          this._clearTimers()
        },o.playRightAni=function ()
        {
          this.isLeft=!1
        },o.playLeftAni=function ()
        {
          this.isLeft=!0
        },o.tick=function (t)
        {
          var e;
          if(this._processTimers(t),
          !this.isDie)
          {
            var i=v.gameStatus,
            a=this._gameController?this._gameController.isMoving:null==(e=v.GameController)?void 0:e.isMoving;
            if(i===M.GAME_INIT)
            {
              var n=a?this.isLeft?g.Walk_Left:g.Walk_Right:g.Idle;
              this._currentState!==n&&(this._currentState=n,
              this.animPlay(n))
            }if(i!==M.GAME_END)
            {
              if(this._isAttacking)
              {
                this._lastAttackTime+=t,
                this._lastAttackTime>=this._attackInterval&&(this.attack(),
                this._lastAttackTime=0);
                var o=a?this.isLeft?g.Attack_left:g.Attack_right:g.StandAttack;
                this._currentState!==o&&(this._currentState=o,
                this.animPlay(o))
              }
            }else this._currentState!==g.Idle&&(this._currentState=g.Idle,
            this.animPlay(g.Idle))
          }
        },o._processTimers=function (t)
        {
          this._autoAttackDelay>=0&&(this._autoAttackDelay-=t,
          this._autoAttackDelay<=0&&(this._autoAttackDelay=-1,
          this.startAttack())),
          this._deathMaterialDelay>=0&&(this._deathMaterialDelay-=t,
          this._deathMaterialDelay<=0&&(this._deathMaterialDelay=-1,
          this.bodyMesh.setSharedMaterial(this.dieMat,
          0)))
        },o._clearTimers=function ()
        {
          this._autoAttackDelay=-1,
          this._lvUpEffHideTime=-1,
          this._deathMaterialDelay=-1,
          this._dizzyRecoverDelay=-1
        },o.startAttack=function ()
        {
          var t;
          this.curPoolIndex!==this.bulletId&&(this.curPoolIndex=this.bulletId),
          this.curAtkSpeed=this._spawnControl.curSpeed,
          this._attackInterval=this.curAtkSpeed,
          this._lastAttackTime=0,
          this._lvUpEffHideTime=2,
          this._isAttacking=!0;
          var e=this._gameController?this._gameController.isMoving:null==(t=v.GameController)?void 0:t.isMoving;
          this.animPlay(e?this.isLeft?g.Attack_left:g.Attack_right:g.StandAttack),
          this.attack()
        },o.lvUp=function (t)
        {
          this.playLvUpEff(),
          this.curLv++,
          this.curAtkSpeed=this._spawnControl.curSpeed,
          this._attackInterval=this.curAtkSpeed,
          this._lastAttackTime=A(0,
          .5),
          this._spawnControl.curBulletLv>=1&&(this.weapon.active=!1,
          p(this.weapon2)&&!this.weapon2.active&&(this.weapon2.active=!0))
        },o.attack=function ()
        {
          0==this._spawnControl.atkSpeedLv?this._spawnControl.atkAudio():this._spawnControl.atkAudio2(),
          this.createBulletM()
        },o.createBulletM=function (t)
        {
          var i=this._spawnControl.curBulletLv,
          a=this._nodePoolMgr.getNode(this._gameController.bulletArr[i],
          this._gameController.bulletLayer),
          n=e._tempPos;
          this.node.getWorldPosition(n),
          n.y+=.5,
          n.x+=.1,
          i>=2&&(n.x=this._spawnControl.getBulletPosX()),
          n.z-=1,
          a.setWorldPosition(n.x,
          n.y,
          n.z);
          var o=a.getComponent(b);
          o&&o.show()
        },o.move=function (t)
        {
          if(!this.isCheer&&!this.isDie)
          {
            this.moveDir.set(t.x,
            0,
            0);
            var e=v.cameraMoving;
            this.isMoving=!e
          }
        },o.stopMove=function ()
        {
          this.isMoving=!1
        },o.subHp=function (t)
        {
          this.hp-=t,
          this.hp<=0&&(this.hp=0,
          this.doDie())
        },o.doDie=function ()
        {
          this.isDie||(this.isDie=!0,
          y.stopAllByTarget(this.node),
          this.unscheduleAllCallbacks(),
          D.soundPlay("瑙掕壊姝讳骸"),
          this.setDeathMaterial(),
          this.playDeathAnimation())
        },o.playDeathAnimation=function ()
        {
          var t=this;
          e._deathStartScale.set(this.node.scale),
          e._deathTargetScale.set(e._deathStartScale.x*this.SCALE_FACTOR,
          e._deathStartScale.y*this.SCALE_FACTOR,
          e._deathStartScale.z*this.SCALE_FACTOR),
          this.animPlay(g.Die),
          d(this.node).to(this.GRAY_DELAY,

          {
            scale:e._deathTargetScale
          },
          {
            easing:"backIn"
          }).to(this.GRAY_DELAY,

          {
            scale:e._deathStartScale
          },
          {
            easing:"backIn"
          }).delay(this.DIE_ANIM_DURATION-2*this.GRAY_DELAY).call((function ()
          {
            return t.onDeathAnimationComplete()
          })).start()
        },o.setDeathMaterial=function ()
        {
          this.bodyMesh.setSharedMaterial(this.whiteMat,
          0),
          this._deathMaterialDelay=this.GRAY_DELAY
        },o.onDeathAnimationComplete=function ()
        {
          this.bodyMesh.setSharedMaterial(this.normalMat,
          0),
          this.node.active=!1,
          this._spawnControl.delActor(this.node)
        },e
      }(m))._tempPos=new u,
      X._deathStartScale=new u,
      X._deathTargetScale=new u,
      x=e((B=X).prototype,
      "moveSpeed",
      [q],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return 2
        }
      }),
      Y=e(B.prototype,
      "fireEff",
      [C],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      F=e(B.prototype,
      "hpBar",
      [E],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      N=e(B.prototype,
      "bodyMesh",
      [L],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      O=e(B.prototype,
      "normalMat",
      [P],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      H=e(B.prototype,
      "whiteMat",
      [I],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      W=e(B.prototype,
      "dieMat",
      [T],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Z=e(B.prototype,
      "lvUpEff",
      [R],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      K=e(B.prototype,
      "weapon",
      [z],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      V=e(B.prototype,
      "weapon2",
      [U],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      G=B))||G));
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/ArrowFlow.ts
// =========================================
System.register("chunks:///_virtual/ArrowFlow.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (e)
{
  var t,
  r,
  o,
  i,
  n,
  a,
  l,
  s,
  u,
  c,
  p,
  f,
  h;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      r=e.inheritsLoose,
      o=e.initializerDefineProperty,
      i=e.assertThisInitialized,
      n=e.createForOfIteratorHelperLoose
    },function (e)
    {
      a=e.cclegacy,
      l=e._decorator,
      s=e.Node,
      u=e.Animation,
      c=e.MeshRenderer,
      p=e.tween,
      f=e.Vec4,
      h=e.Component
    }],
    execute:function ()
    {
      var w,
      d,
      y,
      m,
      v,
      A,
      b,
      g,
      N,
      D,
      F,
      z,
      M,
      _,
      O,
      P,
      R;
      a._RF.push(
      {

      },"fe470RF4LtN+ZJmfhGhQyQt",
      "ArrowFlow",
      void 0);
      var S=l.ccclass,
      C=l.property;
      e("ArrowFlow",
      (w=S("ArrowFlow"),
      d=C(
      {
        type:[s],
        tooltip:"绠ご鑺傜偣鏁扮粍锛?涓瓙鑺傜偣锛?}),y=C(u),m=C({tooltip:"姣忎釜绠ご鏄剧ず鎸佺画鏃堕棿"}),v=C({tooltip:"绠ご娓愰殣鎸佺画鏃堕棿"}),A=C({tooltip:"涓や釜绠ご鍚姩鐨勬椂闂撮棿闅?
      }),
      b=C(
      {
        tooltip:"鏄惁寰幆鎾斁"
      }),
      g=C(
      {
        type:s,
        tooltip:"鐗规晥鑺傜偣锛堝甫鏈塒articleSystem缁勪欢锛?}),w((F=t((D=function (e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,o(t,"arrowNodes",F,i(t)),o(t,"anim",z,i(t)),o(t,"showDuration",M,i(t)),o(t,"fadeDuration",_,i(t)),o(t,"interval",O,i(t)),o(t,"loop",P,i(t)),o(t,"effectNode",R,i(t)),t._particleSystem=null,t}r(t,e);var a=t.prototype;return a.start=function (){0===this.arrowNodes.length&&(this.arrowNodes=this.node.children),this.setAllArrowAlpha(0),this.startFlow()},a.startFlow=function (){for(var e=this,t=function (){var t=e.arrowNodes[r],o=r*e.interval;e.scheduleOnce((function (){e.playArrowAnimation(t)}),o),e.scheduleOnce((function (){e.effectNode.active=!0}),.01)},r=0;r<this.arrowNodes.length;r++)t();if(this.loop){var o=(this.arrowNodes.length-1)*this.interval+this.showDuration+this.fadeDuration;this.scheduleOnce((function (){e.anim.play("yindao"),e.startFlow()}),o)}},a.playArrowAnimation=function (e){var t=this,r=e.getComponent(c);if(r){var o=null;(o=Array.isArray(r.material)?r.material[0]:r.material)?(this.setMaterialAlpha(o,1),this.scheduleOnce((function (){var e={value:1};p(e).to(t.fadeDuration,{value:0},{easing:"sineOut",onUpdate:function (){t.setMaterialAlpha(o,e.value)}}).start()}),this.showDuration)):console.warn("Arrow node missing material",e.name)}else console.warn("Arrow node missing MeshRenderer component",e.name)},a.setMaterialAlpha=function (e,t){var r=e.getProperty("albedo");if(r&&r instanceof f){var o=new f(r.x,r.y,r.z,t);e.setProperty("albedo",o)}else e.setProperty("albedo",new f(1,1,1,t))},a.setAllArrowAlpha=function (e){for(var t,r=n(this.arrowNodes);!(t=r()).done;){var o=t.value.getComponent(c);if(o){var i=null;(i=Array.isArray(o.material)?o.material[0]:o.material)&&this.setMaterialAlpha(i,e)}}},a.onDestroy=function (){this.unscheduleAllCallbacks(),this._particleSystem&&this._particleSystem.stop()},t}(h)).prototype,"arrowNodes",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return[]}}),z=t(D.prototype,"anim",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),M=t(D.prototype,"showDuration",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return.5}}),_=t(D.prototype,"fadeDuration",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return.8}}),O=t(D.prototype,"interval",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return.3}}),P=t(D.prototype,"loop",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return!0}}),R=t(D.prototype,"effectNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),N=D))||N));a._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/atkEffect.ts
// =========================================
System.register("chunks:///_virtual/atkEffect.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./TimeManager.ts"],
(function (t)
{
  var e,
  i,
  n,
  r,
  o,
  a,
  l,
  s,
  c,
  u,
  p,
  f;
  return
  {
    setters:[function (t)
    {
      e=t.applyDecoratedDescriptor,
      i=t.inheritsLoose,
      n=t.initializerDefineProperty,
      r=t.assertThisInitialized
    },function (t)
    {
      o=t.cclegacy,
      a=t._decorator,
      l=t.Enum,
      s=t.ParticleSystem,
      c=t.Animation,
      u=t.Component
    },function (t)
    {
      p=t.GameGlobal
    },function (t)
    {
      f=t.TimeManager
    }],
    execute:function ()
    {
      var h,
      y,
      b,
      d,
      m,
      w,
      D,
      g,
      A,
      E;
      o._RF.push(
      {

      },"8f7e3Opx8xDzZKDtqL9SBhG",
      "atkEffect",
      void 0);
      var v=a.ccclass,
      P=a.property,
      S=function (t)
      {
        return t[t.Par=0]="Par",
        t[t.Ani=1]="Ani",
        t
      }(S||
      {

      });
      t("atkEffect",
      (h=v("atkEffect"),
      y=P(
      {
        type:l(S)
      }),
      b=P(s),
      d=P(c),
      h((D=e((w=function (t)
      {
        function e()
        {
          for(var e,
          i=arguments.length,
          o=new Array(i),
          a=0;
          a<i;
          a++)o[a]=arguments[a];
          return e=t.call.apply(t,
          [this].concat(o))||this,
          n(e,
          "type",
          D,
          r(e)),
          n(e,
          "particle",
          g,
          r(e)),
          n(e,
          "showSlowDown",
          A,
          r(e)),
          n(e,
          "ani",
          E,
          r(e)),
          e.shouldDisAppear=!1,
          e.disTime=.3,
          e
        }i(e,
        t);
        var o=e.prototype;
        return o.start=function ()
        {

        },o.onEnable=function ()
        {
          this.shouldDisAppear=!1
        },o.slowDown=function ()
        {
          this.showSlowDown&&this.particle.forEach((function (t)
          {
            0==f.timeScale?t.isStopped||t.pause():t.play()
          }))
        },o.init=function ()
        {
          var t=this;
          this.type==S.Par?this.particle.forEach((function (t)
          {
            t.play()
          })):(this.ani.resume(),
          this.ani.play()),
          this.unscheduleAllCallbacks(),
          this.shouldDisAppear=!0,
          this.scheduleOnce((function ()
          {
            t.shouldDisAppear=!1,
            p.nodePoolMgr.putNode(t.node)
          }),
          this.disTime)
        },o.onDisable=function ()
        {
          this.particle.forEach((function (t)
          {
            t.stop()
          })),
          this.shouldDisAppear=!1,
          this.unscheduleAllCallbacks()
        },e
      }(u)).prototype,
      "type",
      [y],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return S.Par
        }
      }),
      g=e(w.prototype,
      "particle",
      [b],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      A=e(w.prototype,
      "showSlowDown",
      [P],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return!0
        }
      }),
      E=e(w.prototype,
      "ani",
      [d],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      m=w))||m));
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/AudioManager.ts
// =========================================
System.register("chunks:///_virtual/AudioManager.ts",
["cc",
"./GameGlobal.ts"],
(function (o)
{
  var a,
  i,
  u,
  e,
  n,
  l,
  t,
  c,
  r;
  return
  {
    setters:[function (o)
    {
      a=o.cclegacy,
      i=o.game,
      u=o.Game,
      e=o.view,
      n=o.assetManager,
      l=o.AudioClip,
      t=o.AudioSource,
      c=o.sys
    },function (o)
    {
      r=o.GameGlobal
    }],
    execute:function ()
    {
      a._RF.push(
      {

      },"8bfc0rF1v9NHYuYeV7mMgYI",
      "AudioManager",
      void 0);
      o("SoundNames",

      {
        BGM:"BGM2",
        GET_ITEM:"get",
        GET_COIN:"getCoin",
        GET_WOOD:"get",
        BUILDING_UPGRADE:"",
        FISH_JUMP:"绐滃嚭姘撮潰",
        FISHING_ROD:"楸肩",
        CHECKOUT:"鏀堕摱",
        BEAR_HIT:"鍙楀嚮",
        BEAR_DIE:"鐔婂彨",
        ACTOR_DIE:"actorDie",
        ATTACK:"杞枾澶?,ATTACK_DRILL:"閽诲ご",ATTACK_FIRE:"鐏劙寰幆",KNIFE_CUT:"鍒€鐮嶈倝2",UNLOCK_NPC:"瑙ｉ攣浜虹墿",HUNGRY:"椤惧鎶辨€ㄥ０",SLEEP:"鐫¤",MACHINE:"machine",COOKING:"宸ュ巶鍔犲伐",VICTORY:"鑳滃埄鑾峰緱 "});var d=o("AudioManager",function (){function o(){}return o.init=function (a,n){for(var l in o._audioSource=a,o.rootNode=n,o.audioSourceMap){var t=o.audioSourceMap[l];t&&t.playing&&t.audioSource.stop()}if(o.audioSourceMap={},"volumeSwitch"in window&&void 0!==window.volumeSwitch&&(o.musicEnable=!!window.volumeSwitch,o.soundEnable=!!window.volumeSwitch),"Ironsource"==window.__PLATFORM){var c=window.volumeAudio;c<=0?(o.volume=0,o.musicEnable=!1,o.soundEnable=!1):"number"==typeof c&&(o.volume=c)}i.on(u.EVENT_HIDE,(function (){o.pause()})),i.on(u.EVENT_SHOW,(function (){o.resume()})),e.on("audioVolumeChange",o.audioVolumeChange,this),window.AnalyticsIns&&"function"==typeof window.AnalyticsIns.voiceOn&&window.AnalyticsIns.voiceOn()},o.audioVolumeChange=function (a){var i=o.musicEnable;o.musicEnable=a,o.soundEnable=a,i&&!a?o.pause():!i&&a&&o.resume()},o.resume=function (){if(o.musicEnable&&o.firstClick){var a=o._audioSource;for(var u in a.playing||a.play(),o.audioSourceMap){var e=o.audioSourceMap[u];e&&e.playing&&(e.loop||i.totalTime-e.startTime<e.duration-500)&&e.audioSource.play()}}},o.pause=function (){var a=o._audioSource;for(var i in a.pause(),o.audioSourceMap){var u=o.audioSourceMap[i];u&&u.audioSource.pause()}},o.soundPlay=function (a,i){if(void 0===i&&(i=1),!r.gameOver&&o.soundEnable&&o.firstClick){var u=Date.now();if(!(u-(o.lastPlayTime[a]||0)<o.soundDebounceInterval)){o.lastPlayTime[a]=u;var e,t=o._audioSource,c=o.basePath+a,d=o._cachedAudioClipMap[c];if(d)t.playOneShot(d,i);else null==(e=n.resources)||e.load(c,l,(function (a,u){a?console.warn(a):(o._cachedAudioClipMap[c]=u,t.playOneShot(u,i))}))}}},o.soundPlayWithDistance=function (a,i,u,e){var n;if(void 0===u&&(u=1),void 0===e&&(e=10),null!=(n=r.actorPlayer)&&n.node){var l=r.actorPlayer.node.worldPosition.clone().subtract(i).length();if(!(l>e)){var t=1-l/e,c=u*(t=Math.max(0,Math.min(1,t)));c>.01&&o.soundPlay(a,c)}}else o.soundPlay(a,u)},o.audioPlayWithDistance=function (a,i,u,e,n){var l;if(void 0===u&&(u=1),void 0===e&&(e=10),void 0===n&&(n=!1),null!=(l=r.actorPlayer)&&l.node){var t=r.actorPlayer.node.worldPosition.clone().subtract(i).length();if(!(t>e)){var c=1-t/e,d=u*(c=Math.max(0,Math.min(1,c)));d>.01&&o.audioPlay(a,n,d)}}else o.audioPlay(a,n,u)},o.musicPlay=function (a,i,u){var e=this;void 0===u&&(u=1);var t=o._audioSource;if(!t.playing){t.loop=i,t.volume=o.volume*u;var c,r=o.basePath+a,d=o._cachedAudioClipMap[r];if(d)t.clip=d,o.musicEnable&&o.firstClick&&(t.play(),this.playSoundLog("auto"));else null==(c=n.resources)||c.load(r,l,(function (a,i){a?console.warn(a):(o._cachedAudioClipMap[r]=i,t.clip=i,o.musicEnable&&o.firstClick&&(t.play(),e.playSoundLog("auto")))}))}},o.musicStop=function (){o._audioSource.stop()},o.stopAllAudio=function (){for(var a in o.audioSourceMap){var i=o.audioSourceMap[a];i&&i.audioSource&&(i.playing=!1,i.audioSource.stop())}},o.audioPlay=function (a,u,e){if(void 0===u&&(u=!1),!r.gameOver&&o.rootNode){var c=o.audioSourceMap[a];if(c){var d=c.audioSource;u&&(d.loop=!0),c.loop=u,d.volume=e&&!isNaN(e)?o.volume*e:o.volume,c.duration=1e3*d.duration,!d.playing&&o.firstClick&&o.soundEnable&&(d.play(),c.startTime=i.totalTime)}else{var s,p=o.rootNode.addComponent(t);c=o.audioSourceMap[a]={audioSource:p,playing:!0,startTime:i.totalTime,loop:u,duration:0};var v=o.basePath+a;null==(s=n.resources)||s.load(v,l,(function (a,n){a?console.warn(a):(o._cachedAudioClipMap[v]=n,p.clip=n,u&&(p.loop=!0),p.volume=e&&!isNaN(e)?o.volume*e:o.volume,c.duration=1e3*p.duration,o.soundEnable&&(p.play(),c.startTime=i.totalTime),o.firstClick||p.pause())}))}}},o.audioStop=function (a){var i=o.audioSourceMap[a];i&&(i.playing=!1,i.audioSource.stop())},o.audioPause=function (a){var i=o.audioSourceMap[a];i&&(i.playing=!1,i.audioSource.pause())},o.audioVolume=function (a,i){void 0===i&&(i=1);var u=o.audioSourceMap[a];u&&(u.audioSource.volume=o.volume*i)},o.musicVolumeSet=function (a){o._audioSource.volume=a,o.volume=a,c.localStorage.setItem("volume",String(a))},o.musicEnableSet=function (a){var i=o._audioSource;o.musicEnable=a,c.localStorage.setItem("musicEnable",a?"1":"0"),a?i.playing||i.play():i.playing&&i.stop()},o.soundEnableSet=function (a){o.soundEnable=a,c.localStorage.setItem("soundEnable",a?"1":"0")},o.playSoundLog=function (o){if(!this.isplayed&&(this.isplayed=!0,window.AnalyticsIns))try{window.AnalyticsIns.voiceTouch(o)}catch(o){}},o}());d._audioSource=void 0,d._cachedAudioClipMap={},d.audioSourceMap={},d.rootNode=void 0,d.basePath="audio/",d.musicEnable=!0,d.soundEnable=!0,d.volume=1,d.firstClick=!1,d.isplayed=!1,d.lastPlayTime={},d.soundDebounceInterval=100,a._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/Base.ts
// =========================================
System.register("chunks:///_virtual/Base.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (i)
{
  var r,
  n,
  t,
  e,
  o,
  l,
  a,
  c,
  s;
  return
  {
    setters:[function (i)
    {
      r=i.applyDecoratedDescriptor,
      n=i.inheritsLoose,
      t=i.initializerDefineProperty,
      e=i.assertThisInitialized
    },function (i)
    {
      o=i.cclegacy,
      l=i._decorator,
      a=i.SkeletalAnimation,
      c=i.Collider,
      s=i.Component
    }],
    execute:function ()
    {
      var u,
      g,
      f,
      h,
      p,
      d,
      m;
      o._RF.push(
      {

      },"2e1b4DGBYRApr6UGASTuZPz",
      "Base",
      void 0);
      var y=l.ccclass,
      T=l.property;
      i("Base",
      (u=y("Base"),
      g=T(a),
      f=T(c),
      u((d=r((p=function (i)
      {
        function r()
        {
          for(var r,
          n=arguments.length,
          o=new Array(n),
          l=0;
          l<n;
          l++)o[l]=arguments[l];
          return r=i.call.apply(i,
          [this].concat(o))||this,
          t(r,
          "anim",
          d,
          e(r)),
          t(r,
          "collider",
          m,
          e(r)),
          r.currAnim="",
          r
        }n(r,
        i);
        var o=r.prototype;
        return o.start=function ()
        {

        },o.onEnable=function ()
        {
          this.collider.on("onTriggerEnter",
          this.onTriggerEnter,
          this),
          this.collider.on("onTriggerExit",
          this.onTriggerExit,
          this)
        },o.onDisable=function ()
        {
          this.collider.off("onTriggerEnter",
          this.onTriggerEnter,
          this),
          this.collider.off("onTriggerExit",
          this.onTriggerExit,
          this)
        },o.onTriggerEnter=function (i)
        {

        },o.onTriggerExit=function (i)
        {

        },o.animPlay=function (i)
        {
          var r;
          this.currAnim!=i&&null!=this.anim&&(this.currAnim=i,
          null==(r=this.anim)||r.play(i))
        },o.update=function (i)
        {

        },r
      }(s)).prototype,
      "anim",
      [g],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      m=r(p.prototype,
      "collider",
      [f],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      h=p))||h));
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/BloodBar.ts
// =========================================
System.register("chunks:///_virtual/BloodBar.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts"],
(function (t)
{
  var e,
  i,
  n,
  o,
  r,
  a,
  s,
  l,
  c,
  u,
  h;
  return
  {
    setters:[function (t)
    {
      e=t.applyDecoratedDescriptor,
      i=t.inheritsLoose,
      n=t.initializerDefineProperty,
      o=t.assertThisInitialized,
      r=t.createClass
    },function (t)
    {
      a=t.cclegacy,
      s=t._decorator,
      l=t.UITransform,
      c=t.tween,
      u=t.Component
    },function (t)
    {
      h=t.GameGlobal
    }],
    execute:function ()
    {
      var d,
      p,
      f,
      m,
      b,
      g,
      k,
      v,
      y;
      a._RF.push(
      {

      },"e67dcWGseRLcLp9cQPnTQaG",
      "BloodBar",
      void 0);
      var w=s.ccclass,
      G=s.property;
      t("BloodBar",
      (d=w("BloodBar"),
      p=G(l),
      f=G(l),
      m=G(l),
      d((k=e((g=function (t)
      {
        function e()
        {
          for(var e,
          i=arguments.length,
          r=new Array(i),
          a=0;
          a<i;
          a++)r[a]=arguments[a];
          return e=t.call.apply(t,
          [this].concat(r))||this,
          n(e,
          "backGround",
          k,
          o(e)),
          n(e,
          "mask",
          v,
          o(e)),
          n(e,
          "maskWhite",
          y,
          o(e)),
          e.weidth=0,
          e.length=void 0,
          e.isMove=!0,
          e
        }i(e,
        t);
        var a=e.prototype;
        return a.Init=function ()
        {
          this.length=this.backGround.contentSize.x
        },a.Muzzle01=function (t)
        {
          return t>1?1:t<0?0:t
        },a.setweidth=function (t)
        {
          var e=this,
          i=this.Muzzle01(t);
          this.weidth=i,
          this.mask.width=i*this.length,
          this.isMove&&!isNaN(i*this.length)&&(this.isMove=!1,
          c(this.maskWhite).to(.12,

          {
            width:i*this.length
          }).call((function ()
          {
            e.isMove=!0,
            0==t&&(e.node.active=!1)
          })).start())
        },a.update=function (t)
        {
          h.GameController&&h.mainCamera&&(this.node.worldRotation=h.mainCamera.node.worldRotation.clone())
        },r(e,
        [
        {
          key:"Length",
          get:function ()
          {
            return this.length
          }
        },
        {
          key:"Weidth",
          set:function (t)
          {
            this.setweidth(t)
          }
        },
        {
          key:"Height",
          set:function (t)
          {
            this.backGround.node.setPosition(0,
            t)
          }
        }]),
        e
      }(u)).prototype,
      "backGround",
      [p],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:null
      }),
      v=e(g.prototype,
      "mask",
      [f],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:null
      }),
      y=e(g.prototype,
      "maskWhite",
      [m],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:null
      }),
      b=g))||b));
      a._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/bullet.ts
// =========================================
System.register("chunks:///_virtual/bullet.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Base.ts",
"./Constants.ts",
"./TimeManager.ts",
"./GameController.ts"],
(function (e)
{
  var t,
  n,
  o,
  i,
  r,
  l,
  a,
  s,
  c,
  u,
  h,
  p,
  f,
  d,
  b;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      n=e.inheritsLoose,
      o=e.initializerDefineProperty,
      i=e.assertThisInitialized
    },function (e)
    {
      r=e.cclegacy,
      l=e._decorator,
      a=e.Node,
      s=e.Vec3,
      c=e.RigidBody,
      u=e.math
    },function (e)
    {
      h=e.GameGlobal
    },function (e)
    {
      p=e.Base
    },function (e)
    {
      f=e.PHY_GROUP
    },function (e)
    {
      d=e.TimeManager
    },function (e)
    {
      b=e.version
    }],
    execute:function ()
    {
      var y,
      _,
      g,
      v,
      m,
      P,
      z,
      E;
      r._RF.push(
      {

      },"da992UbjRFIlr8O0BK82Tey",
      "bullet",
      void 0);
      var B=l.ccclass,
      D=l.property;
      e("bullet",
      (y=B("bullet"),
      _=D(
      {
        type:a
      }),
      g=D(
      {
        type:a
      }),
      y(((E=function (e)
      {
        function t()
        {
          for(var t,
          n=arguments.length,
          r=new Array(n),
          l=0;
          l<n;
          l++)r[l]=arguments[l];
          return t=e.call.apply(e,
          [this].concat(r))||this,
          o(t,
          "Version_A",
          P,
          i(t)),
          o(t,
          "Version_B",
          z,
          i(t)),
          t._bulletSpeed=30,
          t._bulletDir=new s(0,
          0,
          -1),
          t.canFly=!0,
          t
        }n(t,
        e);
        var r=t.prototype;
        return r.onEnable=function ()
        {
          e.prototype.onEnable.call(this),
          this.canFly=!0,
          h.GameController.version==b.versionA?(this.Version_A.forEach((function (e)
          {
            e.active=!0
          })),
          this.Version_B.forEach((function (e)
          {
            e.active=!1
          }))):(this.Version_A.forEach((function (e)
          {
            e.active=!1
          })),
          this.Version_B.forEach((function (e)
          {
            e.active=!0
          }))),
          this.collider.enabled=!0
        },r.onDisable=function ()
        {
          e.prototype.onDisable.call(this),
          this.collider.enabled=!1,
          this.canFly=!1
        },r.onTriggerEnter=function (e)
        {
          var t=e.otherCollider.node.getComponent(c);
          t&&(t.group!=f.ENEMY&&t.group!=f.PROP||(this.canFly=!1,
          h.nodePoolMgr.putNode(this.node)))
        },r.onTriggerExit=function (e)
        {

        },r.update=function (e)
        {
          if(this.canFly)
          {
            var n=e*d.timeScale,
            o=t._tempPos;
            o.set(this.node.position.x,
            .5,
            this.node.position.z);
            var i=this._bulletSpeed*n;
            o.x+=this._bulletDir.x*i,
            o.z+=this._bulletDir.z*i,
            this.node.setPosition(o.x,
            o.y,
            o.z),
            o.z<h.spawnControl.bulletRange&&h.nodePoolMgr.putNode(this.node)
          }
        },r.setBulletRotation=function (e)
        {
          var t=new s;
          s.subtract(t,
          e,
          this.node.worldPosition),
          s.normalize(t,
          t);
          var n=Math.atan2(t.x,
          t.z),
          o=u.toDegree(n);
          this.node.setRotationFromEuler(0,
          o+180,
          0)
        },r.show=function ()
        {
          this._bulletDir.set(0,
          0,
          -1),
          this.canFly=!0
        },t
      }(p))._tempPos=new s,
      P=t((m=E).prototype,
      "Version_A",
      [_],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      z=t(m.prototype,
      "Version_B",
      [g],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      v=m))||v));
      r._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/CameraControl.ts
// =========================================
System.register("chunks:///_virtual/CameraControl.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts"],
(function (o)
{
  var t,
  i,
  e,
  n,
  r,
  s,
  a,
  l,
  c;
  return
  {
    setters:[function (o)
    {
      t=o.inheritsLoose
    },function (o)
    {
      i=o.cclegacy,
      e=o._decorator,
      n=o.screen,
      r=o.Vec3,
      s=o.v3,
      a=o.tween,
      l=o.Component
    },function (o)
    {
      c=o.GameGlobal
    }],
    execute:function ()
    {
      var h;
      i._RF.push(
      {

      },"32d04uLkABDhahHcLJUHHFO",
      "CameraControl",
      void 0);
      var u=e.ccclass;
      e.property,
      o("CameraControl",
      u("CameraControl")(h=function (o)
      {
        function i()
        {
          for(var t,
          i=arguments.length,
          e=new Array(i),
          n=0;
          n<i;
          n++)e[n]=arguments[n];
          return(t=o.call.apply(o,
          [this].concat(e))||this).startPosition=new r(0,
          33,
          4.812),
          t.startEuler=new r(-45,
          0,
          0),
          t.startOrthoHeight=30,
          t.offsetPos=new r(0,
          .5,
          3.812),
          t.isMove=!1,
          t.isFirst=!0,
          t.follow=!0,
          t.currPos=new r,
          t
        }t(i,
        o);
        var e=i.prototype;
        return e.onLoad=function ()
        {
          c.CameraControl=this
        },e.onDestroy=function ()
        {

        },e.start=function ()
        {

        },e.cameraOnLoad=function ()
        {
          this.isFirst&&(this.isMove=!1,
          n.windowSize.height>n.windowSize.width?null!=c&&c.mainCamera&&(c.mainCamera.orthoHeight,
          this.startOrthoHeight):c.mainCamera.fov=36,
          this.isMove=!0)
        },e.update=function (o)
        {
          this.isMove&&this.cameraFollow(o)
        },e.cameraFollow=function (o)
        {
          this.follow&&(this.node.getWorldPosition(this.currPos),
          this.currPos.z=11.241,
          this.currPos.y=c.GameController.soliderLayer.worldPosition.y+7.551,
          this.currPos.x=c.GameController.soliderLayer.worldPosition.x/5*3,
          this.node.setWorldPosition(this.currPos))
        },e.initCamera=function ()
        {
          this.node.setWorldPosition(this.startPosition)
        },e.enterScene=function ()
        {
          this.isFirst=!1,
          this.rollCamera()
        },e.rollCamera=function ()
        {
          var o=this;
          this.isMove=!1,
          this.node.setPosition(new r(.784,
          33.4,
          3.647)),
          this.node.eulerAngles=new r(-30,
          13.381,
          -3.585);
          var t=s(.945,
          38.366,
          3.347);
          a(this.node).to(1.5,

          {
            position:t,
            eulerAngles:new r(-53.768,
            26.164,
            -2.995)
          }).to(1,

          {
            position:new r(0,
            36.4599,
            4.812),
            eulerAngles:new r(-10,
            0,
            0)
          }).call((function ()
          {
            o.isMove=!0
          })).start()
        },e.onVibrte=function (o)
        {
          void 0===o&&(o=.08);
          var t=.02;
          a(c.mainCamera).by(t,

          {
            orthoHeight:.2
          }).by(t,

          {
            orthoHeight:-.2
          }).start(),
          a(this.node).by(t,

          {
            position:new r(-o,
            0,
            0)
          }).by(t,

          {
            position:new r(0,
            0,
            -o)
          }).by(t,

          {
            position:new r(o,
            0,
            0)
          }).by(t,

          {
            position:new r(0,
            0,
            o)
          }).start()
        },i
      }(l))||h);
      i._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/Constants.ts
// =========================================
System.register("chunks:///_virtual/Constants.ts",
["cc"],
(function (t)
{
  var e;
  return
  {
    setters:[function (t)
    {
      e=t.cclegacy
    }],
    execute:function ()
    {
      e._RF.push(
      {

      },"19440RvGopPtaKOf9wi1yc7",
      "Constants",
      void 0);
      t("GAME_STATUS",
      function (t)
      {
        return t[t.GAME_INIT=0]="GAME_INIT",
        t[t.GAME_PLAYING=1]="GAME_PLAYING",
        t[t.GAME_PAUSE=2]="GAME_PAUSE",
        t[t.GAME_END=3]="GAME_END",
        t
      }(
      {

      })),
      t("END_TYPE",
      function (t)
      {
        return t[t.WIN=0]="WIN",
        t[t.LOSE=1]="LOSE",
        t
      }(
      {

      })),
      t("PHY_GROUP",
      function (t)
      {
        return t[t.DEFAULT=1]="DEFAULT",
        t[t.LINE=2]="LINE",
        t[t.ENEMY=4]="ENEMY",
        t[t.BULLET=8]="BULLET",
        t[t.Wall=16]="Wall",
        t[t.PROP=32]="PROP",
        t[t.PLAYER=64]="PLAYER",
        t[t.Reborn=128]="Reborn",
        t
      }(
      {

      })),
      t("bulletType",
      function (t)
      {
        return t[t.Left=1]="Left",
        t[t.Right=2]="Right",
        t[t.Middle=3]="Middle",
        t
      }(
      {

      })),
      t("soldierAni",
      function (t)
      {
        return t.Walk="walk",
        t.StandAttack="standAttack",
        t.Die="die",
        t.Idle="idle",
        t.Attack_left="attack_right",
        t.Attack_right="attack_left",
        t.Walk_Left="walk_left",
        t.Walk_Right="walk_right",
        t
      }(
      {

      })),
      t("enemyAni",
      function (t)
      {
        return t.Idle="idle",
        t.Walk="walk",
        t.Die="dead",
        t.Attack="attack",
        t
      }(
      {

      })),
      t("BossAni",
      function (t)
      {
        return t.Walk="Run",
        t.Attack="Attack",
        t.Die="Death",
        t.Idle="Idle",
        t
      }(
      {

      })),
      t("PropType",
      function (t)
      {
        return t[t.ADD_ATK=0]="ADD_ATK",
        t[t.ADD_SPEED=1]="ADD_SPEED",
        t[t.ADD_COUNT=2]="ADD_COUNT",
        t
      }(
      {

      }));
      e._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/devControl.ts
// =========================================
System.register("chunks:///_virtual/devControl.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameConfig.ts"],
(function (e)
{
  var t,
  i,
  n,
  r,
  s,
  a,
  o,
  p,
  u,
  l;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      i=e.inheritsLoose,
      n=e.initializerDefineProperty,
      r=e.assertThisInitialized
    },function (e)
    {
      s=e.cclegacy,
      a=e._decorator,
      o=e.EditBox,
      p=e.log,
      u=e.Component
    },function (e)
    {
      l=e.GameConfigManager
    }],
    execute:function ()
    {
      var m,
      c,
      d,
      b,
      h,
      g,
      f,
      S,
      y,
      w,
      N,
      v,
      E,
      k,
      I,
      C,
      A,
      D,
      R,
      V,
      H,
      U,
      z,
      T,
      F,
      P,
      B,
      x,
      G,
      _,
      j;
      s._RF.push(
      {

      },"8a681SjP6xB1KoGCaRDLGer",
      "devControl",
      void 0);
      var L=a.ccclass,
      J=a.property;
      e("devControl",
      (m=L("devControl"),
      c=J(o),
      d=J(o),
      b=J(o),
      h=J(o),
      g=J(o),
      f=J(o),
      S=J(o),
      y=J(o),
      w=J(o),
      N=J(o),
      v=J(o),
      E=J(o),
      k=J(o),
      I=J(o),
      m((D=t((A=function (e)
      {
        function t()
        {
          for(var t,
          i=arguments.length,
          s=new Array(i),
          a=0;
          a<i;
          a++)s[a]=arguments[a];
          return t=e.call.apply(e,
          [this].concat(s))||this,
          n(t,
          "bossHp",
          D,
          r(t)),
          n(t,
          "bossSpeed",
          R,
          r(t)),
          n(t,
          "bossShowRound",
          V,
          r(t)),
          n(t,
          "spawnEnemyTime",
          H,
          r(t)),
          n(t,
          "enemySpeed",
          U,
          r(t)),
          n(t,
          "enemyHpArr",
          z,
          r(t)),
          n(t,
          "enemyDisRound",
          T,
          r(t)),
          n(t,
          "atkSpeed",
          F,
          r(t)),
          n(t,
          "atkValue",
          P,
          r(t)),
          n(t,
          "propSpawnSpeed",
          B,
          r(t)),
          n(t,
          "propDropSpeed",
          x,
          r(t)),
          n(t,
          "stage1",
          G,
          r(t)),
          n(t,
          "stage2",
          _,
          r(t)),
          n(t,
          "timeScale",
          j,
          r(t)),
          t
        }i(t,
        e);
        var s=t.prototype;
        return s.start=function ()
        {

        },s.onEnable=function ()
        {
          var e=localStorage.getItem("devControl");
          if(e)
          {
            var t=JSON.parse(e);
            this.updateConfigFromSaved(t),
            this.loadFromConfig()
          }else this.loadFromConfig()
        },s.updateConfigFromSaved=function (e)
        {
          l.setBossInfo(e.bossHp,
          e.bossSpeed,
          e.bossShowRound),
          e.spawnEnemy.forEach((function (e,
          t)
          {
            l.setEnemySpawnInterval(t,
            e)
          })),
          e.enemyHp.forEach((function (e,
          t)
          {
            l.setEnemyHp(t,
            e)
          })),
          e.enemySpeed.forEach((function (e,
          t)
          {
            l.setEnemyClimbSpeed(t,
            e)
          })),
          e.enemyDisRound&&l.setEnemyDisAppearRound(e.enemyDisRound),
          e.atkSpeed.forEach((function (e,
          t)
          {
            l.setAttackSpeed(t,
            e)
          })),
          e.atkValue.forEach((function (e,
          t)
          {
            l.setAttackDamage(t,
            e)
          }));
          var t=e.timeScale?e.timeScale:.4;
          l.setPropConfig(
          {
            dropSpeed:e.propDropSpeed,
            spawnSpeed:e.propSpawnTime,
            stage1:e.stage1,
            stage2:e.stage2,
            timeScale:t
          })
        },s.loadFromConfig=function ()
        {
          var e=l.config;
          this.updateUIValue(this.bossHp,
          e.enemies.boss.hp),
          this.updateUIValue(this.bossSpeed,
          e.enemies.boss.climbSpeed),
          this.updateUIValue(this.bossShowRound,
          e.enemies.boss.showRound),
          this.updateUIArray(this.spawnEnemyTime,
          e.enemies.soldier.spawnInterval),
          this.updateUIValue(this.enemySpeed[0],
          e.enemies.soldier.climbSpeed.init),
          this.updateUIArray(this.enemySpeed,
          e.enemies.soldier.climbSpeed.levels,
          1),
          this.updateUIValue(this.enemyHpArr[0],
          e.enemies.soldier.hp.init),
          this.updateUIArray(this.enemyHpArr,
          e.enemies.soldier.hp.levels,
          1),
          this.updateUIValue(this.enemyDisRound,
          e.enemies.soldier.disAppearRound),
          this.updateUIValue(this.atkSpeed[0],
          e.player.attack.speed.init),
          this.updateUIArray(this.atkSpeed,
          e.player.attack.speed.levels,
          1),
          this.updateUIValue(this.atkValue[0],
          e.player.attack.damage.init),
          this.updateUIArray(this.atkValue,
          e.player.attack.damage.levels,
          1),
          this.updateUIArray(this.propSpawnSpeed,
          e.props.spawnSpeed),
          this.updateUIArray(this.propDropSpeed,
          e.props.dropSpeed),
          this.updateUIValue(this.stage1,
          e.props.stage1),
          this.updateUIValue(this.stage2,
          e.props.stage2),
          this.updateUIValue(this.timeScale,
          e.props.timeScale)
        },s.updateUIValue=function (e,
        t)
        {
          e&&!isNaN(t)&&(e.string=t.toString())
        },s.updateUIArray=function (e,
        t,
        i)
        {
          void 0===i&&(i=0),
          t.forEach((function (t,
          n)
          {
            var r=e[i+n];
            r&&!isNaN(t)&&(r.string=t.toString())
          }))
        },s.saveToConfig=function ()
        {
          l.setBossInfo(Number(this.bossHp.string),
          Number(this.bossSpeed.string),
          Number(this.bossShowRound.string)),
          this.spawnEnemyTime.slice().forEach((function (e,
          t)
          {
            l.setEnemySpawnInterval(t,
            Number(e.string))
          })),
          l.setEnemyClimbSpeed(0,
          Number(this.enemySpeed[0].string)),
          this.enemySpeed.slice(1).forEach((function (e,
          t)
          {
            l.setEnemyClimbSpeed(t+1,
            Number(e.string))
          })),
          l.setEnemyHp(0,
          Number(this.enemyHpArr[0].string)),
          this.enemyHpArr.slice(1).forEach((function (e,
          t)
          {
            l.setEnemyHp(t+1,
            Number(e.string))
          })),
          l.setEnemyDisAppearRound(Number(this.enemyDisRound.string)),
          l.setAttackSpeed(0,
          Number(this.atkSpeed[0].string)),
          this.atkSpeed.slice(1).forEach((function (e,
          t)
          {
            l.setAttackSpeed(t+1,
            Number(e.string))
          })),
          l.setAttackDamage(0,
          Number(this.atkValue[0].string)),
          this.atkValue.slice(1).forEach((function (e,
          t)
          {
            l.setAttackDamage(t+1,
            Number(e.string))
          })),
          this.propSpawnSpeed.slice().forEach((function (e,
          t)
          {
            l.setPropSpawnSpeed(t,
            Number(e.string))
          })),
          this.propDropSpeed.slice().forEach((function (e,
          t)
          {
            l.setPropDropSpeed(t,
            Number(e.string))
          })),
          l.setPropStage(1,
          Number(this.stage1.string)),
          l.setPropStage(2,
          Number(this.stage2.string)),
          l.setTimeScale(Number(this.timeScale.string))
        },s.onEditBoxChanged=function ()
        {
          this.saveToConfig();
          var e=
          {
            bossHp:Number(this.bossHp.string),
            bossSpeed:Number(this.bossSpeed.string),
            bossShowRound:Number(this.bossShowRound.string),
            spawnEnemy:this.spawnEnemyTime.map((function (e)
            {
              return Number(e.string)
            })),
            enemySpeed:this.enemySpeed.map((function (e)
            {
              return Number(e.string)
            })),
            enemyHp:this.enemyHpArr.map((function (e)
            {
              return Number(e.string)
            })),
            enemyDisRound:Number(this.enemyDisRound.string),
            atkSpeed:this.atkSpeed.map((function (e)
            {
              return Number(e.string)
            })),
            atkValue:this.atkValue.map((function (e)
            {
              return Number(e.string)
            })),
            propSpawnTime:this.propSpawnSpeed.map((function (e)
            {
              return Number(e.string)
            })),
            propDropSpeed:this.propDropSpeed.map((function (e)
            {
              return Number(e.string)
            })),
            stage1:Number(this.stage1.string),
            stage2:Number(this.stage2.string),
            timeScale:Number(this.timeScale.string)
          };
          p("obj",
          e),
          localStorage.setItem("devControl",
          JSON.stringify(e))
        },s.clearCacheClick=function ()
        {
          localStorage.removeItem("devControl"),
          this.loadFromConfig()
        },s.closeClicked=function ()
        {
          this.node.active=!1
        },s.update=function (e)
        {

        },t
      }(u)).prototype,
      "bossHp",
      [c],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      R=t(A.prototype,
      "bossSpeed",
      [d],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      V=t(A.prototype,
      "bossShowRound",
      [b],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      H=t(A.prototype,
      "spawnEnemyTime",
      [h],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      U=t(A.prototype,
      "enemySpeed",
      [g],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      z=t(A.prototype,
      "enemyHpArr",
      [f],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      T=t(A.prototype,
      "enemyDisRound",
      [S],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      F=t(A.prototype,
      "atkSpeed",
      [y],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      P=t(A.prototype,
      "atkValue",
      [w],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      B=t(A.prototype,
      "propSpawnSpeed",
      [N],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      x=t(A.prototype,
      "propDropSpeed",
      [v],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      G=t(A.prototype,
      "stage1",
      [E],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      _=t(A.prototype,
      "stage2",
      [k],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      j=t(A.prototype,
      "timeScale",
      [I],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      C=A))||C));
      s._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/Enemy.ts
// =========================================
System.register("chunks:///_virtual/Enemy.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./EnemyManager.ts",
"./Base.ts",
"./Constants.ts",
"./GameGlobal.ts",
"./atkEffect.ts",
"./EventManager.ts",
"./BloodBar.ts",
"./Utils.ts",
"./AudioManager.ts",
"./walk.ts"],
(function (t)
{
  var i,
  e,
  o,
  s,
  n,
  a,
  r,
  l,
  h,
  d,
  c,
  u,
  m,
  p,
  _,
  y,
  b,
  f,
  D,
  v,
  P,
  A,
  g,
  z,
  N,
  k,
  B,
  T,
  S;
  return
  {
    setters:[function (t)
    {
      i=t.applyDecoratedDescriptor,
      e=t.inheritsLoose,
      o=t.initializerDefineProperty,
      s=t.assertThisInitialized
    },function (t)
    {
      n=t.cclegacy,
      a=t._decorator,
      r=t.Node,
      l=t.Label,
      h=t.Vec3,
      d=t.Quat,
      c=t.randomRange,
      u=t.MeshRenderer,
      m=t.RigidBody,
      p=t.tween,
      _=t.log,
      y=t.game
    },function (t)
    {
      b=t.EnemyManager
    },function (t)
    {
      f=t.Base
    },function (t)
    {
      D=t.enemyAni,
      v=t.PHY_GROUP,
      P=t.GAME_STATUS,
      A=t.END_TYPE
    },function (t)
    {
      g=t.GameGlobal
    },function (t)
    {
      z=t.atkEffect
    },function (t)
    {
      N=t.default
    },function (t)
    {
      k=t.BloodBar
    },function (t)
    {
      B=t.Utils
    },function (t)
    {
      T=t.AudioManager
    },function (t)
    {
      S=t.walk
    }],
    execute:function ()
    {
      var W,
      w,
      C,
      M,
      I,
      E,
      R,
      O,
      x,
      H,
      L,
      F,
      G,
      U,
      Z,
      Y,
      Q;
      n._RF.push(
      {

      },"16c88D8LJhDb4AjLRhDqmsz",
      "Enemy",
      void 0);
      var V=a.ccclass,
      j=a.property;
      t("Enemy",
      (W=V("Enemy"),
      w=j(r),
      C=j(r),
      M=j(r),
      I=j(k),
      E=j(l),
      W(((Q=function (t)
      {
        function i()
        {
          for(var i,
          e=arguments.length,
          n=new Array(e),
          a=0;
          a<e;
          a++)n[a]=arguments[a];
          return i=t.call.apply(t,
          [this].concat(n))||this,
          o(i,
          "isBoss",
          x,
          s(i)),
          o(i,
          "climbSpeed",
          H,
          s(i)),
          o(i,
          "bodyNormal",
          L,
          s(i)),
          o(i,
          "bodyAtk",
          F,
          s(i)),
          o(i,
          "bodyDie",
          G,
          s(i)),
          o(i,
          "bloodBar",
          U,
          s(i)),
          o(i,
          "bloodNum",
          Z,
          s(i)),
          o(i,
          "maxHp",
          Y,
          s(i)),
          i.hp=0,
          i.isDie=!1,
          i.initPos=new h,
          i._gameController=null,
          i._spawnControl=null,
          i._nodePoolMgr=null,
          i._deathTargetPos=new h,
          i._hpStr="",
          i._cachedWorldPos=new h,
          i._isWorldPosDirty=!0,
          i.INITIAL_ROTATION=new h(0,
          0,
          0),
          i.mat=null,
          i.bodyDieRenderer=null,
          i.NORMAL_Z_OFFSET=.2,
          i._effectSchedule=.2,
          i._lastTimeStamp=0,
          i._maxHitCount=20,
          i._currentHitCount=0,
          i._isAttack=!1,
          i.startShake=!1,
          i.DIE_ANIM_DURATION=.6,
          i.GRAY_DELAY=.2,
          i.tempVec3_0=new h,
          i._startPos=new h,
          i._controlPos=new h,
          i.isDizzy=!1,
          i.lastDizzyTime=0,
          i.DIZZY_DURATION=.12,
          i.DIZZY_COOLDOWN=.2,
          i
        }e(i,
        t);
        var n=i.prototype;
        return n.start=function ()
        {
          t.prototype.start.call(this),
          this.node.getWorldPosition(this._cachedWorldPos),
          this.checkActive()
        },n.onEnable=function ()
        {
          t.prototype.onEnable.call(this),
          this.init(),
          b.add(this),
          N.instance.on("startMove",
          this.doMove,
          this),
          g.isAutoAttack&&this.doMove()
        },n.doMove=function ()
        {
          var t=c(0,
          .5);
          b.schedule(this,
          t,
          "doMoveWalk")
        },n.onDisable=function ()
        {
          t.prototype.onDisable.call(this),
          this.unscheduleAllCallbacks(),
          N.instance.off("startMove",
          this.doMove,
          this),
          b.remove(this),
          b.cancelAllFor(this)
        },n.init=function ()
        {
          var t=this;
          this._resetState(),
          this._setupBasicProperties(),
          this._setupAnimation(),
          this.bloodBar.Init(),
          this._gameController=g.GameController,
          this._spawnControl=g.spawnControl,
          this._nodePoolMgr=g.nodePoolMgr,
          this.isBoss?(3.905==this.anim.node.getScale().x&&(this.bloodBar.node.setPosition(-.15,
          3.6,
          .3),
          this.bloodNum.fontSize=160,
          this.bloodNum.node.setPosition(0,
          25,
          32.726)),
          2e3==this.maxHp&&(this.bloodNum.fontSize=160,
          this.bloodNum.node.setPosition(0,
          25,
          32.726)),
          this.bloodBar.node.active=!0,
          this.bloodNum.node.active=!0,
          this.bodyDie.active=!0,
          this.bodyDieRenderer=this.bodyDie.getComponent(u),
          this.mat=this.bodyDieRenderer.getMaterialInstance(0),
          this.mat.setProperty("dissolveThreshold",
          0),
          this.bodyDieRenderer.enabled=!1,
          this.setDeathMaterial(),
          this.scheduleOnce((function ()
          {
            t.bossRecovery()
          }),
          .5)):(this.bloodBar.node.active=!1,
          this.bloodNum.node.active=!1),
          this._hpStr=this.hp.toString(),
          this.bloodNum.string=this._hpStr,
          this.bloodBar.Weidth=this.hp/this.maxHp,
          this._lastTimeStamp=0
        },n._resetState=function ()
        {
          this.isDie=!1,
          this.isDizzy=!1,
          this._isAttack=!1,
          this._isWorldPosDirty=!0,
          this.bodyNormal.active=!0,
          this.bodyAtk.active=!1,
          this.bodyDie.active=!1
        },n._setupBasicProperties=function ()
        {
          this.hp=this.maxHp,
          this.node.getPosition(this.initPos),
          this.collider.enabled=!0,
          this.isBoss&&(this.DIE_ANIM_DURATION=1)
        },n._setupAnimation=function ()
        {
          var t;
          this.animPlay(D.Idle),
          null==(t=this.anim)||t.node.setRotationFromEuler(this.INITIAL_ROTATION)
        },n.onTriggerEnter=function (t)
        {
          var i=t.otherCollider.node.getComponent(m);
          i&&i.group===v.BULLET&&this._handleBulletHit(i.node)
        },n._handleBulletHit=function (t)
        {
          var e=(new Date).getTime();
          if(!this.isBoss&&e-this._lastTimeStamp>1e3*this._effectSchedule)
          {
            this._lastTimeStamp=e;
            var o=i._tempCurPos;
            t.getWorldPosition(o);
            var s=this.NORMAL_Z_OFFSET;
            o.z+=s;
            var n=this._nodePoolMgr.getNode(this._gameController.effectArr[0],
            this._gameController.effectLayer);
            n.setWorldPosition(o),
            n.getComponent(z).init()
          }else if(this.isBoss)
          {
            var a=i._tempCurPos;
            t.getWorldPosition(a);
            var r=this.NORMAL_Z_OFFSET;
            a.z+=r;
            var l=this._nodePoolMgr.getNode(this._gameController.effectArr[0],
            this._gameController.effectLayer);
            l.setWorldPosition(a),
            l.getComponent(z).init()
          }this.subHp()
        },n.tick=function (t)
        {
          g.gameStatus!=P.GAME_INIT&&g.gameStatus!=P.GAME_END&&(this.isDie||this._isAttack||(this._updateCachedWorldPos(),
          this._shouldFollowPlayer()?this._followPlayer(t):this._updatePosition(t)))
        },n._shouldFollowPlayer=function ()
        {
          return this.checkActive(),
          this._cachedWorldPos.z>=-5
        },n.checkActive=function ()
        {
          var t=this._cachedWorldPos.z>-39;
          this.anim&&this.anim.node&&this.anim.node.active!==t&&(this.anim.node.active=t,
          this.isBoss&&5e3==this.maxHp&&(this.anim.getComponent(S).canShake=t))
        },n._updateCachedWorldPos=function ()
        {
          this._isWorldPosDirty&&(this.node.getWorldPosition(this._cachedWorldPos),
          this._isWorldPosDirty=!1)
        },n._followPlayer=function (t)
        {
          var e=this._gameController.soliderLayer;
          if(e)
          {
            e.getWorldPosition(i._tempSoliderPos);
            var o=i._tempCurPos;
            o.set(this._cachedWorldPos),
            h.subtract(i._tempDir,
            i._tempSoliderPos,
            o);
            var s=i._tempDir.length();
            if(s<=(this.isBoss?3:1))this.checkDis(s);
            else
            {
              h.normalize(i._tempDir,
              i._tempDir);
              var n=this.climbSpeed*t;
              h.multiplyScalar(i._tempDir,
              i._tempDir,
              n),
              h.add(this._cachedWorldPos,
              o,
              i._tempDir),
              this.node.setWorldPosition(this._cachedWorldPos),
              this._isWorldPosDirty=!1,
              this.setRotation(i._tempSoliderPos),
              this.checkDis(s)
            }
          }
        },n._updatePosition=function (t)
        {
          this._cachedWorldPos.z+=this.climbSpeed*t,
          this.node.setWorldPosition(this._cachedWorldPos),
          this._isWorldPosDirty=!1
        },n.checkDis=function (t)
        {
          t<=(this.isBoss?3:1)&&(0==this._spawnControl.activeIndexArr.length?this.animPlay(D.Idle):this._handleAtkActor())
        },n._handleAtkActor=function ()
        {
          this.isBoss?(this._isAttack=!0,
          this.animPlay(D.Attack),
          b.schedule(this,
          1,
          "bossAttackFinish")):(this.isDie=!0,
          this.animPlay(D.Attack),
          b.schedule(this,
          .6,
          "recycleAfterAttack"))
        },n.setRotation=function (t)
        {
          var e,
          o=i._tempDir;
          h.subtract(o,
          t,
          this._cachedWorldPos),
          h.normalize(o,
          o);
          var s=Math.atan2(o.x,
          o.z);
          d.fromAxisAngle(i._tempQuat,
          i._unitY,
          s),
          null==(e=this.anim)||e.node.setWorldRotation(i._tempQuat)
        },n.subHp=function (t)
        {
          this.isDie||(this.hp-=t||this._spawnControl.curDamage,
          this.hp>0&&this.toWhite(),
          this.hp<=0&&(this.hp=0,
          this.doDie()),
          this.bloodBar.node.active=!0,
          this._hpStr=this.hp.toString(),
          this.bloodNum.string=this._hpStr,
          this.updateHealthBarWithTween(this.bloodBar,
          .15))
        },n.updateHealthBarWithTween=function (t,
        i)
        {
          if(t)
          {
            var e=this.hp/this.maxHp;
            t.isMove=!0,
            t.Weidth=this.clamp01(e)
          }
        },n.clamp01=function (t)
        {
          return t>1?1:t<0?0:t
        },n.doDie=function ()
        {
          this.isDie||(this.isDie=!0,
          this.collider.enabled=!1,
          this.isBoss?T.soundPlay("澶т抚灏告浜?):this._spawnControl.enemyDieAudio(),this.setDeathMaterial(),this.playDeathAnimation())},n.setDeathMaterial=function (){this.bodyNormal.active=!1,this.bodyAtk.active=!1,this.isBoss?this.bodyDieRenderer.enabled=!0:this.bodyDie.active=!0},n.bossRecovery=function (){this.bodyNormal.active=!0,this.bodyAtk.active=!1,this.bodyDieRenderer.enabled=!1},n.playDeathAnimation=function (){var t=this,i=this.node.position,e=this._deathTargetPos;e.set(i.x,i.y,i.z-.4),this.animPlay(D.Die),this.isBoss?(this.bodyAtk.active=!1,p(this.node).delay(this.DIE_ANIM_DURATION).call((function (){return t.onDeathAnimationComplete()})).start()):this.moveToPos(this.node,e,.2,.12,(function (){t.onDeathAnimationComplete()}))},n.moveToPos=function (t,i,e,o,s){var n=this;this._startPos.set(t.position.x,t.position.y,t.position.z);var a=this.tempVec3_0,r=this._controlPos;h.add(r,this._startPos,i),r.multiplyScalar(.5),r.x=this._startPos.x,r.add3f(0,1,0),p(t).delay(o).to(e,{position:i},{onUpdate:function (e,o){B.bezierCurve(o,n._startPos,r,i,a),t.setPosition(a)}}).call((function (){s&&s(t)})).start()},n.onDeathAnimationComplete=function (){var t=this;if(this.isBoss&&T.soundPlay("澶т抚灏稿€掑湴"),this.isBoss){var i;this.bodyNormal.active=!1,this.bodyAtk.active=!1;var e={dissolveThreshold:null!=(i=this.mat.getProperty("dissolveThreshold",0))?i:0};p(e).to(1,{dissolveThreshold:1},{onUpdate:function (i){t.mat.setProperty("dissolveThreshold",i.dissolveThreshold)}}).start(),this.scheduleOnce((function (){t._nodePoolMgr.putNode(t.node)}),1)}else this.bodyNormal.active=!1,this._nodePoolMgr.putNode(this.node);this.isBoss&&5e3==this.maxHp&&this._gameController.onGameOver(A.WIN)},n.onScheduled=function (t){switch(t){case"doMoveWalk":this.animPlay(D.Walk);break;case"recycleAfterAttack":_("鍥炴敹鑺傜偣"),this._nodePoolMgr.putNode(this.node),this._spawnControl.killLastSoldiers(1);break;case"bossAttackFinish":if(g.gameStatus==P.GAME_END||this.isDie)return;5e3===this.maxHp&&(g.isEndByBoss=!0),this._spawnControl.killAllActor();break;case"recoverDizzy":this._recoverFromDizzy()}},n.toWhite=function (){var t=y.totalTime;this.isDizzy||t-this.lastDizzyTime<1e3*this.DIZZY_COOLDOWN||(this.isDizzy=!0,this.lastDizzyTime=t,this.bodyNormal.active=!1,this.bodyAtk.active=!0,b.schedule(this,this.DIZZY_DURATION,"recoverDizzy"))},n._recoverFromDizzy=function (){this.bodyAtk.active=!1,this.isDizzy=!1,this.isDie||(this.bodyNormal.active=!0)},i}(f))._tempDir=new h,Q._tempQuat=new d,Q._unitY=new h(0,1,0),Q._tempSoliderPos=new h,Q._tempCurPos=new h,x=i((O=Q).prototype,"isBoss",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return!1}}),H=i(O.prototype,"climbSpeed",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return 5}}),L=i(O.prototype,"bodyNormal",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),F=i(O.prototype,"bodyAtk",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),G=i(O.prototype,"bodyDie",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),U=i(O.prototype,"bloodBar",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=i(O.prototype,"bloodNum",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=i(O.prototype,"maxHp",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return 0}}),R=O))||R));n._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/EnemyManager.ts
// =========================================
System.register("chunks:///_virtual/EnemyManager.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (e)
{
  var t,
  n;
  return
  {
    setters:[function (e)
    {
      t=e.createForOfIteratorHelperLoose
    },function (e)
    {
      n=e.cclegacy
    }],
    execute:function ()
    {
      n._RF.push(
      {

      },"9ee4c0t2ydC1LBsgWplxNBB",
      "EnemyManager",
      void 0);
      var s=e("EnemyManager",
      function ()
      {
        function e()
        {

        }return e.add=function (t)
        {
          t&&e._enemies.add(t)
        },e.remove=function (t)
        {
          t&&(e._enemies.delete(t),
          e.cancelAllFor(t))
        },e.updateAll=function (n)
        {
          if(0!==e._enemies.size||0!==e._tasks.length)
          {
            for(var s,
            o=t(e._enemies);
            !(s=o()).done;
            )
            {
              var a=s.value;
              try
              {
                a&&"function"==typeof a.tick&&a.tick(n)
              }catch(e)
              {

              }
            }if(0!==e._tasks.length)for(var r=e._tasks.length-1;
            r>=0;
            r--)
            {
              var l=e._tasks[r];
              if(l.timeLeft-=n,
              l.timeLeft<=0)
              {
                try
                {
                  l.owner&&"function"==typeof l.owner.onScheduled&&l.owner.onScheduled(l.key)
                }catch(e)
                {

                }var i=e._tasks.length-1,
                c=l;
                r!==i&&(e._tasks[r]=e._tasks[i]),
                e._tasks.pop(),
                c&&(c.owner=null,
                c.timeLeft=0,
                c.key="",
                e._taskPool.push(c))
              }
            }
          }
        },e.clear=function ()
        {
          e._enemies.clear(),
          e._tasks.length=0,
          e._taskPool.length=0
        },e.schedule=function (t,
        n,
        s)
        {
          if(t&&!(n<0))
          {
            var o=e._taskPool.pop();
            o?(o.owner=t,
            o.timeLeft=n,
            o.key=s):o=
            {
              owner:t,
              timeLeft:n,
              key:s
            },e._tasks.push(o)
          }
        },e.cancelAllFor=function (t,
        n)
        {
          if(t)for(var s=e._tasks.length-1;
          s>=0;
          s--)
          {
            var o=e._tasks[s];
            if(o.owner===t&&(void 0===n||o.key===n))
            {
              var a=e._tasks.length-1,
              r=e._tasks[s];
              s!==a&&(e._tasks[s]=e._tasks[a]),
              e._tasks.pop(),
              r.owner=null,
              r.timeLeft=0,
              r.key="",
              e._taskPool.push(r)
            }
          }
        },e
      }());
      s._enemies=new Set,
      s._tasks=[],
      s._taskPool=[],
      n._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/EventManager.ts
// =========================================
System.register("chunks:///_virtual/EventManager.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (t)
{
  var e,
  n,
  r;
  return
  {
    setters:[function (t)
    {
      e=t.createForOfIteratorHelperLoose,
      n=t.createClass
    },function (t)
    {
      r=t.cclegacy
    }],
    execute:function ()
    {
      r._RF.push(
      {

      },"8d2046MH5tKIojWWcNxzTa7",
      "EventManager",
      void 0),
      t("default",
      function ()
      {
        function t()
        {
          this.listeners=new Map
        }var r=t.prototype;
        return r.once=function (t,
        e,
        n)
        {
          for(var r=function ()
          {
            for(var s=arguments.length,
            i=new Array(s),
            a=0;
            a<s;
            a++)i[a]=arguments[a];
            e.apply(n,
            i),
            this.off(t,
            r,
            n)
          }.bind(this),
          s=arguments.length,
          i=new Array(s>3?s-3:0),
          a=3;
          a<s;
          a++)i[a-3]=arguments[a];
          return this.on.apply(this,
          [t,
          r,
          n].concat(i)),
          this
        },r.on=function (t,
        e,
        n)
        {
          for(var r=arguments.length,
          s=new Array(r>3?r-3:0),
          i=3;
          i<r;
          i++)s[i-3]=arguments[i];
          var a,
          o=[e,
          n,
          s];
          this.listeners.has(t)?null==(a=this.listeners.get(t))||a.push(o):this.listeners.set(t,
          [o]);
          return this
        },r.off=function (t,
        e,
        n)
        {
          var r=this.listeners.get(t);
          if(r)for(var s=r.length;
          s--;
          )
          {
            var i=r[s],
            a=i[0],
            o=i[1];
            a===e&&o===n&&r.splice(s,
            1)
          }return this
        },r.offTarget=function (t)
        {
          var e=this;
          return this.listeners.forEach((function (n,
          r)
          {
            for(var s=n.length-1;
            s>=0;
            s--)
            {
              var i=n[s];
              i[0];
              i[1]===t&&n.splice(s,
              1)
            }0===n.length&&e.listeners.delete(r)
          })),
          this
        },r.emit=function (t)
        {
          var n=this.listeners.get(t);
          if(n)
          {
            for(var r=arguments.length,
            s=new Array(r>1?r-1:0),
            i=1;
            i<r;
            i++)s[i-1]=arguments[i];
            for(var a,
            o=e(n);
            !(a=o()).done;
            )
            {
              var c=a.value,
              l=c[0],
              u=c[1],
              f=c[2];
              l.apply(u,
              [].concat(f,
              s))
            }
          }return this
        },r.reset=function ()
        {
          this.listeners.clear()
        },n(t,
        null,
        [
        {
          key:"instance",
          get:function ()
          {
            return t._instance||(t._instance=new t),
            t._instance
          }
        }]),
        t
      }())._instance=void 0,
      r._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/FPSCounter.ts
// =========================================
System.register("chunks:///_virtual/FPSCounter.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./PrintComponent.ts"],
(function (t)
{
  var e,
  i,
  n,
  r,
  a;
  return
  {
    setters:[function (t)
    {
      e=t.inheritsLoose,
      i=t.createClass
    },function (t)
    {
      n=t.cclegacy,
      r=t.game
    },function (t)
    {
      a=t.PrintComponent
    }],
    execute:function ()
    {
      var s;
      n._RF.push(
      {

      },"3c0e5qLWiNGPrI+HmODp3Dw",
      "FPSCounter",
      void 0);
      var m=function ()
      {
        function t()
        {
          this.m_LastFrameCount=0
        }return t.prototype.tryCount=function ()
        {
          return r.totalTime>this.m_LastFrameCount&&r.deltaTime>0&&(this.m_LastFrameCount=r.totalTime,
          this.count(),
          !0)
        },t
      }(),
      o=function (t)
      {
        function n()
        {
          for(var e,
          i=arguments.length,
          n=new Array(i),
          r=0;
          r<i;
          r++)n[r]=arguments[r];
          return(e=t.call.apply(t,
          [this].concat(n))||this)._sampleTimes=0,
          e._framesInSecond=0,
          e._totalTime=0,
          e._accFPS=0,
          e._curFPS=0,
          e
        }e(n,
        t);
        var a=n.prototype;
        return a.startNew=function ()
        {
          this._sampleTimes=0,
          this._framesInSecond=0,
          this._totalTime=0,
          this._accFPS=0,
          this._curFPS=0
        },a.count=function ()
        {
          this._framesInSecond++,
          this._totalTime+=r.deltaTime,
          this._totalTime>=.5&&(this._curFPS=this._framesInSecond/this._totalTime,
          this._totalTime=0,
          this._framesInSecond=0,
          this._sampleTimes++,
          this._accFPS+=this._curFPS)
        },i(n,
        [
        {
          key:"currFPS",
          get:function ()
          {
            return this._curFPS
          }
        },
        {
          key:"avgFPS",
          get:function ()
          {
            return this._sampleTimes>0?this._accFPS/this._sampleTimes:0
          }
        }]),
        n
      }(m),
      u=function (t)
      {
        function i(e)
        {
          var i;
          return(i=t.call(this)||this).m_FrameRange=void 0,
          i.m_FrameCounts=void 0,
          i.m_TotalFrameCount=0,
          i.m_FrameRange=e,
          i.m_FrameCounts=new Array(Math.max(0,
          e+1)).fill(0),
          i
        }e(i,
        t);
        var n=i.prototype;
        return n.startNew=function ()
        {
          this.m_FrameCounts.fill(0),
          this.m_TotalFrameCount=0
        },n.count=function ()
        {
          var t=Math.min(Math.round(1/r.deltaTime),
          this.m_FrameRange);
          this.m_FrameCounts[t]++,
          this.m_TotalFrameCount++
        },n.getFramePercentile=function (t)
        {
          for(var e=this.m_TotalFrameCount*Math.min(Math.max(t/100,
          0),
          1),
          i=0,
          n=0;
          n<this.m_FrameCounts.length;
          n++)if((i+=this.m_FrameCounts[n])>=e)return n;
          return this.m_FrameRange
        },i
      }(m),
      l=function (t)
      {
        function n()
        {
          for(var e,
          i=arguments.length,
          r=new Array(i),
          a=0;
          a<i;
          a++)r[a]=arguments[a];
          return(e=t.call.apply(t,
          [this].concat(r))||this).m_FrameTimes=new Array(n.FrameTimeLength).fill(0),
          e.m_FrameTimeIndex=0,
          e._startTime=0,
          e._smallJankCount=0,
          e._bigJankCount=0,
          e._smallJankTime=0,
          e._bigJankTime=0,
          e
        }e(n,
        t);
        var a=n.prototype;
        return a.startNew=function ()
        {
          this._smallJankCount=0,
          this._bigJankCount=0,
          this._smallJankTime=0,
          this._bigJankTime=0,
          this.m_FrameTimes.fill(0),
          this.m_FrameTimeIndex=0,
          this._startTime=r.totalTime
        },a.count=function ()
        {
          var t=r.deltaTime;
          if(this.m_FrameTimeIndex>=n.FrameTimeLength)
          {
            for(var e=0,
            i=0;
            i<n.FrameTimeLength;
            i++)e+=this.m_FrameTimes[i];
            t>2*(e/n.FrameTimeLength)&&(t>n.FilmFrameTime3?(this._bigJankTime+=t,
            this._bigJankCount++):t>n.FilmFrameTime2&&(this._smallJankTime+=t,
            this._smallJankCount++))
          }this.m_FrameTimes[this.m_FrameTimeIndex++%n.FrameTimeLength]=t
        },a.getDuration=function ()
        {
          return r.totalTime-this._startTime
        },i(n,
        [
        {
          key:"startTime",
          get:function ()
          {
            return this._startTime
          }
        },
        {
          key:"smallJankCount",
          get:function ()
          {
            return this._smallJankCount
          }
        },
        {
          key:"bigJankCount",
          get:function ()
          {
            return this._bigJankCount
          }
        },
        {
          key:"smallJankTime",
          get:function ()
          {
            return this._smallJankTime
          }
        },
        {
          key:"bigJankTime",
          get:function ()
          {
            return this._bigJankTime
          }
        }]),
        n
      }(m);
      s=l,
      l.FilmFrameTime1=1/30,
      l.FilmFrameTime2=2*s.FilmFrameTime1,
      l.FilmFrameTime3=3*s.FilmFrameTime1,
      l.FrameTimeLength=3;
      t("FPSCountercontroller",
      function ()
      {
        function t()
        {
          this.fpsCounter=void 0,
          this.fpsPercentileCounter=void 0,
          this.fpsJankCounter=void 0,
          this.delayStutterTime=10,
          this.elapsedStutterTime=0,
          this.stutterLastTime=0,
          this.m_TotalUpCount=0,
          this.fpsCounter=new o,
          this.fpsPercentileCounter=new u(60),
          this.fpsJankCounter=new l
        }var e=t.prototype;
        return e.start=function ()
        {
          this.elapsedStutterTime=0,
          this.fpsCounter.startNew(),
          this.fpsPercentileCounter.startNew(),
          this.fpsJankCounter.startNew()
        },e.stutter=function (t,
        e,
        i,
        n)
        {
          if(this.fpsCounter.tryCount(),
          this.fpsPercentileCounter.tryCount(),
          this.fpsJankCounter.tryCount(),
          this.elapsedStutterTime+=t,
          this.elapsedStutterTime>=this.delayStutterTime||n)
          {
            this.m_TotalUpCount++;
            var r=e-this.stutterLastTime;
            1==this.m_TotalUpCount&&(r=a.getCurrentDuration()-a.lastGameStartTime),
            this.stutterLastTime=e;
            var s=
            {
              pd_logic_module_tag:"stage-"+i,
              pd_duration:r,
              pd_fps:Math.round(this.fpsCounter.avgFPS),
              pd_fps_0_1:this.fpsPercentileCounter.getFramePercentile(.1),
              pd_fps_01:this.fpsPercentileCounter.getFramePercentile(1),
              pd_fps_10:this.fpsPercentileCounter.getFramePercentile(10),
              pd_fps_20:this.fpsPercentileCounter.getFramePercentile(20),
              pd_fps_30:this.fpsPercentileCounter.getFramePercentile(30),
              pd_fps_50:this.fpsPercentileCounter.getFramePercentile(50),
              pd_big_jank_count:this.fpsJankCounter.bigJankCount,
              pd_big_jank_time:this.fpsJankCounter.bigJankTime,
              pd_small_jank_count:this.fpsJankCounter.smallJankCount,
              pd_small_jank_time:this.fpsJankCounter.smallJankTime
            };
            a.stutter(s),
            this.start()
          }
        },t
      }());
      n._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/GameConfig.ts
// =========================================
System.register("chunks:///_virtual/GameConfig.ts",
["cc"],
(function (e)
{
  var n;
  return
  {
    setters:[function (e)
    {
      n=e.cclegacy
    }],
    execute:function ()
    {
      n._RF.push(
      {

      },"8ea58XUKnBOYaidVw3soaG2",
      "GameConfig",
      void 0);
      e("GameConfigManager",
      function ()
      {
        function e()
        {

        }return e.getBossConfig=function ()
        {
          return this.config.enemies.boss
        },e.getEnemySpawnInterval=function (e)
        {
          return this.config.enemies.soldier.spawnInterval[e]
        },e.getEnemyHp=function (e)
        {
          var n=this.config.enemies.soldier;
          return 0===e?n.hp.init:n.hp.levels[e-1]
        },e.getEnemyClimbSpeed=function (e)
        {
          var n=this.config.enemies.soldier;
          return 0===e?n.climbSpeed.init:n.climbSpeed.levels[e-1]
        },e.getEnemyDisAppearRound=function ()
        {
          return this.config.enemies.soldier.disAppearRound
        },e.getAttackSpeed=function (e)
        {
          return 0===e?this.config.player.attack.speed.init:this.config.player.attack.speed.levels[e-1]
        },e.getAttackDamage=function (e)
        {
          return 0===e?this.config.player.attack.damage.init:this.config.player.attack.damage.levels[e-1]
        },e.getPropConfig=function ()
        {
          return this.config.props
        },e.setBossInfo=function (e,
        n,
        i)
        {
          this.config.enemies.boss.hp=e,
          this.config.enemies.boss.climbSpeed=n,
          this.config.enemies.boss.showRound=i
        },e.setEnemySpawnInterval=function (e,
        n)
        {
          this.config.enemies.soldier.spawnInterval[e]=n
        },e.setEnemyHp=function (e,
        n)
        {
          var i=this.config.enemies.soldier;
          0===e?i.hp.init=n:e-1<i.hp.levels.length&&(i.hp.levels[e-1]=n)
        },e.setEnemyClimbSpeed=function (e,
        n)
        {
          var i=this.config.enemies.soldier;
          0===e?i.climbSpeed.init=n:e-1<i.climbSpeed.levels.length&&(i.climbSpeed.levels[e-1]=n)
        },e.setEnemyDisAppearRound=function (e)
        {
          this.config.enemies.soldier.disAppearRound=e
        },e.setAttackSpeed=function (e,
        n)
        {
          0===e?this.config.player.attack.speed.init=n:e-1<this.config.player.attack.speed.levels.length&&(this.config.player.attack.speed.levels[e-1]=n)
        },e.setAttackDamage=function (e,
        n)
        {
          0===e?this.config.player.attack.damage.init=n:e-1<this.config.player.attack.damage.levels.length&&(this.config.player.attack.damage.levels[e-1]=n)
        },e.setPropDropSpeed=function (e,
        n)
        {
          this.config.props.dropSpeed[e]=n
        },e.setPropSpawnSpeed=function (e,
        n)
        {
          this.config.props.spawnSpeed[e]=n
        },e.setPropStage=function (e,
        n)
        {
          this.config.props["stage"+e]=n
        },e.setTimeScale=function (e)
        {
          this.config.props.timeScale=e
        },e.setPropConfig=function (e)
        {
          Object.assign(this.config.props,
          e)
        },e.setPlayerConfig=function (e)
        {
          Object.assign(this.config.player,
          e)
        },e.setEnemyConfig=function (e,
        n)
        {
          Object.assign(this.config.enemies[e],
          n)
        },e
      }()).config=
      {
        player:
        {
          attack:
          {
            speed:
            {
              init:.5,
              levels:[.23,
              .125,
              .1]
            },damage:
            {
              init:3,
              levels:[3,
              3]
            }
          }
        },props:
        {
          spawnSpeed:[3,
          2],
          dropSpeed:[2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          9],
          stage1:3,
          stage2:5,
          timeScale:.25
        },enemies:
        {
          soldier:
          {
            hp:
            {
              init:3,
              levels:[10,
              15]
            },climbSpeed:
            {
              init:.3,
              levels:[.6,
              .6]
            },spawnInterval:[.8,
            .5,
            .3],
            disAppearRound:7
          },boss:
          {
            hp:300,
            climbSpeed:.3,
            showRound:6
          }
        }
      },n._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/GameController.ts
// =========================================
System.register("chunks:///_virtual/GameController.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Constants.ts",
"./PlayableSDK.ts",
"./InstallTypeEnum.ts",
"./Language.ts",
"./EventManager.ts",
"./TimeManager.ts",
"./ActorPlayer.ts",
"./ActorManager.ts",
"./AudioManager.ts",
"./EnemyManager.ts",
"./Utils.ts"],
(function (e)
{
  var t,
  i,
  n,
  r,
  o,
  a,
  l,
  u,
  s,
  c,
  h,
  f,
  p,
  d,
  m,
  y,
  b,
  g,
  v,
  L,
  E,
  T,
  A,
  N,
  _,
  C,
  w,
  P,
  S,
  G,
  M,
  z,
  O,
  D,
  H,
  I,
  B,
  R,
  U;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      i=e.inheritsLoose,
      n=e.initializerDefineProperty,
      r=e.assertThisInitialized,
      o=e.asyncToGenerator,
      a=e.regeneratorRuntime
    },function (e)
    {
      l=e.cclegacy,
      u=e._decorator,
      s=e.Node,
      c=e.Camera,
      h=e.Prefab,
      f=e.Enum,
      p=e.Vec2,
      d=e.PhysicsSystem,
      m=e.UITransform,
      y=e.input,
      b=e.Input,
      g=e.view,
      v=e.instantiate,
      L=e.screen,
      E=e.ResolutionPolicy,
      T=e.log,
      A=e.isValid,
      N=e.Tween,
      _=e.director,
      C=e.Component
    },function (e)
    {
      w=e.GameGlobal
    },function (e)
    {
      P=e.GAME_STATUS,
      S=e.END_TYPE
    },function (e)
    {
      G=e.PlayableSDK
    },function (e)
    {
      M=e.ChallengeTypeRiveGame
    },function (e)
    {
      z=e.Language
    },function (e)
    {
      O=e.default
    },function (e)
    {
      D=e.TimeManager
    },function (e)
    {
      H=e.ActorPlayer
    },function (e)
    {
      I=e.ActorManager
    },function (e)
    {
      B=e.AudioManager
    },function (e)
    {
      R=e.EnemyManager
    },function (e)
    {
      U=e.Utils
    }],
    execute:function ()
    {
      var k,
      x,
      W,
      F,
      V,
      X,
      Y,
      K,
      j,
      J,
      q,
      Q,
      Z,
      $,
      ee,
      te,
      ie,
      ne,
      re,
      oe,
      ae,
      le,
      ue,
      se,
      ce,
      he,
      fe,
      pe,
      de,
      me,
      ye,
      be,
      ge,
      ve,
      Le,
      Ee,
      Te,
      Ae,
      Ne,
      _e,
      Ce,
      we,
      Pe,
      Se,
      Ge,
      Me,
      ze;
      l._RF.push(
      {

      },"2d407s6EipJKL4KoBYciFdt",
      "GameController",
      void 0);
      var Oe=u.ccclass,
      De=u.property,
      He=e("version",
      function (e)
      {
        return e[e.versionA=0]="versionA",
        e[e.versionB=1]="versionB",
        e
      }(
      {

      }));
      e("GameController",
      (k=Oe("GameController"),
      x=De(s),
      W=De(c),
      F=De(c),
      V=De(s),
      X=De(h),
      Y=De(s),
      K=De(h),
      j=De(s),
      J=De(s),
      q=De(s),
      Q=De(s),
      Z=De(s),
      $=De(s),
      ee=De(s),
      te=De(s),
      ie=De(h),
      ne=De(s),
      re=De(s),
      oe=De(s),
      ae=De(s),
      le=De(
      {
        type:f(He),
        displayName:"瀛愬脊绫诲瀷鐗堟湰",
        tooltip:"versionA:鍏夊脊鐗堟湰\nversionB:绠煝鐗堟湰"
      }),
      ue=De(
      {
        displayName:"鏄惁寮圭獥鐗堟湰"
      }),
      k((he=t((ce=function (e)
      {
        function t()
        {
          for(var t,
          i=arguments.length,
          o=new Array(i),
          a=0;
          a<i;
          a++)o[a]=arguments[a];
          return t=e.call.apply(e,
          [this].concat(o))||this,
          n(t,
          "propRoot",
          he,
          r(t)),
          n(t,
          "mainCamera",
          fe,
          r(t)),
          n(t,
          "camera2d",
          pe,
          r(t)),
          n(t,
          "actor",
          de,
          r(t)),
          n(t,
          "bulletArr",
          me,
          r(t)),
          n(t,
          "bulletLayer",
          ye,
          r(t)),
          n(t,
          "effectArr",
          be,
          r(t)),
          n(t,
          "effectLayer",
          ge,
          r(t)),
          n(t,
          "soliderLayer",
          ve,
          r(t)),
          n(t,
          "enemyLayer",
          Le,
          r(t)),
          n(t,
          "tip",
          Ee,
          r(t)),
          n(t,
          "devNode",
          Te,
          r(t)),
          n(t,
          "propLayer",
          Ae,
          r(t)),
          n(t,
          "guideLine",
          Ne,
          r(t)),
          n(t,
          "guidePerson",
          _e,
          r(t)),
          n(t,
          "maskPre",
          Ce,
          r(t)),
          n(t,
          "cubeArr",
          we,
          r(t)),
          n(t,
          "UILayer",
          Pe,
          r(t)),
          n(t,
          "yanWuPar",
          Se,
          r(t)),
          n(t,
          "countDown",
          Ge,
          r(t)),
          n(t,
          "version",
          Me,
          r(t)),
          n(t,
          "isTc",
          ze,
          r(t)),
          t._touchStartPos=new p,
          t._isTouching=!1,
          t.uiTransform=null,
          t.uiWinNode=null,
          t.uiLoseNode=null,
          t._bulletPreLoadNum=0,
          t._preLoadBulletMaxNum=100,
          t._preLoadBulletLvl=1,
          t._hitEffectPreLoadNum=0,
          t._hitEffectPreLoadNum2=0,
          t._preLoadHitEffectMaxNum=80,
          t.isPlaying=!1,
          t.limitX=-.792,
          t._isGameInitChecked=!1,
          t.isTiShi=!1,
          t.tiShiTimer=0,
          t.gameBegin=!1,
          t.mouseSensitivity=.02,
          t.moveLimit=[-2.4,
          2],
          t.isMoving=!1,
          t.isGameOver=!0,
          t
        }i(t,
        e);
        var l=t.prototype;
        return l.onLoad=function ()
        {
          z.init(),
          d.instance.enable=!0,
          w.GameController=this,
          w.mainCamera=this.mainCamera,
          this.uiTransform=this.node.getComponent(m),
          this.uiWinNode=this.node.getChildByName("UIWin"),
          this.uiLoseNode=this.node.getChildByName("UILose")
        },l.onDestroy=function ()
        {
          y.off(b.EventType.TOUCH_START,
          this.onTouchStart,
          this),
          y.off(b.EventType.TOUCH_MOVE,
          this.onTouchMove,
          this),
          y.off(b.EventType.TOUCH_END,
          this.onTouchEnd,
          this),
          y.off(b.EventType.TOUCH_CANCEL,
          this.onTouchEnd,
          this)
        },l.start=function ()
        {
          var e=this;
          B.musicPlay("bgm",
          !0,
          8),
          g.on("canvas-resize",
          this.resize,
          this),
          this.scheduleOnce(this.resize),
          this.scheduleOnce((function ()
          {
            w.rePlayCount<=0&&G.hideLoadingBar()
          })),
          this.scheduleOnce((function ()
          {
            D.setTimeScale(1),
            w.gameStatus=P.GAME_INIT,
            e.isGameOver=!1,
            w.spawnControl.addSoldier(1),
            e.preloadBullet(),
            e.preLoadHitEffects()
          }),
          .1),
          this.scheduleOnce(this.preLoadBulletOther,
          2),
          y.on(b.EventType.TOUCH_START,
          this.onTouchStart,
          this),
          y.on(b.EventType.TOUCH_MOVE,
          this.onTouchMove,
          this),
          y.on(b.EventType.TOUCH_END,
          this.onTouchEnd,
          this),
          y.on(b.EventType.TOUCH_CANCEL,
          this.onTouchEnd,
          this)
        },l.preloadBullet=function ()
        {
          for(var e=0;
          e<10;
          e++)
          {
            var t=w.nodePoolMgr.getNode(this.bulletArr[0]);
            t.parent=this.bulletLayer,
            w.nodePoolMgr.putNode(t)
          }
        },l.preLoadBulletOther=function ()
        {
          this.schedule(this.preLoadOtherBullets,
          .02)
        },l.preLoadOtherBullets=function ()
        {
          if(this._bulletPreLoadNum>=this._preLoadBulletMaxNum)
          {
            if(this._preLoadBulletLvl++,
            this._preLoadBulletLvl>=this.bulletArr.length)return void this.unschedule(this.preLoadOtherBullets);
            this._bulletPreLoadNum=0
          }var e=v(this.bulletArr[this._preLoadBulletLvl]);
          w.nodePoolMgr.putNode(e),
          this._bulletPreLoadNum++
        },l.preLoadHitEffects=function ()
        {
          this.schedule(this.preLoadHitEffect,
          .02),
          this.schedule(this.preLoadHitEffect2,
          .02)
        },l.preLoadHitEffect=function ()
        {
          if(this._hitEffectPreLoadNum>=this._preLoadHitEffectMaxNum)this.unschedule(this.preLoadHitEffects);
          else
          {
            var e=v(this.effectArr[0]);
            w.nodePoolMgr.putNode(e),
            this._bulletPreLoadNum++
          }
        },l.preLoadHitEffect2=function ()
        {
          if(this._hitEffectPreLoadNum2>=this._preLoadHitEffectMaxNum)this.unschedule(this.preLoadHitEffects);
          else
          {
            var e=v(this.effectArr[1]);
            w.nodePoolMgr.putNode(e),
            this._hitEffectPreLoadNum2++
          }
        },l.resize=function (e)
        {
          L.windowSize.height>L.windowSize.width&&L.windowSize.width/L.windowSize.height<1?g.setResolutionPolicy(E.FIXED_WIDTH):g.setResolutionPolicy(E.FIXED_HEIGHT),
          w.CameraControl.cameraOnLoad()
        },l.update=function (e)
        {
          if(this.gameBegin&&G.ApplovinTimeReport(e),
          this._isGameInitChecked||w.gameStatus!==P.GAME_INIT||this.soliderLayer.position.x<=this.limitX&&(w.gameStatus=P.GAME_PLAYING,
          this.guideLine.active=!1,
          this.guidePerson.active=!1,
          w.isAutoAttack=!0,
          O.instance.emit("startMove"),
          this._isGameInitChecked=!0),
          this.isTiShi)
          {
            if(this.isGameOver)return;
            this.tiShiTimer+=e,
            this.tiShiTimer>=2&&!this.isPlaying&&(T("鎾斁鍔ㄧ敾"),
            this.isPlaying=!0)
          }I.updateAll(e),
          R.updateAll(e)
        },l.hideTip=function ()
        {
          this.tip.active=!1,
          this.tiShiTimer=0,
          this.isTiShi=!1,
          this.isPlaying=!1
        },l.onTouchStart=function (e)
        {
          if(!this.isGameOver&&(w.gameStatus!=P.GAME_INIT||this.gameBegin||(B.musicPlay("bgm",
          !0,
          8),
          this.gameBegin=!0,
          G.applovinEventReport(M.CHALLENGE_STARTED)),
          this._isTouching=!0,
          w.gameStatus==P.GAME_PLAYING))
          {
            var t=e.getUILocation();
            this._touchStartPos.set(t),
            this.hideTip()
          }
        },l.playMove=function (e)
        {
          if(this.isMoving=!0,
          e>0)for(var t=2;
          t<this.soliderLayer.children.length;
          t++)
          {
            var i,
            n=this.soliderLayer.children[t];
            if(n&&A(n))null==(i=n.getComponent(H))||i.playRightAni()
          }else if(e<0)for(var r=2;
          r<this.soliderLayer.children.length;
          r++)
          {
            var o,
            a=this.soliderLayer.children[r];
            if(a&&A(a))null==(o=a.getComponent(H))||o.playLeftAni()
          }var l=this.moveLimit[0]+w.spawnControl.left,
          u=this.moveLimit[1]+w.spawnControl.right,
          s=this.soliderLayer.position.x+e*this.mouseSensitivity;
          s=s>u?u:s<l?l:s;
          var c=this.soliderLayer.position;
          this.soliderLayer.setPosition(s,
          c.y,
          c.z)
        },l.onTouchMove=function (e)
        {
          w.gameStatus!=P.GAME_END&&(this.playMove(e.getDeltaX()),
          this.hideTip())
        },l.onTouchEnd=function (e)
        {
          w.gameStatus!=P.GAME_END&&this._isTouching&&(this._isTouching=!1,
          this.isMoving=!1)
        },l.wait=function (e)
        {
          var t=this;
          return new Promise((function (i)
          {
            t.scheduleOnce(i,
            e)
          }))
        },l.onGameOver=function ()
        {
          var e=o(a().mark((function e(t)
          {
            var i=this;
            return a().wrap((function (e)
            {
              for(;
              ;
              )switch(e.prev=e.next)
              {
                case 0:if(!this.isGameOver)
                {
                  e.next=2;
                  break
                }return e.abrupt("return");
                case 2:this.tip.active=!1,
                T("onGameOver",
                t),
                this.isGameOver=!0,
                w.gameStatus=P.GAME_END,
                B.musicStop(),
                t==S.LOSE?(G.applovinEventReport(M.CHALLENGE_FAILED),
                this.soliderLayer.active=!1,
                0==w.rePlayCount?(this.countDown.active=!0,
                U.tweenNumber(this.countDown.children[1],
                4,
                1,
                3,
                0,
                (function ()
                {
                  i.countDown.active=!1,
                  i.btnAgainClicked()
                }))):this.uiLoseNode&&(this.uiLoseNode.active=!0)):t==S.WIN&&(G.applovinEventReport(M.CHALLENGE_SOLVED),
                this.uiWinNode&&(this.uiWinNode.active=!0));
                case 8:case"end":return e.stop()
              }
            }),
            e,
            this)
          })));
          return function (t)
          {
            return e.apply(this,
            arguments)
          }
        }(),
        l.btnPlayNowClicked=function ()
        {
          T("play now"),
          G.download()
        },l.btnDevClicked=function ()
        {
          this.devNode.active=!this.devNode.active
        },l.btnAgainClicked=function ()
        {
          w.rePlayCount>=1?G.download():(N.stopAll(),
          w.gameOver=!1,
          w.isAutoAttack=!1,
          w.spawnControl=null,
          w.rePlayCount++,
          O.instance.reset(),
          B.stopAllAudio(),
          R.clear(),
          I.clear(),
          this.unscheduleAllCallbacks(),
          G.applovinEventReport(M.CHALLENGE_RETRY),
          _.loadScene("scene"))
        },l.onDisable=function ()
        {
          T("GameController onDisable"),
          w.GameController=null,
          this.unscheduleAllCallbacks()
        },t
      }(C)).prototype,
      "propRoot",
      [x],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      fe=t(ce.prototype,
      "mainCamera",
      [W],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      pe=t(ce.prototype,
      "camera2d",
      [F],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      de=t(ce.prototype,
      "actor",
      [V],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      me=t(ce.prototype,
      "bulletArr",
      [X],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      ye=t(ce.prototype,
      "bulletLayer",
      [Y],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      be=t(ce.prototype,
      "effectArr",
      [K],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      ge=t(ce.prototype,
      "effectLayer",
      [j],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      ve=t(ce.prototype,
      "soliderLayer",
      [J],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Le=t(ce.prototype,
      "enemyLayer",
      [q],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Ee=t(ce.prototype,
      "tip",
      [Q],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Te=t(ce.prototype,
      "devNode",
      [Z],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Ae=t(ce.prototype,
      "propLayer",
      [$],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Ne=t(ce.prototype,
      "guideLine",
      [ee],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      _e=t(ce.prototype,
      "guidePerson",
      [te],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Ce=t(ce.prototype,
      "maskPre",
      [ie],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      we=t(ce.prototype,
      "cubeArr",
      [ne],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      Pe=t(ce.prototype,
      "UILayer",
      [re],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Se=t(ce.prototype,
      "yanWuPar",
      [oe],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Ge=t(ce.prototype,
      "countDown",
      [ae],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      Me=t(ce.prototype,
      "version",
      [le],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return He.versionA
        }
      }),
      ze=t(ce.prototype,
      "isTc",
      [ue],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return!1
        }
      }),
      se=ce))||se));
      l._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/GameGlobal.ts
// =========================================
System.register("chunks:///_virtual/GameGlobal.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./NodePoolMgr.ts",
"./Constants.ts"],
(function (o)
{
  var e,
  t,
  n,
  a,
  r,
  s;
  return
  {
    setters:[function (o)
    {
      e=o.inheritsLoose
    },function (o)
    {
      t=o.cclegacy,
      n=o._decorator,
      a=o.Component
    },function (o)
    {
      r=o.NodePoolMgr
    },function (o)
    {
      s=o.GAME_STATUS
    }],
    execute:function ()
    {
      var i,
      l;
      t._RF.push(
      {

      },"ce6a6j02ZZHmJcy4sqond9+",
      "GameGlobal",
      void 0);
      var c=n.ccclass;
      n.property,
      o("GameGlobal",
      c("GameGlobal")(((l=function (o)
      {
        function t()
        {
          return o.apply(this,
          arguments)||this
        }return e(t,
        o),
        t
      }(a)).mainCamera=void 0,
      l.CameraControl=void 0,
      l.cameraMoving=!1,
      l.gameStatus=s.GAME_INIT,
      l.gameOver=!1,
      l.GameController=void 0,
      l.nodePoolMgr=new r,
      l.actorPlayer=void 0,
      l.spawnControl=void 0,
      l.rePlayCount=0,
      l.isAutoAttack=!1,
      l.hasReLive=!1,
      l.isEndByBoss=!1,
      i=l))||i);
      t._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/GameRoot.ts
// =========================================
System.register("chunks:///_virtual/GameRoot.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./AudioManager.ts",
"./PlayableSDK.ts"],
(function (e)
{
  var o,
  t,
  n,
  r,
  i,
  a,
  u,
  c,
  s,
  d,
  l;
  return
  {
    setters:[function (e)
    {
      o=e.applyDecoratedDescriptor,
      t=e.inheritsLoose,
      n=e.initializerDefineProperty,
      r=e.assertThisInitialized
    },function (e)
    {
      i=e.cclegacy,
      a=e._decorator,
      u=e.AudioSource,
      c=e.director,
      s=e.Component
    },function (e)
    {
      d=e.AudioManager
    },function (e)
    {
      l=e.PlayableSDK
    }],
    execute:function ()
    {
      var p,
      f,
      m,
      h,
      y;
      i._RF.push(
      {

      },"bb261aoqWZOi4QyNrR+P3nD",
      "GameRoot",
      void 0);
      var g=a.ccclass,
      v=a.property;
      e("GameRoot",
      (p=g("GameRoot"),
      f=v(u),
      p((y=o((h=function (e)
      {
        function o()
        {
          for(var o,
          t=arguments.length,
          i=new Array(t),
          a=0;
          a<t;
          a++)i[a]=arguments[a];
          return o=e.call.apply(e,
          [this].concat(i))||this,
          n(o,
          "_audioSource",
          y,
          r(o)),
          o
        }return t(o,
        e),
        o.prototype.onLoad=function ()
        {
          this._audioSource=this.getComponent(u),
          c.addPersistRootNode(this.node),
          l.adapter(),
          l.gameReady(),
          d.init(this._audioSource,
          this.node);
          var e=function (e)
          {
            console.log("AudioManager.resume"),
            d.firstClick=!0,
            d.resume()
          };
          document.addEventListener("mousedown",
          e,

          {
            capture:!0,
            once:!0
          }),
          document.addEventListener("touchstart",
          e,

          {
            capture:!0,
            once:!0
          })
        },o
      }(s)).prototype,
      "_audioSource",
      [f],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      m=h))||m));
      i._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/GuildAnimGoogle.ts
// =========================================
System.register("chunks:///_virtual/GuildAnimGoogle.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./PlayableSDK.ts"],
(function (e)
{
  var o,
  t,
  i,
  n,
  l,
  r,
  a,
  u,
  c,
  p,
  s;
  return
  {
    setters:[function (e)
    {
      o=e.applyDecoratedDescriptor,
      t=e.inheritsLoose,
      i=e.initializerDefineProperty,
      n=e.assertThisInitialized
    },function (e)
    {
      l=e.cclegacy,
      r=e._decorator,
      a=e.Node,
      u=e.Sprite,
      c=e.Component
    },function (e)
    {
      p=e.PlayableSDK,
      s=e.PlatForm
    }],
    execute:function ()
    {
      var d,
      g,
      f,
      G,
      m;
      l._RF.push(
      {

      },"ef8bcoen5tFSLY6doaklX4q",
      "GuildAnimGoogle",
      void 0);
      var y=r.ccclass,
      h=r.property;
      e("GuildAnimGoogle",
      (d=y("GuildAnimGoogle"),
      g=h(a),
      d((m=o((G=function (e)
      {
        function o()
        {
          for(var o,
          t=arguments.length,
          l=new Array(t),
          r=0;
          r<t;
          r++)l[r]=arguments[r];
          return o=e.call.apply(e,
          [this].concat(l))||this,
          i(o,
          "googleGuideNode",
          m,
          n(o)),
          o
        }t(o,
        e);
        var l=o.prototype;
        return l.start=function ()
        {
          console.log("褰撳墠娓犻亾..",
          p.platform),
          this.node.getComponent(u).enabled=p.platform!=s.Google,
          this.googleGuideNode.active=p.platform==s.Google
        },l.update=function (e)
        {

        },o
      }(c)).prototype,
      "googleGuideNode",
      [g],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      f=G))||f));
      l._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/InstallTypeEnum.ts
// =========================================
System.register("chunks:///_virtual/InstallTypeEnum.ts",
["cc"],
(function (E)
{
  var L;
  return
  {
    setters:[function (E)
    {
      L=E.cclegacy
    }],
    execute:function ()
    {
      L._RF.push(
      {

      },"40439PyOVtAYbPTfviX8jc0",
      "InstallTypeEnum",
      void 0);
      E("InstallTypeFunPlus",
      function (E)
      {
        return E.None="None",
        E.Auto="Auto",
        E.Induce="Induce",
        E.Global="Global",
        E
      }(
      {

      })),
      E("InstallTypeRiveGame",
      function (E)
      {
        return E.next="next",
        E.again="again",
        E.download="download",
        E.automatic_jump="automatic_jump",
        E.select_skill="select_skill",
        E.play_now="playnow",
        E
      }(
      {

      })),
      E("ChallengeTypeRiveGame",
      function (E)
      {
        return E.LOADING="LOADING",
        E.LOADED="LOADED",
        E.DISPLAYED="DISPLAYED",
        E.CHALLENGE_STARTED="CHALLENGE_STARTED",
        E.CHALLENGE_FAILED="CHALLENGE_FAILED",
        E.CHALLENGE_RETRY="CHALLENGE_RETRY",
        E.CHALLENGE_PASS_25="CHALLENGE_PASS_25",
        E.CHALLENGE_PASS_50="CHALLENGE_PASS_50",
        E.CHALLENGE_PASS_75="CHALLENGE_PASS_75",
        E.CHALLENGE_SOLVED="CHALLENGE_SOLVED",
        E.COMPLETED="COMPLETED",
        E.CTA_CLICKED="CTA_CLICKED",
        E.ENDCARD_SHOWN="ENDCARD_SHOWN",
        E
      }(
      {

      }));
      L._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/Label18n.ts
// =========================================
System.register("chunks:///_virtual/Label18n.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./Language.ts"],
(function (e)
{
  var i,
  r,
  t,
  a,
  n,
  l,
  o,
  u,
  s;
  return
  {
    setters:[function (e)
    {
      i=e.applyDecoratedDescriptor,
      r=e.inheritsLoose,
      t=e.initializerDefineProperty,
      a=e.assertThisInitialized
    },function (e)
    {
      n=e.cclegacy,
      l=e._decorator,
      o=e.Label,
      u=e.Component
    },function (e)
    {
      s=e.Language
    }],
    execute:function ()
    {
      var c,
      p,
      b,
      f,
      y,
      g,
      d,
      h,
      m,
      z,
      w,
      k,
      L,
      v,
      N,
      _,
      x,
      C,
      D,
      P,
      A,
      F,
      M,
      R,
      S;
      n._RF.push(
      {

      },"2670ftiPx9Ab7wxmsM2Wv4S",
      "Label18n",
      void 0);
      var j=l.ccclass,
      B=l.property;
      e("Label18n",
      (c=j("Label18n"),
      p=B(
      {
        displayName:"涓枃绠€浣?}),b=B({displayName:"鑻辨枃"}),f=B({displayName:"娉曟枃"}),y=B({displayName:"寰锋枃"}),g=B({displayName:"淇勬枃"}),d=B({displayName:"瑗跨彮鐗欐枃"}),h=B({displayName:"钁¤悇鐗欐枃"}),m=B({displayName:"鍦熻€冲叾璇?
      }),
      z=B(
      {
        displayName:"娉㈠叞璇?}),w=B({displayName:"鎰忓ぇ鍒?
      }),
      k=B(
      {
        displayName:"鍗板凹璇?}),c((N=i((v=function (e){function i(){for(var i,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return i=e.call.apply(e,[this].concat(n))||this,t(i,"zh",N,a(i)),t(i,"en",_,a(i)),t(i,"fr",x,a(i)),t(i,"de",C,a(i)),t(i,"ru",D,a(i)),t(i,"es",P,a(i)),t(i,"pt",A,a(i)),t(i,"tr",F,a(i)),t(i,"pl",M,a(i)),t(i,"it",R,a(i)),t(i,"id",S,a(i)),i}r(i,e);var n=i.prototype;return n.start=function (){var e=this.node.getComponent(o);if(e){var i=s.getLanguageCode();e.string=this.setLanguage(i)}},n.setLanguage=function (e){var i="";switch(e){case"zh":i=this.zh;break;case"en":i=this.en;break;case"fr":i=this.fr;break;case"de":i=this.de;break;case"ru":i=this.ru;break;case"es":i=this.es;break;case"pt":i=this.pt;break;case"tr":i=this.tr;break;case"pl":i=this.pl;break;case"it":i=this.it;break;case"id":i=this.id;break;default:i=this.en}return i},i}(u)).prototype,"zh",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),_=i(v.prototype,"en",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),x=i(v.prototype,"fr",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),C=i(v.prototype,"de",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),D=i(v.prototype,"ru",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),P=i(v.prototype,"es",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),A=i(v.prototype,"pt",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),F=i(v.prototype,"tr",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),M=i(v.prototype,"pl",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),R=i(v.prototype,"it",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),S=i(v.prototype,"id",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return""}}),L=v))||L));n._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/Language.ts
// =========================================
System.register("chunks:///_virtual/Language.ts",
["cc"],
(function (e)
{
  var a,
  n,
  g,
  u;
  return
  {
    setters:[function (e)
    {
      a=e.cclegacy,
      n=e.resources,
      g=e.sys,
      u=e.log
    }],
    execute:function ()
    {
      a._RF.push(
      {

      },"2850dHRTmNOqKZuEYvTGiD6",
      "Language",
      void 0);
      var t=e("Language",
      function ()
      {
        function e()
        {

        }return e.init=function (e,
        a)
        {
          void 0===e&&(e=null),
          this.languageCode||this.getLanguageCode(),
          e||(e="texture"),
          n.loadDir(e+"/"+this.languageCode,
          (function ()
          {
            a&&a()
          }))
        },e.getLanguageCode=function ()
        {
          if(this.languageCode)return this.languageCode;
          var a=g.languageCode;
          u("绯荤粺璇█浠ｇ爜锛?,a);var n="en";if(e.languageCodeMap[a])n=e.languageCodeMap[a];else{var t=a.split("-")[0];e.languageCodeMap[t]&&(n=e.languageCodeMap[t])}return u("褰撳墠璇█浠ｇ爜锛?,
          n),
          this.languageCode=n,
          this.languageCode
        },e
      }());
      t.languageCode=null,
      t.languageCodeMap=
      {
        de:"de",
        fr:"fr",
        ru:"ru",
        en:"en",
        es:"es",
        pt:"pt",
        it:"it",
        tr:"tr",
        pl:"pl",
        id:"id"
      },a._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/main
// =========================================
System.register("chunks:///_virtual/main",
["./GameController.ts",
"./GameGlobal.ts",
"./RayControl.ts",
"./ActorManager.ts",
"./ActorPlayer.ts",
"./Base.ts",
"./Enemy.ts",
"./EnemyManager.ts",
"./SpawnControl.ts",
"./walk.ts",
"./Constants.ts",
"./GameConfig.ts",
"./devControl.ts",
"./GuildAnimGoogle.ts",
"./Label18n.ts",
"./Language.ts",
"./PlatformCheck.ts",
"./SpriteI18n.ts",
"./PropItem.ts",
"./Reward.ts",
"./atkEffect.ts",
"./bullet.ts",
"./rebornArea.ts",
"./AudioManager.ts",
"./FPSCounter.ts",
"./GameRoot.ts",
"./InstallTypeEnum.ts",
"./PlayableSDK.ts",
"./PrintComponent.ts",
"./ArrowFlow.ts",
"./BloodBar.ts",
"./CameraControl.ts",
"./EventManager.ts",
"./MotionTrail.ts",
"./NodePoolMgr.ts",
"./TimeManager.ts",
"./Utils.ts"],
(function ()
{
  return
  {
    setters:[null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null],
    execute:function ()
    {

    }
  }
}));

// =========================================
// Module: chunks:///_virtual/MotionTrail.ts
// =========================================
System.register("chunks:///_virtual/MotionTrail.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function ()
{
  var t,
  e,
  i,
  r,
  a,
  o,
  s,
  n,
  l,
  h,
  d,
  p,
  c,
  u,
  f,
  y;
  return
  {
    setters:[function (o)
    {
      t=o.applyDecoratedDescriptor,
      e=o.inheritsLoose,
      i=o.initializerDefineProperty,
      r=o.assertThisInitialized,
      a=o.createClass
    },function (t)
    {
      o=t.cclegacy,
      s=t._decorator,
      n=t.UITransform,
      l=t.SpriteAtlas,
      h=t.SpriteFrame,
      d=t.CCInteger,
      p=t.Color,
      c=t.Vec2,
      u=t.NodeEventType,
      f=t.Node,
      y=t.UIRenderer
    }],
    execute:function ()
    {
      var _,
      b,
      g,
      v,
      m,
      x,
      D,
      C,
      W,
      S,
      w,
      F,
      O,
      I,
      M,
      N,
      R,
      X,
      k,
      P,
      j,
      z,
      T;
      o._RF.push(
      {

      },"4ceb8nVh8BNFrrB1BHtI1CL",
      "MotionTrail",
      void 0);
      var A=function ()
      {
        this.x=0,
        this.y=0,
        this.cos=0,
        this.sin=0
      },B=s.ccclass,
      U=s.disallowMultiple,
      H=s.property,
      L=(_=(0,
      s.requireComponent)(n),
      b=H(
      {
        displayName:"馃摎Atlas鍥鹃泦",
        type:l,
        readonly:!0,
        editorOnly:!0,
        serializable:!1
      }),
      g=H(
      {
        displayName:"馃柤锔忕汗鐞嗘垨鍥鹃泦甯?,type:h}),v=H({displayName:"馃實涓栫晫鍧愭爣"}),m=H({displayName:"馃搷鍧愭爣鍋忕Щ"}),x=H({displayName:"馃搹鎷栧熬闀垮害",type:d}),D=H({displayName:"鉃栧ご閮ㄥ搴?
      }),
      C=H(
      {
        displayName:"鉃栧熬閮ㄥ搴?}),W=H({displayName:"馃帹澶撮儴棰滆壊",type:p}),S=H({displayName:"馃帹灏鹃儴棰滆壊",type:p}),B(w=U(w=_((O=t((F=function (t){function o(){for(var e,a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,i(e,"atlas",O,r(e)),i(e,"_spriteFrame",I,r(e)),i(e,"_isWorldXy",M,r(e)),i(e,"offset",N,r(e)),i(e,"_length",R,r(e)),i(e,"_headWidth",X,r(e)),i(e,"_tailWidth",k,r(e)),i(e,"_headColor",P,r(e)),i(e,"_tailColor",j,r(e)),e.joints=[],e.cascadeScale=new c(1,1),e.visibleScale=new c(1,1),e.headId=0,e.headHalfW=0,e.disDelt=0,e.isPaused=!1,e}e(o,t);var s=o.prototype;return s.__preload=function (){t.prototype.__preload.call(this),this._assembler={updateColor:this.updateColor.bind(this),updateRenderData:this.updateRenderData.bind(this),fillBuffers:this.fillBuffer.bind(this)},this._useVertexOpacity=!0,this.updateMaterial(),this.updateSpriteFrame()},s.onEnable=function (){t.prototype.onEnable.call(this),this.updateLength(),this.updateUv(),this.updateWidth(),this.updateCascadeScale(),this.updateVisibleScale(),this.resetPos(),this.updateColor(),this.node.on(u.TRANSFORM_CHANGED,this.updateVisibleScale,this)},s.onDisable=function (){t.prototype.onDisable.call(this),this.node.off(u.TRANSFORM_CHANGED,this.updateVisibleScale,this)},s.updateSpriteFrame=function (){this._spriteFrame?this._renderData&&(this._renderData.textureDirty=!0):this.atlas=null},s.createData=function (){var t=this.requestRenderData();if(t){var e=this._length<<1;t.dataLength=e,t.resize(e,3*(e-2)),this.updateIndices()}},s.updateLength=function (){this.headId=0;for(var t=0,e=this._length,i=this.joints=[];t<e;i[t++]=new A);this.createData()},s.updateWidth=function (){this.headHalfW=.5*this._headWidth,this.disDelt=(this.headHalfW-.5*this._tailWidth)/(this._length-1)},s.updateIndices=function (){var t=this._renderData;if(t){for(var e=new Uint16Array(t.chunk.indexCount),i=0,r=0,a=e.length;i<a;++r)e[i++]=r,e[i++]=r+1,e[i++]=r+2;t.indices=e}},s.updateCascadeScale=function (){for(var t=this.node,e=1,i=1;null!==t._parent;)e*=(t=t._parent).scale.x,i*=t.scale.y;this.cascadeScale.x=e,this.cascadeScale.y=i},s.updateVisibleScale=function (t){void 0===t&&(t=4),t&f.TransformBit.SCALE&&(this.visibleScale.x=this.cascadeScale.x*this.node.scale.x,this.visibleScale.y=this.cascadeScale.y*this.node.scale.y)},s.updateXy=function (){var t=this._renderData;if(t){var e=this.node,i=this.joints,r=t.data,a=this._length,o=a-1;this.headId=(this.headId-1+a)%a;var s=i[this.headId],n=i[(this.headId+1)%a],l=this.visibleScale.x,h=this.visibleScale.y;if(this._isWorldXy){var d=e.worldMatrix;s.x=this.offset.x*l+d.m12,s.y=this.offset.y*h+d.m13}else s.x=this.offset.x*e.scale.x+e.position.x,s.y=this.offset.y*e.scale.y+e.position.y;var p=n.y-s.y,c=n.x-s.x,u=Math.sqrt(p*p+c*c);u>0?(s.sin=p/u,s.cos=c/u):(s.sin=n.sin,s.cos=n.cos);var f=0,y=0,_=1,b=1;this._isWorldXy||(f=e.position.x,y=e.position.y,_=this.cascadeScale.x,b=this.cascadeScale.y);for(var g=0,v=0,m=0,x=this.headHalfW,D=this.disDelt,C=0;C<o;++C,g+=2){var W=i[(this.headId+C)%a],S=(W.x-f)*_,w=(W.y-y)*b,F=x*l*(v=W.sin),O=x*h*(m=W.cos);r[g].x=S+F,r[g].y=w-O,r[g+1].x=S-F,r[g+1].y=w+O,x-=D}var I=i[(this.headId+o)%a],M=(I.x-f)*_,N=(I.y-y)*b,R=x*l*v,X=x*h*m;r[g].x=M+R,r[g].y=N-X,r[g+1].x=M-R,r[g+1].y=N+X,this.fitXy(r)}},s.resetPos=function (){var t=this._renderData;if(t){this.headId=0;var e=t.data,i=this.offset.x,r=this.offset.y,a=this.node;if(this._isWorldXy){var o=a.worldMatrix;i+=o.m12,r+=o.m13}else i+=a.position.x,r+=a.position.y;for(var s=this._length-1,n=this.joints;s>=0;--s)n[s].x=i,n[s].y=r,n[s].sin=0,n[s].cos=0;for(var l=0,h=e.length;l<h;++l)e[l].x=i,e[l].y=r;this.fitXy(e)}},s.fitXy=function (t){var e=this._renderData;if(e){var i=e.chunk.vb;if(this._isWorldXy)for(var r=0,a=i.length,o=e.floatStride,s=0;r<a;r+=o,++s)i[r]=t[s].x,i[r+1]=t[s].y;else for(var n=this.node.worldMatrix,l=n.m12,h=n.m13,d=0,p=i.length,c=e.floatStride,u=0;d<p;d+=c,++u)i[d]=t[u].x+l,i[d+1]=t[u].y+h}},s.updateUv=function (){var t=this._renderData,e=this._spriteFrame;if(e&&t){for(var i=t.chunk.vb,r=t.floatStride,a=1/(this.joints.length-1),o=3,s=0,n=i.length;o<n;o+=r,++s)i[o]=1&s,i[o+1]=1-a*(s>>1);var l=e.uv;if(e._rotated)for(var h=l[0],d=l[1],p=l[4]-h,c=l[3]-d,u=3,f=i.length,y=t.floatStride;u<f;u+=y){var _=i[u];i[u]=h+i[u+1]*p,i[u+1]=d+_*c}else for(var b=l[0],g=l[1],v=l[2]-b,m=l[5]-g,x=3,D=i.length,C=t.floatStride;x<D;x+=C)i[x]=b+i[x]*v,i[x+1]=g+i[x+1]*m}},s.updateColor=function (){var t=this._renderData;if(t)for(var e=t.chunk.vb,i=this._headColor,r=this._tailColor,a=i.r/255,o=i.g/255,s=i.b/255,n=i.a/255,l=this._length-1,h=(a-r.r/255)/l,d=(o-r.g/255)/l,p=(s-r.b/255)/l,c=(n-r.a/255)/l,u=this.color,f=u.r/255,y=u.g/255,_=u.b/255,b=u.a/255,g=5,v=e.length,m=2*t.floatStride,x=0;g<v;g+=m,++x)e[g]=e[g+9]=f*(a-h*x),e[g+1]=e[g+10]=y*(o-d*x),e[g+2]=e[g+11]=_*(s-p*x),e[g+3]=e[g+12]=b*(n-c*x)},s.updateRenderData=function (){var t;this._renderData&&null!=(t=this._spriteFrame)&&t.texture&&!this.isPaused&&(this.updateXy(),this._renderData.updateRenderData(this,this._spriteFrame))},s._render=function (t){t.commitComp(this,this._renderData,this._spriteFrame,this._assembler,null),this.markForUpdateRenderData()},s._canRender=function (){var e;return t.prototype._canRender.call(this)&&!(null==(e=this._spriteFrame)||!e.texture)},s.fillBuffer=function (){var t=this._renderData;if(t){for(var e=t.chunk,i=e.vertexOffset,r=e.meshBuffer,a=r.iData,o=r.indexOffset,s=t.indices,n=0;n<s.length;a[o++]=i+s[n++]);r.indexOffset+=s.length}},a(o,[{key:"spriteFrame",get:function (){return this._spriteFrame},set:function (t){this._spriteFrame=t,this.updateSpriteFrame(),this.updateUv(),this.markForUpdateRenderData()}},{key:"isWorldXy",get:function (){return this._isWorldXy},set:function (t){this._isWorldXy=t,this.resetPos()}},{key:"length",get:function (){return this._length},set:function (t){this._length=Math.max(t,2),this.updateLength(),this.updateIndices(),this.updateUv(),this.updateWidth(),this.resetPos(),this.updateColor()}},{key:"headWidth",get:function (){return this._headWidth},set:function (t){this._headWidth=Math.max(t,0),this.updateWidth()}},{key:"tailWidth",get:function (){return this._tailWidth},set:function (t){this._tailWidth=Math.max(t,0),this.updateWidth()}},{key:"headColor",get:function (){return this._headColor},set:function (t){this._headColor=t,this.updateColor()}},{key:"tailColor",get:function (){return this._tailColor},set:function (t){this._tailColor=t,this.updateColor()}}]),o}(y)).prototype,"atlas",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),I=t(F.prototype,"_spriteFrame",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return null}}),t(F.prototype,"spriteFrame",[g],Object.getOwnPropertyDescriptor(F.prototype,"spriteFrame"),F.prototype),M=t(F.prototype,"_isWorldXy",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return!0}}),t(F.prototype,"isWorldXy",[v],Object.getOwnPropertyDescriptor(F.prototype,"isWorldXy"),F.prototype),N=t(F.prototype,"offset",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return new c}}),R=t(F.prototype,"_length",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return 20}}),t(F.prototype,"length",[x],Object.getOwnPropertyDescriptor(F.prototype,"length"),F.prototype),X=t(F.prototype,"_headWidth",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return 100}}),t(F.prototype,"headWidth",[D],Object.getOwnPropertyDescriptor(F.prototype,"headWidth"),F.prototype),k=t(F.prototype,"_tailWidth",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return 0}}),t(F.prototype,"tailWidth",[C],Object.getOwnPropertyDescriptor(F.prototype,"tailWidth"),F.prototype),P=t(F.prototype,"_headColor",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return new p(255,255,255,255)}}),t(F.prototype,"headColor",[W],Object.getOwnPropertyDescriptor(F.prototype,"headColor"),F.prototype),j=t(F.prototype,"_tailColor",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function (){return new p(255,255,255,255)}}),t(F.prototype,"tailColor",[S],Object.getOwnPropertyDescriptor(F.prototype,"tailColor"),F.prototype),w=F))||w)||w)||w);(z=(T=globalThis).gi||(T.gi={})).MotionTrail||(z.MotionTrail=L),o._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/NodePoolMgr.ts
// =========================================
System.register("chunks:///_virtual/NodePoolMgr.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (t)
{
  var o,
  e,
  i,
  n,
  l,
  c;
  return
  {
    setters:[function (t)
    {
      o=t.createClass
    },function (t)
    {
      e=t.cclegacy,
      i=t._decorator,
      n=t.NodePool,
      l=t.instantiate,
      c=t.isValid
    }],
    execute:function ()
    {
      var s,
      r;
      e._RF.push(
      {

      },"bbcd85wum9LSKw7Dte6VqKJ",
      "NodePoolMgr",
      void 0);
      var a=i.ccclass;
      t("NodePoolMgr",
      a("NodePoolMgr")(((r=function ()
      {
        function t()
        {
          this._maxPoolSize=t.DEFAULT_MAX_POOL_SIZE,
          this._dictPool=
          {

          }
        }var e=t.prototype;
        return e.setMaxPoolSize=function (t)
        {
          this._maxPoolSize=Math.max(0,
          t)
        },e.getPoolSize=function (t)
        {
          var o,
          e;
          return null!=(o=null==(e=this._dictPool[t])?void 0:e.size())?o:0
        },e.getNode=function (t,
        o)
        {
          var e=t.name,
          i=this._dictPool[e];
          i||(i=new n,
          this._dictPool[e]=i);
          var s=i.size()>0?i.get():l(t);
          return c(s)&&(c(o)&&(s.parent=o),
          s.active=!0),
          s
        },e.putNode=function (t)
        {
          if(c(t))
          {
            var o=t.name,
            e=this._dictPool[o];
            e||(e=new n,
            this._dictPool[o]=e),
            e.size()>=this._maxPoolSize?t.destroy():(t.active=!1,
            t.parent=null,
            e.put(t))
          }
        },e.clearPool=function (t)
        {
          if(t)
          {
            var o=t.name,
            e=this._dictPool[o];
            e&&(e.clear(),
            delete this._dictPool[o])
          }else for(var i in this._dictPool)this._dictPool[i].clear(),
          delete this._dictPool[i]
        },o(t,
        null,
        [
        {
          key:"inst",
          get:function ()
          {
            return this._instance||(this._instance=new t),
            this._instance
          }
        }]),
        t
      }())._instance=void 0,
      r.DEFAULT_MAX_POOL_SIZE=40,
      s=r))||s);
      e._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/PlatformCheck.ts
// =========================================
System.register("chunks:///_virtual/PlatformCheck.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./PlayableSDK.ts"],
(function (e)
{
  var t,
  r,
  n,
  o,
  a,
  i,
  c,
  l,
  s,
  p,
  u,
  m,
  f,
  h,
  d,
  g,
  b;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      r=e.inheritsLoose,
      n=e.initializerDefineProperty,
      o=e.assertThisInitialized,
      a=e.asyncToGenerator,
      i=e.regeneratorRuntime
    },function (e)
    {
      c=e.cclegacy,
      l=e._decorator,
      s=e.ccenum,
      p=e.Component,
      u=e.Sprite,
      m=e.UITransform,
      f=e.resources,
      h=e.SpriteFrame,
      d=e.Animation
    },function (e)
    {
      g=e.PlayableSDK,
      b=e.PlatForm
    }],
    execute:function ()
    {
      var S,
      y,
      C,
      k,
      P,
      v,
      w;
      c._RF.push(
      {

      },"700558RJ4VO3rRYxCYcNCX+",
      "PlatformCheck",
      void 0);
      var x=l.ccclass,
      F=l.property,
      z=e("GooglePlatform",
      function (e)
      {
        return e[e.Animation=0]="Animation",
        e[e.Visable=1]="Visable",
        e[e.Sprite=2]="Sprite",
        e[e.Shader=3]="Shader",
        e[e.Component=4]="Component",
        e[e.Show=5]="Show",
        e
      }(
      {

      }));
      s(z);
      e("PlatformCheck",
      (S=x("PlatformCheck"),
      y=F(
      {
        type:[z],
        displayName:"Google涓撻」",
        tooltip:"Animation浼氶攢姣佽嚜韬獳nimation缁勪欢,Visable浼氱鐢ㄨ妭鐐规樉绀?Sprite浼氬己鍒舵洿鎹㈢簿鐏典负Play Now,Shader浼氳缃潃鑹插櫒speedScale灞炴€?Component鐢变簬鍒ゅ畾闂鏆傛椂涓嶅彲鐢?}),C=F({displayName:"en/PlayNow鐨勮矾寰?,
        visible:function ()
        {
          return this.googlePlatform==z.Sprite
        }
      }),
      S((v=t((P=function (e)
      {
        function t()
        {
          for(var t,
          r=arguments.length,
          a=new Array(r),
          i=0;
          i<r;
          i++)a[i]=arguments[i];
          return t=e.call.apply(e,
          [this].concat(a))||this,
          n(t,
          "googlePlatform",
          v,
          o(t)),
          n(t,
          "path",
          w,
          o(t)),
          t
        }return r(t,
        e),
        t.prototype.onLoad=function ()
        {
          var e=a(i().mark((function e()
          {
            var t,
            r,
            n=this;
            return i().wrap((function (e)
            {
              for(;
              ;
              )switch(e.prev=e.next)
              {
                case 0:if(g.platform!=b.Google)
                {
                  e.next=10;
                  break
                }t=i().mark((function e()
                {
                  var t,
                  o,
                  a,
                  c;
                  return i().wrap((function (e)
                  {
                    for(;
                    ;
                    )switch(e.prev=e.next)
                    {
                      case 0:e.t0=n.googlePlatform[r],
                      e.next=e.t0===z.Animation?3:e.t0===z.Visable?5:e.t0===z.Sprite?7:e.t0===z.Shader?12:e.t0===z.Component?14:e.t0===z.Show?16:18;
                      break;
                      case 3:return n.getComponent(d).destroy(),
                      e.abrupt("break",
                      18);
                      case 5:return n.node.active=!1,
                      e.abrupt("break",
                      18);
                      case 7:return t=n.node.scale.clone(),
                      o=n.getComponent(m).contentSize.clone(),
                      (a=f.get(n.path+"/spriteFrame",
                      h))?(n.getComponent(u).spriteFrame=a,
                      c=n.getComponent(m).contentSize.clone(),
                      n.node.scale=t.clone().multiplyScalar(o.width/c.width),
                      n.node.scale.x>t.x&&(n.node.scale=t)):f.load(n.path+"/spriteFrame",
                      h,
                      (function (e,
                      r)
                      {
                        if(r)
                        {
                          n.getComponent(u).spriteFrame=r;
                          var a=n.getComponent(m).contentSize.clone();
                          n.node.scale=t.clone().multiplyScalar(o.width/a.width),
                          n.node.scale.x>t.x&&(n.node.scale=t)
                        }
                      })),
                      e.abrupt("break",
                      18);
                      case 12:return n.getComponent(u).getMaterialInstance(0).setProperty("speedScale",
                      0),
                      e.abrupt("break",
                      18);
                      case 14:return n.node.getComponents(p),
                      e.abrupt("break",
                      18);
                      case 16:return n.node.active=!0,
                      e.abrupt("break",
                      18);
                      case 18:case"end":return e.stop()
                    }
                  }),
                  e)
                })),
                r=0;
                case 3:if(!(r<this.googlePlatform.length))
                {
                  e.next=8;
                  break
                }return e.delegateYield(t(),
                "t0",
                5);
                case 5:r++,
                e.next=3;
                break;
                case 8:e.next=11;
                break;
                case 10:g.platform==b.Wechat&&(this.node.active=!1);
                case 11:case"end":return e.stop()
              }
            }),
            e,
            this)
          })));
          return function ()
          {
            return e.apply(this,
            arguments)
          }
        }(),
        t
      }(p)).prototype,
      "googlePlatform",
      [y],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      w=t(P.prototype,
      "path",
      [C],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return""
        }
      }),
      k=P))||k));
      c._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/PlayableSDK.ts
// =========================================
System.register("chunks:///_virtual/PlayableSDK.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./InstallTypeEnum.ts"],
(function (n)
{
  var o,
  e,
  t;
  return
  {
    setters:[function (n)
    {
      o=n.createClass
    },function (n)
    {
      e=n.cclegacy
    },function (n)
    {
      t=n.ChallengeTypeRiveGame
    }],
    execute:function ()
    {
      var a;
      e._RF.push(
      {

      },"bbd60/h3LhKgoUx3AHscQdf",
      "PlayableSDK",
      void 0);
      var i=n("PlatForm",
      function (n)
      {
        return n.Aarki="Aarki",
        n.AdColony="AdColony",
        n.Applovin="Applovin",
        n.Bigo="Bigo",
        n.Chartboost="Chartboost",
        n.Facebook="Facebook",
        n.Google="Google",
        n.Ironsource="Ironsource",
        n.Kwai="Kwai",
        n.Liftoff="Liftoff",
        n.Mintegral="Mintegral",
        n.Mytarget="Mytarget",
        n.Moloco="Moloco",
        n.Pangle="Pangle",
        n.Snapchat="Snapchat",
        n.Tapjoy="Tapjoy",
        n.Tiktok="Tiktok",
        n.Unity="Unity",
        n.Vungle="Vungle",
        n.Wechat="Wechat",
        n.Douyin="Douyin",
        n.Preview="Preview",
        n
      }(
      {

      })),
      s=n("PlayableSDK",
      function ()
      {
        function n()
        {

        }return n.hideLoadingBar=function ()
        {
          window.setLoadingProgress&&window.setLoadingProgress(100),
          window.AnalyticsIns&&window.AnalyticsIns.onDisplay&&window.AnalyticsIns.onDisplay()
        },n.getGameConfs=function (n)
        {
          return"GameConfs"in window?window.GameConfs[n]:null
        },n.download=function (n)
        {

        },n.onInitPlayable=function ()
        {
          window.AnalyticsIns&&window.AnalyticsIns.onInitPlayable()
        },n.onLoaded=function ()
        {
          window.AnalyticsIns&&window.AnalyticsIns.onLoaded()
        },n.onCompleted=function ()
        {
          window.AnalyticsIns&&window.AnalyticsIns.onCompleted()
        },n.onDisplay=function ()
        {
          window.AnalyticsIns&&window.AnalyticsIns.onDisplay()
        },n.onInstall=function (n)
        {

        },n.trackCustomEvent=function (n,
        o)
        {
          window.AnalyticsIns&&window.AnalyticsIns.trackCustomEvent(n,
          o)
        },n.onShowEndCard=function (n)
        {
          void 0===n&&(n="win"),
          window.AnalyticsIns&&window.AnalyticsIns.onShowEndCard(n)
        },n.onRetry=function ()
        {
          window.AnalyticsIns&&window.AnalyticsIns.onRetry()
        },n.adapter=function ()
        {
          window.xsd_playable&&window.xsd_playable.adapter()
        },n.gameReady=function ()
        {
          window.xsd_playable&&window.xsd_playable.gameReady()
        },n.gameDownload=function ()
        {
          window.xsd_playable&&window.xsd_playable.install()
        },n.gameEnd=function ()
        {
          window.xsd_playable&&window.xsd_playable.gameEnd()
        },n.onInteracted=function ()
        {
          this.isFirstClick||(window.xsd_playable&&window.xsd_playable.onInteracted(),
          this.isFirstClick=!0)
        },n.unicodeEncode=function (n)
        {
          for(var o="",
          e=0;
          e<n.length;
          e++)
          {
            var t=n.charCodeAt(e);
            o+="\\u"+this.padLeft(t.toString(16),
            "0",
            4)
          }return o
        },n.unicodeDecode=function (n)
        {
          return n.replace(/\\u([\d\w]
          {
            4
          })/gi,
          (function (n,
          o)
          {
            return String.fromCharCode(parseInt(o,
            16))
          }))
        },n.padLeft=function (n,
        o,
        e)
        {
          for(;
          n.length<e;
          )n=o+n;
          return n
        },n.ApplovinTimeReport=function (o)
        {
          0!=n.ChallengeTypeToNumber[t.CHALLENGE_STARTED]&&(this.gameTime+=o,
          this.gameTime>=10&&0==this.reportNum?(this.reportNum++,
          n.applovinEventReport(t.CHALLENGE_PASS_25)):this.gameTime>=30&&1==this.reportNum?(this.reportNum++,
          n.applovinEventReport(t.CHALLENGE_PASS_50)):this.gameTime>=60&&2==this.reportNum&&(this.reportNum++,
          n.applovinEventReport(t.CHALLENGE_PASS_75)))
        },n.applovinEventReport=function (o,
        e)
        {
          if(void 0===e&&(e="playnow"),
          this.platform==i.Applovin&&0==n.ChallengeTypeToNumber[o])switch(n.ChallengeTypeToNumber[o]=1,
          console.log("PLASDK.SendData:"+o),
          o)
          {
            case t.LOADING:n.onInitPlayable();
            break;
            case t.LOADED:n.onLoaded();
            break;
            case t.DISPLAYED:n.onDisplay();
            break;
            case t.CHALLENGE_STARTED:n.trackCustomEvent(t.CHALLENGE_STARTED,
            "棣栨浜掑姩");
            break;
            case t.CHALLENGE_FAILED:n.trackCustomEvent(t.CHALLENGE_FAILED,
            "棣栨澶辫触");
            break;
            case t.CHALLENGE_RETRY:n.onRetry();
            break;
            case t.CHALLENGE_PASS_25:n.trackCustomEvent(t.CHALLENGE_PASS_25,
            "浜掑姩鍚庣帺10绉?);break;case t.CHALLENGE_PASS_50:n.trackCustomEvent(t.CHALLENGE_PASS_50,"浜掑姩鍚庣帺30绉?);
            break;
            case t.CHALLENGE_PASS_75:n.trackCustomEvent(t.CHALLENGE_PASS_75,
            "浜掑姩鍚庣帺60绉?);break;case t.CHALLENGE_SOLVED:n.trackCustomEvent(t.CHALLENGE_SOLVED,"娓告垙鑳滃埄");break;case t.COMPLETED:n.onCompleted();break;case t.CTA_CLICKED:window.AnalyticsIns.onInstall(e);break;case t.ENDCARD_SHOWN:n.onShowEndCard()}},o(n,null,[{key:"platform",get:function (){return"__PLATFORM"in window&&window.__PLATFORM?i[window.__PLATFORM]:window.wx?i.Wechat:window.tt?i.Douyin:i.Preview}}]),n}());s.isFirstClick=!1,s.androidUrl="",s.iosUrl="",s.gameTime=0,s.reportNum=0,s.ChallengeTypeToNumber=((a={})[t.LOADING]=0,a[t.LOADED]=0,a[t.DISPLAYED]=0,a[t.CHALLENGE_STARTED]=0,a[t.CHALLENGE_FAILED]=0,a[t.CHALLENGE_RETRY]=0,a[t.CHALLENGE_PASS_25]=0,a[t.CHALLENGE_PASS_50]=0,a[t.CHALLENGE_PASS_75]=0,a[t.CHALLENGE_SOLVED]=0,a[t.COMPLETED]=0,a[t.CTA_CLICKED]=0,a[t.ENDCARD_SHOWN]=0,a),e._RF.pop()}}}));

// =========================================
// Module: chunks:///_virtual/PrintComponent.ts
// =========================================
System.register("chunks:///_virtual/PrintComponent.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (t)
{
  var e,
  i,
  a;
  return
  {
    setters:[function (t)
    {
      e=t.createForOfIteratorHelperLoose,
      i=t.extends
    },function (t)
    {
      a=t.cclegacy
    }],
    execute:function ()
    {
      a._RF.push(
      {

      },"2cf27TDqJxIdqxndv3KE9Z7",
      "PrintComponent",
      void 0);
      t("PlayerAction",
      function (t)
      {
        return t.next="next",
        t.again="again",
        t.download="download",
        t.automatic_jump="automatic_jump",
        t.select_skill="select_skill",
        t.play_now="playnow",
        t
      }(
      {

      }));
      var o=function (t)
      {
        return t.loading="loading",
        t.game_start="game_start",
        t.game_end="game_end",
        t.voice_touch="voice_touch",
        t.voice_on="voice_on",
        t.actionbar="actionbar",
        t.interrupt="interrupt",
        t.game_touch="game_touch",
        t.stuck="stuck",
        t.game_event="game_event",
        t.stutter="stutter",
        t
      }(o||
      {

      }),
      n=t("PrintComponent",
      function ()
      {
        function t()
        {

        }return t.init=function (e)
        {
          void 0===e&&(e=1),
          this.startTime=Date.now(),
          this.totalPausedTime=0,
          this.gamePausedTime=0,
          this.lastPauseTime=0,
          this.lastGameStartTime=0,
          this.totalGamesPlayed=1,
          this.isPlaying=!1,
          this.gameStarted=!1,
          this.userId="117948049479",
          this.uuid=t.generateRandomAlphanumeric(),
          this.maxStage=e,
          document.addEventListener("visibilitychange",
          this.handleVisibilityChange.bind(this)),
          console.log("Print init")
        },t.generateRandomAlphanumeric=function (t)
        {
          void 0===t&&(t=9);
          for(var e="abcdefghijklmnopqrstuvwxyz0123456789",
          i="",
          a=0;
          a<t;
          a++)
          {
            i+=e[Math.floor(Math.random()*e.length)]
          }return"uuid_"+i
        },t.hashString=function (t)
        {
          for(var i,
          a=0,
          o=e(t);
          !(i=o()).done;
          )
          {
            a=(a<<5)-a+i.value.charCodeAt(0)
          }return a
        },t.getCurrentDuration=function ()
        {
          return Date.now()-this.startTime-this.totalPausedTime
        },t.reportEvent=function (t,
        e)
        {
          void 0===e&&(e=
          {

          });
          var a=i(
          {

          },window.printParams,

          {
            user_id:this.userId,
            uuid:this.uuid,
            material:window.__material,
            media:window.__PLATFORM,
            appid:window.__appid
          },e);
          a.duration||(a.duration=this.getCurrentDuration()),
          t==o.stutter?(window.gtag&&window.gtag("event",
          t,
          a),
          window.AF&&window.AF("pba",
          "event",

          {
            eventType:"EVENT",
            eventValue:a,
            eventName:t
          })):window.AF&&window.AF("pba",
          "event",

          {
            eventType:"EVENT",
            eventValue:a,
            eventName:t
          }),
          console.log("pba_log msg:",
          t,
          a)
        },t.loading=function ()
        {
          this.loaded||(this.reportEvent(o.loading),
          this.loaded=!0)
        },t.startGame=function (t)
        {
          if(!this.isPlaying)
          {
            this.isPlaying=!0,
            this.gameStarted=!0,
            this.gamePausedTime=0,
            this.lastGameStartTime=this.getCurrentDuration(),
            this.coordinate_old.x=void 0,
            this.coordinate_old.y=void 0,
            this.coordinate_old.z=void 0;
            var e=t;
            e==this.maxStage&&(e="final"),
            this.reportEvent(o.game_start,

            {
              stage:e,
              total_games_played:this.totalGamesPlayed
            })
          }
        },t.replay=function ()
        {
          this.isPlaying=!1,
          ++this.totalGamesPlayed
        },t.game_interaction=function (t,
        e)
        {
          this.isPlaying&&(this.lastTouchType=t,
          this.coordinate_old.x=this.coordinate_new.x,
          this.coordinate_old.y=this.coordinate_new.y,
          this.coordinate_old.z=this.coordinate_new.z,
          this.coordinate_new.x=e.x,
          this.coordinate_new.y=e.y,
          this.coordinate_new.z=e.z,
          this.reportEvent(o.game_touch,

          {
            type:t,
            coordinate_old_x:this.coordinate_old.x,
            coordinate_old_y:this.coordinate_old.y,
            coordinate_old_z:this.coordinate_old.z,
            coordinate_new_x:this.coordinate_new.x,
            coordinate_new_y:this.coordinate_new.y,
            coordinate_new_z:this.coordinate_new.z
          }))
        },t.game_event=function (t)
        {
          this.reportEvent(o.game_event,
          t)
        },t.endGame=function (t,
        e,
        i)
        {
          if(this.isPlaying)
          {
            this.isPlaying=!1;
            var a=e;
            a==this.maxStage&&(a="final");
            var n=
            {
              stage:a,
              total_games_played:this.totalGamesPlayed,
              value:t?"win":"lose",
              game_duration:this.getCurrentDuration()-this.lastGameStartTime,
              type:i
            };
            this.reportEvent(o.game_end,
            n)
          }
        },t.voice_touch=function (t)
        {
          this.reportEvent(o.voice_touch,

          {
            type:t
          })
        },t.actionbar=function (t)
        {
          void 0===t&&(t="download"),
          this.reportEvent(o.actionbar,

          {
            value:t
          })
        },t.voice_on=function ()
        {
          this.hasVoice_on||(this.reportEvent(o.voice_on),
          this.hasVoice_on=!0)
        },t.stuckTest=function (t)
        {
          t>this.stuckValue?this.stuckStart(t):this.stuckEnd()
        },t.stuckStart=function (t)
        {
          this.stuckTime+=t
        },t.stuckEnd=function ()
        {
          this.stuckTime>0&&this.reportEvent(o.stuck,

          {
            stuck_time:Math.floor(1e3*this.stuckTime)
          }),
          this.stuckTime=0
        },t.handleVisibilityChange=function ()
        {
          if(document.hidden)
          {
            this.lastPauseTime=Date.now();
            var t=this.isPlaying?"during_game":this.gameStarted?"after_game":"before_game";
            this.reportEvent(o.interrupt,

            {
              type:t,
              value:"page_hidden"
            })
          }else if(this.lastPauseTime>0)
          {
            var e=Date.now()-this.lastPauseTime;
            this.totalPausedTime+=e,
            this.gamePausedTime+=e,
            this.lastPauseTime=0
          }
        },t.stutter=function (t)
        {
          this.reportEvent(o.stutter,
          t)
        },t
      }());
      n.userId=void 0,
      n.uuid=void 0,
      n.startTime=void 0,
      n.totalPausedTime=void 0,
      n.gamePausedTime=void 0,
      n.lastPauseTime=void 0,
      n.lastGameStartTime=void 0,
      n.totalGamesPlayed=void 0,
      n.loaded=!1,
      n.isPlaying=void 0,
      n.gameStarted=void 0,
      n.hasVoice_on=!1,
      n.coordinate_old=
      {

      },n.coordinate_new=
      {

      },n.stage=0,
      n.maxStage=void 0,
      n.lastTouchType=void 0,
      n.stuckTime=0,
      n.stuckValue=.04,
      a._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/PropItem.ts
// =========================================
System.register("chunks:///_virtual/PropItem.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Constants.ts",
"./Base.ts",
"./atkEffect.ts",
"./Utils.ts",
"./Reward.ts",
"./ActorPlayer.ts",
"./AudioManager.ts"],
(function (t)
{
  var i,
  e,
  n,
  r,
  o,
  s,
  a,
  l,
  h,
  p,
  u,
  c,
  f,
  d,
  b,
  m,
  g,
  y,
  H,
  v,
  S,
  A,
  P,
  T,
  w,
  C,
  _,
  D,
  N;
  return
  {
    setters:[function (t)
    {
      i=t.applyDecoratedDescriptor,
      e=t.inheritsLoose,
      n=t.initializerDefineProperty,
      r=t.assertThisInitialized
    },function (t)
    {
      o=t.cclegacy,
      s=t._decorator,
      a=t.Collider,
      l=t.Enum,
      h=t.Label,
      p=t.Node,
      u=t.Sprite,
      c=t.Vec3,
      f=t.Tween,
      d=t.tween,
      b=t.v3,
      m=t.log,
      g=t.RigidBody,
      y=t.MeshRenderer,
      H=t.instantiate
    },function (t)
    {
      v=t.GameGlobal
    },function (t)
    {
      S=t.PropType,
      A=t.PHY_GROUP,
      P=t.GAME_STATUS
    },function (t)
    {
      T=t.Base
    },function (t)
    {
      w=t.atkEffect
    },function (t)
    {
      C=t.Utils
    },function (t)
    {
      _=t.Reward
    },function (t)
    {
      D=t.ActorPlayer
    },function (t)
    {
      N=t.AudioManager
    }],
    execute:function ()
    {
      var E,
      R,
      k,
      x,
      z,
      G,
      L,
      B,
      O,
      W,
      M,
      U,
      F,
      I,
      q,
      Q,
      Y,
      Z,
      V,
      j,
      K,
      J,
      X,
      $,
      tt,
      it,
      et,
      nt,
      rt,
      ot,
      st,
      at,
      lt,
      ht,
      pt,
      ut,
      ct,
      ft,
      dt,
      bt,
      mt,
      gt,
      yt,
      Ht,
      vt,
      St,
      At;
      o._RF.push(
      {

      },"6c4306lyMFHG6WbHTLmAAYA",
      "PropItem",
      void 0);
      var Pt=s.ccclass,
      Tt=s.property,
      wt=function (t)
      {
        return t[t.Type0=1]="Type0",
        t[t.Type1=2]="Type1",
        t
      }(wt||
      {

      });
      t("PropItem",
      (E=Pt("PropItem"),
      R=Tt(a),
      k=Tt(
      {
        visible:function ()
        {
          return!this.isStable
        }
      }),
      x=Tt(
      {
        type:l(S)
      }),
      z=Tt(
      {
        type:h
      }),
      G=Tt(
      {
        visible:function ()
        {
          return this.propType==S.ADD_COUNT
        }
      }),
      L=Tt(p),
      B=Tt(
      {
        type:l(wt)
      }),
      O=Tt(
      {
        type:u,
        visible:function ()
        {
          return this.isStable
        }
      }),
      W=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isStable
        }
      }),
      M=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isStable
        }
      }),
      U=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isBarrel
        }
      }),
      F=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isBarrel
        }
      }),
      I=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isBarrel
        }
      }),
      q=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.isBarrel
        }
      }),
      Q=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.propType==S.ADD_COUNT
        }
      }),
      Y=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.propType==S.ADD_COUNT
        }
      }),
      Z=Tt(
      {
        type:p,
        visible:function ()
        {
          return this.propType==S.ADD_COUNT
        }
      }),
      V=Tt(
      {
        visible:function ()
        {
          return this.isStable
        }
      }),
      j=Tt(
      {
        visible:function ()
        {
          return!this.canDestroy
        }
      }),
      K=Tt(
      {
        visible:function ()
        {
          return!this.canDestroy
        }
      }),
      E(($=i((X=function (t)
      {
        function i()
        {
          for(var i,
          e=arguments.length,
          o=new Array(e),
          s=0;
          s<e;
          s++)o[s]=arguments[s];
          return i=t.call.apply(t,
          [this].concat(o))||this,
          n(i,
          "collider",
          $,
          r(i)),
          n(i,
          "isStable",
          tt,
          r(i)),
          n(i,
          "moveSpeed",
          it,
          r(i)),
          n(i,
          "lifeHp",
          et,
          r(i)),
          n(i,
          "propType",
          nt,
          r(i)),
          n(i,
          "countNum",
          rt,
          r(i)),
          n(i,
          "hpRate",
          ot,
          r(i)),
          n(i,
          "effectNode",
          st,
          r(i)),
          n(i,
          "effType",
          at,
          r(i)),
          n(i,
          "icon",
          lt,
          r(i)),
          n(i,
          "box",
          ht,
          r(i)),
          n(i,
          "par",
          pt,
          r(i)),
          n(i,
          "isBarrel",
          ut,
          r(i)),
          n(i,
          "bomb",
          ct,
          r(i)),
          n(i,
          "iconArr",
          ft,
          r(i)),
          n(i,
          "normal",
          dt,
          r(i)),
          n(i,
          "white",
          bt,
          r(i)),
          n(i,
          "doorGreenArr",
          mt,
          r(i)),
          n(i,
          "doorRedArr",
          gt,
          r(i)),
          n(i,
          "doorWhiteArr",
          yt,
          r(i)),
          n(i,
          "canDestroy",
          Ht,
          r(i)),
          n(i,
          "fakeRate",
          vt,
          r(i)),
          n(i,
          "fakeLimit",
          St,
          r(i)),
          n(i,
          "rewardId",
          At,
          r(i)),
          i._lifeHpStr="",
          i.initScaleZ=0,
          i._curDamage=0,
          i.maxHp=0,
          i.initScale=new c,
          i._tempPos=new c,
          i.NORMAL_Z_OFFSET=.5,
          i.hpCount=0,
          i.fakeCount=0,
          i.barrelRate=2,
          i.lastPro=0,
          i.startPosY=-.1,
          i.endPosY=-2.5,
          i.doorLimit=0,
          i.STAGE_THRESHOLDS=[6e3,
          5850,
          5150,
          4150,
          2900,
          1500,
          0],
          i.isFirstHit=!0,
          i.isPlayParing=!1,
          i.isQTaning=!1,
          i.isShaking=!1,
          i.isWhiting=!1,
          i.targetScale=new c(0,
          0,
          0),
          i.initScale2=new c(.6,
          .6,
          .6),
          i.isPlayingAni=!1,
          i.tempVec3_0=new c,
          i._startPos=new c,
          i._controlPos=new c,
          i.targetPos=new c(-1.468,
          .096,
          -6.941),
          i._moveDir=new c(0,
          0,
          1),
          i.recoverTime=.2,
          i.timer=0,
          i.isDead=!1,
          i
        }e(i,
        t);
        var o=i.prototype;
        return o.onEnable=function ()
        {
          t.prototype.onEnable.call(this),
          this.maxHp=this.lifeHp,
          this._lifeHpStr=this.lifeHp.toString(),
          12!=this.maxHp&&15!=this.maxHp||(this._lifeHpStr=(this.lifeHp/v.spawnControl.curDamage).toString()),
          this.isStable&&this.box&&(this.initScaleZ=this.box.scale.z),
          this.initScale=this.node.children[0].scale.clone(),
          this.countNum&&(this.countNum.node.active=!0,
          this.countNum.string=this._lifeHpStr),
          this.barrelRoll()
        },o.barrelRoll=function ()
        {
          this.isBarrel&&(f.stopAllByTarget(this.normal),
          d(this.normal).by(.5,

          {
            eulerAngles:b(0,
            0,
            30)
          }).repeatForever().start(),
          f.stopAllByTarget(this.white),
          d(this.white).by(.5,

          {
            eulerAngles:b(0,
            0,
            30)
          }).repeatForever().start())
        },o.init=function ()
        {
          this.maxHp=this.lifeHp,
          this._lifeHpStr=this.lifeHp.toString(),
          12!=this.maxHp&&15!=this.maxHp||(m(this.lifeHp,
          v.spawnControl.curDamage),
          this._lifeHpStr=(this.lifeHp/v.spawnControl.curDamage).toString()),
          this.countNum&&(this.countNum.node.active=!0,
          this.countNum.string=this._lifeHpStr),
          this.isBarrel&&this.effectNode&&(f.stopAllByTarget(this.effectNode),
          d(this.effectNode).by(1,

          {
            position:b(0,
            .1,
            0)
          },
          {
            easing:"sineOut"
          }).by(1,

          {
            position:b(0,
            -.1,
            0)
          },
          {
            easing:"sineOut"
          }).union().repeatForever().start()),
          this.isWhiting=!1
        },o.onDisable=function ()
        {
          var i;
          t.prototype.onDisable.call(this),
          this.unscheduleAllCallbacks(),
          f.stopAllByTarget(this.node),
          f.stopAllByTarget(null==(i=this.collider)?void 0:i.node),
          f.stopAllByTarget(this.white),
          f.stopAllByTarget(this.normal),
          this.effectNode&&f.stopAllByTarget(this.effectNode),
          this.isQTaning=!1,
          this.isPlayingAni=!1
        },o.onTriggerEnter=function (t)
        {
          var i=t.otherCollider.node.getComponent(g);
          i&&(i.group==A.BULLET?this._handleBulletHit(i.node):i.group==A.PLAYER&&(this.propType==S.ADD_COUNT?this.checkAddCount():i.node.getComponent(D).subHp(1)))
        },o._handleBulletHit=function (t)
        {
          t.getWorldPosition(this._tempPos);
          var i,
          e=this.NORMAL_Z_OFFSET;
          this._tempPos.z+=e,
          (i=this.effType==wt.Type0?v.nodePoolMgr.getNode(v.GameController.effectArr[1],
          v.GameController.effectLayer):v.nodePoolMgr.getNode(v.GameController.effectArr[0],
          v.GameController.effectLayer)).setWorldPosition(this._tempPos),
          i.getComponent(w).init(),
          this.timer=0,
          this.subHp()
        },o.subHp=function ()
        {
          if(!this.isDead&&!this.isPlayingAni)
          {
            var t=v.spawnControl.curDamage;
            if(this.propType!==S.ADD_COUNT)
            {
              var i=0;
              if(this.isStable)
              {
                N.soundPlay("鏈ㄥ潡鍙楀嚮",
                2),
                this.firstHit(),
                this.canDestroy?(this.lifeHp-=t,
                i=this.lifeHp/this.maxHp):(this.lifeHp<=9999&&this.lifeHp>1e3?this.lifeHp-=t:(this.fakeCount++,
                this.fakeCount>=10&&(this.lifeHp-=1,
                this.fakeCount=0)),
                i=this.lifeHp/this.maxHp,
                i=this.getEaseOutPro(i)),
                this.icon.fillRange=i,
                this.canDestroy||(this.icon.fillRange=i-.03);
                var e=1-i;
                this.box.setPosition(0,
                this.startPosY+(this.endPosY-this.startPosY)*e,
                0),
                this.par.setPosition(0,
                2.261*i,
                0),
                this.playPar(i),
                i<=0&&(this.box.active=!1),
                this.shake()
              }else N.soundPlay("鍑讳腑鏈ㄦ《01"),
              this.lifeHp-=t,
              i=this.lifeHp/this.maxHp;
              this.lifeHp<=0&&(this.lifeHp=0),
              12==this.maxHp||15==this.maxHp?(m("this.lifeHp",
              this.lifeHp),
              this._lifeHpStr=(this.lifeHp/v.spawnControl.curDamage).toString()):this._lifeHpStr=this.lifeHp.toString(),
              this.countNum&&(this.countNum.string=this._lifeHpStr),
              this.lifeHp<=0&&this.playRewardAni(),
              this.qTanEffect(i)
            }else
            {
              if(this.lifeHp<0)-10==this.maxHp?this.lifeHp+=1:(this.hpCount++,
              this.hpCount>=10&&(this.lifeHp+=1,
              this.hpCount=0));
              else if(-10==this.maxHp?this.lifeHp>=0&&this.lifeHp<7?this.lifeHp+=1:this.lifeHp>=7&&this.lifeHp<10?(this.hpCount++,
              this.hpCount>=2&&(this.lifeHp+=1,
              this.hpCount=0)):(this.hpCount++,
              this.hpCount>=3&&(this.lifeHp+=1,
              this.hpCount=0)):this.lifeHp>=0&&this.lifeHp<16?(this.hpCount++,
              this.hpCount>=10&&(this.lifeHp+=1,
              this.hpCount=0)):this.lifeHp>=16&&this.lifeHp<20?(this.hpCount++,
              this.hpCount>=20&&(this.lifeHp+=1,
              this.hpCount=0)):this.lifeHp>=20&&this.lifeHp<26?(this.hpCount++,
              this.hpCount>=30&&(this.lifeHp+=1,
              this.hpCount=0)):(this.hpCount++,
              this.hpCount>=this.hpRate&&(this.lifeHp+=1,
              this.hpCount=0)),
              this.lifeHp>=0)
              {
                for(var n=this.doorGreenArr,
                r=0,
                o=n.length;
                r<o;
                r++)n[r].active=!0;
                for(var s=this.doorRedArr,
                a=0,
                l=s.length;
                a<l;
                a++)s[a].active=!1
              }var h=0;
              (h=this.lifeHp<0?.5*(1-this.lifeHp/this.maxHp):(h=.5*(1-this.lifeHp/-this.maxHp))<0?0:h)===this.lastPro&&0!=h||(N.soundPlay("鍏夐棬鍙楀嚮"),
              this.qTanEffect2(h),
              this.lastPro=h,
              this.lifeHp<0?this.shake2(.05):this.shake2(.1)),
              this._lifeHpStr=this.lifeHp>0?"+"+this.lifeHp:this.lifeHp.toString(),
              this.countNum.string=this._lifeHpStr
            }
          }
        },o.getEaseOutPro=function (t)
        {
          return Math.pow(t,
          2)>.3?Math.pow(t,
          2):.3
        },o.calculateProgress=function (t)
        {
          for(var i=Math.max(0,
          Math.min(t,
          this.maxHp)),
          e=0;
          e<this.STAGE_THRESHOLDS.length-1;
          e++)if(i<=this.STAGE_THRESHOLDS[e]&&i>this.STAGE_THRESHOLDS[e+1])return(6-e)/6;
          return i<=0?0:1
        },o.firstHit=function ()
        {
          this.isFirstHit&&(this.isFirstHit=!1,
          this.box.getComponent(y).enabled=!0,
          this.box.children[0].active=!1)
        },o.playPar=function (t)
        {
          var i=this;
          if("鏈ㄥ潡"==this.node.name)
          {
            if(this.isPlayParing)return;
            this.isPlayParing=!0,
            this.playParAni(t),
            this.scheduleOnce((function ()
            {
              i.isPlayParing=!1
            }),
            v.spawnControl.disTime)
          }else
          {
            var e=H(this.par);
            e.parent=this.node,
            e.setPosition(0,
            2.261*t,
            0),
            e.active=!0,
            this.scheduleOnce((function ()
            {
              e.destroy()
            }),
            1)
          }
        },o.playParAni=function (t)
        {
          var i=H(this.par);
          i.parent=this.node,
          i.setPosition(0,
          2.261*t,
          0),
          i.active=!0,
          this.scheduleOnce((function ()
          {
            i.destroy()
          }),
          1)
        },o.qTanEffect=function (t)
        {
          var i=this;
          if(!this.isQTaning)if(this.isQTaning=!0,
          this.isStable)C.qTanEffect2(this.countNum.node,
          0,
          (function ()
          {
            i.isQTaning=!1
          }));
          else
          {
            if(this.isPlayingAni)return;
            this.normal.active=!1,
            this.white.active=!0;
            var e=1+.3*(1-t);
            C.qTanEffect4(this.white,
            e,
            (function ()
            {
              i.isPlayingAni||(i.normal.active=!0,
              i.normal.setScale(e,
              e,
              e),
              i.white.active=!1)
            })),
            C.qTanEffect2(this.countNum.node,
            0,
            (function ()
            {
              i.isQTaning=!1
            }))
          }
        },o.qTanEffect2=function (t)
        {
          var i=this;
          this.isQTaning||(this.isQTaning=!0,
          C.qTanEffect5(this.node.children[0],
          this.initScale,
          t,
          (function ()
          {

          })),
          C.qTanEffect2(this.countNum.node,
          0,
          (function ()
          {
            i.isQTaning=!1
          })))
        },o.shake=function ()
        {
          var t=this;
          this.isShaking||(this.isShaking=!0,
          C.shakeEffect(this.node,
          .1,
          .02,
          1,
          (function ()
          {
            t.isShaking=!1
          })))
        },o.shake2=function (t)
        {
          var i=this;
          void 0===t&&(t=.05),
          this.isShaking||(this.isShaking=!0,
          C.shakeEffect(this.countNum.node,
          .1,
          t,
          1,
          (function ()
          {
            i.isShaking=!1
          })))
        },o.beAtkToWhite=function ()
        {
          var t=this;
          this.isWhiting||(this.isWhiting=!0,
          this.doorGreenArr[0].active=!1,
          this.doorGreenArr[1].active=!1,
          this.doorRedArr[0].active=!1,
          this.doorRedArr[1].active=!1,
          this.doorWhiteArr[0].active=!0,
          this.doorWhiteArr[1].active=!0,
          this.scheduleOnce((function ()
          {
            t.doorWhiteArr[0].active=!1,
            t.doorWhiteArr[1].active=!1,
            t.lifeHp<0?(t.doorRedArr[0].active=!0,
            t.doorRedArr[1].active=!0):(t.doorGreenArr[0].active=!0,
            t.doorGreenArr[1].active=!0),
            t.isWhiting=!1
          }),
          .2))
        },o.playRewardAni=function ()
        {
          var t=this;
          if(!this.isPlayingAni&&(this.isPlayingAni=!0,
          this.countNum.node.active=!1,
          this.isBarrel&&(this.collider.node.active=!1,
          this.normal.active=!1,
          this.white.active=!1,
          this.bomb.active=!0,
          N.soundPlay("鐖嗙偢")),
          this.effectNode))
          {
            this.effectNode.active=!1;
            var i=v.nodePoolMgr.getNode(v.GameController.maskPre,
            v.GameController.soliderLayer);
            i.setWorldPosition(this.effectNode.getWorldPosition()),
            i.setScale(this.initScale2),
            i.getComponent(_).showReward(this.rewardId),
            this.targetScale.set(.2,
            .2,
            .2),
            this.moveToPos(i,
            c.ZERO,
            this.targetScale,
            .4,
            (function ()
            {
              t.isBarrel&&v.spawnControl.bulletLvUp(),
              t.propType==S.ADD_ATK?(m("add atk"),
              v.spawnControl.damageLvUp()):t.propType==S.ADD_SPEED&&(m("add speed"),
              v.spawnControl.speedLvUp()),
              t.isStable&&"鏈ㄥ潡-001"==t.node.name&&v.spawnControl.soliderUp(),
              t.doDie()
            }),
            !0)
          }
        },o.moveToPos=function (t,
        i,
        e,
        n,
        r,
        o)
        {
          var s=this;
          void 0===o&&(o=!1),
          this._startPos.set(t.position.x,
          t.position.y,
          t.position.z);
          var a=this.tempVec3_0,
          l=new c(t.scale.x,
          t.scale.y,
          t.scale.z),
          h=this._controlPos;
          c.add(h,
          this._startPos,
          i),
          h.multiplyScalar(.5),
          h.x=this._startPos.x,
          h.add3f(0,
          3,
          0),
          d(t).to(n,

          {
            position:i
          },
          {
            onUpdate:function (n,
            r)
            {
              if(C.bezierCurve(r,
              s._startPos,
              h,
              i,
              a),
              t.setPosition(a),
              r>.8)
              {
                var o=(r-.8)/.2;
                c.lerp(a,
                l,
                e,
                o),
                t.setScale(a)
              }
            }
          }).call((function ()
          {
            r&&r(t),
            o?v.nodePoolMgr.putNode(t):t.destroy()
          })).start()
        },o.doDie=function ()
        {
          this.isDead||(this.isDead=!0,
          this.isStable&&"鏈ㄥ潡-001"==this.node.name&&(v.GameController.cubeArr[1].active=!0,
          d(v.GameController.cubeArr[1]).to(.2,

          {
            position:this.targetPos
          },
          {
            easing:"cubicIn"
          }).call((function ()
          {
            N.soundPlay("閲嶇墿钀藉湴",
            2),
            v.CameraControl.onVibrte(.16),
            v.GameController.yanWuPar.active=!0
          })).start()),
          this.node.destroy())
        },o.update=function (t)
        {
          if(v.gameStatus===P.GAME_PLAYING)
          {
            var i=t;
            this.isStable||this.updateSpawn(i),
            this.isStable&&(this.timer+=i,
            this.timer>=this.recoverTime&&(this.timer=0,
            this.par.active=!1))
          }
        },o.updateSpawn=function (t)
        {
          if(!this.isDead)
          {
            var i=this.node,
            e=i.position,
            n=this.moveSpeed*t;
            i.setPosition(e.x,
            e.y,
            e.z+n)
          }
        },o.checkAddCount=function ()
        {
          this.lifeHp>=0?this.lifeHp<this.doorLimit?v.spawnControl.addSoldier(this.lifeHp):v.spawnControl.addSoldier(this.doorLimit):v.spawnControl.killLastSoldiers(-1*this.lifeHp),
          this.doDie()
        },o.doReliveReward=function ()
        {
          this.isBarrel?this.playRewardAni():this.propType==S.ADD_COUNT&&v.spawnControl.addSoldier(this.doorLimit)
        },i
      }(T)).prototype,
      "collider",
      [R],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      tt=i(X.prototype,
      "isStable",
      [Tt],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return!1
        }
      }),
      it=i(X.prototype,
      "moveSpeed",
      [k],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return.3
        }
      }),
      et=i(X.prototype,
      "lifeHp",
      [Tt],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return 1
        }
      }),
      nt=i(X.prototype,
      "propType",
      [x],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return S.ADD_SPEED
        }
      }),
      rt=i(X.prototype,
      "countNum",
      [z],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      ot=i(X.prototype,
      "hpRate",
      [G],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return 0
        }
      }),
      st=i(X.prototype,
      "effectNode",
      [L],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      at=i(X.prototype,
      "effType",
      [B],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return wt.Type0
        }
      }),
      lt=i(X.prototype,
      "icon",
      [O],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      ht=i(X.prototype,
      "box",
      [W],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      pt=i(X.prototype,
      "par",
      [M],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      ut=i(X.prototype,
      "isBarrel",
      [Tt],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return!1
        }
      }),
      ct=i(X.prototype,
      "bomb",
      [U],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:null
      }),
      ft=i(X.prototype,
      "iconArr",
      [F],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      dt=i(X.prototype,
      "normal",
      [I],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      bt=i(X.prototype,
      "white",
      [q],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      mt=i(X.prototype,
      "doorGreenArr",
      [Q],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      gt=i(X.prototype,
      "doorRedArr",
      [Y],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      yt=i(X.prototype,
      "doorWhiteArr",
      [Z],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      Ht=i(X.prototype,
      "canDestroy",
      [V],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return!0
        }
      }),
      vt=i(X.prototype,
      "fakeRate",
      [j],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return 30
        }
      }),
      St=i(X.prototype,
      "fakeLimit",
      [K],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return 30
        }
      }),
      At=i(X.prototype,
      "rewardId",
      [Tt],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return-1
        }
      }),
      J=X))||J));
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/RayControl.ts
// =========================================
System.register("chunks:///_virtual/RayControl.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Constants.ts"],
(function (e)
{
  var t,
  o,
  n,
  r,
  a,
  s,
  i,
  c,
  l,
  h,
  u;
  return
  {
    setters:[function (e)
    {
      t=e.inheritsLoose
    },function (e)
    {
      o=e.cclegacy,
      n=e._decorator,
      r=e.UITransform,
      a=e.v3,
      s=e.geometry,
      i=e.PhysicsSystem,
      c=e.Vec3,
      l=e.Component
    },function (e)
    {
      h=e.GameGlobal
    },function (e)
    {
      u=e.PHY_GROUP
    }],
    execute:function ()
    {
      var v;
      o._RF.push(
      {

      },"d70d2Sw+0RF8q+UmiqqW+R0",
      "RayControl",
      void 0);
      var y=n.ccclass;
      n.property,
      e("RayControl",
      y("RayControl")(v=function (e)
      {
        function o()
        {
          for(var t,
          o=arguments.length,
          n=new Array(o),
          r=0;
          r<o;
          r++)n[r]=arguments[r];
          return(t=e.call.apply(e,
          [this].concat(n))||this).isMoving=!1,
          t._lastScreenPos=new c,
          t.INTERPOLATION_STEP=5,
          t.moveDir=new c(0,
          0,
          0),
          t.speed=300,
          t.screenP=a(),
          t.LineMap=new Map,
          t
        }t(o,
        e);
        var n=o.prototype;
        return n.start=function ()
        {

        },n.move=function (e)
        {
          this.isMoving=!0,
          this.node.setPosition(e);
          var t=this.node.getComponent(r).convertToWorldSpaceAR(a(0,
          0,
          0));
          h.GameController.camera2d.worldToScreen(t,
          this._lastScreenPos)
        },n.stopMove=function ()
        {
          this.isMoving=!1
        },n.update=function (e)
        {
          this.isMoving&&this.setRayToTarget()
        },n.checkRaycastAtPosition=function (e)
        {
          var t=this.node.position.clone();
          this.node.position=e;
          var o=a(),
          n=this.node.getComponent(r).convertToWorldSpaceAR(a(0,
          0,
          0));
          h.GameController.camera2d.worldToScreen(n,
          o);
          var c=new s.Ray;
          h.GameController.mainCamera.screenPointToRay(o.x,
          o.y,
          c);
          var l=u.LINE,
          v=i.instance.raycastClosest(c,
          l);
          return this.node.position=t,
          v
        },n.setRayToTarget=function ()
        {
          var e=a(),
          t=this.node.getComponent(r).convertToWorldSpaceAR(a(0,
          0,
          0));
          h.GameController.camera2d.worldToScreen(t,
          e);
          var o=c.distance(e,
          this._lastScreenPos);
          if(o>.1)
          {
            var n=Math.ceil(o/this.INTERPOLATION_STEP),
            s=new c;
            c.subtract(s,
            e,
            this._lastScreenPos),
            c.multiplyScalar(s,
            s,
            1/n);
            for(var i=new c,
            l=0;
            l<=n;
            l++)c.multiplyScalar(i,
            s,
            l),
            c.add(i,
            this._lastScreenPos,
            i),
            this.checkRaySingle(i)
          }else this.checkRaySingle(e);
          this._lastScreenPos.set(e)
        },n.checkRaySingle=function (e)
        {
          var t=new s.Ray,
          o=u.LINE;
          if(h.GameController.mainCamera.screenPointToRay(e.x,
          e.y,
          t),
          i.instance.raycast(t,
          o))for(var n=i.instance.raycastResults,
          r=0;
          r<n.length;
          r++)
          {
            var a=n[r].collider.node;
            this.storeCurLine(a)
          }
        },n.storeCurLine=function (e)
        {

        },o
      }(l))||v);
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/rebornArea.ts
// =========================================
System.register("chunks:///_virtual/rebornArea.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./Constants.ts",
"./Enemy.ts",
"./PropItem.ts"],
(function (e)
{
  var r,
  n,
  t,
  o,
  i,
  a,
  l,
  c,
  s,
  u,
  p,
  g;
  return
  {
    setters:[function (e)
    {
      r=e.applyDecoratedDescriptor,
      n=e.inheritsLoose,
      t=e.initializerDefineProperty,
      o=e.assertThisInitialized
    },function (e)
    {
      i=e.cclegacy,
      a=e._decorator,
      l=e.Collider,
      c=e.RigidBody,
      s=e.Component
    },function (e)
    {
      u=e.PHY_GROUP
    },function (e)
    {
      p=e.Enemy
    },function (e)
    {
      g=e.PropItem
    }],
    execute:function ()
    {
      var f,
      d,
      h,
      y,
      b;
      i._RF.push(
      {

      },"74e2fFF4CxKL7M9+3tyvatB",
      "rebornArea",
      void 0);
      var m=a.ccclass,
      E=a.property;
      e("rebornArea",
      (f=m("rebornArea"),
      d=E(l),
      f((b=r((y=function (e)
      {
        function r()
        {
          for(var r,
          n=arguments.length,
          i=new Array(n),
          a=0;
          a<n;
          a++)i[a]=arguments[a];
          return r=e.call.apply(e,
          [this].concat(i))||this,
          t(r,
          "collider",
          b,
          o(r)),
          r
        }n(r,
        e);
        var i=r.prototype;
        return i.onEnable=function ()
        {
          this.collider.on("onTriggerEnter",
          this.onTriggerEnter,
          this)
        },i.onDisable=function ()
        {
          this.collider.off("onTriggerEnter",
          this.onTriggerEnter,
          this)
        },i.onTriggerEnter=function (e)
        {
          var r=e.otherCollider.node.getComponent(c);
          r&&(r.group==u.ENEMY?r.node.getComponent(p).subHp(9999):r.group==u.PROP&&r.node.parent.getComponent(g).playRewardAni())
        },i.update=function (e)
        {

        },r
      }(s)).prototype,
      "collider",
      [d],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      h=y))||h));
      i._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/Reward.ts
// =========================================
System.register("chunks:///_virtual/Reward.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (t)
{
  var e,
  i,
  r,
  n,
  o,
  a,
  c,
  s;
  return
  {
    setters:[function (t)
    {
      e=t.applyDecoratedDescriptor,
      i=t.inheritsLoose,
      r=t.initializerDefineProperty,
      n=t.assertThisInitialized
    },function (t)
    {
      o=t.cclegacy,
      a=t._decorator,
      c=t.Node,
      s=t.Component
    }],
    execute:function ()
    {
      var u,
      l,
      p,
      f,
      d;
      o._RF.push(
      {

      },"d44469rx0BElojBKsR+qzSW",
      "Reward",
      void 0);
      var h=a.ccclass,
      v=a.property;
      t("Reward",
      (u=h("Reward"),
      l=v(c),
      u((d=e((f=function (t)
      {
        function e()
        {
          for(var e,
          i=arguments.length,
          o=new Array(i),
          a=0;
          a<i;
          a++)o[a]=arguments[a];
          return e=t.call.apply(t,
          [this].concat(o))||this,
          r(e,
          "itemList",
          d,
          n(e)),
          e
        }i(e,
        t);
        var o=e.prototype;
        return o.start=function ()
        {

        },o.onEnable=function ()
        {
          this.itemList.forEach((function (t)
          {
            t.active=!1
          }))
        },o.showReward=function (t)
        {
          this.itemList[t].active=!0
        },o.update=function (t)
        {

        },e
      }(s)).prototype,
      "itemList",
      [l],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return[]
        }
      }),
      p=f))||p));
      o._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/SpawnControl.ts
// =========================================
System.register("chunks:///_virtual/SpawnControl.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts",
"./Constants.ts",
"./Enemy.ts",
"./EventManager.ts",
"./ActorPlayer.ts",
"./PropItem.ts",
"./GameConfig.ts",
"./AudioManager.ts"],
(function (e)
{
  var t,
  i,
  r,
  o,
  n,
  s,
  a,
  l,
  h,
  d,
  c,
  p,
  u,
  f,
  v,
  m,
  g,
  y,
  P,
  L,
  A,
  b,
  w,
  C,
  x;
  return
  {
    setters:[function (e)
    {
      t=e.applyDecoratedDescriptor,
      i=e.inheritsLoose,
      r=e.initializerDefineProperty,
      o=e.assertThisInitialized,
      n=e.createClass
    },function (e)
    {
      s=e.cclegacy,
      a=e._decorator,
      l=e.Node,
      h=e.Prefab,
      d=e.v3,
      c=e.randomRange,
      p=e.log,
      u=e.Vec3,
      f=e.tween,
      v=e.randomRangeInt,
      m=e.Component
    },function (e)
    {
      g=e.GameGlobal
    },function (e)
    {
      y=e.PropType,
      P=e.END_TYPE
    },function (e)
    {
      L=e.Enemy
    },function (e)
    {
      A=e.default
    },function (e)
    {
      b=e.ActorPlayer
    },function (e)
    {
      w=e.PropItem
    },function (e)
    {
      C=e.GameConfigManager
    },function (e)
    {
      x=e.AudioManager
    }],
    execute:function ()
    {
      var I,
      S,
      D,
      _,
      k,
      G,
      E,
      M,
      R,
      T,
      W,
      O,
      B,
      z,
      N,
      U,
      H;
      s._RF.push(
      {

      },"061ceTAPaNHP7hEuIh61ycz",
      "SpawnControl",
      void 0);
      var V=a.ccclass,
      q=a.property,
      F=function (e)
      {
        return e[e.solider=0]="solider",
        e[e.boss=1]="boss",
        e[e.barrel=2]="barrel",
        e[e.door=3]="door",
        e
      }(F||
      {

      }),
      Z=e("lvConfig",
      [
      {
        type:F.solider,
        hp:7,
        count:5
      },
      {
        type:F.barrel,
        hp:15,
        propType:y.ADD_SPEED,
        rewardIcon:0
      },
      {
        type:F.solider,
        hp:5,
        count:10
      },
      {
        type:F.solider,
        hp:5,
        count:5
      },
      {
        type:F.door,
        hp:-10,
        propType:y.ADD_COUNT,
        hpRate:4,
        limit:11
      },
      {
        type:F.solider,
        hp:10,
        count:60
      },
      {
        type:F.barrel,
        hp:200,
        propType:y.ADD_ATK,
        rewardIcon:1
      },
      {
        type:F.solider,
        hp:15,
        count:70
      },
      {
        type:F.boss,
        hp:500
      },
      {
        type:F.solider,
        hp:15,
        count:60
      },
      {
        type:F.barrel,
        hp:500,
        propType:y.ADD_SPEED,
        rewardIcon:2
      },
      {
        type:F.solider,
        hp:15,
        count:100
      },
      {
        type:F.boss,
        hp:2e3
      },
      {
        type:F.solider,
        hp:15,
        count:80
      },
      {
        type:F.door,
        hp:-21,
        propType:y.ADD_COUNT,
        hpRate:60,
        limit:30
      },
      {
        type:F.solider,
        hp:20,
        count:140
      },
      {
        type:F.boss,
        hp:5e3
      }]);
      e("SpawnControl",
      (I=V("SpawnControl"),
      S=q(l),
      D=q(h),
      _=q(h),
      k=q(h),
      G=q(h),
      E=q(h),
      M=q(h),
      I((W=t((T=function (e)
      {
        function t()
        {
          for(var t,
          i=arguments.length,
          n=new Array(i),
          s=0;
          s<i;
          s++)n[s]=arguments[s];
          return t=e.call.apply(e,
          [this].concat(n))||this,
          r(t,
          "spawnPoint",
          W,
          o(t)),
          r(t,
          "soliderPre",
          O,
          o(t)),
          r(t,
          "solider2Pre",
          B,
          o(t)),
          r(t,
          "enemyPre",
          z,
          o(t)),
          r(t,
          "bossPre",
          N,
          o(t)),
          r(t,
          "barrelPre",
          U,
          o(t)),
          r(t,
          "doorPre",
          H,
          o(t)),
          t._isSpawning=!1,
          t._tempWp=d(),
          t.moveSpeed=1.2,
          t.enemyDieAudio=t.throttle((function ()
          {
            x.soundPlay("涓у案姝讳骸")
          }),
          500),
          t.atkAudio=t.throttle((function ()
          {
            x.soundPlay("寮撶",
            .7)
          }),
          100),
          t.atkAudio2=t.throttle((function ()
          {
            x.soundPlay("寮撶",
            .9)
          }),
          100),
          t.curSoliderIndex=0,
          t.disTime=.5,
          t.disTimeArr=[.5,
          .4,
          .3,
          .2],
          t.curBulletLv=0,
          t.bulletRange=-15,
          t.atkSpeedLv=0,
          t.atkDamageLv=0,
          t.curSpeed=0,
          t._curDamage=3,
          t.actorsPos=void 0,
          t.actorDis=.2,
          t._basePositions=new Map,
          t._expandRefCounts=new Map,
          t.soldierList=[],
          t._soliderIndex=0,
          t.soliderLv=0,
          t.curActorNum=0,
          t.left=0,
          t.right=0,
          t.soldierLv1List=[],
          t.isAniComplete=!0,
          t.lastCount=1,
          t.posIndex=0,
          t.posArr1=[-.8,
          -.64,
          -.48,
          -.32,
          -.16,
          0,
          .16,
          .32,
          .48,
          .64,
          .8],
          t.posArr2=[-1,
          -.857143,
          -.714286,
          -.571429,
          -.428571,
          -.285714,
          -.142857,
          0,
          .142857,
          .285714,
          .428571,
          .571429,
          .714286,
          .857143,
          1],
          t.dieIndexArr=[],
          t.activeIndexArr=[],
          t
        }i(t,
        e);
        var s=t.prototype;
        return s.onLoad=function ()
        {
          g.spawnControl=this,
          this.CreatePoints()
        },s.onDisable=function ()
        {
          g.spawnControl=null,
          this.unscheduleAllCallbacks()
        },s.onDestroy=function ()
        {
          g.spawnControl=null,
          this.unscheduleAllCallbacks()
        },s.start=function ()
        {
          var e=this;
          this.spawnAllLvByData(),
          this.curSpeed=C.getAttackSpeed(this.atkSpeedLv),
          this.curDamage=C.getAttackDamage(this.atkDamageLv),
          this.scheduleOnce((function ()
          {
            e.preLoadAllSoldiers()
          }),
          .2)
        },s.update=function (e)
        {

        },s.createEnemy=function (e,
        t)
        {
          var i=this;
          if(e.count&&!(e.count<=0))
          {
            var r=Math.max(0,
            e.count-1);
            this.schedule((function ()
            {
              i.create_enemy(e,
              t)
            }),
            .01,
            r)
          }
        },s.create_enemy=function (e,
        t)
        {
          var i=g.nodePoolMgr.getNode(this.enemyPre,
          g.GameController.enemyLayer);
          this.spawnPoint.children[t].getWorldPosition(this._tempWp),
          this._tempWp.x+=c(-.8,
          .8);
          var r=0;
          r=e.count<=20?1:e.count<=50?2:e.count<=100?3:5,
          this._tempWp.z+=c(-r,
          r),
          i.setWorldPosition(this._tempWp);
          var o=i.getComponent(L);
          o&&(o.climbSpeed=this.moveSpeed,
          o.maxHp=e.hp,
          o.init())
        },s.spawnBoss=function (e,
        t)
        {
          var i=g.nodePoolMgr.getNode(this.bossPre,
          g.GameController.enemyLayer);
          this.spawnPoint.children[t].getWorldPosition(this._tempWp),
          i.setWorldPosition(this._tempWp),
          t==Z.length-1&&i.children[0].setScale(d(3.905,
          3.905,
          3.905));
          var r=i.getComponent(L);
          r&&(r.climbSpeed=this.moveSpeed,
          r.maxHp=e.hp,
          r.init())
        },s.spawnBarrel=function (e,
        t)
        {
          var i=g.nodePoolMgr.getNode(this.barrelPre,
          g.GameController.propLayer);
          this.spawnPoint.children[t].getWorldPosition(this._tempWp),
          i.setWorldPosition(this._tempWp);
          var r=i.getComponent(w);
          r&&(r.moveSpeed=this.moveSpeed,
          r.lifeHp=e.hp,
          r.propType=e.propType,
          r.effectNode=r.iconArr[e.rewardIcon],
          r.effectNode.active=!0,
          r.rewardId=e.rewardIcon,
          r.barrelRate=e.rewardIcon+1,
          r.init())
        },s.spawnDoor=function (e,
        t)
        {
          var i=g.nodePoolMgr.getNode(this.doorPre,
          g.GameController.propLayer);
          this.spawnPoint.children[t].getWorldPosition(this._tempWp),
          i.setWorldPosition(this._tempWp);
          var r=i.getComponent(w);
          r&&(r.moveSpeed=this.moveSpeed,
          r.lifeHp=e.hp,
          r.propType=e.propType,
          r.hpRate=e.hpRate,
          r.doorLimit=e.limit,
          r.init())
        },s.spawnAllLvByData=function ()
        {
          for(var e=0;
          e<Z.length;
          e++)this.checkData(Z[e],
          e)
        },s.checkData=function (e,
        t)
        {
          switch(e.type)
          {
            case F.solider:this.createEnemy(e,
            t);
            break;
            case F.barrel:this.spawnBarrel(e,
            t);
            break;
            case F.door:this.spawnDoor(e,
            t);
            break;
            case F.boss:this.spawnBoss(e,
            t)
          }
        },s.killAllEnemy=function ()
        {
          this.node.children.forEach((function (e)
          {
            var t;
            null==(t=e.getComponent(L))||t.doDie()
          }))
        },s.throttle=function (e,
        t)
        {
          var i=0;
          return function ()
          {
            var r=Date.now();
            r-i>=t&&(i=r,
            e.apply(void 0,
            arguments))
          }
        },s.getCurPoint=function ()
        {
          var e=this.curSoliderIndex,
          t=this.spawnPoint.children[this.curSoliderIndex%this.spawnPoint.children.length];
          return this.curSoliderIndex++,

          {
            num:e,
            point:t
          }
        },s.addSoldier=function (e)
        {
          for(var t=this,
          i=0;
          i<e;
          i++)this.scheduleOnce((function ()
          {
            t.getActor()
          }),
          .15*i)
        },s.bulletLvUp=function ()
        {
          this.curBulletLv++,
          this.disTime=this.disTimeArr[this.curBulletLv],
          2==this.curBulletLv?this.bulletRange=-18:3==this.curBulletLv&&(this.bulletRange=-22),
          g.nodePoolMgr.clearPool(g.GameController.bulletArr[this.curBulletLv-1])
        },s.speedLvUp=function ()
        {
          0==this.atkSpeedLv||2==this.atkSpeedLv?this.showAtkValue(g.GameController.UILayer.children[0]):1==this.atkSpeedLv&&this.showAtkValue(g.GameController.UILayer.children[1]),
          this.atkSpeedLv++,
          this.curSpeed=C.getAttackSpeed(this.atkSpeedLv),
          p("閫熷害鍗囩骇",
          this.atkSpeedLv,
          this.curSpeed),
          A.instance.emit("LvUp")
        },s.showAtkValue=function (e)
        {
          e.active=!0,
          e.setScale(u.ZERO),
          f(e).to(.2,

          {
            scale:d(1.2,
            1.2,
            1.2)
          },
          {
            easing:"quadOut"
          }).to(.1,

          {
            scale:d(1,
            1,
            1)
          },
          {
            easing:"quadOut"
          }).start(),
          this.scheduleOnce((function ()
          {
            f(e).to(.2,

            {
              scale:u.ZERO
            },
            {
              easing:"quadOut"
            }).call((function ()
            {
              e.active=!1
            })).start()
          }),
          1.5)
        },s.damageLvUp=function ()
        {
          0==this.atkDamageLv&&this.showAtkValue(g.GameController.UILayer.children[1]),
          this.atkDamageLv++,
          this.curDamage=C.getAttackDamage(this.atkDamageLv),
          A.instance.emit("LvUp")
        },s.CreatePoints=function ()
        {
          this.actorsPos=[],
          this.actorsPos.push(new u(0,
          0,
          0));
          for(var e=[5,
          9,
          15],
          t=0;
          t<e.length;
          t++)
          {
            var i=e[t],
            r=(t+1)*this.actorDis*1.8;
            r=Math.max(r,
            i*this.actorDis/(2*Math.PI));
            for(var o=2*Math.PI/i,
            n=0;
            n<i;
            n++)
            {
              var s=n*o;
              this.actorsPos.push(new u(r*Math.cos(s),
              0,
              -r*Math.sin(s)))
            }
          }
        },s.preLoadAllSoldiers=function ()
        {
          this.schedule(this.addSoldier2,
          .1)
        },s.addSoldier2=function ()
        {
          if(this._soliderIndex>=30)this.unschedule(this.addSoldier2);
          else
          {
            var e=g.nodePoolMgr.getNode(this.solider2Pre);
            e.active=!1,
            e.setParent(g.GameController.soliderLayer),
            this.actorsPos[this._soliderIndex]&&e.setPosition(this.actorsPos[this._soliderIndex]),
            this.soldierList.push(e),
            this.dieIndexArr.push(this._soliderIndex),
            this._soliderIndex++
          }
        },s.soliderUp=function ()
        {
          this.soliderLv++;
          var e=this.soldierLv1List.length;
          this.soldierLv1List.forEach((function (e,
          t)
          {
            e.destroy()
          })),
          this.addSoldier(e)
        },s.getActor=function ()
        {
          if(!(this.activeIndexArr.length>=30))
          {
            var e=this.activeIndexArr.length;
            if(1==e?(this.left=.1,
            this.right=-.1):e>1&&e<=6?(this.left=.3,
            this.right=-.3):e>6&&e<=15?(this.left=.6,
            this.right=-.6):e>15&&(this.left=.9,
            this.right=-.9),
            0==this.soliderLv)
            {
              var t=g.nodePoolMgr.getNode(this.soliderPre);
              t.setParent(g.GameController.soliderLayer),
              t.setPosition(this.actorsPos[this.soldierLv1List.length]),
              this.soldierLv1List.push(t)
            }else
            {
              if(0==this.dieIndexArr.length)return;
              this.soldierList[this.dieIndexArr[0]].active=!0;
              var i=this.dieIndexArr.shift();
              this.activeIndexArr.push(i)
            }
          }
        },s.playExpandRecover=function (e,
        t)
        {
          var i,
          r=this;
          if(void 0===e&&(e=1.18),
          void 0===t&&(t=.3),
          this.isAniComplete)
          {
            this.isAniComplete=!1;
            var o=null==(i=g.GameController)?void 0:i.soliderLayer;
            if(o)for(var n=t/2,
            s=function ()
            {
              var t=o.children[a];
              if(!t||!t.activeInHierarchy)return 1;
              if(!r._basePositions.has(t))
              {
                var i=t.position;
                r._basePositions.set(t,
                new u(i.x,
                i.y,
                i.z))
              }var s=r._basePositions.get(t),
              l=r._expandRefCounts.get(t)||0;
              r._expandRefCounts.set(t,
              l+1);
              var h,
              d=s.x,
              c=s.z,
              p=Math.sqrt(d*d+c*c);
              if(p<=1e-4)h=new u(s.x*e,
              s.y,
              s.z*e);
              else
              {
                var v=d/p,
                m=c/p,
                g=p*(e-1);
                h=new u(s.x+v*g,
                s.y,
                s.z+m*g)
              }try
              {
                f.stopAllByTarget(t)
              }catch(e)
              {

              }f(t).to(n,

              {
                position:h
              },
              {
                easing:"cubicOut"
              }).to(n,

              {
                position:s
              },
              {
                easing:"cubicIn"
              }).call((function ()
              {
                var e=(r._expandRefCounts.get(t)||1)-1;
                e<=0?(t.setPosition(s),
                r._expandRefCounts.delete(t),
                r._basePositions.delete(t)):r._expandRefCounts.set(t,
                e),
                r.isAniComplete=!0
              })).start()
            },a=0;
            a<o.children.length;
            a++)s()
          }
        },s.killAllActor=function ()
        {
          this.lastCount=this.activeIndexArr.length,
          this.killLastSoldiers(30)
        },s.killLastSoldiers=function (e)
        {
          if(!(e<1))if(0!=this.soliderLv)
          {
            e>this.activeIndexArr.length&&(e=this.activeIndexArr.length,
            this.lastCount=e);
            for(var t=e;
            t>0;
            )
            {
              var i=this.activeIndexArr.pop();
              this.soldierList[i].getComponent(b).subHp(1),
              this.dieIndexArr.push(i),
              t--
            }
          }else this.soldierLv1List[0].getComponent(b).subHp(1)
        },s.getBulletPosX=function ()
        {
          var e=0;
          return this.curBulletLv<2?.1:(e=this.posArr2[this.posIndex++%this.posArr2.length],
          g.GameController.soliderLayer.worldPosition.x+e)
        },s.delActor=function (e)
        {
          if(0==this.soliderLv)return e.destroy(),
          this.soldierLv1List.unshift(),
          void (30==this.dieIndexArr.length&&g.GameController.onGameOver(P.LOSE));
          var t=this.soldierList.indexOf(e);
          -1!==t&&(e.active=!1,
          this.soldierList[t].active=!1),
          -1==this.dieIndexArr.indexOf(t)&&this.dieIndexArr.push(t),
          -1!=this.activeIndexArr.indexOf(t)&&this.activeIndexArr.splice(t,
          1),
          30==this.dieIndexArr.length&&(this.soldierList.forEach((function (e)
          {
            e.active=!1
          })),
          g.GameController.onGameOver(P.LOSE))
        },n(t,
        [
        {
          key:"curDamage",
          get:function ()
          {
            return 0==this.atkDamageLv?this._curDamage:v(this._curDamage-2,
            this._curDamage+3)
          },set:function (e)
          {
            this._curDamage=e
          }
        }]),
        t
      }(m)).prototype,
      "spawnPoint",
      [S],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      O=t(T.prototype,
      "soliderPre",
      [D],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      B=t(T.prototype,
      "solider2Pre",
      [_],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      z=t(T.prototype,
      "enemyPre",
      [k],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      N=t(T.prototype,
      "bossPre",
      [G],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      U=t(T.prototype,
      "barrelPre",
      [E],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      H=t(T.prototype,
      "doorPre",
      [M],

      {
        configurable:!0,
        enumerable:!0,
        writable:!0,
        initializer:function ()
        {
          return null
        }
      }),
      R=T))||R));
      s._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/SpriteI18n.ts
// =========================================
System.register("chunks:///_virtual/SpriteI18n.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./Language.ts"],
(function (e)
{
  var t,
  r,
  n,
  o,
  i,
  a,
  p,
  s;
  return
  {
    setters:[function (e)
    {
      t=e.inheritsLoose
    },function (e)
    {
      r=e.cclegacy,
      n=e._decorator,
      o=e.Sprite,
      i=e.resources,
      a=e.SpriteFrame,
      p=e.Component
    },function (e)
    {
      s=e.Language
    }],
    execute:function ()
    {
      var u;
      r._RF.push(
      {

      },"35ee7f3V5VJwLrzqWSa8oxW",
      "SpriteI18n",
      void 0);
      var c=n.ccclass;
      n.property,
      e("SpriteI18n",
      c("SpriteI18n")(u=function (e)
      {
        function r()
        {
          return e.apply(this,
          arguments)||this
        }return t(r,
        e),
        r.prototype.onLoad=function ()
        {
          var e=this.node.getComponent(o);
          if(e)
          {
            var t=e.spriteFrame.uuid,
            r=i.getAssetInfo(t),
            n=s.getLanguageCode();
            if(r&&r.path)
            {
              var p=r.path;
              p=p.replace("/en/",
              "/"+n+"/");
              var u=i.get(p,
              a);
              u?e.spriteFrame=u:i.load(p,
              a,
              (function (t,
              r)
              {
                r&&(e.spriteFrame=r)
              }))
            }
          }
        },r
      }(p))||u);
      r._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/TimeManager.ts
// =========================================
System.register("chunks:///_virtual/TimeManager.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc"],
(function (e)
{
  var t,
  n,
  c;
  return
  {
    setters:[function (e)
    {
      t=e.createClass
    },function (e)
    {
      n=e.cclegacy,
      c=e._decorator
    }],
    execute:function ()
    {
      var r,
      a;
      n._RF.push(
      {

      },"5f53168ql9LmpQeUegkeU9r",
      "TimeManager",
      void 0);
      var i=c.ccclass;
      c.property,
      e("TimeManager",
      i("TimeManager")(((a=function ()
      {
        function e()
        {

        }return e.setTimeScale=function (e)
        {
          this._timeScale=e
        },e.prototype.update=function (e)
        {

        },t(e,
        null,
        [
        {
          key:"timeScale",
          get:function ()
          {
            return this._timeScale
          }
        }]),
        e
      }())._timeScale=1,
      r=a))||r);
      n._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/Utils.ts
// =========================================
System.register("chunks:///_virtual/Utils.ts",
["cc",
"./GameGlobal.ts"],
(function (t)
{
  var e,
  n,
  a,
  o,
  i,
  s,
  c,
  l,
  r,
  u,
  f,
  d,
  y,
  g,
  p,
  v,
  m,
  x,
  h;
  return
  {
    setters:[function (t)
    {
      e=t.cclegacy,
      n=t.Vec3,
      a=t.Node,
      o=t.Layers,
      i=t.MobilityMode,
      s=t.UITransform,
      c=t.Sprite,
      l=t.resources,
      r=t.SpriteFrame,
      u=t.ImageAsset,
      f=t.Texture2D,
      d=t.tween,
      y=t.v3,
      g=t.Label,
      p=t.UIOpacity,
      v=t.RenderTexture,
      m=t.screen,
      x=t.gfx
    },function (t)
    {
      h=t.GameGlobal
    }],
    execute:function ()
    {
      e._RF.push(
      {

      },"09b53OzyExLZoUIa3g0V0wP",
      "Utils",
      void 0);
      t("Utils",
      function ()
      {
        function t()
        {

        }return t.getUIPos=function (t,
        e)
        {
          return h.mainCamera.convertToUINode(t.getWorldPosition(),
          e)
        },t.randomRange=function (t,
        e)
        {
          var n=e-t;
          return t+Math.random()*n
        },t.randomPos=function (t,
        e)
        {
          var a=t.x-e/2+Math.random()*e,
          o=t.y-e/2+Math.random()*e;
          return new n(a,
          o,
          0)
        },t.randomElement=function (t)
        {
          return t[Math.floor(Math.random()*t.length)]
        },t.createSprite=function (t)
        {
          var e=new a;
          e.layer=o.Enum.UI_2D,
          e.mobility=i.Static;
          e.addComponent(s);
          var n=e.addComponent(c);
          n.sizeMode=c.SizeMode.TRIMMED,
          n.type=c.Type.SIMPLE,
          n.trim=!0;
          var u=l.get(t+"/spriteFrame",
          r);
          return u&&(n.spriteFrame=u),
          e
        },t.setSpriteFrame=function (t,
        e,
        n)
        {
          var a=t.getComponent(c),
          o=l.get(e);
          if(o)
          {
            if(o instanceof r)a.spriteFrame=o,
            n&&n();
            else if(o instanceof u)
            {
              var i=new f;
              i.image=o;
              var s=new r;
              s.texture=i,
              a.spriteFrame=s
            }
          }else l.load(e,
          r,
          (function (t,
          e)
          {
            a.spriteFrame=e,
            n&&n()
          }))
        },t.nodeMoving=function (t,
        e,
        a,
        o,
        i,
        s)
        {
          d(t.position).delay(i).to(.3,
          o,

          {
            onUpdate:function (i,
            s)
            {
              var c,
              l,
              r,
              u,
              f,
              d;
              t.position=(r=a,
              u=o,
              f=(1-(c=s))*(1-c)*(l=e).x+2*c*(1-c)*r.x+c*c*u.x,
              d=(1-c)*(1-c)*l.y+2*c*(1-c)*r.y+c*c*u.y,
              new n(f,
              d,
              0))
            },onComplete:function (t)
            {
              s&&s()
            }
          }).start()
        },t.coinFlyTo=function (t,
        e,
        a,
        o,
        i,
        s,
        c,
        l)
        {
          d(t).delay(i).call((function ()
          {
            s&&s()
          })).parallel(d(t).to(.5,

          {
            position:o
          },
          {
            onUpdate:function (i,
            s)
            {
              var c,
              l,
              r,
              u,
              f,
              d;
              t.position=(r=a,
              u=o,
              f=(1-(c=s))*(1-c)*(l=e).x+2*c*(1-c)*r.x+c*c*u.x,
              d=(1-c)*(1-c)*l.y+2*c*(1-c)*r.y+c*c*u.y,
              new n(f,
              d,
              0))
            }
          }),
          d(t).by(.3,

          {
            scale:y(.1,
            .1,
            1)
          }).call((function ()
          {
            c&&c()
          })).by(.2,

          {
            scale:y(-.1,
            -.1,
            1)
          }).call((function ()
          {
            t.setScale(y(.1,
            .1,
            0))
          })).call((function ()
          {
            l&&l()
          })).by(.2,

          {
            scale:y(.6,
            .6,
            1)
          },
          {
            easing:"quadOut"
          })).start()
        },t.coinFlyFrom=function (t,
        e,
        a,
        o,
        i,
        s)
        {
          d(t).delay(i).parallel(d(t).to(.6,

          {
            position:o
          },
          {
            onUpdate:function (i,
            s)
            {
              var c,
              l,
              r,
              u,
              f,
              d;
              t.position=(r=a,
              u=o,
              f=(1-(c=s))*(1-c)*(l=e).x+2*c*(1-c)*r.x+c*c*u.x,
              d=(1-c)*(1-c)*l.y+2*c*(1-c)*r.y+c*c*u.y,
              new n(f,
              d,
              0))
            },onComplete:function (t)
            {
              s&&s()
            }
          }),
          d(t).by(.3,

          {
            scale:y(.1,
            .1,
            1),
            angle:50
          }).by(.3,

          {
            scale:y(-.1,
            -.1,
            1),
            angle:-50
          })).start()
        },t.jellyEffect=function (t,
        e,
        a)
        {
          t.setScale(n.ZERO),
          d(t).to(.15,

          {
            scale:y(1*e,
            1*e,
            1*e)
          }).to(.06,

          {
            scale:y(1.4*e,
            .53*e,
            1*e)
          }).to(.12,

          {
            scale:y(.8*e,
            1.2*e,
            1*e)
          }).to(.07,

          {
            scale:y(1.2*e,
            .7*e,
            1*e)
          }).to(.07,

          {
            scale:y(.85*e,
            1.1*e,
            1*e)
          }).to(.07,

          {
            scale:y(1*e,
            1*e,
            1*e)
          }).call((function ()
          {
            a&&a(t)
          })).start()
        },t.shrinkJellyEffect=function (t,
        e,
        n)
        {
          var a=t.scale.clone();
          d(t).to(.1,

          {
            scale:y(1.1*a.x,
            .9*a.y,
            a.z)
          }).to(.08,

          {
            scale:y(.85*a.x,
            1.15*a.y,
            a.z)
          }).to(.1,

          {
            scale:y(1.05*a.x,
            .95*a.y,
            a.z)
          }).to(.15,

          {
            scale:y(e,
            e,
            e)
          }).to(.06,

          {
            scale:y(1.1*e,
            .9*e,
            e)
          }).to(.06,

          {
            scale:y(.95*e,
            1.05*e,
            e)
          }).to(.05,

          {
            scale:y(e,
            e,
            e)
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.jellyEffect2=function (t,
        e,
        a)
        {
          t.setScale(n.ZERO),
          d(t).to(.15,

          {
            scale:y(1*e,
            1*e,
            1*e)
          }).to(.06,

          {
            scale:y(1.4*e,
            .53*e,
            1*e)
          }).to(.12,

          {
            scale:y(.8*e,
            1.2*e,
            1*e)
          }).to(.07,

          {
            scale:y(1.2*e,
            .7*e,
            1*e)
          }).to(.07,

          {
            scale:y(.85*e,
            1.1*e,
            1*e)
          }).to(.07,

          {
            scale:y(1*e,
            1*e,
            1*e)
          }).call((function ()
          {
            a&&a()
          })).start()
        },t.qTanEffect=function (t,
        e,
        n)
        {
          d(t).to(.04,

          {
            scale:y(1.2*e,
            1.2*e,
            1.2*e)
          }).to(.03,

          {
            scale:y(.9*e,
            .9*e,
            .9*e)
          }).to(.02,

          {
            scale:y(1*e,
            1*e,
            1*e)
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.qTanEffect2=function (t,
        e,
        n)
        {
          var a=t.getScale().clone();
          d(t).to(.1,

          {
            scale:y(1.22*a.x,
            1.22*a.y,
            1.05*a.z)
          },
          {
            easing:"bounceInOut"
          }).to(.1,

          {
            scale:y(.9*a.x,
            .9*a.y,
            .9*a.z)
          },
          {
            easing:"bounceInOut"
          }).to(.1,

          {
            scale:y(1*a.x,
            1*a.y,
            1*a.z)
          },
          {
            easing:"bounceInOut"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.qTanEffect4=function (t,
        e,
        n)
        {
          d(t).to(.06,

          {
            scale:y(1.02*e,
            1.02*e,
            1.02*e)
          },
          {
            easing:"sineInOut"
          }).to(.06,

          {
            scale:y(e,
            e,
            e)
          },
          {
            easing:"sineInOut"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.qTanEffect5=function (t,
        e,
        n,
        a)
        {
          d(t).to(.12,

          {
            scale:y(1.1*(e.x-n),
            1.1*(e.y-n),
            e.z)
          },
          {
            easing:"sineInOut"
          }).to(.12,

          {
            scale:y(e.x-n,
            e.y-n,
            e.z)
          },
          {
            easing:"sineInOut"
          }).call((function ()
          {
            a&&a()
          })).start()
        },t.shakeEffect=function (t,
        e,
        a,
        o,
        i)
        {
          void 0===e&&(e=.5),
          void 0===a&&(a=10),
          void 0===o&&(o=5);
          for(var s=t.position.clone(),
          c=e/o,
          l=d(t),
          r=0;
          r<o;
          r++)
          {
            var u=(Math.random()-.5)*a*2,
            f=(Math.random()-.5)*a*2,
            y=new n(s.x+u,
            s.y+f,
            s.z);
            l=l.to(c/2,

            {
              position:y
            }).to(c/2,

            {
              position:s
            })
          }l.call((function ()
          {
            t.setPosition(s),
            i&&i()
          })).start()
        },t.shakeEffect2=function (t,
        e,
        a,
        o,
        i)
        {
          void 0===e&&(e=.5),
          void 0===a&&(a=10),
          void 0===o&&(o=5);
          for(var s=t.position.x,
          c=t.position.y,
          l=e/o,
          r=d(t),
          u=0;
          u<o;
          u++)
          {
            var f=(Math.random()-.5)*a*2,
            y=(Math.random()-.5)*a*2;
            r=r.by(l/2,

            {
              position:new n(f,
              y,
              0)
            }).by(l/2,

            {
              position:new n(-f,
              -y,
              0)
            })
          }r.call((function ()
          {
            t.setPosition(s,
            c,
            t.position.z),
            i&&i()
          })).start()
        },t.tweenNumber=function (t,
        e,
        a,
        o,
        i,
        s)
        {
          void 0===s&&(s=null);
          var c=t.getComponent(g);
          if(c)
          {
            c.string=Math.floor(e).toString();
            var l=Math.floor(e);
            d(
            {
              value:e
            }).delay(i).to(o,

            {
              value:a
            },
            {
              easing:"linear",
              onUpdate:function (e,
              a)
              {
                var o=e.value,
                i=Math.floor(o);
                i!==l&&(c.string=i.toString(),
                l=i,
                d(t).stop(),
                t.setScale(2,
                2),
                d(t).to(.1,

                {
                  scale:new n(1,
                  1,
                  1)
                },
                {
                  easing:"backOut"
                }).start())
              }
            }).call((function ()
            {
              c.string=Math.floor(a).toString(),
              t.setScale(1,
              1,
              1),
              s&&s()
            })).start()
          }else console.error("TweenNumber Error: The provided node does not have a Label component.")
        },t.groundAppear=function (t,
        e,
        a)
        {
          var o=t.getScale().clone();
          t.setScale(n.ZERO),
          d(t).delay(e).to(.12,

          {
            scale:y(1.12*o.x,
            1.12*o.y,
            1.12*o.z)
          },
          {
            easing:"sineInOut"
          }).to(.1,

          {
            scale:y(1*o.x,
            1*o.y,
            1*o.z)
          },
          {
            easing:"sineOutIn"
          }).call((function ()
          {
            a&&a()
          })).start()
        },t.buildAppear=function (t,
        e,
        n)
        {
          var a=t.getScale().clone();
          t.setScale(a.x,
          .1,
          a.z),
          d(t).delay(e).to(.15,

          {
            scale:y(1*a.x,
            1.2*a.y,
            1*a.z)
          },
          {
            easing:"sineInOut"
          }).to(.12,

          {
            scale:y(1*a.x,
            .9*a.y,
            1*a.z)
          },
          {
            easing:"sineOutIn"
          }).to(.1,

          {
            scale:y(1*a.x,
            1.12*a.y,
            1*a.z)
          },
          {
            easing:"sineInOut"
          }).to(.1,

          {
            scale:y(1*a.x,
            1*a.y,
            1*a.z)
          },
          {
            easing:"sineOutIn"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.transferAppear=function (t,
        e,
        n)
        {
          var a=t.getPosition().clone(),
          o=t.getScale().clone();
          t.setPosition(a.x,
          -.5,
          a.z),
          t.setScale(o.x,
          .1,
          o.z),
          d(t).delay(e).to(.15,

          {
            position:a,
            scale:o
          },
          {
            easing:"backOut"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.breathEffect=function (t)
        {
          d(t).repeatForever(d(t).by(.8,

          {
            scale:y(.05,
            .05,
            0)
          },
          {
            easing:"quadInOut"
          }).by(.8,

          {
            scale:y(-.05,
            -.05,
            0)
          },
          {
            easing:"quadInOut"
          })).start()
        },t.breathLight=function (t)
        {
          var e=t.getComponent(p);
          e.opacity=0,
          t.active=!0,
          d(e).repeatForever(d(e).to(.25,

          {
            opacity:255
          },
          {
            easing:"quadInOut"
          }).to(.25,

          {
            opacity:0
          },
          {
            easing:"quadInOut"
          }).to(.35,

          {
            opacity:255
          },
          {
            easing:"quadInOut"
          }).to(.35,

          {
            opacity:0
          },
          {
            easing:"quadInOut"
          })).start()
        },t.pulsationEffect=function (t)
        {
          d(t).repeatForever(d(t).by(.25,

          {
            scale:y(.05,
            .05,
            0)
          },
          {
            easing:"sineOut"
          }).by(.25,

          {
            scale:y(-.05,
            -.05,
            0)
          },
          {
            easing:"sineOut"
          }).by(.35,

          {
            scale:y(.14,
            .14,
            0)
          },
          {
            easing:"sineOut"
          }).by(.35,

          {
            scale:y(-.14,
            -.14,
            0)
          },
          {
            easing:"sineIn"
          }).delay(.5)).start()
        },t.floatEffect=function (t,
        e,
        n)
        {
          d(t).delay(e).call((function ()
          {
            n&&n()
          })).by(.2,

          {
            position:y(0,
            10,
            0)
          },
          {
            easing:"quadOut"
          }).by(.2,

          {
            position:y(0,
            -10,
            0)
          },
          {
            easing:"quadIn"
          }).start()
        },t.buildingAppear=function (t,
        e,
        n)
        {
          var a=t.getScale().clone();
          t.setScale(0,
          0),
          d(t).delay(e).to(.15,

          {
            scale:y(1.3*a.x,
            1.3*a.y,
            1.3*a.z)
          },
          {
            easing:"sineInOut"
          }).to(.12,

          {
            scale:y(.9*a.x,
            .9*a.y,
            .9*a.z)
          },
          {
            easing:"sineOutIn"
          }).to(.1,

          {
            scale:y(1.12*a.x,
            1.12*a.y,
            1.12*a.z)
          },
          {
            easing:"sineInOut"
          }).to(.1,

          {
            scale:y(1*a.x,
            1*a.y,
            1*a.z)
          },
          {
            easing:"sineOutIn"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.DiTieAppear=function (t,
        e,
        n)
        {
          var a=t.getScale().clone();
          t.setScale(0,
          0),
          d(t).delay(e).to(.15,

          {
            scale:y(1.3*a.x,
            1*a.y,
            1.3*a.z)
          },
          {
            easing:"sineInOut"
          }).to(.1,

          {
            scale:y(1*a.x,
            1*a.y,
            1*a.z)
          },
          {
            easing:"sineOutIn"
          }).call((function ()
          {
            n&&n()
          })).start()
        },t.delayCall=function (t,
        e,
        n)
        {
          d(t).delay(e).call((function ()
          {
            n&&n()
          })).start()
        },t.getRandomInt=function (t,
        e)
        {
          return e=t-.5+Math.random()*(e-t+1),
          Math.round(e)
        },t.createRenderTexture=function (t,
        e)
        {
          void 0===e&&(e=1);
          var n=new v,
          a=m.windowSize,
          o=Math.min(1.5,
          m.devicePixelRatio),
          i=a.width*o*t,
          s=a.height*o*t,
          c=i/s;
          i>2048&&(s=(i=2048)/c),
          s>2048&&(i=(s=2048)*c);
          for(var l=[],
          r=0;
          r<e;
          ++r)l.push(new x.ColorAttachment(x.Format.RGBA8));
          return n.reset(
          {
            width:i,
            height:s,
            passInfo:new x.RenderPassInfo(l,
            new x.DepthStencilAttachment(x.Format.DEPTH_STENCIL))
          }),
          n.setFilters(f.Filter.LINEAR,
          f.Filter.LINEAR),
          n.setWrapMode(f.WrapMode.CLAMP_TO_BORDER,
          f.WrapMode.CLAMP_TO_BORDER),
          n
        },t.syncCameraParameters=function (t,
        e)
        {
          t.fov=e.fov,
          t.near=e.near,
          t.far=e.far,
          t.orthoHeight=e.orthoHeight
        },t.syncCameraTransform=function (t,
        e)
        {
          t.node.worldPosition=e.node.worldPosition,
          t.node.worldScale=e.node.worldScale,
          t.node.worldRotation=e.node.worldRotation
        },t.bezierCurve=function (t,
        e,
        n,
        a,
        o)
        {
          o.x=(1-t)*(1-t)*e.x+2*t*(1-t)*n.x+t*t*a.x,
          o.y=(1-t)*(1-t)*e.y+2*t*(1-t)*n.y+t*t*a.y,
          o.z=(1-t)*(1-t)*e.z+2*t*(1-t)*n.z+t*t*a.z
        },t.changeParent=function (t,
        e)
        {
          var n=t.worldPosition.clone(),
          a=t.worldRotation.clone(),
          o=t.worldScale.clone();
          t.setParent(e),
          t.setWorldPosition(n),
          t.setWorldRotation(a),
          t.setWorldScale(o)
        },t
      }());
      e._RF.pop()
    }
  }
}));

// =========================================
// Module: chunks:///_virtual/walk.ts
// =========================================
System.register("chunks:///_virtual/walk.ts",
["./rollupPluginModLoBabelHelpers.js",
"cc",
"./GameGlobal.ts"],
(function (t)
{
  var n,
  e,
  o,
  a,
  r;
  return
  {
    setters:[function (t)
    {
      n=t.inheritsLoose
    },function (t)
    {
      e=t.cclegacy,
      o=t._decorator,
      a=t.Component
    },function (t)
    {
      r=t.GameGlobal
    }],
    execute:function ()
    {
      var c;
      e._RF.push(
      {

      },"ed643G/ak5NS6WWjAiDS5n1",
      "walk",
      void 0);
      var i=o.ccclass;
      o.property,
      t("walk",
      i("walk")(c=function (t)
      {
        function e()
        {
          for(var n,
          e=arguments.length,
          o=new Array(e),
          a=0;
          a<e;
          a++)o[a]=arguments[a];
          return(n=t.call.apply(t,
          [this].concat(o))||this).canShake=!1,
          n
        }n(e,
        t);
        var o=e.prototype;
        return o.start=function ()
        {

        },o.onStep=function (t)
        {
          this.canShake&&r.CameraControl.onVibrte()
        },o.update=function (t)
        {

        },e
      }(a))||c);
      e._RF.pop()
    }
  }
}));
(function (r)
{
   r('virtual:///prerequisite-imports/main',
   'chunks:///_virtual/main');

})(function (mid,
 cid)
{
   System.register(mid,
  [cid],
   function (_export,
   _context)
  {
     return
    {
       setters:[function (_m)
      {
         var _exportObj=
        {

        };
         for(var _key in _m)
        {
           if(_key!== "default"&& _key!== "__esModule") _exportObj[_key]= _m[_key];

        } _export(_exportObj);

      }],
       execute: function ()
      {

      }
    };

  });

});


