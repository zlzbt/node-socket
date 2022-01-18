'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      data: 'zl',
    };
    ctx.socket.on('res', msg => {
      console.log('res from server: %s!', msg)
    })
    ctx.socket.emit('chat', msg => {
      console.log('chat from server: %s!', msg)
    })
  }
}

module.exports = HomeController;
