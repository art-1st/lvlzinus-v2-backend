/* jshint indent: 2 */

module.exports = function(sequelize, DATA_TYPES) {
  return sequelize.define('events', {
    id: {
      type: DATA_TYPES.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    },
    desc: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    },
    className: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    },
    place: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    },
    address: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    },
    allDay: {
      type: DATA_TYPES.INTEGER(1),
      allowNull: true
    },
    start: {
      type: DATA_TYPES.DATE,
      allowNull: true
    },
    end: {
      type: DATA_TYPES.DATE,
      allowNull: true
    },
    media: {
      type: DATA_TYPES.STRING(300),
      allowNull: true
    },
    link: {
      type: DATA_TYPES.STRING(300),
      allowNull: true
    },
    attend: {
      type: DATA_TYPES.INTEGER(8),
      allowNull: true
    },
    tag: {
      type: DATA_TYPES.INTEGER(11),
      allowNull: true
    },
    user: {
      type: DATA_TYPES.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'events'
  });
};
