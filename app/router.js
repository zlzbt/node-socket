'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // socket.io
  // app.io.of('/')
  io.route('chat', io.controller.chat.index);

  // app.io.of('/chat')
  io.of('/chat').route('chat', io.controller.chat.index);
};
