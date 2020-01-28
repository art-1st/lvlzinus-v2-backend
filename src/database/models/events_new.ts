/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {events_newInstance, events_newAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<events_newInstance, events_newAttribute>('events_new', {
    id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    className: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    place: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    allDay: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    media: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    attend: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    tag: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'events_new'
  });
};
