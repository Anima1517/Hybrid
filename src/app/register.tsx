import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function RegisterScreen() {
  const router = useRouter();

  // State Form
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'L' | 'P'>('L');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [syncSatuSehat, setSyncSatuSehat] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Helper Pop-up Cross-Platform (Mobile & Web Laptop)
  const showAlert = (title: string, message: string, onOk?: () => void) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}: ${message}`);
      if (onOk) onOk();
    } else {
      Alert.alert(title, message, onOk ? [{ text: 'OK', onPress: onOk }] : undefined);
    }
  };

  const handleRegister = () => {
    if (!fullName || !nik || !phone || !email || !password || !confirmPassword) {
      showAlert('Perhatian', 'Harap isi semua kolom wajib bertanda (*)');
      return;
    }
    if (password !== confirmPassword) {
      showAlert('Error', 'Konfirmasi kata sandi tidak cocok!');
      return;
    }
    if (!agreeTerms) {
      showAlert('Perhatian', 'Anda harus menyetujui Syarat & Ketentuan');
      return;
    }

    showAlert('Sukses', 'Pendaftaran akun pasien berhasil!', () => {
      router.replace('/home' as any);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Navigasi Atas */}
        <View className="flex-row items-center justify-between px-4 pt-3 pb-2">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-surface-container-low items-center justify-center"
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={20} color="#1a1c1c" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace('/')}
            className="flex-row items-center gap-1.5 py-1.5 px-3 rounded-full bg-secondary-container/40"
            activeOpacity={0.7}
          >
            <Text className="text-xs text-on-secondary-container">Sudah ada akun? </Text>
            <Text className="text-xs font-semibold text-primary underline">Masuk</Text>
          </TouchableOpacity>
        </View>

        {/* Intro */}
        <View className="items-center px-4 pt-2 pb-5">
          <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/60 mb-2.5">
            <View className="w-1.5 h-1.5 rounded-full bg-primary" />
            <Text className="text-xs font-semibold text-on-secondary-container">
              Langkah 1 dari 2 • Data Diri Pasien
            </Text>
          </View>

          <Text className="text-2xl font-bold text-on-surface tracking-tight text-center">
            Daftar Akun Pasien Baru
          </Text>
          <Text className="text-xs text-on-surface-variant text-center max-w-[300px] mt-1.5 leading-4">
            Lengkapi data untuk kemudahan reservasi antrean, tebus resep, dan akses rekam medis digital Anda.
          </Text>
        </View>

        {/* Form Card */}
        <View className="px-4">
          <View className="bg-surface-container-lowest rounded-3xl p-5 border border-surface-container-high space-y-4 shadow-sm">
            {/* Nama Lengkap */}
            <View className="space-y-1.5">
              <Text className="text-xs font-medium text-on-surface">
                Nama Lengkap <Text className="text-error">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#72796b"
                  style={{ position: 'absolute', left: 14, zIndex: 1 }}
                />
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Sesuai KTP / Paspor resmi"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                />
              </View>
            </View>

            {/* NIK */}
            <View className="space-y-1.5">
              <View className="flex-row items-center justify-between">
                <Text className="text-xs font-medium text-on-surface">
                  Nomor Induk Kependudukan (NIK) <Text className="text-error">*</Text>
                </Text>
                <Text className="text-[11px] text-outline">16 Digit</Text>
              </View>
              <View className="relative flex-row items-center">
                <MaterialIcons
                  name="badge"
                  size={18}
                  color="#72796b"
                  style={{ position: 'absolute', left: 14, zIndex: 1 }}
                />
                <TextInput
                  value={nik}
                  onChangeText={(val) => setNik(val.replace(/[^0-9]/g, ''))}
                  keyboardType="numeric"
                  maxLength={16}
                  placeholder="Contoh: 3171xxxxxxxxxxxx"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary tracking-wider"
                />
              </View>
              <View className="flex-row items-start gap-1 pt-0.5">
                <Ionicons name="information-circle-outline" size={15} color="#4c662e" />
                <Text className="text-[11px] text-on-surface-variant flex-1 leading-4">
                  Wajib untuk sinkronisasi SatuSehat Kemenkes dan rujukan BPJS.
                </Text>
              </View>
            </View>

            {/* WhatsApp */}
            <View className="space-y-1.5">
              <Text className="text-xs font-medium text-on-surface">
                Nomor WhatsApp Aktif <Text className="text-error">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <View className="absolute left-3.5 flex-row items-center gap-1 z-10 pr-1 bg-surface-container-lowest">
                  <Ionicons name="chatbox-outline" size={18} color="#72796b" />
                  <Text className="text-xs text-on-surface-variant font-medium">+62</Text>
                </View>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  placeholder="812-3456-7890"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-20 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                />
              </View>
              <Text className="text-[11px] text-outline">
                Notifikasi nomor antrean dan hasil lab dikirim ke nomor ini.
              </Text>
            </View>

            {/* Tanggal Lahir & Gender */}
            <View className="space-y-3 pt-1">
              <View className="space-y-1.5">
                <Text className="text-xs font-medium text-on-surface">
                  Tanggal Lahir <Text className="text-error">*</Text>
                </Text>
                <View className="relative flex-row items-center">
                  <Ionicons
                    name="calendar-outline"
                    size={18}
                    color="#72796b"
                    style={{ position: 'absolute', left: 14, zIndex: 1 }}
                  />
                  <TextInput
                    value={dob}
                    onChangeText={setDob}
                    placeholder="YYYY-MM-DD (Contoh: 1998-10-16)"
                    placeholderTextColor="#72796b"
                    className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                  />
                </View>
              </View>

              <View className="space-y-1.5">
                <Text className="text-xs font-medium text-on-surface">
                  Jenis Kelamin <Text className="text-error">*</Text>
                </Text>
                <View className="flex-row gap-2">
                  <TouchableOpacity
                    onPress={() => setGender('L')}
                    className={`flex-1 flex-row items-center justify-center gap-2 h-11 rounded-2xl border ${
                      gender === 'L'
                        ? 'bg-secondary-container/80 border-primary'
                        : 'bg-surface-container-low border-transparent'
                    }`}
                  >
                    <Ionicons
                      name="male"
                      size={16}
                      color={gender === 'L' ? '#506a32' : '#42493c'}
                    />
                    <Text
                      className={`text-xs ${
                        gender === 'L'
                          ? 'font-semibold text-on-secondary-container'
                          : 'text-on-surface-variant'
                      }`}
                    >
                      Laki-laki
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setGender('P')}
                    className={`flex-1 flex-row items-center justify-center gap-2 h-11 rounded-2xl border ${
                      gender === 'P'
                        ? 'bg-secondary-container/80 border-primary'
                        : 'bg-surface-container-low border-transparent'
                    }`}
                  >
                    <Ionicons
                      name="female"
                      size={16}
                      color={gender === 'P' ? '#506a32' : '#42493c'}
                    />
                    <Text
                      className={`text-xs ${
                        gender === 'P'
                          ? 'font-semibold text-on-secondary-container'
                          : 'text-on-surface-variant'
                      }`}
                    >
                      Perempuan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Email */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-on-surface">
                Alamat Email Aktif <Text className="text-error">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="#72796b"
                  style={{ position: 'absolute', left: 14, zIndex: 1 }}
                />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="nama@email.com"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                />
              </View>
            </View>

            {/* Password */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-on-surface">
                Kata Sandi <Text className="text-error">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#72796b"
                  style={{ position: 'absolute', left: 14, zIndex: 1 }}
                />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Buat sandi yang aman"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-11 pr-11 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: 14, zIndex: 1 }}
                >
                  <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color="#72796b" />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center gap-4 pt-1">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="checkmark-circle" size={14} color="#4c662e" />
                  <Text className="text-[11px] text-secondary">Min. 8 Karakter</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Ionicons name="checkmark-circle" size={14} color="#4c662e" />
                  <Text className="text-[11px] text-secondary">Huruf Kapital & Angka</Text>
                </View>
              </View>
            </View>

            {/* Konfirmasi Password */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-on-surface">
                Konfirmasi Kata Sandi <Text className="text-error">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#72796b"
                  style={{ position: 'absolute', left: 14, zIndex: 1 }}
                />
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Ketik ulang kata sandi Anda"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest rounded-2xl text-sm text-on-surface border border-outline-variant focus:border-primary"
                />
              </View>
            </View>

            {/* Checkbox SatuSehat */}
            <TouchableOpacity
              onPress={() => setSyncSatuSehat(!syncSatuSehat)}
              activeOpacity={0.8}
              className="mt-2 p-3.5 rounded-2xl bg-secondary-container/30 flex-row items-start gap-3 border border-secondary-container/50"
            >
              <Ionicons name={syncSatuSehat ? 'checkbox' : 'square-outline'} size={22} color="#36671c" />
              <View className="flex-1 space-y-1">
                <View className="flex-row items-center gap-1.5">
                  <Text className="text-xs font-semibold text-on-surface">Hubungkan SatuSehat & BPJS</Text>
                  <View className="bg-primary px-2 py-0.5 rounded-full">
                    <Text className="text-[10px] text-on-primary font-medium">Otomatis</Text>
                  </View>
                </View>
                <Text className="text-[11px] text-on-surface-variant leading-4">
                  Sinkronkan riwayat imunisasi, rujukan faskes, dan antrean poli nasional secara langsung.
                </Text>
              </View>
            </TouchableOpacity>

            {/* Checkbox Syarat & Ketentuan */}
            <TouchableOpacity
              onPress={() => setAgreeTerms(!agreeTerms)}
              activeOpacity={0.8}
              className="flex-row items-start gap-2.5 pt-1"
            >
              <Ionicons name={agreeTerms ? 'checkbox' : 'square-outline'} size={20} color="#36671c" />
              <Text className="text-[11px] text-on-surface-variant flex-1 leading-4">
                Saya menyetujui{' '}
                <Text className="text-primary font-semibold underline">Syarat & Ketentuan</Text>{' '}
                serta{' '}
                <Text className="text-primary font-semibold underline">Kebijakan Privasi</Text>{' '}
                KlinikSehat mengenai kerahasiaan data medis.
              </Text>
            </TouchableOpacity>

            {/* Tombol Utama */}
            <TouchableOpacity
              onPress={handleRegister}
              activeOpacity={0.85}
              className="w-full h-12 rounded-full bg-primary flex-row items-center justify-center gap-2 mt-2 shadow-sm"
            >
              <Text className="text-on-primary font-semibold text-sm">Daftar Sekarang</Text>
              <Ionicons name="arrow-forward" size={18} color="#ffffff" />
            </TouchableOpacity>

            {/* SSO */}
            <View className="relative py-2 items-center justify-center">
              <View className="w-full h-[1px] bg-surface-container-high" />
              <Text className="absolute bg-surface-container-lowest px-3 text-[11px] text-outline">
                atau daftar lebih cepat dengan
              </Text>
            </View>

            <View className="flex-row gap-2.5">
              <TouchableOpacity
                activeOpacity={0.7}
                className="flex-1 h-12 px-3 rounded-2xl bg-surface-container-low flex-row items-center justify-center gap-2"
              >
                <MaterialIcons name="health-and-safety" size={20} color="#36671c" />
                <Text className="text-xs font-semibold text-on-surface">SatuSehat ID</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                className="flex-1 h-12 px-3 rounded-2xl bg-surface-container-low flex-row items-center justify-center gap-2"
              >
                <FontAwesome5 name="google" size={16} color="#EA4335" />
                <Text className="text-xs font-semibold text-on-surface">Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="px-4 mt-5 items-center space-y-2">
          <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low">
            <Ionicons name="lock-closed" size={14} color="#36671c" />
            <Text className="text-[11px] text-on-surface-variant">Enkripsi Medis 256-bit • Kemenkes RI</Text>
          </View>

          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text className="text-[11px] text-outline text-center mt-1">
              Sudah punya akun pasien sebelumnya?{' '}
              <Text className="font-semibold text-primary underline">Masuk di sini</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}