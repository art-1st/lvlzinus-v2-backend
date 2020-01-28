// tslint:disable
import * as Sequelize from 'sequelize';


// table: events
export interface eventsAttribute {
  id:number;
  title?:string;
  desc?:string;
  className?:string;
  place?:string;
  address?:string;
  allDay?:number;
  start?:Date;
  end?:Date;
  media?:string;
  link?:string;
  attend?:number;
  tag?:number;
  user?:string;
}
export interface eventsInstance extends Sequelize.Instance<eventsAttribute>, eventsAttribute { }
export interface eventsModel extends Sequelize.Model<eventsInstance, eventsAttribute> { }

// table: events_new_dev
export interface events_new_devAttribute {
  id:number;
  title?:string;
  desc?:string;
  className?:string;
  place?:string;
  address?:string;
  allDay?:number;
  start?:Date;
  end?:Date;
  media?:string;
  link?:string;
  attend?:number;
  tag?:number;
  user?:string;
}
export interface events_new_devInstance extends Sequelize.Instance<events_new_devAttribute>, events_new_devAttribute { }
export interface events_new_devModel extends Sequelize.Model<events_new_devInstance, events_new_devAttribute> { }

// table: events_new
export interface events_newAttribute {
  id:number;
  title?:string;
  desc?:string;
  className?:string;
  place?:string;
  address?:string;
  allDay?:number;
  start?:Date;
  end?:Date;
  media?:string;
  link?:string;
  attend?:number;
  tag?:number;
  user?:string;
}
export interface events_newInstance extends Sequelize.Instance<events_newAttribute>, events_newAttribute { }
export interface events_newModel extends Sequelize.Model<events_newInstance, events_newAttribute> { }
