'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberOrderHistoriesSchema extends Schema {
  up () {
    this.create('member_order_histories', (table) => {
      table.increments()
      table.integer('member_id').notNullable().unsigned().references('id').inTable('members').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('tour_order_id').notNullable().unsigned().references('id').inTable('tour_package_orders').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('member_order_histories')
  }
}

module.exports = MemberOrderHistoriesSchema
