// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  events:def.eventsModel;
  events_new_dev:def.events_new_devModel;
  events_new:def.events_newModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    events: seq.import(path.join(__dirname, './events')),
    events_new_dev: seq.import(path.join(__dirname, './events_new_dev')),
    events_new: seq.import(path.join(__dirname, './events_new')),
  };
  return tables;
};
