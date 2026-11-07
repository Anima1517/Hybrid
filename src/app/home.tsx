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
import { useRouter } from 'expo-router';
import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';
import { Navbar } from './component/Navbar';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      <StatusBar style="dark" />
      <Header title="KlinikSehat" subtitle="Beranda" />

      {/* Main Content Scrollable */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Sapaan & Kartu Antrean */}
        <View className="px-4 pt-4 space-y-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-bold text-on-surface">
                Halo, Budi Santoso 👋
              </Text>
              <Text className="text-xs text-on-surface-variant">
                ID Pasien: #KS-89201
              </Text>
            </View>
            <View className="flex-row items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/60">
              <MaterialCommunityIcons name="check-decagram" size={14} color="#36671c" />
              <Text className="text-xs font-semibold text-primary">BPJS Aktif</Text>
            </View>
          </View>

          {/* Upcoming Appointment Card */}
          <View className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-surface-container-high space-y-3">
            <View className="flex-row items-center justify-between pb-1">
              <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed">
                <View className="w-2 h-2 rounded-full bg-tertiary" />
                <Text className="text-xs font-semibold text-on-tertiary-fixed">
                  Janji Temu Hari Ini
                </Text>
              </View>
              <View className="px-3 py-1 rounded-full bg-secondary-fixed/50">
                <Text className="text-xs font-bold tracking-wider text-on-secondary-fixed">
                  NO. A-14
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3.5 my-1">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60',
                }}
                className="w-14 h-14 rounded-2xl bg-surface-container"
              />
              <View className="flex-1">
                <Text className="text-base font-bold text-on-surface">
                  Dr. Sarah Wijaya, Sp.A
                </Text>
                <Text className="text-xs text-on-surface-variant">
                  Spesialis Anak • Poliklinik Rawat Jalan
                </Text>
                <View className="flex-row items-center gap-1 mt-1">
                  <Ionicons name="time-outline" size={14} color="#36671c" />
                  <Text className="text-xs font-semibold text-primary">
                    16:30 WIB
                  </Text>
                </View>
              </View>
            </View>

            <View className="pt-3 mt-1 border-t border-surface-container-low flex-row items-center justify-between">
              <View className="flex-row items-center gap-1">
                <Ionicons name="location-outline" size={16} color="#4c662e" />
                <Text className="text-xs text-on-surface-variant">
                  Lantai 2, Ruang Konsultasi 04
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/jadwal' as any)}
                className="h-9 px-4 rounded-full bg-primary flex-row items-center gap-1.5 shadow-sm active:opacity-90"
              >
                <Text className="text-xs font-semibold text-on-primary">
                  Tiket Antrean
                </Text>
                <Ionicons name="arrow-forward" size={14} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Layanan Klinik */}
        <View className="px-4 pt-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-base font-bold text-on-surface">
              Layanan Klinik
            </Text>
            <TouchableOpacity onPress={() => router.push('/jadwal' as any)}>
              <Text className="text-xs font-semibold text-primary">
                Semua Layanan
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {[
              { title: 'Buat Janji Dokter', icon: 'calendar-plus', bg: 'bg-tertiary-container/20', iconColor: '#9d3b3d', route: '/jadwal' },
              { title: 'Telemedisin', icon: 'video-outline', bg: 'bg-primary-container/20', iconColor: '#36671c', library: 'Ionicons' },
              { title: 'Tebus Obat', icon: 'file-document-edit-outline', bg: 'bg-secondary-container/80', iconColor: '#506a32' },
              { title: 'Hasil Lab', icon: 'file-certificate-outline', bg: 'bg-surface-container-high', iconColor: '#1a1c1c' },
              { title: 'Vaksinasi', icon: 'needle', bg: 'bg-secondary-fixed/50', iconColor: '#4c662e' },
              { title: 'Ambulans SOS', icon: 'ambulance', bg: 'bg-tertiary-fixed/40', iconColor: '#9d3b3d', isAlert: true },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => item.route ? router.push(item.route as any) : Alert.alert(item.title, `Layanan ${item.title} dipilih.`)}
                style={{ width: '31%' }}
                className={`p-3 rounded-2xl items-center text-center shadow-sm active:scale-95 border border-surface-container-high ${
                  item.isAlert ? 'bg-tertiary-fixed/30' : 'bg-surface-container-lowest'
                }`}
              >
                <View className={`w-12 h-12 rounded-2xl items-center justify-center mb-2 ${item.bg}`}>
                  {item.library === 'Ionicons' ? (
                    <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
                  ) : (
                    <MaterialCommunityIcons name={item.icon as any} size={24} color={item.iconColor} />
                  )}
                </View>
                <Text
                  className={`text-xs text-center ${
                    item.isAlert ? 'font-bold text-tertiary' : 'font-medium text-on-surface'
                  }`}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="mt-4">
          <SearchBar
            text={searchQuery}
            onChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </View>

        {/* Dokter Praktik Hari Ini */}
        <View className="pt-4">
          <View className="px-4 flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-base font-bold text-on-surface">
                Dokter Praktik Hari Ini
              </Text>
              <Text className="text-xs text-on-surface-variant">
                Konsultasi langsung di klinik
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/jadwal' as any)} className="flex-row items-center">
              <Text className="text-xs font-semibold text-primary">Lihat Semua</Text>
              <Ionicons name="chevron-forward" size={14} color="#36671c" />
            </TouchableOpacity>
          </View>

          <View className="px-4 space-y-3">
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm flex-row items-center justify-between border border-surface-container-high">
              <View className="flex-row items-center gap-3 flex-1">
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60',
                  }}
                  className="w-14 h-14 rounded-2xl bg-surface-container"
                />
                <View className="flex-1">
                  <Text className="text-sm font-bold text-on-surface" numberOfLines={1}>
                    Dr. Budi Prasetyo, Sp.PD
                  </Text>
                  <Text className="text-xs text-on-surface-variant">
                    Spesialis Penyakit Dalam
                  </Text>
                  <View className="flex-row items-center gap-3 mt-1">
                    <View className="flex-row items-center gap-0.5">
                      <Ionicons name="star" size={12} color="#36671c" />
                      <Text className="text-xs font-bold text-on-surface">4.9</Text>
                    </View>
                    <Text className="text-xs text-secondary font-medium">18:00 - 21:00</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/jadwal' as any)}
                className="h-9 px-3.5 rounded-full bg-primary justify-center ml-2 shadow-sm"
              >
                <Text className="text-xs font-semibold text-on-primary">Buat Janji</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Artikel Kesehatan */}
        <View className="px-4 pt-6 space-y-3">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-base font-bold text-on-surface">
                Tips & Artikel Sehat
              </Text>
              <Text className="text-xs text-on-surface-variant">
                Edukasi medis terverifikasi
              </Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Artikel', 'Menampilkan semua artikel')}>
              <Text className="text-xs font-semibold text-primary">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3">
            <TouchableOpacity className="bg-surface-container-lowest rounded-3xl p-3 shadow-sm flex-row gap-3 items-center border border-surface-container-high">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60',
                }}
                className="w-20 h-20 rounded-2xl bg-surface-container"
              />
              <View className="flex-1 justify-between py-0.5">
                <Text className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                  Imunitas
                </Text>
                <Text className="text-xs font-bold text-on-surface leading-snug my-0.5" numberOfLines={2}>
                  5 Tips Menjaga Imunitas Tubuh di Musim Hujan
                </Text>
                <Text className="text-[10px] text-on-surface-variant">
                  🕒 3 menit baca • Ditinjau Dokter
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}