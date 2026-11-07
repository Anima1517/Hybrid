export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  availableSlots: string[];
  slotInfo: string;
  timeRange: string;
  image: string;
  status?: string;
  queueNo?: string;
  dateText?: string;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wijaya, Sp.A',
    specialty: 'Dokter Spesialis Anak',
    rating: 4.9,
    location: 'Poli Anak & Tumbuh Kembang, Lt. 2 (R. 04)',
    availableSlots: ['16:30 WIB'],
    slotInfo: '4 Slot Tersedia',
    timeRange: '16:30 WIB (Sore)',
    status: 'Terkonfirmasi',
    queueNo: 'A-14',
    dateText: 'Rabu, 18 Okt 2024',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Dr. Budi Prasetyo, Sp.PD',
    specialty: 'Spesialis Penyakit Dalam (Internis)',
    rating: 4.8,
    location: 'Gedung Utama, Lt. 1 (Poli Penyakit Dalam)',
    availableSlots: ['09:00 WIB'],
    slotInfo: 'Sisa 2 Slot',
    timeRange: '09:00 WIB',
    status: 'Menunggu',
    dateText: 'Jumat, 20 Okt • 09:00 WIB',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Dr. Ratna Anindita',
    specialty: 'Dokter Umum & Preventif Care',
    rating: 4.9,
    location: 'Gedung Utama, Lt. 1',
    availableSlots: ['17:00 WIB', '18:15 WIB', '19:00 WIB'],
    slotInfo: '4 Slot Tersedia',
    timeRange: '17:00 - 20:30 WIB',
    image: 'https://images.unsplash.com/photo-1594824813566-88855ce78c4a?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    name: 'Drg. Dimas Pratama, Sp.KG',
    specialty: 'Spesialis Konservasi Gigi',
    rating: 4.8,
    location: 'Klinik Gigi, Lt. 2',
    availableSlots: ['19:30 WIB', '20:15 WIB'],
    slotInfo: 'Sisa 2 Slot',
    timeRange: '19:30 - 21:00 WIB',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60',
  },
];