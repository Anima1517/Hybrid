import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';
import { Navbar } from './component/Navbar';
import { DOCTORS_DATA } from './data/doctors';

export default function JadwalScreen() {
  const [activeTab, setActiveTab] = useState<'aktif' | 'riwayat'>('aktif');
  const [selectedDay, setSelectedDay] = useState(18);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('Semua');

  const activeAppointment = DOCTORS_DATA[0];
  const upcomingAppointment = DOCTORS_DATA[1];

  const practiceDoctors = DOCTORS_DATA.slice(2).filter((doc) => {
    const matchQuery =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = category === 'Semua' || doc.specialty.includes(category);
    return matchQuery && matchCat;
  });

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* 1. Header */}
      <Header title="KlinikSehat" subtitle="Beranda" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Title Area */}
        <View className="flex-row items-center justify-between px-4 pt-3 pb-2">
          <View>
            <Text className="text-xl font-bold text-on-surface">Jadwal & Temu Dokter</Text>
            <Text className="text-xs text-on-surface-variant">
              Pantau antrean aktif dan kelola kunjungan kesehatan Anda
            </Text>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-secondary-container/40 items-center justify-center">
            <MaterialIcons name="support-agent" size={20} color="#36671c" />
          </TouchableOpacity>
        </View>

        {/* Segmented Tab Switcher */}
        <View className="mx-4 my-2 p-1 bg-surface-container rounded-full flex-row">
          <TouchableOpacity
            onPress={() => setActiveTab('aktif')}
            className={`flex-1 py-2 rounded-full flex-row items-center justify-center gap-1.5 ${
              activeTab === 'aktif' ? 'bg-primary' : 'bg-transparent'
            }`}
          >
            <Ionicons name="calendar" size={14} color={activeTab === 'aktif' ? '#ffffff' : '#42493c'} />
            <Text className={`text-xs font-semibold ${activeTab === 'aktif' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
              Janji Aktif
            </Text>
            {/* Badge Angka Warna */}
            <View className="bg-secondary-container px-1.5 py-0.5 rounded-full">
              <Text className="text-[10px] font-bold text-on-secondary-container">2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('riwayat')}
            className={`flex-1 py-2 rounded-full flex-row items-center justify-center gap-1.5 ${
              activeTab === 'riwayat' ? 'bg-primary' : 'bg-transparent'
            }`}
          >
            <Ionicons name="time-outline" size={14} color={activeTab === 'riwayat' ? '#ffffff' : '#42493c'} />
            <Text className={`text-xs font-semibold ${activeTab === 'riwayat' ? 'text-on-primary' : 'text-on-surface-variant'}`}>
              Riwayat Selesai
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date Strip */}
        <View className="mx-4 my-2 p-3 bg-surface-container-lowest rounded-2xl border border-outline-variant">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-2">
              <Text className="text-xs font-bold text-on-surface">Oktober 2024</Text>
              <View className="bg-secondary-container/60 px-2 py-0.5 rounded-full">
                <Text className="text-[10px] text-on-secondary-container font-semibold">Minggu 3</Text>
              </View>
            </View>
            <View className="flex-row gap-1">
              <TouchableOpacity className="w-6 h-6 rounded-full bg-surface-container items-center justify-center">
                <Ionicons name="chevron-back" size={14} color="#1a1c1c" />
              </TouchableOpacity>
              <TouchableOpacity className="w-6 h-6 rounded-full bg-surface-container items-center justify-center">
                <Ionicons name="chevron-forward" size={14} color="#1a1c1c" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between pt-1">
            {[
              { day: 'Sen', date: 16 },
              { day: 'Sel', date: 17 },
              { day: 'Rab', date: 18 },
              { day: 'Kam', date: 19 },
              { day: 'Jum', date: 20, dot: true },
              { day: 'Sab', date: 21 },
              { day: 'Min', date: 22 },
            ].map((item) => {
              const selected = selectedDay === item.date;
              return (
                <TouchableOpacity
                  key={item.date}
                  onPress={() => setSelectedDay(item.date)}
                  className={`items-center justify-center w-10 py-2 rounded-2xl ${
                    selected ? 'bg-primary' : 'bg-surface'
                  }`}
                >
                  <Text className={`text-[10px] ${selected ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                    {item.day}
                  </Text>
                  <Text className={`text-xs font-bold mt-0.5 ${selected ? 'text-on-primary' : 'text-on-surface'}`}>
                    {item.date}
                  </Text>
                  <View
                    className={`w-1.5 h-1.5 rounded-full mt-1 ${
                      selected ? 'bg-secondary-container' : item.dot ? 'bg-primary' : 'bg-transparent'
                    }`}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Card 1: Janji Temu Terdekat */}
        <View className="mx-4 mt-3">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-1.5">
              <View className="w-2.5 h-2.5 rounded-full bg-primary" />
              <Text className="text-xs font-semibold text-on-surface">Janji Temu Terdekat</Text>
            </View>
            <View className="bg-secondary-container/50 px-2 py-0.5 rounded-full">
              <Text className="text-[10px] font-medium text-primary">Hari Ini</Text>
            </View>
          </View>

          <View className="bg-surface-container-lowest rounded-2xl p-4 border border-surface-container-high space-y-3 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <Ionicons name="time-outline" size={18} color="#36671c" />
                <View>
                  <Text className="text-xs font-bold text-on-surface">{activeAppointment.timeRange}</Text>
                  <Text className="text-[11px] text-on-surface-variant">{activeAppointment.dateText}</Text>
                </View>
              </View>
              <View className="items-end">
                <View className="bg-secondary-container px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-semibold text-on-secondary-container">{activeAppointment.status}</Text>
                </View>
                <Text className="text-[11px] text-on-surface-variant mt-0.5">
                  Antrean: <Text className="font-bold text-on-surface">{activeAppointment.queueNo}</Text>
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3 bg-surface-container-low p-3 rounded-xl">
              <Image source={{ uri: activeAppointment.image }} className="w-12 h-12 rounded-xl" />
              <View className="flex-1">
                <Text className="text-xs font-semibold text-on-surface">{activeAppointment.name}</Text>
                <Text className="text-[11px] text-primary font-medium">{activeAppointment.specialty}</Text>
                <Text className="text-[10px] text-on-surface-variant mt-1">{activeAppointment.location}</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-2 bg-secondary-container/30 p-2.5 rounded-xl border border-secondary-container/50">
              <Ionicons name="qr-code-outline" size={16} color="#36671c" />
              <Text className="text-[11px] text-on-secondary-container flex-1 leading-4">
                Check-in mandiri dibuka <Text className="font-bold">15 menit</Text> sebelum jadwal via SatuSehat.
              </Text>
            </View>

            <View className="flex-row gap-2 pt-1">
              <TouchableOpacity className="flex-1 h-10 rounded-full bg-surface-container items-center justify-center">
                <Text className="text-xs text-on-surface">Ubah Jadwal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert('Tiket Antrean', `Nomor Antrean Anda: ${activeAppointment.queueNo}`)}
                className="flex-1 h-10 rounded-full bg-primary items-center justify-center shadow-sm"
              >
                <Text className="text-xs font-semibold text-on-primary">Tiket Antrean</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Card 2: Janji Temu Mendatang */}
        <View className="mx-4 mt-4">
          <Text className="text-xs font-semibold text-on-surface mb-2">
            Jadwal Janji Temu Mendatang Lainnya
          </Text>
          <View className="bg-surface-container-lowest rounded-2xl p-4 border border-surface-container-high space-y-2 shadow-sm">
            <View className="flex-row justify-between items-start">
              <View className="flex-row gap-3">
                <Image source={{ uri: upcomingAppointment.image }} className="w-10 h-10 rounded-xl" />
                <View>
                  <Text className="text-[11px] text-on-surface-variant">{upcomingAppointment.dateText}</Text>
                  <Text className="text-xs font-semibold text-on-surface">{upcomingAppointment.name}</Text>
                  <Text className="text-[11px] text-on-surface-variant">{upcomingAppointment.specialty}</Text>
                </View>
              </View>
              <View className="bg-surface-container px-2 py-0.5 rounded-full">
                <Text className="text-[10px] text-on-surface-variant">{upcomingAppointment.status}</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between pt-2 border-t border-surface-container-low">
              <Text className="text-[11px] text-on-surface-variant">{upcomingAppointment.location}</Text>
              <TouchableOpacity
                onPress={() => Alert.alert('Telekonsultasi', 'Sesi telekonsultasi akan dibuka sesuai jadwal.')}
                className="bg-secondary-container/50 px-3 py-1.5 rounded-full"
              >
                <Text className="text-[10px] text-on-secondary-container font-semibold">Telekonsultasi Siap</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 2. SearchBar */}
        <View className="mt-4">
          <Text className="mx-4 text-xs font-semibold text-on-surface mb-1">
            Cari Berdasarkan Poli & Spesialis
          </Text>
          <SearchBar
            text={searchQuery}
            onChange={setSearchQuery}
            selectedCategory={category}
            onSelectCategory={setCategory}
          />
        </View>

        {/* Dokter Praktik */}
        <View className="mx-4 mt-3">
          <Text className="text-xs font-semibold text-on-surface mb-2">
            Dokter Praktik Hari Ini (Rab, 18 Okt)
          </Text>
          {practiceDoctors.map((doc) => (
            <View key={doc.id} className="bg-surface-container-lowest rounded-2xl p-4 border border-surface-container-high mb-3 space-y-3 shadow-sm">
              <View className="flex-row items-center gap-3">
                <Image source={{ uri: doc.image }} className="w-12 h-12 rounded-xl" />
                <View className="flex-1">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xs font-semibold text-on-surface">{doc.name}</Text>
                    <View className="flex-row items-center gap-0.5">
                      <Ionicons name="star" size={12} color="#36671c" />
                      <Text className="text-[11px] font-bold text-primary">{doc.rating}</Text>
                    </View>
                  </View>
                  <Text className="text-[11px] text-on-surface-variant">{doc.specialty}</Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <View className="bg-secondary-container/40 px-2 py-0.5 rounded-full">
                      <Text className="text-[10px] text-on-secondary-container font-medium">{doc.slotInfo}</Text>
                    </View>
                    <Text className="text-[10px] text-on-surface-variant">{doc.timeRange}</Text>
                  </View>
                </View>
              </View>

              <View className="flex-row items-center gap-2 pt-1">
                {doc.availableSlots.map((slot, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => Alert.alert('Konfirmasi', `Memilih ${doc.name} jam ${slot}`)}
                    className="px-3 py-1.5 rounded-xl bg-surface-container"
                  >
                    <Text className="text-[11px] text-on-surface">{slot}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  onPress={() => Alert.alert('Informasi', `Janji temu dengan ${doc.name}`)}
                  className="ml-auto bg-primary px-3.5 py-1.5 rounded-xl shadow-sm"
                >
                  <Text className="text-[11px] font-semibold text-on-primary">Pilih Jam</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 3. Navbar */}
      <Navbar />
    </SafeAreaView>
  );
}