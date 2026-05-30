/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BookingDetails {
  id?: string;
  ceoName: string;
  companyName: string;
  email: string;
  selectedDate: string;
  selectedTimeSlot: string;
  whatsapp?: string;
  painPoint?: string;
  paymentMethod: "stripe_simulation" | "agenda_now";
  status: "pending" | "confirmed";
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarIcon: string;
}

export interface BrandMilestone {
  number: string;
  title: string;
  desc: string;
}
