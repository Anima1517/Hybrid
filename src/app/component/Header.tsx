import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title = 'KlinikSehat', subtitle = 'Beranda' }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-4 pt-3 pb-3 bg-surface-container-lowest border-b border-surface-container-low">
      <View className="flex-row items-center gap-2">
        <View className="w-10 h-10 rounded-full bg-secondary-container/50 items-center justify-center">
          <MaterialIcons name="local-hospital" size={22} color="#36671c" />
        </View>
        <View>
          <Text className="text-base font-bold text-on-surface tracking-tight leading-tight">
            {title}
          </Text>
          <Text className="text-xs text-on-surface-variant">{subtitle}</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-low items-center justify-center relative">
          <Ionicons name="notifications-outline" size={20} color="#42493c" />
          <View className="absolute top-2 right-2 w-2 h-2 rounded-full bg-tertiary" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60' }}
          className="w-8 h-8 rounded-full"
        />
      </View>
    </View>
  );
}