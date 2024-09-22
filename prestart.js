import "./js/custom-bgmV.js";

ig.MapStyle.registerStyle("mirror-outer", "map", {
    sheet: "media/entity/style/mirror-map.png",
    hasDoorMat: false,
    teleportField: {
      x: 0,
      y: 48,
      xCount: 3,
      zHeight: 0
    },
    doorGlow: {
      x: 128,
      y: 0,
      xCount: 1
    }
  });
  ig.MapStyle.registerStyle("mirror-outer", "puzzle", {
    sheet: "media/entity/style/mirror-puzzle.png"
  });
  ig.MapStyle.registerStyle("mirror-outer", "puzzle2", {
    sheet: "media/entity/style/mirror-puzzle-2.png"
  });

const tmp2 = Vec2.create();
const tmp3 = Vec3.create();
ig.ACTION_STEP.SHOOT_PROXY_AS_PLAYER = ig.ACTION_STEP.SHOOT_PROXY.extend({
    run(entity) {
        const proxy = sc.ProxyTools.getProxy(this.proxySrc, entity);
        if (proxy) {
            let dir = this.dir && ig.Action.getVec2(this.dir, entity, tmp2) || entity.face;
            const pos = this.posType(tmp3, entity, this.align);
            Vec3.add(pos, this.offset);
            if (this.aimAtTarget) {
                var e = entity.getTarget();
                if (e) {
                    dir = e.getCenter(i);
                    Vec2.sub(dir, pos);
                }
            }
            proxy.spawn(pos.x, pos.y, pos.z, ig.game.playerEntity, dir);
        }
        return true
    }
});