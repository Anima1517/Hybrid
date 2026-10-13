import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; isError: boolean } | null>(null);

  const showBanner = (text: string, isError = false) => {
    setFeedback({ text, isError });
    setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  const handleLogin = () => {
    if (!identifier || !password) {
      showBanner('Silakan lengkapi Email/ID Pasien dan Kata Sandi.', true);
      return;
    }
    
    // Berpindah langsung ke halaman home/beranda
    router.replace('/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, padding: 16, paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full max-w-sm mx-auto pt-4">
            
            {/* Bagian Logo & Header */}
            <View className="items-center mb-6">
              <View className="w-20 h-20 bg-rose-100 rounded-full items-center justify-center mb-3 shadow-sm">
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0JyVoO6IhVGhZ2C5yg0fKyAwnzs7EJ5NM-GjmyVpROTegdUnmlvjIoDeYCi3qI9-UiJD0eCdchHLS6cmYaFQRgPxEXat_etgEtT2-O9-cAPXbclfPYUAjvVf2ggJc9a_Pwf5XJY29nobBMP6WEHgIj5mc_SLZUzy7zwMgOP3jJbXCuBBFmIG8pmmtTezEg8MaRVK0Z7f_56QzZGZ57l7lsqdkCPAuaCkTJOIlvZ_1F1OgedqxUYrzDAyarlGOwpkBXw',
                  }}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>

              <View className="bg-rose-100 px-3 py-1 rounded-full mb-2 flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-rose-500 mr-1.5" />
                <Text className="text-xs font-bold text-rose-700 uppercase">
                  Portal Pasien Terpadu
                </Text>
              </View>

              <Text className="text-2xl font-bold text-gray-900">KlinikSehat</Text>
              <Text className="text-sm text-gray-600 text-center mt-1">
                Masuk untuk mengakses catatan & jadwal medis Anda
              </Text>
            </View>

            {/* Kartu Utama Form */}
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              
              {/* Input Identitas */}
              <View className="mb-4">
                <Text className="text-xs font-semibold text-gray-700 mb-1">
                  Email / No. Rekam Medis / Telepon
                </Text>
                <View className="relative flex-row items-center">
                  <MaterialCommunityIcons
                    name="badge-account-outline"
                    size={20}
                    color="#6b7280"
                    style={{ position: 'absolute', left: 12, zIndex: 1 }}
                  />
                  <TextInput
                    className="w-full h-12 bg-gray-100 rounded-xl pl-10 pr-4 text-sm text-gray-900"
                    placeholder="nama@email.com atau ID Pasien"
                    placeholderTextColor="#9ca3af"
                    value={identifier}
                    onChangeText={setIdentifier}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Input Kata Sandi */}
              <View className="mb-4">
                <Text className="text-xs font-semibold text-gray-700 mb-1">
                  Kata Sandi
                </Text>
                <View className="relative flex-row items-center">
                  <Feather
                    name="lock"
                    size={18}
                    color="#6b7280"
                    style={{ position: 'absolute', left: 12, zIndex: 1 }}
                  />
                  <TextInput
                    className="w-full h-12 bg-gray-100 rounded-xl pl-10 pr-12 text-sm text-gray-900"
                    placeholder="••••••••••••"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-3 p-2"
                  >
                    <Feather
                      name={showPassword ? 'eye' : 'eye-off'}
                      size={18}
                      color="#6b7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Ingat Saya & Lupa Kata Sandi */}
              <View className="flex-row items-center justify-between mb-5">
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View
                    className={`w-5 h-5 rounded-md mr-2 items-center justify-center ${
                      rememberMe ? 'bg-emerald-700' : 'bg-gray-200'
                    }`}
                  >
                    {rememberMe && <Feather name="check" size={14} color="#FFFFFF" />}
                  </View>
                  <Text className="text-xs font-medium text-gray-700">Ingat Saya</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    showBanner('Instruksi pemulihan kata sandi dikirim.')
                  }
                >
                  <Text className="text-xs font-semibold text-rose-600">
                    Lupa Kata Sandi?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Tombol Masuk */}
              <TouchableOpacity
                className="w-full h-12 bg-rose-500 rounded-full flex-row items-center justify-center shadow-md"
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                <Text className="text-sm font-bold text-white mr-2">Masuk Sekarang</Text>
                <Feather name="arrow-right" size={18} color="#FFFFFF" />
              </TouchableOpacity>

              {/* Pemisah */}
              <View className="flex-row items-center my-5">
                <View className="flex-1 h-[1px] bg-gray-200" />
                <Text className="px-3 text-xs text-gray-500 font-medium">Atau masuk cepat</Text>
                <View className="flex-1 h-[1px] bg-gray-200" />
              </View>

              {/* Tombol Cepat Biometrik & SatuSehat */}
              <View className="flex-row space-x-3">
                <TouchableOpacity
                  className="flex-1 h-11 bg-gray-100 rounded-xl flex-row items-center justify-center"
                  onPress={() => router.replace('/home')}
                >
                  <MaterialCommunityIcons name="fingerprint" size={20} color="#374151" />
                  <Text className="text-xs font-semibold text-gray-700 ml-2">Biometrik</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 h-11 bg-gray-100 rounded-xl flex-row items-center justify-center ml-2"
                  onPress={() => router.replace('/home')}
                >
                  <MaterialCommunityIcons name="shield-check-outline" size={20} color="#374151" />
                  <Text className="text-xs font-semibold text-gray-700 ml-2">SatuSehat</Text>
                </TouchableOpacity>
              </View>

              {/* Banner Feedback */}
              {feedback && (
                <View
                  className={`mt-4 p-3 rounded-xl flex-row items-center ${
                    feedback.isError ? 'bg-red-100' : 'bg-emerald-100'
                  }`}
                >
                  <Feather
                    name={feedback.isError ? 'alert-circle' : 'check-circle'}
                    size={16}
                    color={feedback.isError ? '#991b1b' : '#065f46'}
                  />
                  <Text
                    className={`text-xs font-semibold ml-2 flex-1 ${
                      feedback.isError ? 'text-red-800' : 'text-emerald-800'
                    }`}
                  >
                    {feedback.text}
                  </Text>
                </View>
              )}
            </View>

            {/* Bagian Bawah: Daftar Akun Baru */}
            <View className="flex-row justify-center items-center mt-6">
              <Text className="text-sm text-gray-600">Belum punya akun?</Text>
              <TouchableOpacity onPress={() => showBanner('Mengarahkan ke pendaftaran...')}>
                <Text className="text-sm font-bold text-rose-600 ml-1">Daftar Akun Baru</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}