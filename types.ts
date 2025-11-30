export enum ViewState {
  ROLE_SELECTION = 'ROLE_SELECTION',
  USER_REGISTER = 'USER_REGISTER',
  USER_LOGIN = 'USER_LOGIN',
  USER_DASHBOARD = 'USER_DASHBOARD',
  DOCTOR_REGISTER = 'DOCTOR_REGISTER',
  DOCTOR_LOGIN = 'DOCTOR_LOGIN',
  DOCTOR_DASHBOARD = 'DOCTOR_DASHBOARD',
  ADMIN_REGISTER = 'ADMIN_REGISTER',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD',
}

export interface RoleConfig {
  id: string;
  title: string;
  description: string;
  colorClass: string;
  gradientClass: string;
  iconType: 'heart' | 'stethoscope' | 'shield';
  targetRegister: ViewState;
  targetLogin: ViewState;
  targetDashboard: ViewState;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  exp: number;
}

export interface Appointment {
  id: number;
  doctor?: string;
  patient?: string;
  type: string;
  date?: string;
  time?: string;
  status: 'upcoming' | 'past' | 'pending' | 'confirmed';
}

export interface User {
  id: number;
  name: string;
  email: string;
  joined: string;
  status: 'active' | 'inactive';
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}
