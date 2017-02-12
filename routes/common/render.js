'use strict';

function render(ctx, status, body) {
  ctx.status = status;
  ctx.body = body;
}

module.exports = render;
