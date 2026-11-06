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

  // Fungsi Helper Pop-up Cross-Platform (Web & Mobile)
  const showAlert = (title: string, message: string, onOk?: () => void) => {
    if (Platform.OS === 'web') {
      // Tampilan Pop-up di Browser Laptop
      window.alert(`${title}: ${message}`);
      if (onOk) onOk();
    } else {
      // Tampilan Pop-up di HP (Android / iOS)
      Alert.alert(title, message, onOk ? [{ text: 'OK', onPress: onOk }] : undefined);
    }
  };

  // Fungsi Logika Registrasi
  const handleRegister = () => {
    // 1. Validasi Kolom Kosong
    if (!fullName || !nik || !phone || !email || !password || !confirmPassword) {
      showAlert('Perhatian', 'Harap isi semua kolom wajib bertanda (*)');
      return;
    }

    // 2. Validasi Kata Sandi Tidak Cocok
    if (password !== confirmPassword) {
      showAlert('Error', 'Konfirmasi kata sandi tidak cocok!');
      return;
    }

    // 3. Validasi Checkbox Syarat & Ketentuan
    if (!agreeTerms) {
      showAlert('Perhatian', 'Anda harus menyetujui Syarat & Ketentuan');
      return;
    }

    // 4. Sukses -> Pindah ke Home
    showAlert('Sukses', 'Pendaftaran akun pasien berhasil!', () => {
      router.replace('/home' as any);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f9f9f9]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Top Navigation Row */}
        <View className="flex-row items-center justify-between px-4 pt-3 pb-2">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-[#f3f3f3] items-center justify-center"
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={20} color="#1a1c1c" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace('/')}
            className="flex-row items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#cbeaa4]/40"
            activeOpacity={0.7}
          >
            <Text className="text-xs text-[#506a32]">Sudah ada akun? </Text>
            <Text className="text-xs font-semibold text-[#36671c] underline">
              Masuk
            </Text>
          </TouchableOpacity>
        </View>

        {/* Brand Intro & Identity Section */}
        <View className="items-center text-center px-4 pt-2 pb-5">
          {/* Step Badge */}
          <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-[#cbeaa4]/60 mb-2.5">
            <View className="w-1.5 h-1.5 rounded-full bg-[#36671c]" />
            <Text className="text-xs font-semibold text-[#506a32]">
              Langkah 1 dari 2 • Data Diri Pasien
            </Text>
          </View>

          <Text className="text-2xl font-bold text-[#1a1c1c] tracking-tight text-center">
            Daftar Akun Pasien Baru
          </Text>
          <Text className="text-xs text-[#42493c] text-center max-w-[300px] mt-1.5 leading-4">
            Lengkapi data untuk kemudahan reservasi antrean, tebus resep, dan
            akses rekam medis digital Anda.
          </Text>
        </View>

        {/* Main Form Card */}
        <View className="px-4">
          <View className="bg-white rounded-3xl p-5 shadow-sm space-y-4">
            {/* Field: Nama Lengkap */}
            <View className="space-y-1.5">
              <Text className="text-xs font-medium text-[#1a1c1c]">
                Nama Lengkap <Text className="text-[#ba1a1a]">*</Text>
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
                  className="w-full h-12 pl-11 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                />
              </View>
            </View>

            {/* Field: NIK */}
            <View className="space-y-1.5">
              <View className="flex-row items-center justify-between">
                <Text className="text-xs font-medium text-[#1a1c1c]">
                  Nomor Induk Kependudukan (NIK){' '}
                  <Text className="text-[#ba1a1a]">*</Text>
                </Text>
                <Text className="text-[11px] text-[#72796b]">16 Digit</Text>
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
                  className="w-full h-12 pl-11 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c] tracking-wider"
                />
              </View>
              <View className="flex-row items-start gap-1 pt-0.5">
                <Ionicons
                  name="information-circle-outline"
                  size={15}
                  color="#4c662e"
                />
                <Text className="text-[11px] text-[#42493c] flex-1 leading-4">
                  Wajib untuk sinkronisasi SatuSehat Kemenkes dan rujukan BPJS.
                </Text>
              </View>
            </View>

            {/* Field: Nomor WhatsApp */}
            <View className="space-y-1.5">
              <Text className="text-xs font-medium text-[#1a1c1c]">
                Nomor WhatsApp Aktif <Text className="text-[#ba1a1a]">*</Text>
              </Text>
              <View className="relative flex-row items-center">
                <View className="absolute left-3.5 flex-row items-center gap-1 z-10 pr-1 bg-white">
                  <Ionicons name="chatbox-outline" size={18} color="#72796b" />
                  <Text className="text-xs text-[#42493c] font-medium">+62</Text>
                </View>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  placeholder="812-3456-7890"
                  placeholderTextColor="#72796b"
                  className="w-full h-12 pl-20 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                />
              </View>
              <Text className="text-[11px] text-[#72796b]">
                Notifikasi nomor antrean dan hasil lab dikirim ke nomor ini.
              </Text>
            </View>

            {/* Field: Tanggal Lahir & Jenis Kelamin */}
            <View className="space-y-3 pt-1">
              <View className="space-y-1.5">
                <Text className="text-xs font-medium text-[#1a1c1c]">
                  Tanggal Lahir <Text className="text-[#ba1a1a]">*</Text>
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
                    className="w-full h-12 pl-11 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                  />
                </View>
              </View>

              <View className="space-y-1.5">
                <Text className="text-xs font-medium text-[#1a1c1c]">
                  Jenis Kelamin <Text className="text-[#ba1a1a]">*</Text>
                </Text>
                <View className="flex-row gap-2">
                  <TouchableOpacity
                    onPress={() => setGender('L')}
                    className={`flex-1 flex-row items-center justify-center gap-2 h-11 rounded-2xl border ${
                      gender === 'L'
                        ? 'bg-[#cbeaa4]/80 border-[#36671c]'
                        : 'bg-[#f3f3f3] border-transparent'
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
                          ? 'font-semibold text-[#506a32]'
                          : 'text-[#42493c]'
                      }`}
                    >
                      Laki-laki
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setGender('P')}
                    className={`flex-1 flex-row items-center justify-center gap-2 h-11 rounded-2xl border ${
                      gender === 'P'
                        ? 'bg-[#cbeaa4]/80 border-[#36671c]'
                        : 'bg-[#f3f3f3] border-transparent'
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
                          ? 'font-semibold text-[#506a32]'
                          : 'text-[#42493c]'
                      }`}
                    >
                      Perempuan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Field: Alamat Email */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-[#1a1c1c]">
                Alamat Email Aktif <Text className="text-[#ba1a1a]">*</Text>
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
                  className="w-full h-12 pl-11 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                />
              </View>
            </View>

            {/* Field: Kata Sandi */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-[#1a1c1c]">
                Kata Sandi <Text className="text-[#ba1a1a]">*</Text>
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
                  className="w-full h-12 pl-11 pr-11 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: 14, zIndex: 1 }}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={18}
                    color="#72796b"
                  />
                </TouchableOpacity>
              </View>

              {/* Password Checklist */}
              <View className="flex-row items-center gap-4 pt-1">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="checkmark-circle" size={14} color="#4c662e" />
                  <Text className="text-[11px] text-[#4c662e]">Min. 8 Karakter</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Ionicons name="checkmark-circle" size={14} color="#4c662e" />
                  <Text className="text-[11px] text-[#4c662e]">
                    Huruf Kapital & Angka
                  </Text>
                </View>
              </View>
            </View>

            {/* Field: Konfirmasi Kata Sandi */}
            <View className="space-y-1.5 pt-1">
              <Text className="text-xs font-medium text-[#1a1c1c]">
                Konfirmasi Kata Sandi <Text className="text-[#ba1a1a]">*</Text>
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
                  className="w-full h-12 pl-11 pr-4 bg-white rounded-2xl text-sm text-[#1a1c1c] border border-[#c2c9b8] focus:border-[#36671c]"
                />
              </View>
            </View>

            {/* Integration Card: SatuSehat & BPJS */}
            <TouchableOpacity
              onPress={() => setSyncSatuSehat(!syncSatuSehat)}
              activeOpacity={0.8}
              className="mt-2 p-3.5 rounded-2xl bg-[#cbeaa4]/30 flex-row items-start gap-3 border border-[#cbeaa4]/50"
            >
              <Ionicons
                name={syncSatuSehat ? 'checkbox' : 'square-outline'}
                size={22}
                color="#36671c"
              />
              <View className="flex-1 space-y-1">
                <View className="flex-row items-center gap-1.5 flex-wrap">
                  <Text className="text-xs font-semibold text-[#1a1c1c]">
                    Hubungkan SatuSehat & BPJS
                  </Text>
                  <View className="bg-[#36671c] px-2 py-0.5 rounded-full">
                    <Text className="text-[10px] text-white font-medium">
                      Otomatis
                    </Text>
                  </View>
                </View>
                <Text className="text-[11px] text-[#42493c] leading-4">
                  Sinkronkan riwayat imunisasi, rujukan faskes, dan antrean poli
                  nasional secara langsung.
                </Text>
              </View>
            </TouchableOpacity>

            {/* Terms and Consent Checkbox */}
            <TouchableOpacity
              onPress={() => setAgreeTerms(!agreeTerms)}
              activeOpacity={0.8}
              className="flex-row items-start gap-2.5 pt-1"
            >
              <Ionicons
                name={agreeTerms ? 'checkbox' : 'square-outline'}
                size={20}
                color="#36671c"
              />
              <Text className="text-[11px] text-[#42493c] flex-1 leading-4">
                Saya menyetujui{' '}
                <Text className="text-[#36671c] font-semibold underline">
                  Syarat & Ketentuan
                </Text>{' '}
                serta{' '}
                <Text className="text-[#36671c] font-semibold underline">
                  Kebijakan Privasi
                </Text>{' '}
                KlinikSehat mengenai kerahasiaan data medis.
              </Text>
            </TouchableOpacity>

            {/* Primary Action CTA */}
            <TouchableOpacity
              onPress={handleRegister}
              activeOpacity={0.85}
              className="w-full h-[52px] rounded-full bg-[#36671c] flex-row items-center justify-center gap-2 shadow-md mt-2"
            >
              <Text className="text-white font-semibold text-sm">
                Daftar Sekarang
              </Text>
              <Ionicons name="arrow-forward" size={18} color="#ffffff" />
            </TouchableOpacity>

            {/* SSO Divider */}
            <View className="relative py-2 items-center justify-center">
              <View className="w-full h-[1px] bg-[#e8e8e8]" />
              <Text className="absolute bg-white px-3 text-[11px] text-[#72796b]">
                atau daftar lebih cepat dengan
              </Text>
            </View>

            {/* Quick SSO Buttons */}
            <View className="flex-row gap-2.5">
              <TouchableOpacity
                activeOpacity={0.7}
                className="flex-1 h-12 px-3 rounded-2xl bg-[#f3f3f3] flex-row items-center justify-center gap-2"
              >
                <MaterialIcons name="health-and-safety" size={20} color="#36671c" />
                <Text className="text-xs font-semibold text-[#1a1c1c]">
                  SatuSehat ID
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                className="flex-1 h-12 px-3 rounded-2xl bg-[#f3f3f3] flex-row items-center justify-center gap-2"
              >
                <FontAwesome5 name="google" size={16} color="#EA4335" />
                <Text className="text-xs font-semibold text-[#1a1c1c]">
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Security & Compliance Trust Badge */}
        <View className="px-4 mt-5 items-center text-center space-y-2">
          <View className="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f3]">
            <Ionicons name="lock-closed" size={14} color="#36671c" />
            <Text className="text-[11px] text-[#42493c]">
              Enkripsi Medis 256-bit • Kemenkes RI
            </Text>
          </View>

          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text className="text-[11px] text-[#72796b] text-center mt-1">
              Sudah punya akun pasien sebelumnya?{' '}
              <Text className="font-semibold text-[#36671c] underline">
                Masuk di sini
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}