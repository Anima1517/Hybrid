import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { key: 'home', label: 'Beranda', route: '/home', icon: 'home-outline', activeIcon: 'home' },
    { key: 'jadwal', label: 'Jadwal', route: '/jadwal', icon: 'calendar-outline', activeIcon: 'calendar' },
    { key: 'riwayat', label: 'Riwayat', route: '/home', icon: 'document-text-outline', activeIcon: 'document-text' },
    { key: 'profile', label: 'Profil', route: '/profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  return (
    <View className="flex-row items-center justify-around h-16 bg-surface-container-lowest border-t border-surface-container-highest px-2">
      {navItems.map((item) => {
        const isActive = pathname === item.route;
        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => router.replace(item.route as any)}
            className="flex-1 items-center justify-center py-1"
            activeOpacity={0.7}
          >
            <Ionicons
              name={(isActive ? item.activeIcon : item.icon) as any}
              size={20}
              color={isActive ? '#36671c' : '#42493c'}
            />
            <Text
              className={`text-xs mt-0.5 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant font-medium'
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}