import { LucideIcon } from 'lucide-react';

export interface SidebarItem {
  id: string;
  labelKey: string;
  icon: any;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: 'up' | 'down';
  icon: LucideIcon;
  colorClass: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative';
  icon: LucideIcon;
}

export interface QuickActionProps {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export interface ServiceStatProps {
  name: string;
  percentage: number;
  bookings: number;
  revenue: string;
  colorClass: string;
}

export interface ActivityItemProps {
  type: 'signup' | 'doctor' | 'booking' | 'complaint' | 'subscription';
  title: string;
  description: string;
  timeAgo: string;
}

// Data Models for Management Pages
export interface Doctor {
  id: string;
  name: string;
  email: string;
  specialization: string;
  experience: string;
  joinedDate: string;
  patients: number;
  revenue: string;
  status: 'active' | 'inactive';
  avatarSeed: string;
  // Optional fields for form data persistence
  clinic?: string;
  license?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  appointments: number;
  lastActive: string;
  status: 'active' | 'suspended';
  avatarSeed: string;
  // Optional fields for form data persistence
  age?: string;
  address?: string;
  city?: string;
}

export interface Appointment {
  id: string;
  type: 'Online Consultation' | 'Clinic Visit' | 'Home Visit';
  status: 'confirmed' | 'pending' | 'cancelled';
  patientName: string;
  patientSeed: string;
  doctorName: string;
  doctorSeed: string;
  date: string;
  time: string;
  typeColorClass: string;
  statusColorClass: string;
}

export interface Subscription {
  id: string;
  doctorName: string;
  email: string;
  avatarSeed: string;
  plan: 'Premium' | 'Enterprise' | 'Basic';
  planColorClass: string;
  status: 'active' | 'Expired' | 'Expiring Soon';
  statusColorClass: string;
  startDate: string;
  renewDate: string;
  price: string;
  daysLeft: string;
  daysLeftColorClass: string;
}

export interface PriceInfo {
  id: string;
  serviceName: string;
  currentPrice: string;
  previousPrice: string;
  increase: string;
  dateChanged: string;
  icon: LucideIcon;
  iconColorClass: string;
}

export interface Review {
  id: string;
  userName: string;
  avatarSeed: string;
  about: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  type: 'Review' | 'Complaint';
  typeColorClass: string;
}