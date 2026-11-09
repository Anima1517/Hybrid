import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from './component/Header';
import { Navbar } from './component/Navbar';

export default function ProfileScreen() {
  const router = useRouter();

  // State untuk Toggle Biometrik
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(true);

  // Fungsi Telepon Darurat
  const handleCallEmergency = () => {
    Linking.openURL('tel:081234567890');
  };

  // Fungsi Keluar Akun
  const handleLogout = () => {
    Alert.alert('Konfirmasi Keluar', 'Apakah Anda yakin ingin keluar dari akun KlinikSehat?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Keluar',
        style: 'destructive',
        onPress: () => router.replace('/'),
      },
    ]);
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      {/* 1. Header Reusable */}
      <Header title="KlinikSehat" subtitle="Profil Saya" />

      {/* Main Scroll Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="px-4 pt-4 space-y-4">
          
          {/* HEADER PROFIL PASIEN */}
          <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high space-y-3">
            <View className="flex-row items-center gap-3">
              <View className="relative">
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60',
                  }}
                  className="w-16 h-16 rounded-full bg-surface-container"
                />
                <View className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary items-center justify-center shadow-sm">
                  <Ionicons name="checkmark-circle" size={16} color="#ffffff" />
                </View>
              </View>

              <View className="flex-1">
                <Text className="text-lg font-bold text-on-surface">Budi Santoso</Text>
                <View className="flex-row items-center gap-1 mt-0.5">
                  <Ionicons name="checkmark-done-circle" size={14} color="#36671c" />
                  <Text className="text-xs font-semibold text-primary">
                    Pasien Terverifikasi
                  </Text>
                </View>
                <Text className="text-xs text-on-surface-variant mt-1">
                  ID: <Text className="font-semibold text-on-surface">#KS-89201</Text> • Gol. Darah:{' '}
                  <Text className="font-semibold text-on-surface">O+</Text>
                </Text>
              </View>
            </View>

            {/* NIK & Quick Edit Button */}
            <View className="flex-row items-center justify-between bg-surface-container-low p-3 rounded-2xl">
              <View className="flex-row items-center gap-2 flex-1">
                <MaterialIcons name="badge" size={18} color="#72796b" />
                <Text className="text-xs text-on-surface-variant font-medium">
                  NIK: 3171************
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => Alert.alert('Edit Profil', 'Fitur ubah profil pasien dibuka.')}
                className="px-3 py-1.5 rounded-full bg-secondary-container/60 flex-row items-center gap-1"
              >
                <MaterialIcons name="edit" size={14} color="#506a32" />
                <Text className="text-xs font-semibold text-on-secondary-container">
                  Edit Profil
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* INTEGRASI KESEHATAN NASIONAL */}
          <View className="space-y-2">
            <View className="flex-row items-center justify-between px-1">
              <View className="flex-row items-center gap-1.5">
                {/* Perbaikan 1: shield-checkmark (Ionicons) */}
                <Ionicons name="shield-checkmark" size={18} color="#36671c" />
                <Text className="text-xs font-bold text-on-surface">Layanan Terintegrasi</Text>
              </View>
              <Text className="text-xs font-semibold text-secondary">2 Layanan Aktif</Text>
            </View>

            {/* BPJS Kesehatan */}
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high space-y-3">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <View className="w-8 h-8 rounded-full bg-primary-container/20 items-center justify-center">
                    <MaterialIcons name="health-and-safety" size={18} color="#36671c" />
                  </View>
                  <View>
                    <Text className="text-xs font-bold text-on-surface">BPJS Kesehatan</Text>
                    <Text className="text-[11px] text-on-surface-variant">Kepesertaan Mandiri</Text>
                  </View>
                </View>
                <View className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 flex-row items-center gap-1">
                  <View className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <Text className="text-[11px] font-semibold text-on-secondary-container">Aktif</Text>
                </View>
              </View>

              <View className="bg-surface-container-low rounded-2xl p-3 space-y-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-[11px] text-on-surface-variant">No. Kartu</Text>
                  <Text className="text-xs font-bold text-on-surface tracking-wider">
                    0001 8923 8472 1
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text className="text-[11px] text-on-surface-variant">Faskes Tk. 1</Text>
                  <Text className="text-xs font-medium text-on-surface">
                    KlinikSehat Jakarta Selatan
                  </Text>
                </View>
              </View>
            </View>

            {/* SatuSehat Kemenkes */}
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 flex-1">
                <View className="w-10 h-10 rounded-2xl bg-secondary-fixed/50 items-center justify-center">
                  <Ionicons name="git-network-outline" size={20} color="#4c662e" />
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-1.5">
                    <Text className="text-xs font-bold text-on-surface">SatuSehat Kemenkes</Text>
                    <View className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </View>
                  <Text className="text-[11px] font-medium text-primary">
                    Terhubung & Terverifikasi
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => Alert.alert('SatuSehat', 'Pengaturan perizinan data SatuSehat.')}
                className="px-3 py-1.5 rounded-full bg-surface-container-high"
              >
                <Text className="text-xs font-semibold text-on-surface-variant">Kelola Izin</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* VITAL SIGNS & INFO DARURAT */}
          <View className="space-y-2 pt-2">
            <View className="flex-row items-center justify-between px-1">
              <View className="flex-row items-center gap-1.5">
                <MaterialCommunityIcons name="heart-pulse" size={18} color="#36671c" />
                <Text className="text-xs font-bold text-on-surface">Vital Signs & Info Darurat</Text>
              </View>
              <Text className="text-[11px] text-on-surface-variant">Cek Terakhir: 12 Feb 2025</Text>
            </View>

            {/* Grid 3 Metrik Vital */}
            <View className="flex-row justify-between gap-2">
              <View className="flex-1 bg-surface-container-lowest rounded-2xl p-3 items-center border border-surface-container-high shadow-sm">
                <MaterialCommunityIcons name="scale-bathroom" size={20} color="#72796b" />
                <Text className="text-base font-bold text-on-surface mt-1">
                  68<Text className="text-xs font-normal text-on-surface-variant">kg</Text>
                </Text>
                <Text className="text-[10px] text-on-surface-variant mt-0.5">Berat Badan</Text>
              </View>

              <View className="flex-1 bg-surface-container-lowest rounded-2xl p-3 items-center border border-surface-container-high shadow-sm">
                {/* Perbaikan 2: straighten (MaterialIcons) */}
                <MaterialIcons name="straighten" size={20} color="#72796b" />
                <Text className="text-base font-bold text-on-surface mt-1">
                  172<Text className="text-xs font-normal text-on-surface-variant">cm</Text>
                </Text>
                <Text className="text-[10px] text-on-surface-variant mt-0.5">Tinggi Badan</Text>
              </View>

              <View className="flex-1 bg-surface-container-lowest rounded-2xl p-3 items-center border border-surface-container-high shadow-sm">
                <Ionicons name="heart" size={20} color="#36671c" />
                <Text className="text-base font-bold text-on-surface mt-1">
                  118<Text className="text-xs font-normal text-on-surface-variant">/78</Text>
                </Text>
                <Text className="text-[10px] text-on-surface-variant mt-0.5">Tekanan Darah</Text>
              </View>
            </View>

            {/* Alergi & Kontak Darurat Card */}
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high space-y-3">
              <View className="flex-row items-center justify-between bg-tertiary-fixed/40 p-2.5 rounded-2xl border border-tertiary-fixed-dim/50">
                <View className="flex-row items-center gap-1.5">
                  <Ionicons name="warning" size={16} color="#9d3b3d" />
                  <Text className="text-xs font-medium text-on-surface">Alergi Obat:</Text>
                </View>
                <View className="bg-tertiary-container/30 px-2.5 py-0.5 rounded-full">
                  <Text className="text-xs font-semibold text-tertiary">Alergi Penisilin</Text>
                </View>
              </View>

              <View className="flex-row items-center justify-between pt-1">
                <View className="flex-row items-center gap-2.5 flex-1">
                  <View className="w-8 h-8 rounded-full bg-secondary-container/50 items-center justify-center">
                    <Ionicons name="call" size={16} color="#4c662e" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-[11px] text-on-surface-variant">Kontak Darurat Utama</Text>
                    <Text className="text-xs font-semibold text-on-surface" numberOfLines={1}>
                      Siti Rahma (Istri) • 0812-3456-7890
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleCallEmergency}
                  className="w-8 h-8 rounded-full bg-secondary-fixed/60 items-center justify-center ml-2"
                >
                  <Ionicons name="call" size={16} color="#0f2000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* MENU PENGATURAN AKUN & KESEHATAN */}
          
          {/* Kelompok 1: Kesehatan Saya */}
          <View className="space-y-1.5 pt-2">
            <Text className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Kesehatan Saya
            </Text>
            <View className="bg-surface-container-lowest rounded-3xl border border-surface-container-high shadow-sm overflow-hidden">
              <MenuItem
                icon="description"
                title="Rekam Medis & Riwayat Diagnosa"
                subtitle="Catatan kunjungan, keluhan, dan tindakan"
                onPress={() => router.push('/home' as any)}
              />
              {/* Perbaikan 3: local-pharmacy (MaterialIcons) */}
              <MenuItem
                icon="local-pharmacy"
                title="Resep & Pengingat Minum Obat"
                subtitle="Jadwal konsumsi aktif: 1 resep berjalan"
                onPress={() => Alert.alert('Resep Obat', 'Daftar resep obat berjalan.')}
              />
              <MenuItem
                icon="science"
                title="Hasil Tes Laboratorium & Radiologi"
                subtitle="Unduh PDF hasil darah & scan rontgen"
                onPress={() => Alert.alert('Hasil Lab', 'Hasil laboratorium digital.')}
              />
              <MenuItem
                icon="vaccines"
                title="Sertifikat Vaksinasi & Imunisasi"
                subtitle="COVID-19, Influenza, Hepatitis B"
                onPress={() => Alert.alert('Vaksinasi', 'Daftar riwayat vaksinasi.')}
                isLast
              />
            </View>
          </View>

          {/* Kelompok 2: Pengaturan Akun */}
          <View className="space-y-1.5 pt-2">
            <Text className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Pengaturan Akun & Keamanan
            </Text>
            <View className="bg-surface-container-lowest rounded-3xl border border-surface-container-high shadow-sm overflow-hidden">
              <MenuItem
                icon="family-restroom"
                title="Data Anggota Keluarga"
                subtitle="Kelola profil anak, pasangan, atau lansia"
                onPress={() => Alert.alert('Keluarga', 'Kelola anggota keluarga.')}
              />
              <MenuItem
                icon="credit-card"
                title="Metode Pembayaran & Asuransi"
                subtitle="Asuransi swasta tambahan & kartu debit"
                onPress={() => Alert.alert('Pembayaran', 'Kelola kartu & asuransi.')}
              />
              
              {/* Toggle Biometrik */}
              <View className="flex-row items-center justify-between p-3.5 border-b border-surface-container-low">
                <View className="flex-row items-center gap-3 flex-1 pr-2">
                  <View className="w-9 h-9 rounded-2xl bg-surface-container-high items-center justify-center">
                    <Ionicons name="finger-print" size={20} color="#42493c" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xs font-bold text-on-surface">Keamanan Biometrik (Face ID)</Text>
                    <Text className="text-[11px] text-on-surface-variant">Masuk cepat tanpa password</Text>
                  </View>
                </View>
                <Switch
                  value={isBiometricEnabled}
                  onValueChange={setIsBiometricEnabled}
                  trackColor={{ false: '#dadada', true: '#36671c' }}
                  thumbColor="#ffffff"
                />
              </View>

              <MenuItem
                icon="notifications-active"
                title="Notifikasi WhatsApp & Jadwal"
                subtitle="Pengingat janji temu dokter otomatis"
                onPress={() => Alert.alert('Notifikasi', 'Pengaturan notifikasi.')}
                isLast
              />
            </View>
          </View>

          {/* Kelompok 3: Bantuan & Logout */}
          <View className="space-y-1.5 pt-2">
            <Text className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Bantuan & Dukungan
            </Text>
            <View className="bg-surface-container-lowest rounded-3xl border border-surface-container-high shadow-sm overflow-hidden">
              <MenuItem
                icon="support-agent"
                title="Pusat Bantuan & Petugas 24 Jam"
                subtitle="Layanan pelanggan & konsultasi kendala"
                onPress={() => Alert.alert('Bantuan', 'Menghubungi CS KlinikSehat...')}
              />
              <MenuItem
                icon="policy"
                title="Syarat & Kebijakan Privasi Medis"
                subtitle="Standar perlindungan data pasien & rekam medis"
                onPress={() => Alert.alert('Privasi', 'Kebijakan privasi medis.')}
              />
              
              {/* Tombol Keluar Akun */}
              <TouchableOpacity
                onPress={handleLogout}
                activeOpacity={0.7}
                className="flex-row items-center justify-between p-3.5 bg-tertiary-fixed/20"
              >
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-9 h-9 rounded-2xl bg-tertiary-fixed/60 items-center justify-center">
                    <Ionicons name="log-out" size={20} color="#9d3b3d" />
                  </View>
                  <Text className="text-xs font-bold text-tertiary">Keluar Akun</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#9d3b3d" />
              </TouchableOpacity>
            </View>
          </View>

          {/* FOOTER */}
          <View className="items-center justify-center pt-4 pb-2 space-y-1">
            <View className="flex-row items-center gap-1.5">
              <Ionicons name="shield-checkmark" size={14} color="#36671c" />
              <Text className="text-[11px] font-semibold text-on-surface-variant">
                Terdaftar & Diawasi Kemenkes RI
              </Text>
            </View>
            <Text className="text-[11px] text-outline">KlinikSehat Mobile v2.4.0</Text>
          </View>

        </View>
      </ScrollView>

      {/* 2. Navbar Reusable */}
      <Navbar />
    </SafeAreaView>
  );
}

// Helper Sub-Komponent Item Menu
function MenuItem({
  icon,
  title,
  subtitle,
  onPress,
  isLast = false,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
  isLast?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`flex-row items-center justify-between p-3.5 ${
        !isLast ? 'border-b border-surface-container-low' : ''
      }`}
    >
      <View className="flex-row items-center gap-3 flex-1 pr-2">
        <View className="w-9 h-9 rounded-2xl bg-secondary-container/40 items-center justify-center">
          <MaterialIcons name={icon} size={20} color="#36671c" />
        </View>
        <View className="flex-1">
          <Text className="text-xs font-bold text-on-surface" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-[11px] text-on-surface-variant" numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#72796b" />
    </TouchableOpacity>
  );
}