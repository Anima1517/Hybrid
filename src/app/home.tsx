import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    // Gunakan flex-1 pada View utama
    <View className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

      {/* Header */}
      <SafeAreaView edges={['top']} className="bg-surface border-b border-gray-100 z-10">
        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-secondary-container/50 items-center justify-center">
              <FontAwesome5 name="hospital-alt" size={18} color="#36671c" />
            </View>
            <View>
              <Text className="text-lg font-bold text-on-surface leading-tight">
                KlinikSehat
              </Text>
              <Text className="text-xs text-on-surface-variant">Beranda</Text>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="w-10 h-10 items-center justify-center relative rounded-full bg-gray-50">
              <Ionicons name="notifications-outline" size={22} color="#42493c" />
              <View className="absolute top-2 right-2 w-2 h-2 rounded-full bg-tertiary" />
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida/AEtjO1X1Uy0ZNqQQDbxjuqcFRbcHz_MNrrk8gHm08o2X-XPwhAi4wioHziCnpmcuox-SOlpRvaBJ99Z4w-JNdka8m057BWIM3WyO6O-KRaW3UhQErSm-QMmo4Ug85Ix3ZsDoyhGwkV5cNh5QKLgs1ROlyztEQv3guVhpExkl8jeNsyUclNLRpYwZuk0hmtb2iPSvceXGUtpIFMHYQQYMBA5vTpU9CjnQUCTNFEnrwHnylfbFfJpa43Q6qbgsLRIQm3Q3Dt6m0o6D3VBn",
              }}
              className="w-9 h-9 rounded-full ml-1"
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Main Content Scrollable */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Sapaan & Kartu Antrean */}
        <View className="px-4 pt-4 gap-4">
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
          <View className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
            <View className="flex-row items-center justify-between pb-3">
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

            <View className="flex-row items-center gap-3.5 my-2">
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCv-ERWWRiWuc9tB6X57jvwCwR0DzEKtZhx_OdOUhCbvxTiCpxsCsx7fAp_LqMTEdLnwZz2Hs2tneF9s0f4kZ3bQPCJ4QgZyHF-bA7jHB1T372CNHWUsoUDS2ajmwVf59Fid2iPQSQuXmhaTmqKPq3U8VtnQ7XNRdHKQ4CXI5TBnfvG7EH18iPe--Vpfp2dZbZ4hzFlklRR0nSCxr5nEpV62tgaXD0a2Ej-iOl5p0Y7Z0bUyEo4WFZ",
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

            <View className="pt-3 mt-2 border-t border-gray-100 flex-row items-center justify-between">
              <View className="flex-row items-center gap-1">
                <Ionicons name="location-outline" size={16} color="#4c662e" />
                <Text className="text-xs text-on-surface-variant">
                  Lantai 2, Ruang Konsultasi 04
                </Text>
              </View>
              <TouchableOpacity className="h-10 px-4 rounded-full bg-primary flex-row items-center gap-1.5 shadow-sm active:opacity-90">
                <Text className="text-xs font-semibold text-on-primary">
                  Tiket Antrean
                </Text>
                <Ionicons name="arrow-forward" size={14} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Menu Layanan Utama */}
        <View className="px-4 pt-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-base font-bold text-on-surface">
              Layanan Klinik
            </Text>
            <TouchableOpacity>
              <Text className="text-xs font-semibold text-primary">
                Semua Layanan
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {[
              { title: "Buat Janji Dokter", icon: "calendar-plus", bg: "bg-tertiary/10", iconColor: "#9d3b3d" },
              { title: "Telemedisin", icon: "video-outline", bg: "bg-primary/10", iconColor: "#36671c", library: "Ionicons" },
              { title: "Tebus Obat", icon: "file-document-edit-outline", bg: "bg-secondary-container/80", iconColor: "#506a32" },
              { title: "Hasil Lab", icon: "file-certificate-outline", bg: "bg-surface-container-high", iconColor: "#1a1c1c" },
              { title: "Vaksinasi", icon: "needle", bg: "bg-secondary-fixed/50", iconColor: "#4c662e" },
              { title: "Ambulans SOS", icon: "ambulance", bg: "bg-tertiary-fixed/40", iconColor: "#9d3b3d", isAlert: true },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: "31%" }}
                className={`p-3 rounded-2xl items-center text-center shadow-sm active:scale-95 ${
                  item.isAlert ? "bg-tertiary-fixed/30" : "bg-surface-container-lowest"
                }`}
              >
                <View className={`w-12 h-12 rounded-2xl items-center justify-center mb-2 ${item.bg}`}>
                  {item.library === "Ionicons" ? (
                    <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
                  ) : (
                    <MaterialCommunityIcons name={item.icon as any} size={24} color={item.iconColor} />
                  )}
                </View>
                <Text
                  className={`text-xs text-center ${
                    item.isAlert ? "font-bold text-tertiary" : "font-medium text-on-surface"
                  }`}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Banner Promo */}
        <View className="px-4 pt-6">
          <View className="w-full rounded-3xl bg-primary-container p-5 relative overflow-hidden shadow-md">
            <View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 self-start mb-2">
              <Ionicons name="pricetag-outline" size={12} color="#ffffff" />
              <Text className="text-[10px] font-semibold text-on-primary">
                Promo Spesial Bulan Ini
              </Text>
            </View>
            <Text className="text-base font-bold text-on-primary leading-snug w-[75%]">
              Medical Check-Up Komprehensif Diskon 25%
            </Text>
            <Text className="text-xs text-on-primary-container/90 mt-1 mb-3 w-[75%]" numberOfLines={2}>
              Pemeriksaan menyeluruh jantung, gula darah, dan profil lipid oleh dokter spesialis.
            </Text>
            <TouchableOpacity className="h-8 px-4 rounded-full bg-surface-container-lowest self-start justify-center">
              <Text className="text-xs font-semibold text-primary">Cek Paket</Text>
            </TouchableOpacity>

            <View className="absolute -right-2 -bottom-2 opacity-20">
              <MaterialCommunityIcons name="shield-plus" size={100} color="#ffffff" />
            </View>
          </View>
        </View>

        {/* Dokter Praktik Hari Ini */}
        <View className="pt-6">
          <View className="px-4 flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-base font-bold text-on-surface">
                Dokter Praktik Hari Ini
              </Text>
              <Text className="text-xs text-on-surface-variant">
                Konsultasi langsung di klinik
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-xs font-semibold text-primary">Lihat Semua</Text>
              <Ionicons name="chevron-forward" size={14} color="#36671c" />
            </TouchableOpacity>
          </View>

          <View className="px-4 gap-3">
            {/* Dokter 1 */}
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 flex-1">
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyza2BmEEv_VbP9iqeR_25ifS0JqSRFEkd4oLvrIeq0cHBQvXNdkWFNeFgjF5YcymJgERZGotycRF0SZki80tQVw8KJBbm6kk4mNBvoIo4eDx4P9vWmAmjFzwr0oX1U1OjwLkjIOeb_4AyV-QCTTkx93rXDnqnYIOqcecboIMg9OxbW8rhdJ-Taa9xx9iDjYogslTw8Fan7rV9cPiXy2g64er4JmE_uZgFZjloJ5XfAp3mqOnWwj3F",
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
                      <Ionicons name="star" size={12} color="#bd5353" />
                      <Text className="text-xs font-bold text-on-surface">4.9</Text>
                    </View>
                    <Text className="text-xs text-secondary">18:00 - 21:00</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="h-9 px-3.5 rounded-full bg-tertiary justify-center ml-2">
                <Text className="text-xs font-semibold text-on-tertiary">Buat Janji</Text>
              </TouchableOpacity>
            </View>

            {/* Dokter 2 */}
            <View className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 flex-1">
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvH2VY8Op7YlvcjBIA-g-nHddxFGBqQZAcpfc_9HRBbKUysrl-vHOUgjtlqIyg_6vGc2yX-ZFv6Axn8REvNHT7LOdy-5GN59X6KIQkGaIEf5ia4Q0NUkoqdotzTvpaOgTzQiOaebgVwpJwU0C4gqvybWUlX-42nSC9fTOpye3RqMFzgWfCusP0q7STs17HcC_bPEtC8ywDVty3tnHz-24gxX1KXMboN1ClsJh7LJFazrp4ZApdrH7N",
                  }}
                  className="w-14 h-14 rounded-2xl bg-surface-container"
                />
                <View className="flex-1">
                  <Text className="text-sm font-bold text-on-surface" numberOfLines={1}>
                    Dr. Amanda Lestari, Sp.KG
                  </Text>
                  <Text className="text-xs text-on-surface-variant">
                    Dokter Gigi Spesialis
                  </Text>
                  <View className="flex-row items-center gap-3 mt-1">
                    <View className="flex-row items-center gap-0.5">
                      <Ionicons name="star" size={12} color="#bd5353" />
                      <Text className="text-xs font-bold text-on-surface">4.8</Text>
                    </View>
                    <Text className="text-xs font-medium text-primary">Kuota Tersedia</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="h-9 px-3.5 rounded-full bg-tertiary justify-center ml-2">
                <Text className="text-xs font-semibold text-on-tertiary">Buat Janji</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Artikel Kesehatan */}
        <View className="px-4 pt-6 gap-3">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-base font-bold text-on-surface">
                Tips & Artikel Sehat
              </Text>
              <Text className="text-xs text-on-surface-variant">
                Edukasi medis terverifikasi
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-xs font-semibold text-primary">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            <TouchableOpacity className="bg-surface-container-lowest rounded-3xl p-3 shadow-sm flex-row gap-3 items-center">
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqbos6EnL59Rn30XOztxVGnfwqEjLVQWu5c-sH9e5Si0XtZ9Hqz2EhPmxTKurSS2fiw9PL2m27SLU3dfnr30yVTdpRJ-3Q_T5Edb6mMnmwpFHxlwpyl2XT_BJYkiSnlJFKfknf0TQzRJMBpOUlomjJ10RywOwikTmHabz4sTkLXp3u-OIrr-hkQic6-RwS5NFQp6biRGLDsj_0joKfeDTfa0JU1rWf6EpzGiWC6dfNR77F9SV3sQ4z",
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

            <TouchableOpacity className="bg-surface-container-lowest rounded-3xl p-3 shadow-sm flex-row gap-3 items-center">
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXH4VW_bAJCny_MIeUPlF2Odk-AWOX9wYySi410BExWg_0Hdi7b979XHnhOb-bT4EEvntDX_dX2zmV58pFYRAQXnlvugJfu6UohYhoK46tsa0YeZ_Q7_3UTkdTnZ5bqQaltJB3iEzPJDbVkamkhEZgbIaYiIdAN_0D6rUktLlkTDLAGqWocqFOc_3Mzf3tdzvtZ8nlxrpRcU5oa1DgUq_GCRgEC0CU3OyJUYOUgbtzUA7h72JNrw2r",
                }}
                className="w-20 h-20 rounded-2xl bg-surface-container"
              />
              <View className="flex-1 justify-between py-0.5">
                <Text className="text-[10px] font-bold text-tertiary uppercase tracking-wider">
                  Kardiovaskular
                </Text>
                <Text className="text-xs font-bold text-on-surface leading-snug my-0.5" numberOfLines={2}>
                  Pentingnya Pemeriksaan Tekanan Darah Rutin
                </Text>
                <Text className="text-[10px] text-on-surface-variant">
                  🕒 4 menit baca • Ditinjau Dokter
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <SafeAreaView edges={['bottom']} className="absolute bottom-0 left-0 right-0 bg-surface/95 border-t border-gray-100">
        <View className="h-16 flex-row items-center justify-around px-2">
          <TouchableOpacity className="items-center justify-center w-14 gap-0.5">
            <Ionicons name="home" size={20} color="#36671c" />
            <Text className="text-[10px] font-bold text-primary">Beranda</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center w-14 gap-0.5">
            <Ionicons name="calendar-outline" size={20} color="#42493c" />
            <Text className="text-[10px] font-medium text-on-surface-variant">Jadwal</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center w-14 gap-0.5">
            <MaterialCommunityIcons name="clipboard-text-outline" size={20} color="#42493c" />
            <Text className="text-[10px] font-medium text-on-surface-variant">Riwayat</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center w-14 gap-0.5">
            <Ionicons name="book-outline" size={20} color="#42493c" />
            <Text className="text-[10px] font-medium text-on-surface-variant">Artikel</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center w-14 gap-0.5">
            <Ionicons name="person-outline" size={20} color="#42493c" />
            <Text className="text-[10px] font-medium text-on-surface-variant">Profil</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}