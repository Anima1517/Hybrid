import React from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  text: string;
  onChange: (text: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const CATEGORIES = ['Semua', 'Poli Umum', 'Spesialis Anak', 'Klinik Gigi', 'Penyakit Dalam'];

export function SearchBar({ text, onChange, selectedCategory = 'Semua', onSelectCategory }: SearchBarProps) {
  return (
    <View className="px-4 py-2 space-y-2">
      {/* Input Pencarian */}
      <View className="flex-row items-center bg-surface-container-lowest rounded-2xl px-3.5 h-12 border border-outline-variant">
        <Ionicons name="search" size={18} color="#72796b" />
        <TextInput
          value={text}
          onChangeText={onChange}
          placeholder="Cari dokter atau spesialis..."
          placeholderTextColor="#72796b"
          className="flex-1 ml-2.5 text-sm text-on-surface"
        />
        {text.length > 0 && (
          <TouchableOpacity onPress={() => onChange('')}>
            <Ionicons name="close-circle" size={18} color="#72796b" />
          </TouchableOpacity>
        )}
      </View>

      {/* Filter Chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row py-1">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => onSelectCategory && onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full mr-2 ${
                active
                  ? 'bg-primary'
                  : 'bg-surface-container-lowest border border-outline-variant'
              }`}
            >
              <Text className={`text-xs ${active ? 'text-on-primary font-semibold' : 'text-on-surface'}`}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}